import dynamic from 'next/dynamic'
import { Suspense } from 'react'

const Text = dynamic(() => import('./text-member/text'), {
    suspense: true
})
const Image = dynamic(() => import('./image-member/image'), {
    suspense: true
})
const Resume = dynamic(() => import('./resume-member/resume'), {
    suspense: true
})


import styles from '../../../styles/Member.module.css'
import Skill from './skill-member/skill'

export default function MemberTemplet() {
    return (
        <Suspense fallback={<p>load...</p>}>
            <div className={styles.member}>
                <Image />
                <Text />
                <Resume />
                <Skill />
            </div>
        </Suspense>
    )
}