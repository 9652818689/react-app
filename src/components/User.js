import React from "react"

class User extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userInfo:{}
        }
    }
    async componentDidMount() {
        const data = await fetch("https://jsonplaceholder.typicode.com/posts")
        const json = await data.json();
        this.setState({
            userInfo : json[0]
        })
        console.log(json);
    }
    componentDidUpdate(){
        console.log("component Did Update");
    }
    componentWillUnmount(){
        console.log("component Will Unmount");
    }
    render() {
        const {body, title} = this.state.userInfo
        // const { name, location } = this.props
        return (
            <div>
                <h1>User:{title}</h1>
                <p>{body}</p>
                {/* <img src={avatar_url} /> */}
            </div>
        )
    }

}

export default User