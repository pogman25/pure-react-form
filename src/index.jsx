import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Wrapper from './components/Wrapper';
const styles = require('./styles.scss');

class App extends Component {
    render() {
        return (
            <div>
                <p>first example</p>
                <p className={styles.mainTitle}>Main Title</p>
                <Wrapper />
            </div>
        );
    }
}
ReactDOM.render(<App />, document.getElementById('app'));
