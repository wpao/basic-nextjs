import Layout from '../components/Layout'
import Image from 'next/image'

export default function Home() {
  return (
    <Layout pageTitle='Home Page'>
      <Image src='/wpao.jpg' width={200} height={200} alt='profile' />
      <h1>hello Tuan</h1>
    </Layout>
  )
}
