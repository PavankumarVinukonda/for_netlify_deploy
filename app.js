import express from 'express';
import mongoose from 'mongoose'
import cors from 'cors'

const app = express();

app.use(cors())

app.use(express.json())

//  connect

mongoose
.connect('mongodb+srv://pavankumarvinukonda0:m7jV3Q4nl4KiyeS6@cluster0.m5erccf.mongodb.net/?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
.then(() => {console.log('connected')})
.catch((err) => {console.log(err)})


// shema

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    }
})


const User = mongoose.model('User',userSchema)  

app.get('/',(req,res) => {
    res.send('hello')

})

app.post('/post', async (req,res) => {

    try {

        const response = await User.create(req.body)
        res.send(response)
    }
    catch (err) {
        res.send(err)
    
    }
})

app.listen(6000,() => {console.log('runng');})