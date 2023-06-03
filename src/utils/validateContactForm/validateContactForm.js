export default function validateContactForm (values) {
  const errors = {}
  // validate name field
  if (values?.name?.trim() === '') {
    errors.name = 'Required'
  }
  // validate email field
  if (values?.email?.trim() === '') {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  // validate message field
  if (values?.message?.trim() === '') {
    errors.message = 'Required'
  }
  return errors
}
