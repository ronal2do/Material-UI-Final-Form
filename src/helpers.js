export const validate = values => {
  console.log('on validate', values)
  const errors = {};

  if (!values.firstName) {
    errors.firstName = "Required";
  }
  if (values.firstName && values.firstName.length < 2) {
    errors.firstName = "Precisa ser maior que 2";
  }
  if (!values.cities) {
    errors.cities = "Required";
  }

  return errors;
};