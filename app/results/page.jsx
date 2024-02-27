'use client'

import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useRouter } from 'next/navigation'

export default function Results() {
    const router = useRouter()
    const { data } = router.query;
    const formData = JSON.parse(data);
    console.log(formData)
    return (
        <main className='text-white flex flex-col justify-between min-h-dvh relative'>
            <Navbar />
            {/* {formData.map((key, value) => {
                return <p key={key}>{value}</p>
            })} */}
            <Footer />
        </main>
    )
}
