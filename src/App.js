import { Form, Button, TextArea, Icon } from 'semantic-ui-react'
import classes from './CSS/Main.module.css'

const App = () => {
  return (
    <div className={classes.pageContainer}>
      <Form className={classes.form}>
         <TextArea style={{ width: '30%', resize: 'none' }} />
        <div className={classes.buttonContainer}>
          <Button color='green' className={classes.button}>Mock</Button>
          <Icon name='long arrow alternate right' size='huge' />
          <Button color='green' basic className={classes.button}>Reset</Button>
        </div>
         <TextArea style={{ width: '30%', resize: 'none' }} />
      </Form>
    </div>
  );
}

export default App;
