import React, { Component } from 'react';
import Wrapper from './Wrapper';

@Wrapper
class Form extends Component {
    render() {
        const { data, handleInput } = this.props;
        console.log(this.props);
        return (
            <div>
                <form>
                    <input
                        type="text"
                        name="name"
                        value={data.name}
                        onChange={handleInput}
                    />
                </form>
            </div>
        );
    }
}

export default Form;
