import React, { Component } from 'react';
import { Form, TextArea, Button, Select, Input } from 'semantic-ui-react';

const selectOptions = [
   {key:"d", text:"Developer", value:"Developer"}, 
   {key:"j", text:"Junior Developer", value:"Junior Developer"}, 
   {key:"s", text:"Senior Developer", value:"Senior Developer"}, 
   {key:"m", text:"Manager", value:"Manager"}, 
   {key:"st", text:"Student or Learning", value:"Student or Learning"}, 
   {key:"it", text:"Instructor or Teacher", value:"Instructor or Teacher"}, 
   {key:"in", text:"Intern", value:"Intern"}, 
   {key:"o", text:"Other", value:"Other"}, 
]

export default class ProfileForm extends Component {
  render() {
     const { fields } = this.props;
    return (
     <Form>
        <Form.Field required>
            <input placeholder={fields.handle} />
            <label>A unique handle for your profile URL. Your full name, company name, nickname, etc (This CAN'T be changed later)</label>
         </Form.Field>
         <Form.Field 
            required 
            control={Select} 
            label="Give us an idea of where you are at in your career"
            options={selectOptions}
            placeholder={fields.professionalStatus}
         />
         <Form.Field>
            <input placeholder={fields.company} />
            <label>Could be your own company or one you work for</label>
         </Form.Field>
         <Form.Field>
            <input placeholder={fields.website} />
            <label>Could be your own or a company website</label>
         </Form.Field>
         <Form.Field>
            <input placeholder={fields.location} />
            <label>City & state suggested (eg. Boston, MA)</label>
         </Form.Field>
         <Form.Field>
            <input placeholder={fields.skills} />
            <label>Please use comma separated values (eg. HTML,CSS,JavaScript,PHP)</label>
         </Form.Field>
         <Form.Field>
            <input placeholder={fields.github} />
            <label>If you want your latest repos and a Github link, include your username</label>
         </Form.Field>
         <Form.Field>
            <TextArea placeholder={fields.bio}></TextArea>
            <label>Tell us a little about yourself</label>
         </Form.Field>
         <div>
            <Button type="button">Add Social Network Links</Button>
            <span>Optional</span>
         </div>
         <Form.Field>
            <Input icon="twitter" iconPosition='left' placeholder="Twitter Profile Url"/>
         </Form.Field>
         <Form.Field>
            <Input icon="facebook" iconPosition='left' placeholder="Facebook Page Url"/>   
         </Form.Field>
         <Form.Field>
             <Input icon="linkedin" iconPosition='left' placeholder="Linkedin Profile Url"/>   
         </Form.Field>
         <Form.Field>
             <Input icon="youtube" iconPosition='left' placeholder="Youtube Channel Url"/> 
         </Form.Field>
         <Form.Field>
             <Input icon="instagram" iconPosition='left' placeholder="Instagram Page Url"/>
         </Form.Field>
         <Button fluid className="primary" type='submit'>Submit</Button>
     </Form>
    )
  }
}
