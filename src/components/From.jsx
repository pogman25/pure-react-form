import React, { Component } from 'react';
import Wrapper from '../conteiners/Wrapper';
import Header from './Header';
import Input from './Input';
import TextArea from './TextArea';

@Wrapper
class Form extends Component {
    render() {
        const { data, errors, handleInput, handleSubmit, handleBlur } = this.props;

        return (
            <div>
                <form onSubmit={handleSubmit} action="">
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
                    <TextArea
                        name="comments"
                        label="Комментарии"
                        value={data.comments}
                        onChange={handleInput}
                        error={errors.comments}
                    />
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default Form;
