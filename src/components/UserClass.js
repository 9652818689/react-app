import React from "react";

class UserClass extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            count:0,
            count2:2
        }
        console.log(this.props.name,"Child constructor");
    }
    componentDidMount(){
        console.log(this.props.name,"Child Component Did Mount");
    }
    render(){
        console.log(this.props.name,"Child Rendered");
        const {name,location} = this.props
        const {count,count2} = this.state;
        return (
            <div className="user-card">
                <h1>User:{name}</h1>
                <h2>Location :{location}</h2>
                <h3>Count : {count}</h3>
                <h3>Count2 : {count2}</h3>
                <button onClick={()=>{
                    this.setState({
                        count:this.state.count + 1,
                        count2:this.state.count2 + 1
                    })
                }}> Increse</button>
            </div>
        )
    }
}

export default UserClass;