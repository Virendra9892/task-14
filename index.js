var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'virendrap9892@gmail.com',
    pass: 'emci nfaq tujy lkrb'
  }
});

var mailList = [
  "shubhamkpathak@gmail.com",
  "virendrapathak@nimapinfotech.com",
  "satendra@nimapinfotech.com"
]
var mailOptions = {
  from: 'virendrap9892@gmail.com',
  to: mailList,
  subject: 'Sending Email using Node.js',
  text:   'This Is Virendra Pathak Email Using Nodemailer In Node Js! ',
  html: '<h1>Virendra Pathak .</h1><p>this is virendra pathak. this is nodemailer task using html tags.</p><h2>A basic HTML table</h2><table border="1"> <tr><th>Company</th><th>Contact</th><th>Country</th> </tr>  <tr>    <td>Alfreds Futterkiste</td>    <td>Maria Anders</td><td>Germany</td>  </tr><tr><td>Centro comercial Moctezuma</td><td>Mexico</td><td>Itly</td> </tr></table>'
};

transporter.sendMail(mailOptions, (error, info)=>{
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});