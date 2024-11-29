import React, {Component} from "react";
import reactDom from "react-dom";
import AppContent from "./AppContent.js";
import AppHeader from "./AppHeader.js";
import AppFooterFuncionalComponent from "./AppFooterFuncionalComponent";

import "./index.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.js"

class App extends Component{

	constructor(props){
		super(props)
		this.state = {posts: []}
	}

	handlePostChanges = (posts) =>{
		this.setState({posts:posts})
	}

  	render(){
		const myProps = {
			title: "My App!",
			text: "This is the content",
			autor: "Louis",
		}

		return( 
			<div className="app">
				<AppHeader {...myProps} posts={this.state.posts}/>
				<AppContent {...myProps} posts={this.state.posts} handlePostChanges={this.handlePostChanges}/>
				<AppFooterFuncionalComponent {...myProps}/>
			</div>
		
		)
	}
}

reactDom.render(<App/>, document.getElementById("root"));