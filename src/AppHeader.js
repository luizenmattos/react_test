import React, { Component, Fragment } from "react";

export default class AppHeader extends Component{
    
    constructor(props){
        super(props)
    }

    render(){
        return(
            <Fragment>
                <h1>{this.props.title}</h1>
                <p>There are {this.props.posts.length} in posts</p>
            </Fragment>
        )
    }
}