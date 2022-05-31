import express from 'express'
import diaryRouter from './routes/diaries'
//
const app=express()
app.use(express.json()) //middleware que transforma la req.body a un json

const PORT = 3000

app.get('/ping',(_req,res)=>{ //ponemos guin bajo para que typescript ignore que no estamos suando req
    console.log('someone Pinged here!!' )
    res.send('pong')
})

app.use('/api/diaries',diaryRouter)

app.listen(PORT,()=>{
console.log(`Server Runing in port ${PORT}`)
})