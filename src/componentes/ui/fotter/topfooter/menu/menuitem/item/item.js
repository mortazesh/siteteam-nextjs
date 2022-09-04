import Link from 'next/link'

export default function Item({ address, children }) {
    return (
        <Link href={address}>
            <a>
                {children}
            </a>
        </Link>
    )
}