import React, { useEffect,useState } from 'react'
import {PiFootprintsLight} from "react-icons/pi"
import StepForms from "./components/StepForms"
import Ranker from "./components/Ranker"

function App() {

  const [Users,setUsers] = useState([])

  const [InitialSub,setInitialSub] = useState({
    username:"",
    steps:""
  })

  const [InitialUp,setInitialUp] = useState({
    username:"",
    steps:""
  })
  
  const fetchItems = async() => {
      const res = await fetch("http://localhost:4000/",{
        method:"GET"
      })
      const {data} = await res.json()
      setUsers(data)
  }

  useEffect(() => {
    fetchItems()
  },[])

  return (
    <div>
        <div className="flex p-3 gap-2 items-center text-teal-400 mb-20">
            <PiFootprintsLight size={40}/>
            <div className='uppercase text-[1.8rem]'>step counter</div>
        </div>
        <div className='flex justify-evenly'>
        <StepForms fetchItems={fetchItems} InitialSub={InitialSub} setInitialSub={setInitialSub} InitialUp={InitialUp} setInitialUp={setInitialUp}/>
        <Ranker Users={Users}/>
        </div>
    </div>
  )
}
export default App