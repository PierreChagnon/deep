import React from 'react'
import Footer from '../components/Footer'
import { bungee } from '../fonts'

export default function page() {
    return (
        <main className='text-white flex flex-col justify-between min-h-dvh relative px-2'>
            <div className='flex flex-col items-center justify-center gap-8 px-2 md:px-28 2xl:px-32 3xl:px-96'>
                <h1 className={`${bungee.className} text-3xl mb-8 3xl:text-4xl`}>About Us</h1>
                <p className='2xl:text-lg'>Deep is a project that aims to help you understand your personality and habits through a series of questions based on gaming preferences.</p>
                <p className='2xl:text-lg'>The Deep model, elaborated by researchers at the École normale supérieure in PSL University, discerns four key dimensions of player agency in video games: Discovering, Experimenting, Expanding, and Performing.</p>
                <div className='flex flex-col md:flex-row justify-between items-center gap-8 mt-8'>
                    <span className='h-40 w-40 min-w-40 rounded-full bg-white/10'/>
                    <p className=''>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus qui officiis ex minima velit suscipit dicta beatae aspernatur veritatis, at neque atque laudantium impedit distinctio dolorem alias accusamus cumque vero. Dolore veritatis atque laudantium, minima repellendus quaerat eum porro, nesciunt nemo dolorem error maxime sequi voluptate inventore sit recusandae architecto.</p>
                </div>
                <div className='flex flex-col md:flex-row justify-between items-center gap-8'>
                    <span className='h-40 w-40 min-w-40 rounded-full bg-white/10'/>
                    <p className=''>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus qui officiis ex minima velit suscipit dicta beatae aspernatur veritatis, at neque atque laudantium impedit distinctio dolorem alias accusamus cumque vero. Dolore veritatis atque laudantium, minima repellendus quaerat eum porro, nesciunt nemo dolorem error maxime sequi voluptate inventore sit recusandae architecto.</p>
                </div>
            </div>
            <Footer />
        </main>
    )
}
