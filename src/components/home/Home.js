import React from 'react'
import { Form, Button, TextArea, Icon} from 'semantic-ui-react'


const Home = () => {
    return (
        <Form className={classes.form}>
        <div className={classes.textAreaContainer}>
          <label >Input</label>
          <TextArea style={{ width: '100%', height: '100%', resize: 'none' }} />
        </div>
        <div className={classes.buttonContainer}>
          <Button color='green' className={classes.button}>Mock</Button>
          <Icon name='long arrow alternate right' size='huge' />
          <Button color='green' basic className={classes.button}>Reset</Button>
        </div>
        <div className={classes.textAreaContainer}>
          <label>Output</label>
          <TextArea style={{ width: '100%', height: '100%', resize: 'none' }} />
        </div>
      </Form>
    )
}

export default Home