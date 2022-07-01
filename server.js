const express = require("express");
const nodemailer = require("nodemailer");
const app = express();
const cors = require("cors");
require('dotenv').config()

// middleware
app.use(express.json());
app.use(cors());

const port = 3001;
app.listen(port, () => {
	console.log(`Server is running on port: ${port}`)
});

const PASSWORD = process.env.password;
const EMAIL = process.env.email;
const TOKEN = process.env.OAUTH_REFRESH_TOKEN;
const SECRET = process.env.OAUTH_CLIENT_SECRET;
const CLIENT = process.env.OAUTH_CLIENTID;

let transporter = nodemailer.createTransport({
	service: "gmail",
	auth: {
		type: "OAuth2",
		user: EMAIL,
		pass: PASSWORD,
		clientId: CLIENT,
		clientSecret: SECRET,
		refreshToken: TOKEN,
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
			console.log("Error " + err);
			res.json({
				status: "fail"
			});
		} else {
			console.log("Email sent successfully");
			res.json({ status: "success" });
		}
	});
 });