const express = require("express");
const nodemailer = require("nodemailer");
const app = express();
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;
const cors = require("cors");
require('dotenv').config()



const PASSWORD = process.env.password;
const EMAIL = process.env.email;
const TOKEN = process.env.OAUTH_REFRESH_TOKEN;
const SECRET = process.env.OAUTH_CLIENT_SECRET;
const CLIENT = process.env.OAUTH_CLIENTID;

const oauthClient = new OAuth2(
	CLIENT,
	SECRET,

	"https://developers.google.com/oauthplayground"
)

oauthClient.setCredentials({
	refresh_token: TOKEN
});

const accessToken = oauthClient.getAccessToken()

// middleware
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 3001;
app.listen(port, () => {
	console.log(`Server is running on port: ${port}`)
});

let transporter = nodemailer.createTransport({
	service: "gmail",
	auth: {
		type: "OAuth2",
		user: EMAIL,
		pass: PASSWORD,
		clientId: CLIENT,
		clientSecret: SECRET,
		refreshToken: TOKEN,
		accessToken: accessToken
	},
 });

 transporter.verify((err, success) => {
	err
		? console.log(err)
		: console.log(`=== Server is ready to take messages: ${success} ===`);
 });

 app.post("/send", function (req, res) {
	let mailOptions = {
		from: `${req.body.mailerState.email}`,
		to: EMAIL,
		subject: `${req.body.mailerState.subject} from ${req.body.mailerState.name}`,
		text: `You received this email from ${req.body.mailerState.name} @ ${req.body.mailerState.email} They wrote: \n${req.body.mailerState.message}`,
	};
 
	transporter.sendMail(mailOptions, function (err, data) {
		if (err) {
			console.log("Error " + err, "data " + data);
			res.json({
				status: "fail"
			});
		} else {
			console.log("Email sent successfully");
			res.json({ status: "success" });
		}
	});
 });