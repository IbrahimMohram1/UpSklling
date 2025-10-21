import React, { useState } from 'react'
import Title from '../Title/Title'
import { CiMail } from 'react-icons/ci'
import { IoMail } from 'react-icons/io5'
import { FaPhoneAlt } from 'react-icons/fa'
import { useFormik } from 'formik'
import * as Yup from 'yup';
import axios from 'axios'

export default function Contact() {

 const [loading, setLoading] = useState(false)
 const [success, setSuccess] = useState('');

  const [apiError, setApiError] = useState('')


  let formik = useFormik({
    initialValues:{
      name:'', 
      email:'',
      phone:''
    },
    validationSchema:Yup.object({
          name: Yup.string()
        .min(3, 'Name must be at least 3 characters')
        .required('Name is required'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
      phone: Yup.string()
        .matches(/^[0-9]+$/, 'Phone must contain only numbers')
        .min(10, 'Phone must be at least 10 digits')
        .required('Phone is required'),
    }),
    onSubmit:sendContact
  })
   async function sendContact(values) {
    try {
      setLoading(true)
      let { data } = await axios.post('https://upskilling-egypt.com:3001/contact', values)
      console.log('Response:', data)
      setApiError('')
    setSuccess(data.message);
      formik.resetForm()
    } catch (error) {
      console.log(error)
      setApiError(error.response?.data?.message || 'Something went wrong!')
    } finally {
      setLoading(false)
    }
  }
  return (
    <div className='w-full bg-white  p-5 '>

                <Title title="Contact Us"/>
            
<div className='max-w-6xl m-auto flex flex-wrap justify-center items-center'>


            <div className='md:w-1/2 w-full flex items-center justify-center  ' >
            <div className='w-3/4 '>
            <form className='flex  flex-col gap-y-5' onSubmit={formik.handleSubmit}>
                {apiError && <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
    {apiError}
  
</div>}
  {success && <div className="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50" >
  {success}
</div>}
            <input type="text" value={formik.values.name}  onChange={formik.handleChange}  onBlur={formik.handleBlur} id="name" name="name" className="bg-blue-400 border placeholder-black border-gray-300 text-gray-900 py-4 text-sm rounded-4xl outline-none " placeholder="Name" required />
                {formik.errors.name && formik.touched.name && <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
    {formik.errors.name}
</div>}
            <input type="email" id="email" name='email' value={formik.values.email}  onChange={formik.handleChange}  onBlur={formik.handleBlur} className="bg-blue-400 border placeholder-black border-gray-300 text-black py-4 text-sm rounded-4xl outline-none  " placeholder="Email" required />
               {formik.errors.email && formik.touched.email && <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
    {formik.errors.email}
</div>}
            <input type="tel" id="phone" name='phone'  value={formik.values.phone}  onChange={formik.handleChange}  onBlur={formik.handleBlur}className="bg-blue-400 border placeholder-black border-gray-300 text-gray-900 py-4 text-sm rounded-4xl outline-none  " placeholder="Phone" required />
    {formik.errors.phone && formik.touched.phone && <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
    {formik.errors.phone}
</div>}
            <div className='m-auto '>
   <button
  type="submit"
  disabled={loading}
  className={`px-12 my-4 py-2 border-2 border-blue-400 text-black bg-white text-xl rounded-2xl transition-all duration-200 ${
    loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-400 hover:text-white'
  }`}
>
  {loading ? 'Loading...' : 'Send'}
</button>


                </div>
</form>

    
</div>
            
            </div>
            <div className='md:w-1/2 w-full flex flex-col gap-y-5 md:items-start items-center justify-center mb-18 ' >
                            <div className='flex gap-x-5  '>
                        <IoMail className='text-[#5180F6] text-2xl' />
    <p>ibrahimmohram7@gmail.com</p>
                            </div>
                              <div className='flex gap-x-5  '>
                        <FaPhoneAlt className='text-[#5180F6] text-2xl' />
    <p>01020181248</p>
                            </div>

            </div>



        </div>
      
    </div>
  )
}
