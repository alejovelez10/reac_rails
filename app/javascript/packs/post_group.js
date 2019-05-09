import React from 'react'
import WebpackerReact from 'webpacker-react';
import { Post } from '../components/posts/post';
import { Posts } from  '../components/posts/posts';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import reqwest from 'reqwest';

export class PostGroup extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			posts: []
			
		}
	 console.log(this.state.posts);
	 this.load();
	}
     

	load(){

		    var that = this;
    reqwest({
    url: '/posts.json'
  , method: 'get'
  , success: function (resp) {
      //qwery('#content').html(resp)
      console.log(resp);
      
      that.setState({

         posts: resp

      
      });

    }
  })
	
}


	render(){

	    return(
	    <div>
			<Posts posts={this.state.posts}></Posts>
		</div>	
		);
	}
}


WebpackerReact.setup({PostGroup});