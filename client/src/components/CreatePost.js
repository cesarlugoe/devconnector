import React, { Component } from 'react';
import { Segment, Form, TextArea, Button } from 'semantic-ui-react';

export default class CreatePost extends Component {
  render() {
    return (
      <Segment fluid>
        <Segment inverted color='blue'>
          <span> Say something...</span>
        </Segment>
        <div className="create-post-form-container">
          <Form>
            <Form.Field>
              <TextArea placeholder="Create a Post"></TextArea>
            </Form.Field>
            <Button type='submit'>Submit</Button>
          </Form>
        </div>
      </Segment>
    )
  }
}
