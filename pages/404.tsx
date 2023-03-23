import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function Custom404() {
    const router = useRouter()
    useEffect(() => {
        setTimeout(() => {
            // console.log('dipanggil setelah 2 detik')
            router.push('/')
        }, 2000)
    }, [])
    return (
        <div>
            <h1>Ooops...</h1>
            <h1>Halaman yang anda cari tidak ditemukan</h1>
        </div>
    )
}
