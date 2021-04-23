const {User, Dog} = require('../models')

class UserController{
    static displayUser(req, res){
        User
            .findAll()
            .then(data=>{
                res.render('adminViews/listUser',{data, title: 'list user'})
            })
    }

    static formChangeRole(req, res){
        User
            .findAll({
                where:{id: req.params.id}
            })
            .then(data=>{
                res.render('adminViews/changeRole',{data, title: 'change role'})
            })
            .catch(err=>{
                res.send(err)
            })
    }

    static changeRole(req, res){
        let role = req.body.role
        User
            .update({ role: role }, { where: { id: req.params.id}})
            .then(()=>{
                res.redirect('/users')
            })
            .catch(err=>{
                res.send(err)
            })
    }

    static deleteUser(req, res){
        User
            .destroy({ where: { id: req.params.id}})
            .then(()=>{
                res.redirect('/users')
            })
            .catch(err=>{
                res.send(err)
            })
    }
}

module.exports = UserController