import React from 'react';
import classnames from 'classnames';
import connectField from 'uniforms/connectField';
import filterDOMProps from 'uniforms/filterDOMProps';
import { Dropdown } from 'semantic-ui-react';
import { _ } from 'meteor/underscore';

/**
 * Provide Semantic UI multi-select functionality.
 * Adapted from https://github.com/vazco/uniforms/blob/master/packages/uniforms-semantic/src/SelectField.js
 *
 * The MIT License (MIT)

 * Copyright (c) 2016-2019 Vazco

 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:

 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.

 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

/* eslint react/prop-types: 0 */
const renderDropdown = ({ allowedValues, disabled, placeholder, onChange, transform, value }) => {
  // console.log('renderMultiSelect value=%o allowedValues=%o', value, allowedValues);
  const options = _.map(allowedValues, (val, index) => ({
    key: index,
    text: transform ? transform(val) : val,
    value: val,
  }));
  return (
    <Dropdown fluid={true} multiple={true} placeholder={placeholder} selection={true} disabled={disabled}
              options={options} onChange={(event, data) => onChange(data.value)} value={value}/>
  );
};

const MultiSelect = ({
                       allowedValues,
                       checkboxes,
                       className,
                       disabled,
                       error,
                       errorMessage,
                       fieldType,
                       id,
                       inputRef,
                       label,
                       name,
                       onChange,
                       placeholder,
                       required,
                       showInlineError,
                       transform,
                       value,
                       ...props
                     }) => (
  <div className={classnames({ disabled, error, required }, className, 'field')} {...filterDOMProps(props)}>
    {label && <label htmlFor={id}>{label}</label>}
    {renderDropdown({
      allowedValues,
      disabled,
      placeholder,
      onChange,
      transform,
      value,
    })}
    {!!(error && showInlineError) && <div className="ui red basic pointing label">{errorMessage}</div>}
  </div>
);


export default connectField(MultiSelect);
