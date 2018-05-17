import React, { Component } from 'react';
import { validateEmail } from '../utils';

export default function getDefaultValues(basic, required) {
    return function Wrapper(WrappedComponent) {
        return class Wrapper extends Component {
            state = {
                isFetching: false,
                data: basic,
                errors: required
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
                const { data, errors } = this.state;
                const isValidate = Object.keys(errors).reduce(
                    (sum, item) => sum && this.validateForm(item, data[item]),
                    true
                );
                if (isValidate) {
                    console.log('here We Send Data', data);
                    this.setState({ errors: required });
                } else {
                    console.log('no valid data');
                }
            };

            handleBlur = e => {
                const { value, name } = e.currentTarget;
                this.validateForm(name, value);
            };

            validateForm = (name, value) => {
                if (!required.hasOwnProperty(name)) return true;
                const isEmpty = this.isNotEmptyValue(name, value);
                switch (true) {
                    case name === 'email' && isEmpty:
                        if (!validateEmail(value)) {
                            this.setState(({ errors }) => ({
                                errors: {
                                    ...errors,
                                    [name]: 'введите валидный email'
                                }
                            }));
                            return false;
                        }
                        return true;
                    case name === 'confirmPassword' && isEmpty:
                        const {
                            data: { password, confirmPassword }
                        } = this.state;
                        if (password !== confirmPassword) {
                            this.setState(({ errors }) => ({
                                errors: {
                                    ...errors,
                                    [name]: 'введённые пароли не совпадают'
                                }
                            }));
                            return false;
                        }
                        return true;
                    default:
                        return isEmpty;
                }
            };

            isNotEmptyValue = (name, value) => {
                if (!value.trim()) {
                    this.setState(({ errors }) => ({
                        errors: {
                            ...errors,
                            [name]: 'поле не должно быть пустым'
                        }
                    }));
                    return false;
                }
                return true;
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
    };
}
