const {User, Dog} = require('../models')
const nodemailer = require("nodemailer");

const passCompare = require('../helpers/bcryptCompare')

class MainController{
    static displayHome (req, res){
        Dog
            .findAll()
            .then(data=>{
                res.render('home',{data, title: 'Home'})
            })
    }

    static displayFormLogin(req, res){
        res.render('login/loginForm',{title: 'Login'})
        
    }

    static displayFormRegister(req, res){
        
        res.render('login/registerForm',{title: 'Register'})

    }

    static registerUser(req, res){
        let {name, email, username, password} = req.body;
        let input = {name, email, username, password, role: 'Konsumen', activated: false}
        User
            .create(input)
            .then(data=>{
                const smtpTransport = nodemailer.createTransport({
                    host: "smtp.gmail.com",
                    port: 465,
                    secure: true,
                    auth: {
                        user: "angelservice.cs@gmail.com",
                        pass: "sandisandi"
                    }
                });
        
                const mailOptions = {
                    from: "angelservice.cs@gmail.com",
                    to: data.email, 
                    subject: 'Email Activasi Layanan Angel Service',
                    text: `silahkan klik link beriku untuk aktifasi akun anda https://angel-service.herokuapp.com/register/activation/${data.username}`
                }
                smtpTransport.sendMail(mailOptions, function(error, response){
                    if(error){
                        console.log(error);
                    }else{
                        console.log(response);
                    }
                });
                res.send('silahkan cek emailmu untuk lakukan aktifasi')
            })
            .catch(err=>{
                res.send(err)
            })
    }

    static createLoginSession(req, res){
        let {username, password} =  req.body
        User
            .findAll({
                where:{username: username}
            })
            .then(data=>{
                if(data.length){
                    console.log(data);
                    if(passCompare(password, data[0].password)){
                        if(data[0].activated){
                            req.session.user = {}
                            req.session.user.isLogin = true;
                            req.session.user.UserId = data[0].id;
                            req.session.user.username = data[0].username
                            req.session.user.role = data[0].role
                            res.redirect('/')
                        }else{
                            res.send('Akunmu belum aktif')
                        }
                    }else{
                        res.send('Password tidak sesuai')
                    }
                }else{
                    res.send('Username Tidak ditemukan')
                }
            })
            .catch(err=>{
                console.log(err);
                res.send(err)
            })
        
    }

    static activation(req, res){
        User
            .update({ activated: true }, {
                where: {
                username: req.params.username
                }
            })
          .then(()=>{
            res.send('Selamat akunmu sudah aktif')
          })
          .catch(err=>{
              res.send(err)
          })
    }

    static showAdminView(req, res){
        res.render('adminViews/adminView',{title: 'admin'})
    }

    static killSession(req, res){
        req.session.destroy();
        res.redirect('/')
    }
}

module.exports = MainController