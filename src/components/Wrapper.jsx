import React, { Component } from 'react';

export default function Wrapper(WrappedComponent) {
    return class Wrapper extends Component {
        state = {
            isFetching: false,
            data: {},
            errors: {}
        };
        render() {
            return <WrappedComponent {...this.state} />;
        }
    };
}
