import React from "react"
import User from "./User"
import UserClass from "./UserClass"

class About extends React.Component {
    constructor(props){
        super()
        console.log("Parent Constructor");
    }
    componentDidMount(){
        console.log("Parent Component Did Mount");
    }
    render(){
        console.log("Parent Renered");
        return (
            <div>
                <h1>About component</h1>
                <User/>
                {/* <UserClass name={"First"} location={"Hyderabad"}/>
                <UserClass name={"Second"} location={"Bangalore"}/>
                <UserClass name={"Third"} location={"Chennai"}/> */}
            </div>
        )
    }
}

export default About