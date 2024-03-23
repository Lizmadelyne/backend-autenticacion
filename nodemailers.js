/*const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // Use `true` for port 465, `false` for all other ports
  auth: {
      user: 'minibiografias10@gmail.com',
      pass: 'iurs sdax kfbe yarm'
  }
});

// async..await is not allowed in global scope, must use a wrapper
async function main() {
  // send mail with defined transport object
  const info = await transporter.sendMail({
      from: 'minibiografias10@gmail.com', // sender address
      to: "minibiografias10@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello liz?", // plain text body
    html: "<b>soy tu autocorreo enviado desde tu codigo</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
}

main().catch(console.error);
*/