import React from 'react';
import Formsy from 'formsy-react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FormsyText from 'formsy-material-ui/lib/FormsyText';
import RaisedButton from 'material-ui/RaisedButton';
import { Base, styles} from './base';
import reqwest from 'reqwest';

 

export class Login extends Base{
	    submit(){
    	reqwest({
    		url: '/users/sign_in.json',
    		method: 'POST',
    		data:{
    			user:{
    				email: this.state.email,
    				password: this.state.password
    				
    			},

    		},
    		headers:{
    		  'X-CSRF-Token': window.FacilitoSocial.token
    		}
    	}).then(data =>{
    		console.log(data);
    		this.reload();
    		}).catch(err =>  this.handleError(err));

    }    

    handleError(err){
    	const errorMessage = JSON.parse(err.response).error;
    	this.setState({
    		error: errorMessage
    	})
   }


	render(){   
        console.log(this.state.canSubmit);
		return (
			<MuiThemeProvider>
				<Formsy.Form onValid={() => this.enableSubmitBtn()}
							onInvalid={() => this.disableSubmitBtn()}	
						    onValidSubmit={() => this.submit()}

				>
				<div>{this.state.error}</div>
				<div>
				<FormsyText
				    onChange={(e) => this.syncField(e,"email")}
					name="email"
					required
					floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
					underlineStyle={styles.underlineStyle}
					validations="isEmail"
					validationError="Asegurate de introducir un correo valido"
					floatingLabelText="Correo electronico"/>
				</div>	
				<div>		
					<FormsyText
					onChange={(e) => this.syncField(e,"password")}
					name="password"
					required
					floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
					underlineStyle={styles.underlineStyle}
					type="password"
					floatingLabelText="Contraseña"/>
				</div>
				<div>
					<RaisedButton
					    style={styles.buttoTop}
					    backgroundColor={styles.red}
					    labelColor='#ffffff'
					    disabled={!this.state.canSubmit}
						type="submit"
						label="iniciar sesion"
					/>	
					<p>{!this.state.canSubmit}</p>
					<a href="#" onClick={this.props.toggle} style={styles.leftSpace} >Crear Cuenta {!this.state.canSubmit}</a>
				</div>
				</Formsy.Form>
			</MuiThemeProvider>	

		)
	}



}


