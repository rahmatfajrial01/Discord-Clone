"use client"

import AuthForm from '@/components/AuthForm'
import Button from '@/components/Button'
import Input from '@/components/Input'
import Link from "next/link"
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios'
import { useAppContext } from '@/context/authContext'
import { getCookie, setCookie } from 'typescript-cookie'
import { useRouter } from 'next/navigation'

const Login = () => {
    const router = useRouter()

    const Schema = Yup.object().shape({
        email: Yup.string().trim().email("email must be valid").required("email is required"),
        password: Yup.string().trim().required("password is required"),
    });

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: Schema,
        onSubmit: values => {
            axios.post('http://localhost:4000/api/auth/login', values)
                .then((response) => {
                    setCookie('user', response.data.token, { expires: 7 })
                    router.push('/')
                })
                .catch((error) => {
                    console.log(error.response);
                })
        },
    })

    return (
        <AuthForm
            onSubmit={formik.handleSubmit}
            title='Login'>
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
                title="Submit"
            />
            <p className='text-sm' >Don't have an Account <Link className='text-blue-500' href='/register'>Register</Link></p>
        </AuthForm>

    )
}

export default Login