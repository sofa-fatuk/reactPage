import React, { useState } from 'react';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Form from '../../components/Form';
import Checkbox from '../../components/Checkbox';
import { signInUser } from '../../api/user';
import classes from '../../styles/shared.module.css';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [check, setCheck] = useState(false)

  const onChangeEmail = (event) => {
    const { target: { value = '' } } = event
    setEmail(value);
  }

  const onSubmit = async (event) => {
    event.preventDefault();

    const user = await signInUser({ rememberMe: check, email, password })
    localStorage.setItem('user', JSON.stringify(user));
    console.log('SUBMITTED')
  }

  const onChange = () => {
    setCheck(!check)
    console.log('check', check);
  }

  const onChangePassword = (event) => {
    const { target: { value = '' } } = event
    setPassword(value)
  }

  return (
    <div className={classes.authPage}>
      <h1 className={classes.title}>Sign In</h1>
      <p className={classes.text}>Sign in and start managing your candidates!</p>
      <Form 
        onSubmit={onSubmit}
        elements={
          [<Input
            placeholder="Login"
            type="email"
            onChange={onChangeEmail}
            value={email}
            required
          />, 
          <Input
            placeholder="Password"
            type="password"
            onChange={onChangePassword}
            value={password}
            required
          />, 
          <Checkbox 
            value={check}
            onChange={onChange}
          />, 
          <Button
            type="submit"
            value={'Login'}
          />]
        }
      />
      {/* 
        <label className={classes.controls}>
          <div className={classes.check}>
            <input
              value={check}
              type="checkbox"
              onClick={onCheck}
            />
            Remember me
          </div>
        </label>
       */}
    </div>
  )
}

export default SignIn;