import React,
{
  useState,
  useRef,
} from 'react'

import { Editor } from '@tinymce/tinymce-react';

import Header from '../../components/Header'
// import EditImage from '../../components/EditImage'
import UserBar from '../../components/User'
import Input from '../../components/Input'
import { getDateString } from '../../helpers'

import classes from './style.module.css';

function CreateNews() {
  const [tagsString, setTagsString] = useState('')
  const [values, setValues] = useState({
    userAvatar: null,
    titleNew: '',
  });

  const editorRef = useRef(null);

  const onChange = (event) => {
    const { target: { value = '', name } } = event
    setValues({ ...values, [name]: value })
  }

  const onChangeTagsString = (event) => {
    const { target: { value = '' } } = event
    setTagsString(value)
  }

  const tagsArray = tagsString.split(', ').filter(Boolean)
  const lastIndex = tagsArray.length - 1
  let lastTag = tagsArray[lastIndex]
  const lastCharacter = lastTag && lastTag[lastTag.length - 1]

  if (lastCharacter === ',') {
    lastTag = lastTag.substring(0, lastTag.length - 1)
  }

  tagsArray[lastIndex] = lastTag

  return (
    <>
      <Header />
      <div className={classes.createNews}>
        {/* <div className={classes.container}> */}
        <div className={classes.new}>
          <div className={classes.userBar}>
            <div className={classes.avatar}>
              <UserBar
                src="https://habrastorage.org/getpro/habr/avatars/f55/eba/556/f55eba556d44f143a2af69452d2c2d03.png"
                userName="mr__Popug96"
              />
              <span className={classes.time}>{getDateString('2010-01-06T14:48:00.000Z')}</span>
            </div>
            <Input
              name="titleNew"
              placeholder="Заголовок"
              type="text"
              onChange={onChange}
              value={values.titleNew}
            />
            <div className={classes.text}>
              <Editor
                apiKey="f8waz8utczfplmjbne0x8etvm7rm8ogi49j7ruclso0squ3z"
                onInit={(evt, editor) => editorRef.current = editor}
                initialValue="<p>This is the initial content of the editor.</p>"
                init={{
                  height: 300,
                  menubar: false,
                  plugins: [
                    'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                    'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                    'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount',
                  ],
                  toolbar: 'undo redo | blocks | '
              + 'bold italic forecolor | alignleft aligncenter '
              + 'alignright alignjustify | bullist numlist outdent indent | '
              + 'removeformat | help',
                  content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
                }}
              />
              <div className={classes.tags__input}>
                <Input
                  placeholder="Название тегов"
                  type="text"
                  onChange={onChangeTagsString}
                  value={tagsString}
                />
              </div>
              <div className={classes.tags}>
                {tagsArray.map((item) => (
                  <p className={classes.tag}>{item}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* <EditImage
            src={imageSrc}
            onChange={(event) => {
              setValues({ ...values, userAvatar: event.target.files[0] })
            }}
          />
        </div> */}
      </div>
    </>
  )
}

export default CreateNews
