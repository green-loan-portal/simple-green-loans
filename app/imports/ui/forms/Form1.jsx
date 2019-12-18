import React, { Children } from 'react';
import { Header, Form, Button, Container, Divider } from 'semantic-ui-react';
import AutoForm from 'uniforms-semantic/AutoForm';
import TextField from 'uniforms-semantic/TextField';
import NumField from 'uniforms-semantic/NumField';
import SelectField from 'uniforms-semantic/SelectField';
import SubmitField from 'uniforms-semantic/SubmitField';
import ErrorsField from 'uniforms-semantic/ErrorsField';
import BoolField from 'uniforms-unstyled/BoolField';
import swal from 'sweetalert';
import { Roles } from 'meteor/alanning:roles';
import { Redirect } from 'react-router';
import { Meteor } from 'meteor/meteor';
import { NavLink } from 'react-router-dom';
import 'uniforms-bridge-simple-schema-2'; // required for Uniforms
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { BaseField, nothing } from 'uniforms';
import { Section1DBSchemaWithoutOwner, Section1DB } from '/imports/api/stuff/Section1DB';
import ProgressBar from '../components/ProgressBar';
// import { exportToCsv2, collectdata } from '../../api/stuff/CsvScript';

/** Create a schema to specify the structure of the data to appear in the form. */

/** Renders the Page for adding a document. */
class Form1 extends React.Component {

  /** On submit, insert the data. */
  submit(data) {
    const {
      howDidYouHearAboutUs, otherHDYHA, washer, ageOfWasher, dryer, ageOfDryer,
      kitchenRefrigerator, ageOfKitchenRefrigerator, secondRefrigerator, ageOfSecondRefrigerator,
      chestFreezer, ageOfChestFreezer, solarHWHeater, ageOfSolarHWHeater, PVSystem, ageOfPVSystem,
      LEDCFLBulbs, WIFI, interestedInInstalling, otherInterestedInInstalling, assistanceFrom,
      assistanceFromOther, anyoneYouKnowName, anyoneYouKnowPhone, anyoneYouKnowEmail, nameOnUtilAcc,
    } = data;

    // check to see if account is already in the database.
    let tmp = null;
    try {
      if (typeof this.props.doc.owner !== 'undefined') {
        tmp = this.props.doc.owner;
      }
    } catch (e) {
      tmp = 'not-defined';
    }

    if (tmp === 'not-defined') {
      const owner = Meteor.user().username;
      Section1DB.insert({
        owner, howDidYouHearAboutUs, otherHDYHA, washer, ageOfWasher, dryer, ageOfDryer,
        kitchenRefrigerator, ageOfKitchenRefrigerator, secondRefrigerator, ageOfSecondRefrigerator,
        chestFreezer, ageOfChestFreezer, solarHWHeater, ageOfSolarHWHeater, PVSystem, ageOfPVSystem,
        LEDCFLBulbs, WIFI, interestedInInstalling, otherInterestedInInstalling, assistanceFrom,
        assistanceFromOther, anyoneYouKnowName, anyoneYouKnowPhone, anyoneYouKnowEmail, nameOnUtilAcc,
      }, (error) => {
        if (error) {
          swal('Error', error.message, 'error');
        } else {
          swal('Success', 'Section #1 saved successfully', 'success');
        }
      });
    } else {
      Section1DB.update({ _id: this.props.doc._id }, {
        $set: {
          howDidYouHearAboutUs, otherHDYHA, washer, ageOfWasher, dryer, ageOfDryer,
          kitchenRefrigerator, ageOfKitchenRefrigerator, secondRefrigerator, ageOfSecondRefrigerator,
          chestFreezer, ageOfChestFreezer, solarHWHeater, ageOfSolarHWHeater, PVSystem, ageOfPVSystem,
          LEDCFLBulbs, WIFI, interestedInInstalling, otherInterestedInInstalling, assistanceFrom,
          assistanceFromOther, anyoneYouKnowName, anyoneYouKnowPhone, anyoneYouKnowEmail, nameOnUtilAcc,
        },
      }, (error) => {
        if (error) {
          swal('Error', error.message, 'error');
        } else {
          swal('Success', 'Section #1 updated successfully', 'success');
        }
      });
    }
  }

