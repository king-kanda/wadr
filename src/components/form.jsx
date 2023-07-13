import { Formik, Form, Field, ErrorMessage } from 'formik';
import emailjs from '@emailjs/browser';

emailjs.init('z0UNJ9s6Ku0hYXJQw');

const MyForm = () => {
  const handleSubmit = (values, { setSubmitting }) => {
    console.log('submit:', values);
    emailjs.send('testMail', 'template_gg2anzk', values)
    .then((response) => {
      console.log('Email sent!', response.status, response.text);
      // Handle success response
    })
    .catch((error) => {
      console.error('Email error:', error);
      // Handle error response
    });

  setSubmitting(false);
  };

  return (
    <Formik initialValues={{ name: '', email: '', Cname:'', message: '' }} onSubmit={handleSubmit}>
      <Form className='bg-gray p-0 md:p-14 rounded-md'>
        <div className='mb-4'>
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-black" >Email:</label>

          <Field type="email" id="email" name="email" className="border border-green-1 text-black text-sm rounded-lg focus:ring-green focus:border-green block w-full p-2.5" />
        </div>
        <div className='mb-4'>
          <label htmlFor="name" className="block mb-2 text-sm font-medium text-black">Name:</label>

          <Field type="text" id="name" name="name" className="border border-green-1 text-black text-sm rounded-lg focus:ring-green focus:border-green block w-full p-2.5" />
        </div>
        <div className='mb-4'>
          <label htmlFor="name" className="block mb-2 text-sm font-medium text-black" >Company Name:</label>

          <Field type="text" id="Cname" name="Cname" className="border border-green-1 text-black text-sm rounded-lg focus:ring-green focus:border-green block w-full p-2.5" />
        </div>
        <div className='mb-4'>
          <label htmlFor="message" className="block mb-2 text-sm font-medium text-black">Message:</label>

          <Field as="textarea" id="message" name="message" className="border border-green-1 text-black text-sm rounded-lg focus:ring-green focus:border-green block w-full p-2.5" />
        </div>
        <ErrorMessage name="message" component="div" />

        <button type="submit" className='bg-yellow hover:bg-purple px-8 py-3 text-white '>Submit</button>
      </Form>
    </Formik>
  );
};


export default MyForm