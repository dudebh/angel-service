const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const session = require('express-session')
const router = require('./routes')


app.set('view engine','ejs')
app.use(express.urlencoded({extended: true}))

const dogsRouter = require('./routes/dogsRouter')

app.use(session({
    secret: 'hacktive8 kiev-fox',
    resave: false,
    saveUninitialized: true,
}))


app.use(router)
app.use('/dogs', dogsRouter)

app.listen(port,()=>{
    console.log(`app runing on port ${port}`);
})