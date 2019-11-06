import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Form, Header, Container, Label, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class Seventh extends React.Component {
<<<<<<< HEAD
    render() {
        return (
            <Container>
                <div className="add-margin-top-40px"></div>
                <Form>
                    <Header as="h3" className="dividing header">
                        7. APPLICANT&#39;S INFORMATION
                        <Label className="float-right green">
                            Note: The Applicant is the person named on the utility account named in Section 2.
                        </Label>
                    </Header>

                    <Container>
                        <Form.Group>
                            <Form.Input type='email' label='Email' width={12} required />
                            <Form.Input label='Home Phone' width={4} />
                            <Form.Input label='Mobile Phone' width={4} />
                        </Form.Group>
                        <Form.Input
                            label='Mailing Address'
                            placeholder='Mailing Address if different from Installation Address in Section 5'
                            width={16}
                        />
                        <Form.Input
                            label="All Parties Names"
                            placeholder='Please list all parties named on Title to the Installation Address in Section 5 (including Trusts)'
                            width={16} />
                        <Form.Group>
                            <Form.Input label='Other Owner(s)' width={10} />
                            <Form.Input label='Relationship to Applicant' width={6} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Input label='Other Owner(s)' width={10} />
                            <Form.Input label='Relationship to Applicant' width={6} />
                        </Form.Group>

                        <div className="align-right">
                            <Button>
                                <Link to="/formsixth">&lt; Previous</Link>
                            </Button>
                            <Button>
                                <Link to="">Save & Exit</Link>
                            </Button>
                            <Button>
                                <Link to="/formeighth">Save & Next &gt;</Link>
                            </Button>
                        </div>
                    </Container>
                </Form>
                <div className="add-margin-top-40px"></div>
            </Container>
        );
    }
}

export default Seventh;
=======

  addOwners = () => {
    var newdiv = document.createElement("div");

    newdiv.innerHTML = '<div class="fields"><div class="ten wide field"><label>Name</label><div class="ui input"><input type="text"></div></div><div class="six wide field"><label>Relationship to Applicant</label><div class="ui input"><input type="text"></div></div></div>';

    let div = document.getElementById('adding-owners');
    div.appendChild(newdiv);
  }

  submit(data) {
    const { email, phoneHome, phoneMobile } = data;
    const owner = Meteor.user().username;
    Section7DB.insert({ owner, email, phoneHome, phoneMobile }, (error) => {
      if (error) {
        swal('Error', error.message, 'error');
      } else {
        swal('Success', 'Section #9 saved successfully', 'success');
      }
    });
  }

  render() {
    return (
      <Container>
<<<<<<< HEAD
        <div className="add-margin-top-40px"></div>
        <Header as="h3" className="dividing header">
=======
        {this.addHeader()}
        <div className="add-margin-top-40px"></div>
        <Header as="h2" className="dividing header">
>>>>>>> parent of 99fb843... Updated minor layouts
          7. APPLICANT&#39;S INFORMATION
          <Label className="float-right green">
            Note: The Applicant is the person named on the utility account named in Section 2.
          </Label>
        </Header>

        <AutoForm schema={Section7DBSchemaWithoutOwner} onSubmit={data => this.submit(data)}>

          <Container>
            <Form.Group widths="equal">
              <TextField
                name='email'
                label='Email'
                showInlineError={true}
              />
              <div className="five wide field">
                <NumField
                  name='phoneHome'
                  label='Home Phone'
                decimal={false}
                />
              </div>
              <div className="five wide field">
                <NumField
                  name='phoneMobile'
                  label='Mobile Phone'
                  decimal={false}
                />
              </div>
            </Form.Group>

            <Form.Input
              name='mailingAddress'
              label='Mailing Address'
              placeholder='(if different from Installation Address in Section 5)'
              width={16}
            />

            <Form.Input
              name='partiesNames'
              label='All Parties Names'
              placeholder='Please list all parties named on Title to the Installation Address in Section 5 (including Trusts)'
              width={16}
            />

            <Button type="button" id="add-owners-btn" primary onClick={this.addOwners}>add other owner(s)</Button>

            <div id="adding-owners"></div>
            {/* <Form.Group>
              <Form.Input
                label='Name'
                width={10}
              />
              <Form.Input
                label='Relationship to Applicant'
                width={6}
              />
            </Form.Group> */}

            <div className="align-right">
              <Button>
                <Link to="/formsixth">&lt; Previous</Link>
              </Button>
              <SubmitField value='Submit' />
              <Button>
                <Link to="/formeighth">Save & Next &gt;</Link>
              </Button>
              <ErrorsField />
            </div>
          </Container>
        </AutoForm>
        <div className="add-margin-top-40px"></div>
      </Container>
    );
  }
}

export default Seventh;

// Seventh.propTypes = {
//   ready: PropTypes.bool.isRequired,
// };

// /** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
// export default withTracker(() => {
//   // Ensure that minimongo is populated with all collections prior to running render().
//   const sub1 = Meteor.subscribe(Section7DB);
//   return {
//     ready: sub1.ready(),
//   };
// })(Seventh);
>>>>>>> parent of ad84aeb... Finished Section 6 & 8. Need to update/fix section 7 & 9
