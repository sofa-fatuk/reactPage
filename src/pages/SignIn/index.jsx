import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../../components/Button'
import Input from '../../components/Input'
import Form from '../../components/Form'
import Checkbox from '../../components/Checkbox'
import { signInUser } from '../../api/user'
import classes from '../../styles/shared.module.css'

function SignIn() {
  const [nickName, setNickName] = useState('');
  const [password, setPassword] = useState('');
  const [check, setCheck] = useState(false)
  const navigate = useNavigate();

  const onChangeEmail = (event) => {
    const { target: { value = '' } } = event
    setNickName(value);
  }

  const onSubmit = async (event) => {
    event.preventDefault();

    const user = await signInUser({ rememberMe: check, userNickname: nickName, password })

    console.log(user)
    localStorage.setItem('user', JSON.stringify(user));
    if (user) {
      navigate('/main-page');
    }
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
            onChange={onChangeEmail}
            value={nickName}
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
              value="Login"
            />,
          ]
        }
      />
    </div>
  )
}

export default SignIn;
