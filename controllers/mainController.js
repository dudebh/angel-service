const {User} = require('../models')

class MainController{
    static displayHome(req, res){
        res.render('home',{title: 'Home'})
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
                res.send(data)
            })
            .catch(err=>{
                res.send(err)
            })
    }

    static createLoginSession(req, res){
        req.session.isLogin = true;
        req.session.username = req.body.username
        console.log(req.session,"==> di controller");
        res.redirect('/')
    }
}

module.exports = MainController