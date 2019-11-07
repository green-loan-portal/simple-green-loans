import React from 'react';
import { Divider, Header, Input, Form } from 'semantic-ui-react';

export default class Middle1HP extends React.Component {
  render() {
    return (
        <div className={'information'}>
          <React.Fragment>
            <Header as='h3'>RATEPAYER INFORMATION</Header>
            <p>Name on Utility Account (first, middle, last): Please print name(s) as it appears on your utility
              bill.</p>
            <Form>
              <Form.Group widths={'equal'}>
                <Form.Field
                    control={Input}
                    label={'First Name'}
                    placeholder={'First Name'}/>
                <Form.Field
                    control={Input}
                    label={'Middle Name'}
                    placeholder={'Middle Name'}/>
                <Form.Field
                    control={Input}
                    label={'Last Name'}
                    placeholder={'Last Name'}/>
              </Form.Group>
            </Form>

            <p>Utility Account Number:</p>
            <Form>
              <Form.Group widths={'equal'}>
                <Form.Field
                    control={Input}
                    label={'Utility Account Number'}
                    placeholder={'Utility Account Number'}/>
              </Form.Group>
            </Form>
            <Divider hidden/>

            <Header as='h3'>ENERGY IMPROVEMENT</Header>
            <p>What GEM$ Approved Energy Improvement would you like to install? (Check all that apply)</p>
            <Form>
              <Form.Group grouped>
                <label>GEM$ Energy Improvements:</label>
                <Form.Field
                    label='Solar Thermal Hot Water Heater'
                    control='input'
                    type='radio'
                    name='EnergyImprovements'
                />
                <Form.Field
                    label='Solar PV Water Heater'
                    control='input'
                    type='radio'
                    name='EnergyImprovements'
                />
                <Form.Field
                    label='Heat Pump Water Heater'
                    control='input'
                    type='radio'
                    name='EnergyImprovements'
                />
                <Form.Field
                    label='Solar PV System'
                    control='input'
                    type='radio'
                    name='EnergyImprovements'
                />
              </Form.Group>
            </Form>
            <Divider hidden/>
            <Header as='h3'>CONTRACTOR INFORMATION</Header>
            <p>HAve you met with a GEM$ Approved Contractor regarding installation?</p>
            <Form>
              <Form.Group grouped>
                <Form.Field
                    label='Yes'
                    control='input'
                    type='radio'
                    name='EnergyImprovements'
                />
                <Form.Field
                    label='No'
                    control='input'
                    type='radio'
                    name='EnergyImprovements'
                />
              </Form.Group>
            </Form>
            <p>If yes, please indicate below.</p>
            <Form>
              <Form.Group widths={'equal'}>
                <Form.Field
                    control={Input}
                    label={'Contractor Name'}
                    placeholder={'Contractor Name'}/>
                <Form.Field
                    control={Input}
                    label={'Contact Name'}
                    placeholder={'Contact Name'}/>
              </Form.Group>
            </Form>
            <Divider hidden/>
            <Header as='h3'>INSTALLATION ADDRESS</Header>
            <p>Street Address (Street, City, State, Zip)</p>
            <Form>
              <Form.Group widths={'equal'}>
                <Form.Field
                    control={Input}
                    label={'Street Address'}
                    placeholder={'Street Address'}/>
              </Form.Group>
            </Form>
            <p>On which island is this located? (check one box)</p>
            <Form>
              <Form.Group grouped>
                <Form.Field
                    label='Oahu'
                    control='input'
                    type='radio'
                    name='EnergyImprovements'
                />
                <Form.Field
                    label='Maui'
                    control='input'
                    type='radio'
                    name='EnergyImprovements'
                />
                <Form.Field
                    label='Lanai'
                    control='input'
                    type='radio'
                    name='EnergyImprovements'
                />
                <Form.Field
                    label='Molokai'
                    control='input'
                    type='radio'
                    name='EnergyImprovements'
                />
                <Form.Field
                    label='Hawaii'
                    control='input'
                    type='radio'
                    name='EnergyImprovements'
                />
              </Form.Group>
            </Form>
            <p>Type of Residence (check one box)</p>
            <Form>
              <Form.Group grouped>
                <Form.Field
                    label='Single Family Dwelling'
                    control='input'
                    type='radio'
                    name='EnergyImprovements'
                />
                <Form.Field
                    label='Duplex'
                    control='input'
                    type='radio'
                    name='EnergyImprovements'
                />
                <Form.Field
                    label='Townhouse'
                    control='input'
                    type='radio'
                    name='EnergyImprovements'
                />
                <Form.Field
                    label='Apartment'
                    control='input'
                    type='radio'
                    name='EnergyImprovements'
                />
                <Form.Field
                    label='Other:'
                    control='input'
                    type='radio'
                    name='EnergyImprovements'
                />
                <Form.Field
                    control={Input}
                    label={'Please Specify'}
                    placeholder={'Please Specify'}/>
              </Form.Group>
            </Form>
          </React.Fragment>
        </div>
    );
  }
}
