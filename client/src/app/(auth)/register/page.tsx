"use client"

import AuthForm from '@/components/AuthForm'
import Button from '@/components/Button'
import Input from '@/components/Input'
import Link from 'next/link'
import { useState } from 'react'
import axios from 'axios'
import { useFormik } from 'formik';
import * as Yup from 'yup';


const Register = () => {

    let [isLoading, setIsLoading] = useState(false)

    const Schema = Yup.object().shape({
        username: Yup.string().trim().required("username is required"),
        email: Yup.string().trim().email("email must be valid").required("email is required"),
        password: Yup.string().trim().required("password is required"),
    });

    const formik = useFormik({
        initialValues: {
            username: '',
            email: '',
            password: ''
        },
        validationSchema: Schema,
        onSubmit: values => {
            setIsLoading(true)
            axios.post('http://localhost:4000/api/auth', values)
                .then((response) => {
                    console.log(response);
                })
                .catch((error) => {
                    console.log(error.response);
                })
                .finally(() => {
                    setIsLoading(false)
                });
        },
    })


    return (
        <AuthForm
            onSubmit={formik.handleSubmit}
            title='Register'>
            <Input
                name="username"
                type="text"
                placeholder='Username'
                onChange={formik.handleChange}
                value={formik.values.username}
                validate={formik.errors.username && formik.touched.username ? `${formik.errors.username}` : null}
            />
            <Input
                name="email"
                type="text"
                placeholder='Email'
                onChange={formik.handleChange}
                value={formik.values.email}
                validate={formik.errors.email && formik.touched.email ? `${formik.errors.email}` : null}
            />
            <Input
                name="password"
                type="password"
                placeholder='Password'
                onChange={formik.handleChange}
                value={formik.values.password}
                validate={formik.errors.password && formik.touched.password ? `${formik.errors.password}` : null}
            />
            <Button
                type='submit'
                cn="py-2 px-3 bg-green-600"
                title={`${isLoading ? "Loading..." : "Submit"}`}
            />
            <p className='text-sm' >Already have an Account <Link className='text-blue-500' href='/login'>Login</Link></p>
        </AuthForm>
    )
}

export default Register