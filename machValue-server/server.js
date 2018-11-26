const http = require('http');
const nodemailer = require("nodemailer");

const port = 3000
const requestHandler = (req, res)=>{
   
    if (req.method === 'POST') {
       
        return;
    }
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: '',
            pass: ''
        }
    });
    const mailOptions = {
        from: 'mjchen8873@gmail.com',
        to: 'mc@yay.com',
        subject: 'test',
        text: 'that was easy!'
    }

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('email sent:' + info.response);
        }
    })

}

const server = http.createServer(requestHandler)
server.listen(port,(err)=>{
    if(err){
        return console.log('error',err)
    }
    console.log(`server is listening on ${port}`)
})

