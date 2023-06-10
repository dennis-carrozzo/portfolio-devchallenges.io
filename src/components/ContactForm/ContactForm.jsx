import { useState } from 'react'
import { Formik } from 'formik'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import Modal from '@mui/material/Modal'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import { Message } from '@mui/icons-material'
import validateContactForm from '@/utils/validateContactForm'
// Todo: use dynamic content
export default function ContactForm () {
  const [openModal, setOpenModal] = useState(false)
  const [modalState, setModalState] = useState('')
  const initialValues = { name: '', email: '', message: '' }

  const submitHandler = async (values, { setSubmitting }) => {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
      })
      if (response.ok) {
        setModalState('success')
      } else {
        throw new Error('error while sending')
      }
    } catch (e) {
      console.log(e)
      setModalState('failure')
    } finally {
      toggleModal()
      setSubmitting(false)
    }
  }

  const toggleModal = () => {
    setOpenModal(prev => !prev)
  }

  return (
    <>
      <Formik
        initialValues={initialValues}
        validate={validateContactForm}
        onSubmit={submitHandler}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting
          /* and other goodies */
        }) => (
          <Stack
            component='form'
            onSubmit={handleSubmit}
            spacing={3}
            justifyContent='center'
            alignItems='center'
          >
            <Avatar sx={{ bgcolor: 'secondary' }}>
              <Message />
            </Avatar>
            <Typography component='h1' variant='h5'>
              Get In Touch
            </Typography>
            <Typography
              variant='subtitle1'
              color='secondary'
              align='center'
              sx={{ width: 1, maxWidth: 300 }}
            >
              Share Your Project Ideas or Let's Collaborate! Message me to
              discuss your project, work together, or simply have a friendly
              chat. I'm here to bring your vision to reality! 🙂
            </Typography>
            <TextField
              error={!!errors.name && touched.name}
              id='name'
              label='Your Name'
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={errors.name && touched.name ? errors.name : ''}
              sx={{ width: 1 }}
            />
            <TextField
              error={errors.email && touched.email}
              id='email'
              label='Your Email'
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={errors.email && touched.email ? errors.email : ''}
              sx={{ width: 1 }}
            />
            <TextField
              error={errors.message && touched.message}
              id='message'
              placeholder='Tell me about your project idea'
              label='Your Message'
              multiline
              minRows={5}
              value={values.message}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={
                errors.message && touched.message ? errors.message : ''
              }
              sx={{ width: 1 }}
            />
            <Button type='submit' disabled={isSubmitting}>
              Submit
            </Button>
            <Typography
              variant='subtitle1'
              color='secondary'
              align='center'
              sx={{ width: 1, maxWidth: 300 }}
            >
              Please provide the necessary details so we can discuss your
              project requirements and explore the available options for
              collaboration.
            </Typography>
          </Stack>
        )}
      </Formik>
      <ConfirmationModal
        open={openModal}
        handler={toggleModal}
        state={modalState}
      />
    </>
  )
}

function ConfirmationModal ({ open, handler, state }) {
  return (
    <Stack
      component={Modal}
      justifyContent='center'
      alignItems='center'
      open={open}
      onClose={handler}
      aria-label='contact form confirmation modal'
      sx={{ marginInline: { xs: 2, md: 0 } }}
    >
      <Stack
        component={Paper}
        elevation={10}
        justifyContent='center'
        alignItems='center'
        sx={{ padding: 3, maxWidth: { xs: 1, md: 0.8, lg: 0.5 } }}
        spacing={3}
      >
        <Typography id='modal-modal-title' variant='h6' component='h2'>
          {state === 'success' ? 'successful ✨✨✨' : 'Something went wrong'}
        </Typography>
        <Typography id='modal-modal-description'>
          {state === 'success'
            ? "Thank you very much for writing, I'll get back in touch as soon as I can usually before the end of the day"
            : 'Im really sorry for this. Please try email me directly at cpu@dennisfullstack.dev'}
        </Typography>
        <Button variant='outlined' onClick={handler}>
          Close
        </Button>
      </Stack>
    </Stack>
  )
}
