import express from 'express' //ESModules
import * as diaryServices from '../services/diaryServices'
import toNewDiaryEntry from '../utils'

const router=express.Router()
router.get('/',(_req,res)=>{
res.send(diaryServices.getEntriesWithoutSensitiveInfo())
})
router.get('/:id',(req,res)=>{
    const diary=diaryServices.findById(+req.params.id)
    res.send(diary)
})

router.post('/',(req,res)=>{
    try{
        const newDiaryEntry= toNewDiaryEntry(req.body)
        const addedDiaryEntry = diaryServices.addDiary(newDiaryEntry)
        res.json(addedDiaryEntry)
    }catch(error){
        let message='Unknown Error'
        if(error instanceof Error) message=error.message
        else message=String(error)
        res.status(400).send(message)
    }

})

export default router