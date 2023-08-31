import React from "react"
import ReactDOM from "react-dom/client"

    const parent = [
                    React.createElement("div",{id:"parent"},
                    React.createElement("div",{id:"child"},
                   [
                    React.createElement("h1",{id:"h1-tag"},"This is h1 tag"),
                    React.createElement("h2",{id:"h1-tag"},"this is the update")
                    ]
                    )),
                    React.createElement("div",{id:"parent"},
                    React.createElement("div",{id:"child"},
                    [React.createElement("h1",{id:"h1-tag"},"This is h1 tag"),
                    React.createElement("h2",{id:"h1-tag"},"This is h2 tag")
                ]
                    ))]

    const root = ReactDOM.createRoot(document.getElementById("root"))
    root.render(parent)
