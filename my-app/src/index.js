import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import { Form, Header, Container, Label, Button } from 'semantic-ui-react';

class SeventhInfo extends React.Component {

  render() {
    return (
      <Container>
        <div className="add-margin-top-40px"></div>
        <Form>
          <Header as="h3" className="dividing header">
            7. APPLICANT'S INFORMATION
            <Label className="float-right green">Note: The Applicant is the person named on the utility account named in Section 2.</Label>
          </Header>

          <br />

          <Container>
            <Form.Group>
              <Form.Input type='email' label='Email' width={12} required />
              <Form.Input label="Home Phone" width={4} />
              <Form.Input label="Mobile Phone" width={4} />
            </Form.Group>
            <Form.Input label="Mailing Address" placeholder='Mailing Address if different from Installation Address in Section 5' width={16} />
            <Form.Input label="All Parties Names" placeholder='Please list all parties named on Title to the Installation Address in Section 5 (including Trusts)' width={16} />
            <Form.Group>
              <Form.Input label="Other Owner(s)" width={10} />
              <Form.Input label="Relationship to Applicant" width={6} />
            </Form.Group>
            <Form.Group>
              <Form.Input label="Other Owner(s)" width={10} />
              <Form.Input label="Relationship to Applicant" width={6} />
            </Form.Group>
            <Button className="float-right">Save & Next &gt;</Button>
            <Button className="float-right">Save & Quit</Button>
            <Button className="float-right">&lt; Previous</Button>
          </Container>
        </Form>
      </Container>
    );
  }
}

class EightInfo extends React.Component {

  render() {
    return (
      <Container>
        <Form>
          <Header as="h3" className="dividing header">8. LANDLORD OR PROPERTY MANAGER INFORMATION</Header>

          <br />

          <Form.Group>
            <Form.Input label="Landlord Name" placeholder='First, Middle, Last' width={8} required />
            <Form.Input type='email' label='Email' width={8} required />
            <Form.Input label="Home Phone" width={4} />
            <Form.Input label="Mobile Phone" width={4} />
          </Form.Group>
          <Form.Group>
            <Form.Input label="Property Manager Name" placeholder='First, Middle, Last' width={8} required />
            <Form.Input type='email' label='Email' width={8} required />
            <Form.Input label="Work Phone" width={4} />
            <Form.Input label="Cell Phone" width={4} />
          </Form.Group>
          <Form.Group>
            <Form.Input label="Property Management Company Name" width={8} required />
            <Form.Input label="Property Management Company Address" placeholder='Street, City, State, Zip' width={8} required />
          </Form.Group>
          <Button className="float-right">Save & Next &gt;</Button>
          <Button className="float-right">Save & Quit</Button>
          <Button className="float-right">&lt; Previous</Button>
        </Form>
      </Container>
    );
  }
}

class NinthInfo extends React.Component {

  render() {
    return (
      <Container>
        <Form>
          <Header as="h3" className="dividing header">9. DISCLOSURE AND AGREEMENT REGARDING GEM$ APPLICATION</Header>

          <br />

          <p>By completing and submitting an Application, I certify that I have read, understand, and agree to all of the terms and conditions of the
          GEM$ Program. By signing below, I certify that all information provided on this Application is true, correct and complete. If necessary, I
          further agree to provide additional information to HGIA to review this Application. I hereby authorize HGIA to retain this Application
          whether or not it is approved.</p>
          <p>I further agree, that HGIA may communicate and share with my landlord and/or property manager and the Contractor identified in Section
          4 above, or subsequently identified by me to HGIA, and disclose orally and/or in writing, the following information regarding this
          Application: energy usage history; whether this Application has been pre-approved by HGIA and any additional items requested by HGIA
          in order to complete the processing of my request; whether this Application has been approved by HGIA so that my landlord and/or
          property manager and Contractor(s) can proceed with scheduling the work; and whether this Application has been denied so that the
          landlord and/or property manager and Contractor(s) can determine if there are other financing available and whether I intend to proceed.</p>
          <p>I understand and agree that HGIA does not guarantee the security of any data submitted electronically and will not be held responsible
          or liable for interception by third parties. I understand and agree that in no event will HGIA be liable for any technical, hardware or software
          failure of any kind, any interruption in the availability of this service, any delay in operation or transmission, any incomplete transmission,
          computer virus, loss of data, or other similar loss.</p>
          <p>As an agency of the State of Hawaii, HGIA is subject to section 92F-12(a)(8) of the Hawaii Revised Statutes, which requires agencies to
            collect and make available upon request “the name, address and occupation of any person borrowing funds from a state or county loan
            program and the amount, purpose, and current status of the loan.”</p>
          <p>I also authorize and grant HGIA unrestricted permission to share the information provided on this Application and subsequent Program
          information related to the on-bill obligation (OBO), which will be the amount financed by HGIA to install the approved Energy Improvement
          until the OBO is paid in full, with HGIA’s Servicing Agent, HGIA’s Board of Directors, my electric utility, the Public Benefits Fund
            Administrator (currently known as Hawaii Energy) and the State of Hawaii.</p>
          <p>I understand I must meet all eligibility criteria and requirements, including at least an estimated 10% net utility bill savings for each Energy
          Improvement requested, utilize a GEMS Approved Contractor and obtain permission from my landlord in order to participate in GEM$.</p>
          <p>The federal Equal Credit Opportunity Act (ECOA) prohibits creditors from discriminating against credit applicants on the basis of race,
          color, religion, national origin, sex, marital status, age (provided the applicant has the capacity to enter into a binding contract); because
          all or part of the applicant's income derives from any public assistance program; or because the applicant has in good faith exercised any
          right under the Consumer Credit Protection Act. The federal agency that administers compliance with this law concerning this creditor is
          the Federal Trade Commission Consumer Response Center Washington, DC 20580 1‐877‐FTC‐HELP (1‐877‐382‐4357) TDD: 1‐866‐
            653‐4261 <a href="https://www.ftc.gov" target="_blank">www.ftc.gov.</a></p>
          <p>By signing this Application, I confirm that I have received HGIA’s Privacy Notice as part of this Application packet. I also agree that I may,
          but am not required to, agree to and accept the terms of this Application by electronic means, and that my submission of this Application
by electronic means shall be sufficient evidence of my agreement to do so by electronic means</p>
          <Form.Group>
            <Form.Input label="Applicant’s Signature" placeholder='To be Updated' width={12} required />
            <Form.Input label="Date" type="date" value="YYYY-MM-DD" width={4} />
          </Form.Group>
          <Button className="float-right">Save & Next &gt;</Button>
          <Button className="float-right">Save & Quit</Button>
          <Button className="float-right">&lt; Previous</Button>
        </Form>
      </Container>
    );
  }
}


class ApplicantsInfo extends React.Component {
  render() {
    return (
      <div>
        <SeventhInfo />
        <div className="add-margin-top-30vh"></div>
        <EightInfo />
        <div className="add-margin-top-30vh"></div>
        <NinthInfo />
        <div className="add-margin-top-30vh">.</div>
      </div>
    );
  }
}

ReactDOM.render(<ApplicantsInfo />, document.getElementById('root'));