import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Form, Header, Container, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

/** Render a Not Found page if the user enters a URL that doesn't match any route. */
class Eighth extends React.Component {
    render() {
        return (
            <Container>
                <div className="add-margin-top-40px"></div>
                <Form>
                    <Header as="h3" className="dividing header">8. LANDLORD OR PROPERTY MANAGER INFORMATION</Header>

                    <Form.Group>
                        <Form.Input label="Landlord Name" placeholder='First, Middle, Last' width={8} required />
                        <Form.Input type='email' label='Email' width={8} required />
                        <Form.Input label="Home Phone" width={4} />
                        <Form.Input label="Mobile Phone" width={4} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Input label="Property Manager Name"
                                    placeholder='First, Middle, Last' width={8} required />
                        <Form.Input type='email' label='Email' width={8} required />
                        <Form.Input label="Work Phone" width={4} />
                        <Form.Input label="Cell Phone" width={4} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Input label="Property Management Company Name" width={8} required />
                        <Form.Input label="Property Management Company Address"
                                    placeholder='Street, City, State, Zip' width={8} required />
                    </Form.Group>
                    <Button className="float-right">
                        <Link to="/formninth">Save & Next &gt;</Link>
                    </Button>
                    <Button className="float-right">
                        <Link to="">Save & Exit</Link>
                    </Button>
                    <Button className="float-right">
                        <Link to="/formseventh">&lt; Previous</Link>
                    </Button>
                </Form>
                <div className="add-margin-top-40px"></div>
            </Container>
        );
    }
}

export default Eighth;
