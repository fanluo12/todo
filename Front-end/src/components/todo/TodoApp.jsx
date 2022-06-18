import React, {Component} from 'react';
import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom'
import withNavigation from './WithNavigation';
import withParams from './withParams';
import AuthenticationService from './AuthenticationService.js';
import AuthenticatedRoute from './AuthenticatedRoute.jsx';
import LoginComponent from './LoginComponent.jsx';
import ListTodosComponent from './ListTodosComponent.jsx';
import ErrorComponent from './ErrorComponent.jsx';
import HeaderComponent from './HeaderComponent.jsx';
import FooterComponent from './FooterComponent.jsx';
import LogoutComponent from './LogoutComponent.jsx';
import WelcomeComponent from './WelcomeComponent.jsx';
import TodoComponent from './TodoComponent.jsx';


class TodoApp extends Component {
    render() {
        const LoginComponentWithNavigation = withNavigation(LoginComponent);
        const WelcomeComponentWithParams = withParams(WelcomeComponent);
        const HeaderComponentWithNavigation = withNavigation(HeaderComponent);

        const TodoComponentWithParamsAndNavigation = withParams(withNavigation(TodoComponent));
        const ListTodosComponentWithNavigation = withNavigation(ListTodosComponent)


        return (
            <div className="TodoApp">
                <Router>
                    <HeaderComponentWithNavigation/>
                    <Routes>
                        <Route path="/" element={<LoginComponentWithNavigation/>}/>
                        <Route path="/login" element={<LoginComponentWithNavigation/>}/>
                        <Route path="/welcome/:name" element={<AuthenticatedRoute>
                                                                <WelcomeComponentWithParams/>
                                                            </AuthenticatedRoute>}/>
                        <Route path="/todos/:id" element={<AuthenticatedRoute>
                                                            <TodoComponentWithParamsAndNavigation/>
                                                            </AuthenticatedRoute>}/>
                        <Route path="/todos" element={<AuthenticatedRoute>
                                                            <ListTodosComponentWithNavigation/>
                                                        </AuthenticatedRoute>}/>
                        <Route path="/logout" element={<AuthenticatedRoute>
                                                            <LogoutComponent/>
                                                        </AuthenticatedRoute>}/>
                        <Route path="*" element={<ErrorComponent/>}/>
                    </Routes>
                    <FooterComponent/>
                </Router>

                {/* <LoginComponent/>
                <WelcomeComponent/> */}
            </div>
        )
    }
}

// function ShowInvalidCredentials(props) {
//     if(props.hasLoginFailed) {
//         return <div>Invalid Credentials</div>
//     }
//     return null;
// }

// function ShowLoginSuccessMessage(props) {
//     if(props.showSuccessMessage) {
//         return <div>Login Successful</div>
//     }
//     return null
// }

export default TodoApp