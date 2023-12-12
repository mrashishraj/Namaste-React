import { useRouteError } from "react-router-dom"



const Error =()=>{
const err = useRouteError()
    return(
        <>
        <h1>oops..!! Something went wronge</h1>
        <h3>Error Message: { err?.error?.message}</h3>
        
        </>
    )
}

export default Error