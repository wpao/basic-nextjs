import Layout from '../../components/Layout'
import { useRouter } from 'next/router'
import style from './Users.module.css'

interface UsersProps {
    dataUsers: Array<any>
}

export default function Users(props: UsersProps) {
    const { dataUsers } = props
    const router = useRouter()

    return (
        <Layout pageTitle='User Page'>
            <h1>hello Users</h1>
            {dataUsers.map(user => (
                <div className={style.card} key={user.id} onClick={() => router.push(`/users/${user.id}`)}>
                    <li>{user.name}</li>
                </div>
            ))}
        </Layout>
    )
}

export async function getStaticProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const dataUsers = await res.json()
    return { props: { dataUsers, } }
}
