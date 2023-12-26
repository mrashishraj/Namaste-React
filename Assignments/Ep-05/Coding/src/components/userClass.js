
import React from "react"


class UserClass extends React.Component {
    constructor(props){
        super(props)
        this.state={
            count:0,
            count2:2
        }
    }
    
    render(){
        const {name} = this.props
        return(
            <div>

                <p>From class Component</p>
                <h1>Count : {this.state.count}</h1>
                <button onClick={()=>{
                    this.setState({
                        count:this.state.count+1
                    })
                }}>Count+1</button>
                <h1>Count2 : {this.state.count2}</h1>

            <h1>Name : {name}</h1>
            <h2>Location : Gurgaon</h2>
            <h2>Contact : @mrashishraj</h2>
        </div>
        )
    }
}

export default UserClass