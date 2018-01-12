import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput
} from 'react-native';



import {connect} from 'react-redux';
import {ActionCreators} from '../actions';
import { bindActionCreators } from 'redux';
import { navigation,withNavigation, NavigationActions } from 'react-navigation';



class AppContainer extends Component<{}> {
	constructor(props){
		super(props)
		this.state={input:''};
	}	
	componentDidMount(){

	}
	setInput(i){
		this.setState({...this.state, input:i});
	}
	setUsername(){
		this.props.setUsername(this.state.input);
		this.setState({...this.state, input:''});
	}
	render(){
		return (<View>
				<Text>Current redux username: {this.props.user.username}</Text>
				<Text>Current local state input: {this.state.input}</Text>
				<TextInput value={this.state.input} onChangeText={(t)=>{this.setInput(t)}}/>
				<TouchableOpacity onPress={()=>{this.setUsername()}}>
					<View style={{height:50, backgroundColor:'blue', justifyContent:'center'}}>
					<Text style={{color:'white', textAlign:'center'}}>Set Username</Text>
					</View>
				</TouchableOpacity>
				</View>);
	}
}




	//Make state available as props
	function mapStateToProps(state){
		return {
			user:state.user,
		}
	}

//Make actions available as functions in props
function mapDispatchToProps(dispatch){
	return bindActionCreators(ActionCreators, dispatch);
}

//Connect to navigation, redux and export
export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);