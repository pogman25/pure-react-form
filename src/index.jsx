import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Form from './components/From';

import './normalize';
const styles = require('./styles.scss');

class App extends Component {
    render() {
        return (
            <div className={styles.main}>
                <Form />
            </div>
        );
    }
}
ReactDOM.render(<App />, document.getElementById('app'));
