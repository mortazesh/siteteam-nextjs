import { ErrorMessage, Field } from 'formik'

import styles from '../../../../styles/Form.module.css'

export default function Input({ typeInput,nameInput,placeholderInput }) {
    return (
        <>
            <Field type={typeInput} name={nameInput} className={styles.input} placeholder={placeholderInput} />
            <ErrorMessage name={typeInput} />
        </>
    )
}