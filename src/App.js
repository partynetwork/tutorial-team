import React, {Component} from 'react';
import {Provider} from 'react-redux'
// import logo from './logo.svg';
import './App.css';
import TodoPage from "./TodoPage";
import store from './store';
class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <TodoPage
                    title={`Todo Page`}
                    todos={[{name:'Foo'}]}
                />
            </Provider>
        );
    }
}

export default App;
