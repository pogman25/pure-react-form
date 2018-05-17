import React, { Component } from 'react';
import Form from './components/From';
import Header from './components/Header';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="main">
                <Header />
                <Form />
            </div>
        );
    }
}

export default App;
