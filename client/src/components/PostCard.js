import React, { Component } from 'react';
import { Item, Button, Segment } from 'semantic-ui-react';

export default class PostCard extends Component {
  render() {
    return (
      <div className="post-card">
         <Segment>
            <Item.Group divided>
                  <Item>
                     <Item.Image src='https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200' />
                     <Item.Content>
                        <Item.Header>John Doe</Item.Header>
                        <Item.Meta>
                           <span className='cinema'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint possimus corporis sunt necessitatibus! Minus nesciunt soluta suscipit nobis. Amet accusamus distinctio cupiditate blanditiis dolor? Illo perferendis eveniet cum cupiditate aliquam?</span>
                        </Item.Meta>
                        <Item.Description>{}</Item.Description>
                        <Item.Extra>
                           <Button icon="thumbs up" />
                           <Button icon="thumbs down" />
                           <Button className="primary">Comments</Button>
                        </Item.Extra>
                     </Item.Content>
                  </Item> 
            </Item.Group>
         </Segment>
      </div>
    )
  }
}
