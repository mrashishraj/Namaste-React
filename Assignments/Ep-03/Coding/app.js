import React from "react"
import ReactDOM from "react-dom/client"

    const reactCreateElement = [
        React.createElement("div",{id:"parent",className:"blue"},
        React.createElement("div",{id:"child",className:"blue"},
    [
        React.createElement("h1",{id:"h1-tag"},"This is h1 tag from react.createElement"),
        React.createElement("h2",{id:"h1-tag"},"this is the update  react.createElement")
        ]
        )),
        React.createElement("div",{id:"parent",className:"blue"},
        React.createElement("div",{id:"child",className:"blue"},
        [React.createElement("h1",{id:"h1-tag"},"This is h1 tag react.createElement"),
        React.createElement("h2",{id:"h1-tag"},"This is h2 tag react.createElement")
    ]
        ))]

    const reactElement = <h1 className="pink">This is a react element</h1>
    const ReactComponent2 = () =>(
        <h1 className="red">This is other react component 🚀</h1>
    )

    const ReactComponent = () =>( <div>
        <ReactComponent2/>
        {reactElement} 
        {reactCreateElement}
        <h1 className="green">This is a ReactComponent 🚀</h1> 
    </div> )

    const root = ReactDOM.createRoot(document.getElementById("root"))
    root.render(<ReactComponent/>)

