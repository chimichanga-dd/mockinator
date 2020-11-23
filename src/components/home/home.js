import React, {useEffect, useState} from 'react'
import { Form, Button, TextArea, Icon} from 'semantic-ui-react'
import classes from './home.module.css'
import { isJson } from '../../lib/jsonValidator'
import {mockinate} from  "../../lib/jsonMocker"

const Home = () => {

  const [viewportWidth, setViewportWidth] = useState(window.innerWidth)
  const [input, setInput] = useState(undefined)
  const [output, setOutput] = useState(undefined)
  const [disabledMock, setDisabledMock] = useState(true)

  const handleResize = (e) => {
    setViewportWidth(window.innerWidth)
  }

  useEffect(() => {
    handleInput()
  }, [input])

  useEffect(() => {
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  const set = (str) => {
    if (str === 'input') {
      return setInput
    }

    if (str === 'output') {
      return setOutput
    }
  }

  const handleInput = () => {
    if (input) {
      isJson(input) ? setDisabledMock(false) : setDisabledMock(true)
    }
  }
  const handleChange = (e, { name }) => set(name)(e.target.value)
  const handleSubmit = () => {
    //mockObjects(input)
  }

    return (
      <div className={classes.pageContainer}>
          <Form className={classes.form} onSubmit={() => handleSubmit()}>
          <div className={classes.textAreaContainer}>
            <label>JSON Input</label>
            <TextArea
              name = 'input'
              value={input}
              onChange={handleChange}
              />
          </div>
          <div className={classes.buttonContainer}>
            <Button color='green' type = 'submit' disabled= {disabledMock}>Mock</Button>
            <Icon name={`long arrow alternate ${viewportWidth <= 576 ? 'down' : 'right'}`} size='huge' />
            <Button color='green' basic>Reset</Button>
          </div>
          <div className={classes.textAreaContainer}>
            <label>JSON Output</label>
            <TextArea
              name = 'output'
              value={output}
              onChange={handleChange}
              readOnly
            />
          </div>
        </Form>
    </div>
    )
}

export default Home
