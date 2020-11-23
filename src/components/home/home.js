

import React, {useEffect, useState} from 'react'
import { Form, Button, TextArea, Icon} from 'semantic-ui-react'
import classes from './home.module.css'

const Home = () => {

  const [viewportWidth, setViewportWidth] = useState(window.innerWidth)

  const handleResize = (e) => {
    setViewportWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

    return (
      <div className={classes.pageContainer}>
          <Form className={classes.form}>
          <div className={classes.textAreaContainer}>
            <label>JSON Input</label>
            <TextArea/>
          </div>
          <div className={classes.buttonContainer}>
            <Button color='green'>Mock</Button>
            <Icon name={`long arrow alternate ${viewportWidth <= 576 ? 'down' : 'right'}`} size='huge' />
            <Button color='green' basic>Reset</Button>
          </div>
          <div className={classes.textAreaContainer}>
            <label>JSON Output</label>
            <TextArea/>
          </div>
        </Form>
    </div>
    )
}

export default Home
