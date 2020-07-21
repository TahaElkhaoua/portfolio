const express = require('express');
const app = express();
const path = require('path');

const port = process.env.PORT || 5000;
const compression = require('compression');


app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(compression());



const nodemailer = require('nodemailer');


let transporter =  nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'ElkhaouaGaming@gmail.com',
        pass: 'HelloWorld'
    }
});

app.post('/sendMail', async (req, res)=>{
    let mailOptions = {
        from: req.body.email,
        to: 'TahaElkhaoua.php@gmail.com',
        subject: req.body.name,
        text: `${req.body.message} \n FROM : ${req.body.email}`
    
    };
    transporter.sendMail(mailOptions, (err, info)=>{
        // if(err)
        //     return res.send('Message not sent please try again!!');
    
        res.send('Message Sent');
    });
});

app.listen(port, (err)=>{
    console.log('Server Started');
});