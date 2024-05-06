'use client'
import React, { useState } from 'react';
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../../firebase/firebase';
import mergeJSONToCSV from '../utils/mergeJSONToCSV';

export default function Admin() {
    const [password, setPassword] = useState('');
    const [isLogged, setIsLogged] = useState(false);

    const handleDownload = async () => {

        const querySnapshot = await getDocs(collection(db, "users"));

        const documents = querySnapshot.docs.map(doc => (doc.data().data));
        console.log(documents);

        mergeJSONToCSV(documents);
    }

    return (
        <main className='text-white flex flex-col flex-1 min-h-dvh overflow-x-hidden'>
            <div className='flex flex-col items-center justify-center'>
                <input
                    type='password'
                    placeholder='Password'
                    className='mb-4 p-2 text-black rounded'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button
                    className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
                    onClick={() => {
                        if (password === process.env.NEXT_PUBLIC_SECRET_ADMIN_PASSWORD) {
                            console.log('logged in');
                            setIsLogged(true);
                        }

                    }}
                >
                    Login
                </button>
                {isLogged && (
                    <div className='flex flex-1 mt-8'>
                        <button
                            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
                            onClick={handleDownload}
                        >
                            Download CSV
                        </button>
                    </div>
                )}
            </div>
        </main>
    );
}
