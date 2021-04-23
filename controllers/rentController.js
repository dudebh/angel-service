const {User, Dog, Transaction} = require('../models')

class RentController{
    static rentProcess(req, res){
        let {start_date, end_date, DogId} = req.body
        console.log(req.session,'==> rent');
        let UserId = req.session.user.UserId
        let input = {start_date, end_date, DogId, UserId}
        Transaction
            .create(input)
            .then((data)=>{
                return User.findAll({
                    include:{
                        model: Dog,
                        where: {id: data.DogId}
                    },
                    where: {id: data.UserId}
                })
            })
            .then(data=>{
                console.log(data);
                res.render('rentSuccess',{data, title: 'rent'})
            })
            .catch(err=>{
                res.send(err)
            })
    }
}

module.exports = RentController