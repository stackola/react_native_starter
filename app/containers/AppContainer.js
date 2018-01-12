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


window.navigator.userAgent = 'ReactNative';
var socketIOClient = require('socket.io-client');
var sailsIOClient = require('sails.io.js');
var io = sailsIOClient(socketIOClient, {
  transports: ['websocket'] // you need to explicitly tell it to use websockets
});
io.sails.useCORSRouteToGetCookie = false
io.sails.url = 'http://192.168.1.138:1337';



class AppContainer extends Component<{}> {
	constructor(props){
		super(props)
		this.state={factories:[]};
	}	
	componentDidMount(){
		this.props.setSocket(io);
		this.props.getUser(14);
		io.socket.get('/user/14', function serverResponded (body, JWR) {
		  // body === JWR.body
		  console.log('Sails responded with: ', body);
		  console.log('with headers: ', JWR.headers);
		  console.log('and with status code: ', JWR.statusCode);
		});
		io.socket.get('/items/getItems', (body, JWR)=>{
			this.setState({...this.state, factories:body});
			console.log(body);
		})
		io.socket.on('user', (a,b,c)=>{this.props.setUserObject(a.data)});
	}
	render(){
		return (<View>
				<Text>{this.props.user.username}: {this.props.user.points}</Text>
				<TouchableOpacity style={{height:100}} onPress={()=>this.props.click(14)}><Text style={{textAlign:'center'}}>Click me!</Text></TouchableOpacity>
				<View>
					{this.state.factories.map((f)=>{return <Text>{f.production}</Text>})}
				</View>
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