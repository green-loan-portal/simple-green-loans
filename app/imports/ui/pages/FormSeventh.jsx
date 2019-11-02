import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Form, Header, Container, Label, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class Seventh extends React.Component {
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
