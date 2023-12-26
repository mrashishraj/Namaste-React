import {useState} from "react"



const UserFunction = ({name})=>{
    const [count, setCount] = useState(0)
    const [count2, setCount2] = useState(1)


    return(
        <div>
            <p>From function component</p>
            <h1>Count : {count}</h1>
            <h1>Count : {count2}</h1>
            <h1>Name : {name}</h1>
            <h2>Location : Gurgaon</h2>
            <h2>Contact : @mrashishraj</h2>
        </div>
    )
}

export default UserFunction