  /** Render the form. Use Uniforms: https://github.com/vazco/uniforms */
  render() {

    // eslint-disable-next-line max-len
    const DisplayIf = ({ children, condition }, { uniforms }) => (condition(uniforms) ? Children.only(children) : nothing);
    DisplayIf.contextTypes = BaseField.contextTypes;
    return ((Roles.userIsInRole(Meteor.userId(), 'admin')) ? <Redirect to="/admin" /> :

      <Container>
        <ProgressBar />
        <AutoForm schema={Section1DBSchemaWithoutOwner} onSubmit={data => this.submit(data)} model={this.props.doc}>
          <Header as='h2' className='dividing header'>
            <strong>1. PRE-APPLICATION SURVEY</strong>
            {/** }
               <Label className="green">
               Note: The person named on the electric utility account should be the Applicant
               </Label>
               */}
          </Header>
          <div className='add-margin-top-10px' />
          <h3>How did you hear about us?</h3>
          <SelectField
            checkboxes
            name='howDidYouHearAboutUs'
            label={false}
          />
          <Form.Group>
            <TextField
              name='otherHDYHA'
              label={false}
              placeholder={'Other'}
            />
          </Form.Group>

          <Divider className="divider-props" />

          <h3>Which of these do you have in your home?</h3>
          <BoolField
            className='bool-field-style ui checkbox new-line'
            name='washer'
            label='Washer'
            showInlineError={false} // ???????????????????????????wat this do
          />

          <DisplayIf condition={context => context.model.washer}>
            <section>
              <Form.Group>
                <NumField
                  name='ageOfWasher'
                  decimal={false}
                  label={false}
                  placeholder={'Age of washer'}
                />
              </Form.Group>
            </section>
          </DisplayIf>

          <BoolField
            className='bool-field-style ui checkbox new-line'
            name='dryer'
          />
          <DisplayIf condition={context => context.model.dryer}>
            <section>
              <Form.Group>
                <NumField
                  name='ageOfDryer'
                  decimal={false}
                  label={false}
                  placeholder={'Age of dryer'}
                />
              </Form.Group>
            </section>
          </DisplayIf>


          <BoolField
            className='bool-field-style ui checkbox new-line'
            name='kitchenRefrigerator'
          />
          <DisplayIf condition={context => context.model.kitchenRefrigerator}>
            <section>
              <Form.Group>
                <NumField
                  name='ageOfKitchenRefrigerator'
                  decimal={false}
                  label={false}
                  placeholder={'Age of kitchen refrigerator'}
                />
              </Form.Group>
            </section>
          </DisplayIf>

          <BoolField
            className='bool-field-style ui checkbox new-line'
            name='secondRefrigerator'
          />

          <DisplayIf condition={context => context.model.secondRefrigerator}>
            <section>
              <Form.Group>
                <NumField
                  name='ageOfSecondRefrigerator'
                  decimal={false}
                  label={false}
                  placeholder={'Age of second refrigerator'}
                />
              </Form.Group>
            </section>
          </DisplayIf>

          <BoolField
            className='bool-field-style ui checkbox new-line'
            name='chestFreezer'
          />

          <DisplayIf condition={context => context.model.chestFreezer}>
            <section>
              <Form.Group>
                <NumField
                  name='ageOfChestFreezer'
                  decimal={false}
                  label={false}
                  placeholder={'Age of chest freezer'}
                />
              </Form.Group>
            </section>
          </DisplayIf>

          <BoolField
            className='bool-field-style ui checkbox new-line'
            label='Solar hot water heater'
            name='solarHWHeater'
          />
          <DisplayIf condition={context => context.model.solarHWHeater}>
            <section>
              <Form.Group>
                <NumField
                  name='ageOfSolarHWHeater'
                  decimal={false}
                  label={false}
                  placeholder={'Age of solar hot water heater'}
                />
              </Form.Group>
            </section>
          </DisplayIf>
          <BoolField
            className='bool-field-style ui checkbox new-line'
            label='Solar PV system'
            name='PVSystem'
          />

          <DisplayIf condition={context => context.model.PVSystem}>
            <section>
              <Form.Group>
                <NumField
                  name='ageOfPVSystem'
                  decimal={false}
                  label={false}
                  placeholder={'Age of PV system'}
                />
              </Form.Group>
            </section>
          </DisplayIf>
          <BoolField
            className='bool-field-style ui checkbox new-line'
            label='LED or CFL light bulbs'
            name='LEDCFLBulbs'
          />
          <BoolField
            className='bool-field-style ui checkbox new-line'
            label='WIFI'
            name='WIFI'
          />


          <Divider className="divider-props" />


          <h3>Which energy savings product(s) would you most likely be interested in installing within the next
              three (3) years?</h3>
          <SelectField
            checkboxes
            name='interestedInInstalling'
            label={false}
          />
          <Form.Group>
            <TextField
              name='otherInterestedInInstalling'
              label={false}
              placeholder={'Other'}
            />
          </Form.Group>

          <Divider className="divider-props" />


          <h3>Where are you most likely to go to get assistance or training regarding managing energy costs and
              finances?</h3>
          <SelectField
            checkboxes
            name='assistanceFrom'
            label={false}
          />


          <Form.Group>
            <TextField
              name='assistanceFromOther'
              label={false}
              placeholder={'Other'}
            />
          </Form.Group>


          <Divider className="divider-props" />


          <h3>Is there anyone you know that could benefit from lowering their energy costs?</h3>

          <Form.Group widths='equal'>
            <TextField
              name='anyoneYouKnowName'
              label={false}
              placeholder={'First, Middle, Last'}
            />
            <TextField
              name='anyoneYouKnowPhone'
              label={false}
              placeholder={'Phone number'}
            />
            <TextField
              name='anyoneYouKnowEmail'
              label={false}
              placeholder={'Email'}
            />
          </Form.Group>

          {/* NEW SECTION */}
          <ErrorsField />
          <div className="align-right add-margin-top-20px">
            <Button as={NavLink} exact to="/profile">&lt; Previous</Button>
            <Button as={NavLink} exact to="/form/2">Next &gt;</Button>
            <SubmitField value="Save" className="green"/>
          </div>
        </AutoForm>
      </Container >
    );
  }
}

/** Require the presence of a Stuff document in the props object. Uniforms adds 'model' to the props, which we use. */
Form1.propTypes = {
  doc: PropTypes.object,
  model: PropTypes.object,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Get the documentID from the URL field. See imports/ui/layouts/App.jsx for the route containing :_id.
  // const documentId = Meteor.user().username;
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe('Form1');

  const profile = Meteor.user() ? Meteor.user().username : null;
  return {
    doc: Section1DB.findOne({ owner: profile }),
    ready: subscription.ready(),
  };

})(Form1);
