import React, { useState } from 'react'

import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import Form from '../../components/Form'
import Header from '../../components/Header'
import Input from '../../components/Input'
import EditImage from '../../components/EditImage'
import { getClassNames } from '../../helpers'

import classes from './style.module.css'

function ProfileEdit() {
  const [values, setValues] = useState({
    userName: '',
    userNickName: '',
    aboutUser: '',
    birthday: new Date(),
    userAvatar: null,
  });

  const onChange = (event) => {
    const { target: { value = '', name } } = event
    setValues({ ...values, [name]: value })
  }

  const onSubmit = () => { }

  const imageSrc = values.userAvatar && URL.createObjectURL(values.userAvatar);

  console.log('values', values);

  return (
    <>
      <Header />
      <div className={classes.editPage}>
        <div className={classes.container}>
          <div className={classes.profile}>
            <Form
              onSubmit={onSubmit}
              elements={
                [
                  <Input
                    name="userName"
                    placeholder="Имя"
                    type="text"
                    onChange={onChange}
                    value={values.userName}
                  />,
                  <Input
                    name="userNickName"
                    placeholder="Кликуха"
                    type="text"
                    onChange={onChange}
                    value={values.userNickName}
                  />,
                  <div className={classes.profile__aboutUser}>
                    <label htmlFor="aboutUser">Опишите себя:</label>
                    <textarea
                      name="aboutUser"
                      onChange={onChange}
                      value={values.aboutUser}
                      id="aboutUser"
                      rows="4"
                      cols="10"
                      className={getClassNames(classes.profile__aboutUser, classes.text)}
                    />
                  </div>,
                  <DatePicker
                    name="birthday"
                    selected={values.birthday}
                    onChange={(date) => {
                      setValues({ ...values, birthday: date })
                    }}
                  />,
                ]
              }
            />
          </div>
          <EditImage
            src={imageSrc}
            onChange={(event) => {
              setValues({ ...values, userAvatar: event.target.files[0] })
            }}
          />

        </div>
      </div>
    </>
  )
}

export default ProfileEdit
