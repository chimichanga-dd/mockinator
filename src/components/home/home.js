import React from 'react'
import { Form, Button, TextArea, Icon} from 'semantic-ui-react'
import classes from './home.module.css'



const Home = () => {
    return (
      <div style={{height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
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
        <div style={{
          position: "absolute",
          bottom: "0",
          width: "100%",
          textAlign: "center",
          color: "#9e9ec9"
          }}>Bird icon courtesy of <a
            href="icons8.com"
            target="_blank"
            style={{color: "#9e9ec9"}}
            >icons8.com</a></div>
        </div>

    )
}

export default Home