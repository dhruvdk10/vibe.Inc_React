import React, {useState} from 'react'

const Count = () => {
  const[name, setName] = useState("Pankaj");
  const[age, setAge] = useState(22);
  const[num, setNum] = useState(0);
  const handleNum = () => {
    setNum(age + 1);
  }
  return (
    <>
    <p>Count : {name}</p>
    <button onClick ={() => setName("Dhruv")}> Click to count </button>
    <p>Count : {age}</p>
    <button onClick ={handleNum}> Click to count </button>
    </>
  )
}

export default Count
