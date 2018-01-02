import React from 'react';
import { Form, Field } from 'react-final-form';
import { Button, TextField, Select, Input } from 'material-ui';
import { MenuItem } from 'material-ui/Menu';
import { FormControl, FormHelperText } from 'material-ui/Form';
import { InputLabel } from 'material-ui/Input';

import { validate } from './helpers';

const onSubmit = values => console.log('on submit', values);

const handleSubmit = values => console.log('on handleSubmit', values);

const FIELDS = [{ 
    name: 'firstName',
    placeholder: 'First Name',
    type: 'text'
  },{ 
    name: 'lastName',
    placeholder: 'Last Name',
    type: 'text'
  }, {
    name: 'age',
    placeholder: 'Age',
    type: 'number'
  }, {
    name: 'cities',
    placeholder: 'Cities',
    type: 'select',
    fullWidth: true,
  }
];

const SELECT_FIELDS = [{
  name: 'Lorem',
  value: 'lorem',
}, {
  name: 'Dolem',
  value: 'dolem',
}, {
  name: 'Ipsum',
  value: 'ipsum',
}, {
  name: 'Sit',
  value: 'sit',
}
];

const MyForm = () => (
  <Form
    onSubmit={onSubmit}
    validate={validate}
    render={({ handleSubmit, submitting, pristine, invalid, reset }) => (
      <form onSubmit={handleSubmit}>

        {FIELDS.map(({ name, placeholder, type}) =>
          <Field key={name} name={name}>

            {({ input, meta, submitting, fullWidth }) => 
              type === 'select' ? (
                <FormControl 
                  style={{ 
                    minWidth: 'calc(100% / 3)', 
                    marginTop: 16, 
                    marginBottom: 8 
                  }}
                  fullWidth
                >
                  <InputLabel 
                    error={meta.touched && meta.error && true} 
                    htmlFor={`form-${type}-${name}`}
                  >
                    {placeholder}
                  </InputLabel>
                  <Select
                    error={meta.touched && meta.error && true}
                    input={<Input name="age" id={`form-${type}-${name}`} />}
                    {...input}
                    
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    {SELECT_FIELDS.map( ({ name, value }, i ) => 
                      <MenuItem key={i} value={value}>{name}</MenuItem>
                    )}
                  </Select>
                  {meta.touched && meta.error && <FormHelperText error>{meta.error}</FormHelperText>}
                </FormControl>
              ) : (
                <TextField
                  error={meta.touched && meta.error && true}
                  id={`form-${type}-${name}`}
                  fullWidth
                  label={placeholder}
                  {...input}
                  type={type}
                  placeholder={placeholder}
                  margin="normal"
                  helperText={meta.touched && meta.error && meta.error}
                  onBlur={() => console.log('blur')}
                />
              )}

          </Field>
        )}

        <div />
        <Button
          raised
          color="primary"
          type="submit"
          disabled={submitting || pristine || invalid}>
          Submit
        </Button>
        <Button
          onClick={reset}
          disabled={submitting || pristine}>
          Reset
        </Button>
      </form>
    )}
  />
)

export default MyForm;