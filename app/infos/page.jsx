'use client'
/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Footer from '../components/Footer'
import { bungee } from '../fonts';
import Image from 'next/image';
import FancyButton from '../components/FancyButton';
import { useRouter } from 'next/navigation';

export default function Results() {
    const router = useRouter()

    return (
        <main className='text-white flex flex-col justify-between min-h-dvh relative md:px-8 lg:px-12'>
            <div className="flex flex-1 flex-col items-center px-8 gap-8 mb-8 md:overflow-hidden">
                <h1 className={`${bungee.className} text-3xl mb-8 3xl:text-4xl`}>THE DEEP MODEL</h1>
                <div className='flex flex-col px-2 2xl:px-32 3xl:px-96 items-center md:flex-row md:justify-around md:flex-wrap gap-8'>
                    <div className='flex flex-col md:w-1/3 items-center gap-4'>
                        <h3 className='text-3xl mb-4 font-bold'>Levels of Agency</h3>
                        <p className='3xl:text-xl '>When it comes to setting goals and thinking about how to achieve them, we all have our unique approaches, which can be very abstract or very concrete. Think about how you set goals in your life. Do you often think about big abstract questions like "<em>What makes a happy life?</em>" or "<em>What's my long-term career plan?</em>" These are <strong>abstract goals</strong>. They're broad, long-term, and often require many actions to achieve. On the other hand, some of us focus more on concrete, day-to-day objectives. Questions such as "<em>What do I need to achieve today?</em>" or "<em>How can I improve my skills in this task?</em>" are examples of <strong>concrete goals</strong>. These goals are more immediate, tangible, and often involve direct actions. In reality, everyone's mind wanders somewhere along this spectrum, from the abstract to the concrete, in the way we represent our goals and think about achieving them.</p>
                    </div>
                    <div className='-z-10 relative w-80 h-80 md:w-1/3 my-10'>
                        <Image className='object-contain' src='/assets/col.png' alt='column range scheme' fill />
                    </div>
                    <div className='flex flex-col md:w-1/3 items-center gap-4'>
                        <h3 className='text-3xl mb-4 font-bold'>Exploration-Exploitation</h3>
                        <p className='3xl:text-xl '>Now, let's look at how we approach achieving these goals, whether they are concrete or abstract. Do you like to explore new ideas, try different things and embrace the unknown? That’s <strong>exploration</strong> – seeking out new experiences, learning new skills or finding new ways of solving problems. Conversely, do you prefer sticking to what you know, hone your existing skills and exploit familiar strategies? This is <strong>exploitation</strong> – optimizing what you already have and making the most of your existing knowledge and skills. In life, as in games, we constantly strike a balance between exploring new possibilities and exploiting known strategies.</p>
                    </div>
                    <div className='-z-10 relative w-80 h-60 md:w-1/3'>
                        <Image className='object-contain' src='/assets/row.png' alt='row range scheme' fill />
                    </div>
                </div>
                <span className='w-full my-8 border-b-2 h-[1px]' />
                <div className='flex flex-col items-center gap-4 px-2 2xl:px-32 3xl:px-96'>
                    <h3 className='text-3xl mb-4 font-bold'>The four DEEP dimensions</h3>
                    <p className='3xl:text-xl '>The DEEP model offers a nuanced view of gaming preferences, where players aren't pigeonholed into a single category. Instead, each gamer has a unique profile on <strong>four dimensions</strong>, defined according to the two spectrums we discuss above: the concrete-abstract spectrum, and the exploration-exploitation spectrum. Each individual can have higher or lower scores on each of these 4 dimensions. This diversity reflects the multifaceted nature of gaming experiences. With this in mind, let's dive into each dimension:</p>
                </div>
                <div className='flex flex-col px-2 2xl:px-32 3xl:px-96 relative lg:flex-row lg:justify-center lg:py-10 lg:gap-16 lg:my-10 flex-wrap items-center gap-4'>
                    <p className='3xl:text-xl lg:w-1/3 lg:px-4'><span className='text-[#ED5C8A]'>Expanding</span>: Gamers who score high on this dimension are attracted to games with rich narratives and thematic depth. They find games like <em>Mass Effect</em> or <em>The Witcher</em> series captivating, where immersion in the story is key. Gamers who score lower on the Expanding dimension prefer games that place less emphasis on narrative and more on immediate gameplay mechanics.</p>
                    <p className='3xl:text-xl lg:w-1/3 lg:px-4'><span className='text-[#B751BA]'>Experimenting</span>: Gamers who score high in Experimenting enjoy hands-on experimentation and learning through direct interaction. They thrive in games like <em>Minecraft</em> or <em>Kerbal Space Program</em>, where trial and error lead to tangible outcomes. A lower score in this dimension may suggest a preference for games with more defined rules or more structured gameplay.</p>
                    <p className='3xl:text-xl lg:w-1/3 lg:px-4'><span className='text-[#7A45F0]'>Discovering</span>: This dimension measures a player's interest in exploring abstract concepts in a game. Gamers who score high on this dimension are drawn to games that offer rich and complex worlds to unravel, such as the intricate lore of <em>The Elder Scrolls</em> series or the boundless universe of <em>No Man's Sky</em>. Lower scores may indicate a preference for more straightforward, action-oriented gameplay.</p>
                    <p className='3xl:text-xl lg:w-1/3 lg:px-4'><span className='text-[#FF922A]'>Performing</span>: Gamers who score high in Performing enjoy and excel at games where skill, precision, and efficiency are essential. Titles like <em>Dark Souls</em> and competitive esports games like <em>League of Legends</em> are typical favorites. A lower score on this dimension may indicate a preference for games that focus less on mastery and more on exploration or storytelling.</p>
                    <div className='-z-10 lg:absolute relative h-80 w-full lg:w-full lg:h-full'>
                        <Image className='object-contain lg:scale-[1.15]' src='/assets/cross.png' alt='cross scheme' fill />
                    </div>
                </div>
                <span className='w-full my-8 border-b-2 h-[1px]' />
                <div className='flex flex-col px-2 2xl:px-32 3xl:px-96 items-center gap-4'>
                    <h3 className='text-3xl mb-4 font-bold'>Psychometric scales</h3>
                    <p className='3xl:text-xl w-full '>Before looking at the analyses that can be carried out using the DEEP model, let&#39;s ask a fundamental question:</p>
                    <p className='3xl:text-xl '>To determine these dimensions in the DEEP model, we used the <strong>factor analysis method</strong>. This process is akin to solving a complex, multi-dimensional puzzle. Imagine the individual preferences and behaviors of each player as puzzle pieces. At first, these pieces are jumbled together – it's not clear how they fit into the bigger picture. Factor analysis involves sorting these pieces into groups that naturally fit together. For example, all the preferences linked to the exploration of game worlds may cluster together, forming the 'Discovering' dimension of the puzzle.</p>
                    <p className='3xl:text-xl '>An important step in this process was to check that these dimensions were <strong>consistent over time</strong>. Why is this important? Because if people's responses to these preferences change significantly over time, it could mean our 'puzzle' is not being put together correctly. We want to make sure that when someone gets a high score in, say, ‘Experimenting’, it really does reflect their gaming preferences, not just a passing mood or random choice. To test this, we asked gamers to fill in the questionnaire at different points in time and we checked the consistency of their responses. The consistency of score over time indicates that our dimensions are reliable and accurately reflect the stability of gaming preferences.</p>
                </div>
                <span className='w-full my-8 border-b-2 h-[1px]' />
                <h3 className='text-3xl mb-4 font-bold'>The predictive power of the DEEP model</h3>
                <div className='flex flex-col lg:flex-row lg:items-center px-2 2xl:px-32 3xl:px-96'>
                    <div className='items-center lg:w-2/3 gap-4 flex-col'>
                        <p className='3xl:text-xl '>To truly understand the value of the DEEP model, we needed to answer a key question: </p>
                        <br />
                        {/* <p className='3xl:text-xl text-pretty border p-2 3xl:p-4 rounded-md border-white/50 bg-white/10'><em>Can the model predict the types of games a player would enjoy ?</em></p> */}
                        <p className='3xl:text-xl text-pretty text-center'><em>Can the model predict the types of games a player would enjoy ?</em></p>
                        <br />
                        <p className='3xl:text-xl '>First, we gathered data from <strong>1,000 gamers</strong> who completed the DEEP questionnaire, which assessed their preferences along the four dimensions. We then asked them to list their <strong>10 favorite video games</strong>. The challenge was to connect these two sets of data : the gamers' DEEP scores and their favorite games.</p>
                        <br />
                        <p className='3xl:text-xl '>To bridge this gap, we turned to <strong>GPT</strong>, a large language model. GPT was trained on a huge amount of text, including vast amounts of gaming-related content from websites, forums and reviews. It's as if GPT has 'played' these games through the experiences and descriptions of countless gamers. We used GPT to annotate each video game on the four DEEP dimensions. The advantage of using GPT is its ability to provide consistent and comparable ratings across a wide range of games. This consistency is crucial as it allows us to compare apples to apples, so to speak, when correlating gamers' preferences with game characteristics.</p>
                        <br />
                        <p className='3xl:text-xl '>After collecting the DEEP scores of gamers and their favorite games, we performed a correlation analysis to see how these two sets of scores relate to each other. Think of this analysis as drawing a line on a graph that best fits a scatter of points, where each point represents a gamer. One axis of the graph represents the gamer's DEEP scores and the other the DEEP scores of their favorite games. If gamers who score high on a particular DEEP dimension (such as Expanding) tend to favor games that also score high on that dimension, the points will cluster along the line in a pattern. This pattern – the correlation – is what we were looking for. A strong clustering of points along the line indicates a significant relationship, which shows that <strong>our DEEP model can predict with some effectiveness which games players will enjoy based on their individual gaming styles</strong>.</p>
                    </div>
                    <div className='-z-10 relative lg:w-1/2 w-full h-80 my-10 '>
                        <Image className='object-contain' src='/assets/graph.png' alt='graph' fill />
                    </div>
                </div >
            </div >
            <div className='px-8 mt-8 flex justify-center'>
                <FancyButton onClick={() => router.push("/consent")}>TAKE THE TEST</FancyButton>
            </div>
            <Footer />
        </main >
    )
}
