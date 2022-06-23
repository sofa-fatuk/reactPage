import React, { useState, useEffect } from 'react'
import Button from '../../components/Button'
import Input from '../../components/Input'
import Form from '../../components/Form'
import Link from '../../components/Link'
import { signUpUser } from '../../api/user'
import classes from '../../styles/shared.module.css'

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [error, setError] = useState(false);
  const [submittedOnce, setSubmittedOnce] = useState(false);

  const getInputStyle = () => {
    if (error) {
      return { borderColor: 'rgba(255, 0, 0, 0.5)' };
    }
    return null
  }

  const onChangeEmail = (event) => {
    const { target: { value = '' } } = event
    setEmail(value);
  }

  useEffect(() => {
    if (submittedOnce) {
      if (password === repeatPassword) {
        setError(false);
      } else {
        setError(true);
      }
    }
  }, [repeatPassword, password, submittedOnce]);

  const onSubmit = (event) => {
    event.preventDefault();
    setSubmittedOnce(true);
    if (password === repeatPassword) {
      setError(false);

      signUpUser({ email, password })
        .then((user) => {
          localStorage.setItem('user', JSON.stringify(user));
        });
      console.log('SUBMITTED');
    } else {
      setError(true);
    }
  }

  const onChangePassword = (event) => {
    const { target: { value = '' } } = event
    setPassword(value)
  }

  const onChangeRepeatPassword = (event) => {
    const { target: { value = '' } } = event
    setRepeatPassword(value)
  }

  return (
    <div className={classes.authPage}>
      <div className={classes.container}>
        <div className={classes.form}>
          <h1 className={classes.title}>Sign Up</h1>
          <p className={classes.text}>Sign up and start managing your candidates!</p>
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
                <Input
                  placeholder="Repeat Password"
                  type="password"
                  onChange={onChangeRepeatPassword}
                  value={repeatPassword}
                  style={getInputStyle()}
                  hasError={error}
                  errorMessage="Passwords doesn't match"
                  required
                />,
                <Link
                  href="#"
                  text="Forgot password?"
                />,
                <Button
                  type="submit"
                  value="Login"
                />,
              ]
            }
          />
        </div>
      </div>
    </div>
  )
}

export default SignUp;
