/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Footer from '../components/Footer';
import { bungee } from '../fonts';

export default function page() {
    return (
        <main className='text-white flex flex-col justify-between min-h-dvh relative'>
            <div className='h-full px-8 md:px-36 3xl:px-48 flex flex-col 2xl:items-center gap-4 2xl:gap-16 3xl:text-2xl'>
                <h1 className={`${bungee.className} my-4 text-center text-2xl 3xl:text-5xl`}>Legal notices</h1>
                <div className='2xl:w-2/3 mb-4'>
                    <h2 className='font-bold mb-2'>Owner of the Website:</h2>
                    <p><strong>Valérian Chambon</strong></p>
                    <p><strong>Institut Jean Nicod</strong></p>
                    <p><strong>Legal status: </strong>SAS</p>
                    <p><strong>Address: </strong>29 Rue d'Ulm, Paris, France</p>
                    <p><strong>Phone: </strong>01 44 32 26 47</p>
                    <p><strong>Contact: </strong>valerian.chambon@ens.fr</p>
                </div>
                <div className='2xl:w-2/3 mb-4'>
                    <h2 className='font-bold mb-2'>Hosting Provider:</h2>
                    <p><strong>Vercel Inc</strong></p>
                    <p><strong>Address: </strong>340 S Lemon Ave #4133 Walnut, CA 91789</p>
                    <p><strong>Phone: </strong>(559) 288-7060</p>
                </div>
                <h2 className='font-bold mb-2 border-b-2 p-2 mt-4'>PRIVACY POLICY</h2>
                <div className='2xl:w-2/3'>
                    <h2 className='font-bold mb-2'>Data Collection and Use:</h2>
                    <p>We collect responses to participants' questions on the quizzes and any other data only if participants consent. Participants can still take the test without consenting to data collection.
                    </p>
                </div>
                <div className='2xl:w-2/3'>
                    <h2 className='font-bold mb-2'>Data Storage:</h2>
                    <p>Personal data will be stored anonymously on researchers' professional computers, which are encrypted and protected.
                    </p>
                </div>
                <div className='2xl:w-2/3'>
                    <h2 className='font-bold mb-2'>Data Sharing:</h2>
                    <p>The data will be used solely for research purposes. Anonymized data may be shared with third parties through open access portals for scientific purposes, making it impossible to trace back to specific individuals.
                    </p>
                </div>
                <div className='2xl:w-2/3'>
                    <h2 className='font-bold mb-2'>Data Retention:</h2>
                    <p>Data will be retained for as long as necessary for research purposes and will be deleted once it is no longer needed.
                    </p>
                </div>
                <div className='2xl:w-2/3'>
                    <h2 className='font-bold mb-2'>User Rights:</h2>
                    <p>Participants have the right to access, correct, and delete their data. Requests can be made by emailing one of the researchers. Contact details are available on the About Us page.

                    </p>
                </div>
                <div className='2xl:w-2/3'>
                    <h2 className='font-bold mb-2'>Contact Information:</h2>
                    <p>For any questions or concerns about this privacy policy, please refer to the About Us page on the website.
                    </p>
                </div>
                <h2 className='font-bold mb-2 border-b-2 p-2 mt-4'>TERMS AND CONDITIONS</h2>
                <div className='2xl:w-2/3'>
                    <h2 className='font-bold mb-2'>User Conduct:</h2>
                    <p>Spamming of the GPT-generated descriptions of personality profiles is prohibited.
                    </p>
                </div>
                <div className='2xl:w-2/3'>
                    <h2 className='font-bold mb-2'>Intellectual Property:</h2>
                    <p>The content of the site, including questions and articles, is owned by Edgar Dubourg and Valérian Chambon.
                        <br />
                        Downloadable cards can be shared and reproduced without conditions. All text on the site is free to use. Please contact the researchers for more information.
                    </p>
                </div>
                <div className='2xl:w-2/3'>
                    <h2 className='font-bold mb-2'>Disclaimers:</h2>
                    <p>The accuracy of the information provided on the website and the results of the quizzes is not guaranteed. The content is intended for informational purposes only.
                    </p>
                </div>
                <div className='2xl:w-2/3'>
                    <h2 className='font-bold mb-2'>Limitation of Liability:</h2>
                    <p>There are no specific limitations of liability set forth. Users should use the website at their own risk.
                    </p>
                </div>
                <div className='2xl:w-2/3'>
                    <h2 className='font-bold mb-2'>Modification of Terms:</h2>
                    <p>These terms and conditions may be modified at any time. Users will be informed of changes via email. Ensure your email is updated with the researchers.
                    </p>
                </div>
            </div>
            <Footer />
        </main>
    )
}
