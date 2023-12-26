import React, { lazy,Suspense } from "react";
import ReactDOM from "react-dom/client"
import Body from "./components/body";
import Header from "./components/Header";
import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom"
import About from "./Pages/About.js"
import Contact from "./Pages/Contact.js"
import Error from "./Pages/Error.js"
// import Restaurant from "./Pages/Restaurent.js";

const App = ()=>{
return(
    <div>
        <Header/>
        <Outlet/>
    </div>
)
}

const Restaurant = lazy(()=>import("./Pages/Restaurent.js"))

const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
            {
                path:"/",
                element:<Body/>
            },
            {
                path:"/contact",
                 element:<Contact/>
            },
            {
                path:"/about",
                element:<About/>
            },
            {
                path:"/restaurent/:resId",
                element: <Suspense fallback="Loading...">
                    <Restaurant/>
                    </Suspense> 
            }
        ],
        errorElement:<Error/>
    },
])


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<RouterProvider router={appRouter}/>)