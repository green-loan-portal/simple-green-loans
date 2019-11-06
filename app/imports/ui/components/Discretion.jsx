import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Container, Form, Checkbox, Button, Header } from 'semantic-ui-react';

export default class Discretion extends React.Component {
  render() {
    return (
        <Container center className='sizeOf'>
          <p className='title'>
            <Header>AUTHORIZATION FOR RELEASE OF INFORMATION</Header>
            <strong>HGIA Green Energy Money $aver On-Bill Program (Eligibility and Ongoing Participation)</strong>
          </p>
          <Form className='formFills'>
            <Form.Group>
              <Form.Input
                  required
                  error={{ content: 'Please enter your name as seen on utility bill.'}}
                  label='Customer Name'
                  placeholder='Name as seen on utility bill'
                  width={6}
              />
              <Form.Input
                  required
                  error={{ content: 'Please enter the current date.'}}
                  label='Date'
                  width={4}
              />
            </Form.Group>
            <Form.Input
                required
                error={{ content: 'Please enter a valid Service Address'}}
                label='Service Address'
                width={8}
            />
            <Form.Group grouped required>
              <label>Utility: </label>
              <Form.Field
                  control={Checkbox}
                  label={<label>Hawaiian Electric</label>}
              />
              <Form.Field
                  control={Checkbox}
                  label={<label>Maui Electric</label>}
              />
              <Form.Field
                  control={Checkbox}
                  label={<label>Hawaiian Electric Light</label>}
              />
            </Form.Group>
            <Form.Input
                required
                fluid label='Utility Account Number'
                width={6}
            />
          </Form>
          <Container center className='legalDiscretion'>
            <p>
              I am applying to participate in the Hawaii Green Infrastructure Authority's ("HGIA") Green Energy Money $aver On-Bill Program ("Program"). As part of the Program, HGIA needs access to my utility bill information. I understand that information about my utility bill will be shared with HGIA, both intially to evaluate my application and on an on-going basis for as long as I am a participant in the Program. I hereby authorize the utility indicated above to release the following information to HGIA and any of its representatives, agents, and contractors for the Programs:
              <ul>
                <li>Information to identify my account, including account numbers and identifiers for my service address.</li>
                <li>Bill history information, including prior disconnects, months of active service, the start date and any future move-out date.</li>
                <li>Information about my current bill and payment, including the dates, amounts, and document numbers.</li>
                <li>Rate information, including whether there is an interconnection agreement for this location, the rate schedule and tariff.</li>
              </ul>
              I understand that my authorization will remain effective from the date of my signature until my application evaluation is complete, and for as long as I am a participant in the program and an on-bill obligation is outstanding at the service address identified above. I also understand that information and data collected may be used to assess the Program's effectiveness and results, which will be anonymized and aggregated, and may be included in Program reports provided to the Hawaii Public Utilities Commission.
            </p>
          </Container>
          <Form className='termsAndConditions'>
            <Form.Input
                required
                label='Name of Customer'
                placeholder='Name as seen on utility bill'
                width={6}
            />
            <Form.Group>
              <Form.Input label="Applicant’s Signature" placeholder='To be Updated' width={12} className="application-signature" required>
                <canvas id="sig-canvas" className="set-canvas-width">
                  Please use another browser in order to sign this form.
                </canvas>
              </Form.Input>
              <Form.Input
                  required
                  label='Date'
                  width={4}
              />
            </Form.Group>
            <Form.Field
                control={Checkbox}
                label={<label>I have read and understand the nature of this authorization.</label>}
            />
          </Form>
          <Button
              content='Previous'
              icon='left arrow'
              labelPosition='left'
          />
          <Button
              content='Next'
              icon='right arrow'
              labelPosition='right'
          />
          <div>{this.addScript()}</div>
        </Container>
    );
  }
  addScript() {
    import '../js/userSignature'
  }

}