class MainController{
    static displayHome (req, res){
        res.render('home',{title: 'Home'})
    }

    
}

module.exports = MainController