import {Router} from "express"
import Steps from "../model/userstep.js"

const router = new Router();

router.post("/adduser",async (req,res) => {
      const {username,steps} = req.body;
      
      const check = await Steps.findOne({username:username})

      if(check){
        res.status(406).json({message: "username already exist , try a unique username"})
        return
      }

      const usersteps = await new Steps({username,steps})

      await usersteps.save()

      res.status(201).json({message : "successfully added"})
}) 

router.patch("/updateuser",async (req,res) => {
    const {username,steps} = req.body;

    const check = await Steps.findOne({username:username})

    if(!check){
      res.status(406).json({message : "username not found , enter correct username"})
      return
    }

    const update = await Steps.updateOne({username:username},{$set:{steps:steps}})

    res.status(202).json({message: "successfully updated"})
})

router.get("/",async (req,res) => {
    const items  = await Steps.find({}).sort({steps:-1})
    res.json({data:items})
})

export default router;