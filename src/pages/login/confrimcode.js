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

export default function ConfrimCode() {

    useEffect(() => {
        document.body.classList.add('bodylogin')
    }, [])

    const initialValues = {
        confrimCode: ''
    }

    const SignupSchema = Yup.object().shape({
        confrimCode: Yup.number('لطفا کدتایید را وراد کنید').min('کدتایید از 11 رفم نباید کمتر باشد', 6).max('کدتایید از 6 رقم نباید بیشتر باشد', 6)
    })

    return (
        <>
            <Suspense fallback={<p>load...</p>}>
                <Head>
                    <title>
                        NetElites | کدتایید
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
                            <Input typeInput="text" nameInput="confrimCode" placeholderInput="کدتایید را وارد کنید" />
                            <Button>
                                تایید کد
                            </Button>
                            <div className={styles.line}></div>
                            <div className={styles.time}>
                                <div>
                                    <p>
                                        زمان
                                    </p>
                                </div>
                                <div>
                                    <p>
                                        00:30
                                    </p>
                                </div>
                            </div>
                        </Form>
                    </Formik>
                </div>
            </Suspense>
        </>
    )
}