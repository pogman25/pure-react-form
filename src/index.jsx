import React from 'react';
import ReactDOM from 'react-dom';

const styles = require('./styles.scss');

class App extends Component {
    render() {
        return (
            <div>
                <p>first example</p>
                <p className={styles.mainTitle}>Main Title</p>
            </div>
        );
    }
}
ReactDOM.render(<App />, document.getElementById('app'));
