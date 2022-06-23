import React from 'react'

const Test = () => {
   
    const arrTest = [{name : 'lior' , age : 24} , {name : 'idan' , age : 30} , {name : 'yuval' , age : 26}, {name : 'lior' , age : 24}]
     const afterCheckDuplicate = arrTest.filter((val,index)=>{
        return val.name == 'lior'
     })
     console.log(afterCheckDuplicate)
    const check = (e)=>{
console.log(e)
    }
  return (
    <div>
        <input type="text" onChange={(e)=>{check(e.target.value)}} />
        <button onClick={()=>{

        }}></button>
    </div>
  )
}

export default Test