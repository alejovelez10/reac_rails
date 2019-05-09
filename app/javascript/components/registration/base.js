import React from 'react';
import { blueA400 } from 'material-ui/styles/colors';
import { redA400 } from 'material-ui/styles/colors';




export class Base extends React.Component{
	constructor(props){
		super(props);
        console.log(props.name)

        this.state = {
        	canSubmit: true,
        	mail: '',
        	password: '',
        	passwordConfirmation: '',
        	error: ''
        };
    }




         enableSubmitBtn(){
        	this.setState({
        		canSubmit:true
        	})

        }

        reload(){
            
            window.location.href = window.location.href;

        }
        disableSubmitBtn(){
			this.setState({
        		canSubmit:false
        	})		        	
        }

         syncField(ev, fieldName){
        	let element = ev.target
        	let value =   element.value

        	let jsonState = {};
        	jsonState[fieldName] = value
        	this.setState(jsonState)

        	
        }

       

    }
  
export const styles = {
	buttoTop:{
		marginTop:'1em'
	},
	underlineStyle:{
		borderColor:blueA400,

	},
	floatingLabelFocusStyle:{
		color:blueA400,
	},
	leftSpace:{
		marginLeft: '1em'
	},
	red: redA400


}


        /*syncEmail(ev){
        	let element =ev.target
        	let value =  element.value

        	this.setState(
        	{
        		email: value
        	})
        }
         syncPassword(ev){
        	let element = ev.target
        	let value =  element.value

        	this.setState(
        	{
        		password: value
        	})
	    }*/