import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';



import {connect} from 'react-redux';
import {ActionCreators} from '../actions';
import { bindActionCreators } from 'redux';
import { navigation,withNavigation, NavigationActions } from 'react-navigation';



class AppContainer extends Component<{}> {
	constructor(props){
		super(props)
		this.state={};
	}	
	componentDidMount(){

	}
	render(){
		return (<View>
				<Text>It's working. Check your index.js to get started.</Text>
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