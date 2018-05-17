import React, { Component } from 'react';
import Wrapper from '../conteiners/Wrapper';
import Input from './Input';

const initValues = {
    firstName: '',
    lastName: '',
    address: '',
    age: '',
    email: '',
    password: '',
    confirmPassword: ''
};

const validateFields = {
    firstName: '',
    email: '',
    address: '',
    password: '',
    confirmPassword: ''
};

class Form extends Component {
    render() {
        const { data, errors, handleInput, handleSubmit, handleBlur } = this.props;

        return (
            <div className="mainForm">
                <form onSubmit={handleSubmit}>
                    <Input
                        name="firstName"
                        label="Имя пользователя"
                        value={data.firstName}
                        onChange={handleInput}
                        onBlur={handleBlur}
                        autoFocus
                        required
                        error={errors.firstName}
                    />
                    <Input
                        name="lastName"
                        label="Фамилия"
                        value={data.lastName}
                        onChange={handleInput}
                        error={errors.lastName}
                    />
                    <Input
                        name="email"
                        label="Email"
                        type="email"
                        value={data.email}
                        onChange={handleInput}
                        error={errors.email}
                        onBlur={handleBlur}
                        required
                    />
                    <Input
                        name="age"
                        label="Возраст"
                        type="number"
                        value={data.age}
                        onChange={handleInput}
                        error={errors.age}
                    />
                    <Input
                        name="address"
                        label="Адрес"
                        value={data.address}
                        onChange={handleInput}
                        onBlur={handleBlur}
                        autoFocus
                        required
                        error={errors.address}
                    />
                    <Input
                        name="password"
                        label="Пароль"
                        type="password"
                        value={data.password}
                        onChange={handleInput}
                        error={errors.password}
                        onBlur={handleBlur}
                        required
                    />
                    <Input
                        name="confirmPassword"
                        label="Подтвердите Пароль"
                        type="password"
                        value={data.confirmPassword}
                        onChange={handleInput}
                        error={errors.confirmPassword}
                        onBlur={handleBlur}
                        required
                    />
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default Wrapper(initValues, validateFields)(Form);
