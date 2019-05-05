import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store';
import Login from './auth/Login';
import Dashboard from './Dashboard';
import Register from './auth/Register';
import Landing from './layout/Landing';
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';
import PrivateRoute from './common/PrivateRoute';
import {loadUser} from '../actions/authActions';
// import './App.css';


class App extends Component {
	componentDidMount(){
		store.dispatch(loadUser())
	}
	render() {
		return (

			<Provider store={store}>
				<Router>
					<div className="App">
						<Navbar />
						<Route exact path="/" component={Landing} />
						<div className="container">
							<Route exact path="/register" component={Register} />
							<Route exact path="/login" component={Login} />
							<Switch>
								<PrivateRoute exact path="/dashboard" component={Dashboard} />
							</Switch>
						</div>
						<Footer/>
					</div>				
				</Router>
			</Provider>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('app'));
