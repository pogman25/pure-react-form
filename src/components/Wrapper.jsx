import React, { Component } from 'react';

export default function Wrapper(WrappedComponent) {
    return class Wrapper extends Component {
        state = {
            isFetching: false,
            data: {},
            errors: {}
        };
        handleInput = e => {
            const { name, value } = e.currentTarget;
            this.setState(({ data, errors }) => ({
                data: {
                    ...data,
                    [name]: value
                },
                errors: {
                    ...errors,
                    [name]: false
                }
            }));
        };
        render() {
            return <WrappedComponent {...this.state} handleInput={this.handleInput} />;
        }
    };
}
