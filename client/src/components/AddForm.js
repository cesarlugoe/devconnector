import React, { Component } from 'react';
import { Form, Checkbox, TextArea, Button } from 'semantic-ui-react';

export default class AddForm extends Component {
  render() {
     const { fields } = this.props;
    return (
      <Form>
         <Form.Field required>
            <label>{fields[0]}</label>
            <input placeholder={fields[0]} />
         </Form.Field>
         <Form.Field required>
            <label>{fields[1]}</label>
            <input placeholder={fields[1]} />
         </Form.Field>
         <Form.Field>
            <label>{fields[2]}</label>
            <input placeholder={fields[2]} />
         </Form.Field>
         <Form.Field>
            <label>From Date</label>
            <input type="date"></input>
         </Form.Field>
         <Form.Field>
            <label>To Date</label>
            <input type="date"></input>
         </Form.Field>
         <Form.Field>
            <Checkbox label={fields[3]}></Checkbox>
         </Form.Field>
         <Form.Field>
            <TextArea placeholder={fields[4]}></TextArea>
            <label>{fields[5]}</label>
         </Form.Field>
         <Button fluid className="primary" type='submit'>Submit</Button>
      </Form>
    )
  }
}
