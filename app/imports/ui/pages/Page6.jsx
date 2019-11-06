import React from 'react';
import { Grid, Segment, Header, Form, Message } from 'semantic-ui-react';
import AutoForm from 'uniforms-semantic/AutoForm';
import TextField from 'uniforms-semantic/TextField';
import SubmitField from 'uniforms-semantic/SubmitField';
import swal from 'sweetalert';
import 'uniforms-bridge-simple-schema-2'; // required for Uniforms
import { StudentFormSchema as formSchema } from '../forms/StudentFormInfo';
import { StudentData } from '../../api/studentdata/StudentData';
import { ApplicantData } from '../../api/enrollmentdata/ApplicantData';

/** Renders the Page for adding a document. */
class Page6 extends React.Component {

  constructor(props) {
    super(props);
    this.state = { applicantName: false };
  }

  /** On submit, try to insert the data. If successful, reset the form. */
  submit(data, formRef) {
    let insertError;
    const { income, totalOccupants, numAdults, numRetired,
      numChildrenBelow5, numChildren6to12, numChildren13to17 } = data;
    StudentData.insert({ income, totalOccupants, numAdults, numRetired,
          numChildrenBelow5, numChildren6to12, numChildren13to17 },
        (error) => {
          insertError = error;
        });
    if (insertError) {
      swal('Error', insertError.message, 'error');
    } else {
      ApplicantData.insert({ email, dob },
          (error) => {
            insertError = error;
          });
      if (insertError) {
        swal('Error', insertError.message, 'error');
      } else {
        swal('Success', 'The student record was created.', 'success');
        this.setState({ email });
        formRef.reset();
      }
    }
  }

  /** Render the form. Use Uniforms: https://github.com/vazco/uniforms */
  render() {
    let fRef = null;
    return (
        <Grid container centered>
          <Grid.Column>
            <Header as="h2" textAlign="center">6. Data For Program Reporting Purposes</Header>
            <AutoForm ref={ref => {
              fRef = ref;
            }} schema={formSchema} onSubmit={data => this.submit(data, fRef)}>
              <Segment>
                <TextField name='income'
                           showInlineError={true}
                           placeholder={'Please include income of all person(s) occupying the home'}/>
                <Form.Group width={'equal'}>
                  <TextField name='totalOccupants' showInlineError={true} placeholder={'Total occupants'}/>
                  <TextField name='numAdults' showInlineError={true} placeholder={'Total adults'}/>
                  <TextField name='numRetired' showInlineError={true} placeholder={'Total retired adults'}/>
                </Form.Group>
                <Form.Group width={'equal'}>
                <TextField name='numChildrenBelow5' showInlineError={true} placeholder={'Children ages below 5'}/>
                <TextField name='numChildren6to12' showInlineError={true} placeholder={'Children ages 6 - 12'}/>
                <TextField name='numChildren13to17' showInlineError={true} placeholder={'Children ages 13 - 17'}/>
                </Form.Group>
                <Form.Group width={'equal'}>
                  <TextField name='membersNotHomeDay' showInlineError={true} placeholder={'# people not home day'}/>
                  <TextField name='membersNotHomeNight' showInlineError={true} placeholder={'# people not home night'}/>
                  <TextField name='membersHomeDay' showInlineError={true} placeholder={'# people home during day'}/>
                  <TextField name='membersHomeWork' showInlineError={true} placeholder={'# people work from home'}/>
                </Form.Group>
                <Form.Group width={'equal'}>
                  <TextField name='employerName' showInlineError={true}/>
                  <TextField name='occupation' showInlineError={true}/>
                  <TextField name='workPhone' showInlineError={true}/>
                </Form.Group>
                <SubmitField value='Submit'/>
              </Segment>
            </AutoForm>
            {this.state.name ? <Message>Edit <a href={`/#/student/${this.state.name}`}>this data</a></Message> : ''}
          </Grid.Column>
        </Grid>
    );
  }
}

export default Page6;
