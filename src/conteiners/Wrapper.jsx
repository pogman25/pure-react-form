import React, { Component } from 'react';
import { initValues } from './initValue';

export default function Wrapper(WrappedComponent) {
    return class Wrapper extends Component {
        state = {
            isFetching: false,
            data: initValues,
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

        handleSubmit = e => {
            e.preventDefault();
            console.log(this.state);
        };

        handleBlur = e => {
            const { value, name } = e.currentTarget;
            if (!value.trim()) {
                this.setState(({ errors }) => ({
                    errors: {
                        ...errors,
                        [name]: 'поле не должно быть пустым'
                    }
                }));
            }
        };

        render() {
            return (
                <WrappedComponent
                    {...this.state}
                    {...this.props}
                    handleSubmit={this.handleSubmit}
                    handleBlur={this.handleBlur}
                    handleInput={this.handleInput}
                />
            );
        }
    };
}
