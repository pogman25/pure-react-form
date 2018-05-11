import React, { Component } from 'react';
import Wrapper from './Wrapper';

@Wrapper
class Form extends Component {
    render() {
        console.log(this.props);
        return <div>проверка формы</div>;
    }
}

export default Form;
