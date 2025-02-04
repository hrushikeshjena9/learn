import React from "react"
export default class Users extends React.Component {
    // getUserList() {
    //     return "user list"
    // };

    getUserList(a) {
        return a+ "extratext"
    };
    render() {
        return (
            <div>
                <h1>
                    Class Component
                </h1>
            </div>
        )
    }
}