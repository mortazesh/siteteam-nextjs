import { useEffect } from 'react'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import Head from 'next/head'
import { Form, Formik } from 'formik'
import * as Yup from "yup"

import styles from '../../../styles/Form.module.css'

const Text = dynamic(() => import('../../componentes/form/text-form/text'), {
    suspense: true
})
const Input = dynamic(() => import('../../componentes/form/input-form/input'), {
    suspense: true
})
const Button = dynamic(() => import('../../componentes/form/button-form/button'), {
    suspense: true
})


export default function Login() {

    useEffect(() => {
        document.body.classList.add('bodylogin')
    }, [])

    const initialValues = {
        mobileNumber: ''
    }

    const SignupSchema = Yup.object().shape({
        mobileNumber: Yup.number('لطفا شماره تلفن را درست وارد کنید').min('شماره تلفن از 11 رفم نباید کمتر باشد', 11).max('شماره نلفن از 11 رقم نباید بیشتر باشد', 11)
    })

    return (
        <>
            <Suspense fallback={<p>load...</p>}>
                <Head>
                    <title>
                        NetElites | ورود
                    </title>
                    <meta name="description" content="Free Web tutorials" />
                    <meta name="keywords" content="HTML, CSS, JavaScript" />
                    <meta name="author" content="morteza shahriari" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                </Head>
                <div className={styles.login}>
                    <Text>
                        ورود
                    </Text>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={SignupSchema}
                        onSubmit={values => {
                            // same shape as initial values
                            console.log(values);
                        }}
                    >
                        <Form className={styles.form}>
                            <Input typeInput="text" nameInput="mobileNumber" placeholderInput="شماره موبایل خود را وارد کنید" />
                            <Button>
                                ورود
                            </Button>
                            <div className={styles.line}></div>
                            <div className={styles.google}>
                                <Button>
                                    گوگل
                                </Button>
                            </div>
                        </Form>
                    </Formik>
                </div>
            </Suspense>
        </>
    )
}