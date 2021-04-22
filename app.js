const express = require('express');
const app = express();
const port = 3000;
app.set('view engine','ejs')
app.use(express.urlencoded({extended: true}))
const router = require('./routes')
const dogsRouter = require('./routes/dogsRouter')

app.use(router)
app.use('/dogs', dogsRouter)

app.listen(port,()=>{
    console.log(`app runing on port ${port}`);
})