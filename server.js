const express = require("express");
const app = express();
const cors = require("cors");
const nodemailer = require("nodemailer");
const sendGridTransport = require("nodemailer-sendgrid-transport");
require('dotenv').config()

const PASSWORD = process.env.password;
const EMAIL = process.env.email;
const TOKEN = process.env.OAUTH_REFRESH_TOKEN;
const SECRET = process.env.OAUTH_CLIENT_SECRET;
const CLIENT = process.env.OAUTH_CLIENTID;
const SENDGRID_API = process.env.SENDGRID_API_KEY;

const PORT = process.env.PORT || 3001;
app.use(express.json());
app.use(cors());

const transporter = nodemailer.createTransport(
  sendGridTransport({
    auth: {
      api_key: SENDGRID_API,
    },
  })
);

 transporter.verify((err, success) => {
	err
		? console.log(err)
		: console.log(`=== Server is ready to take messages: ${success} ===`);
 });

 app.post("/send", function (req, res) {
	let mailOptions = {
		to: EMAIL,
		from: 'Contact.sqdpt@gmail.com',
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

app.listen(PORT, () => {
  console.log("server is running on", PORT);
});
