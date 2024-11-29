import React, {Component} from "react";

export default class AppContent extends Component{


    constructor(props){
        super(props)
    }

    handlePostChanges = (posts) =>{
        this.props.handlePostChanges(posts)
    }

    updateList = () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((reponse) => reponse.json())
            .then(json => {
                this.handlePostChanges(json)
            })
    }

    clickedItem = (x) =>{
        console.log(x)
    }

    render(){
        return(
            <div>{this.props.text}

            <br/>

            <button onClick={this.updateList} className="btn btn-primary">Update List</button>
            
            <hr/>
            
                <p>{this.props.posts.length} items long </p>
                
                <ul>
                    {this.props.posts.map((c) =>(
                        <li key={c.id}>
                            <a href="#" onClick={() => this.clickedItem(c.id)}>
                                {c.title}
                            </a>
                        </li>
                    ))}
                </ul>
            
            </div>
        )
    }
}