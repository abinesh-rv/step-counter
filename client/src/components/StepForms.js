import React from 'react'

function StepForms({fetchItems,setInitialSub,InitialSub,InitialUp,setInitialUp}) {

  const emptyValue = {
    username:"",
    steps:""
  }
  const handleSubmit = async(e) => {
    e.preventDefault()
    const user = new FormData(e.currentTarget)
    const res = await fetch("http://localhost:4000/adduser",{
      method:"POST",
      body:JSON.stringify({
        "username" : user.get("username"),
        "steps" : user.get("steps")
      }),
      headers : {"Content-Type" : "application/json"}
    })
    if(res.ok){
      window.alert("user successfully added")
      fetchItems()
    }
    else{
      window.alert("username already exist , try a unique username")
    }
    setInitialSub(emptyValue)
  }

  const handleUpdate = async(e) => {
    e.preventDefault()
    const user = new FormData(e.currentTarget)
    const res = await fetch("http://localhost:4000/updateuser",{
      method:"PATCH",
      body:JSON.stringify({
        "username" : user.get("username"),
        "steps" : user.get("steps")
      }),
      headers : {"content-type" : "application/json"}
    })
    if(res.ok){
      window.alert("steps successfully updated")
      fetchItems()
    }else{
      window.alert("username not found , enter correct username")
    }
    setInitialUp(emptyValue)
  }
  return (
    <div className=" flex flex-col gap-5 justify-center text-teal-600 text-lg">
      <div className="bg-slate-200 p-4 w-[300px] rounded-lg ">
        <div className='text-center uppercase font-bold text-xl mb-3'>add user</div>
        <form className='flex flex-col gap-2' onSubmit={handleSubmit}>
          <label>Username</label>
          <input name="username" type="text" value={InitialSub.username} onChange={(e) => setInitialSub({...InitialSub,username:e.target.value})} className="px-2 py-1 rounded-lg" />
          <label>Steps</label>
          <input name="steps" type="number" value={InitialSub.steps} onChange={(e) => setInitialSub({...InitialSub,steps:e.target.value})} className="rounded-lg px-2 py-1"/>
          <button className="bg-teal-600 w-fit text-white px-2 py-1 mx-auto uppercase mt-3 rounded-lg hover:bg-black">add</button>
        </form>
      </div>
      <div className="bg-slate-200 p-4 w-[300px] rounded-lg text-lg">
        <div className='text-center uppercase font-bold text-xl mb-3'>update steps</div>
        <form className='flex flex-col gap-2'  onSubmit={handleUpdate}>
          <label>Username</label>
          <input name="username" type="text" value={InitialUp.username} onChange={(e) => setInitialUp({...InitialUp,username:e.target.value})}  className="rounded-lg px-2 py-1"/>
          <label>Steps</label>
          <input name="steps" type="number" value={InitialUp.steps} onChange={(e) => setInitialUp({...InitialUp,steps:e.target.value})}  className="rounded-lg px-2 py-1"/>
          <button className="bg-teal-600 w-fit text-white px-2 py-1 mx-auto uppercase mt-3 rounded-lg hover:bg-black">update</button>
        </form>
      </div>
    </div>
  )
}

export default StepForms