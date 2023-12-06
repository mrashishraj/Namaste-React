import React from "react";
import ReactDOM from "react-dom/client"
import Body from "./components/body";
import Header from "./components/Header";
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import About from "./Pages/About.js"
import Contact from "./Pages/Contact.js"
import Error from "./Pages/Error.js"

const App = ()=>{
return(
    <div>
        <Header/>
        <Body/>
    </div>
)
}

const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        errorElement:<Error/>
    },
    {
        path:"/contact",
        element:<Contact/>
    },
    {
        path:"/about",
        element:<About/>
    }

])


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<RouterProvider router={appRouter}/>)