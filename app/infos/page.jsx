'use client'
/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { bungee } from '../fonts';
import Image from 'next/image';
import FancyButton from '../components/FancyButton';
import { useRouter } from 'next/navigation';

export default function Results() {
    const router = useRouter()

    return (
        <main className='text-white flex flex-col justify-between min-h-dvh relative'>
            <Navbar />
            <div className="flex flex-1 flex-col items-center px-8 gap-8 mb-8 md:overflow-hidden">
                <h1 className={`${bungee.className} text-2xl mb-8 3xl:text-3xl`}>THE DEEP MODEL</h1>
                <div className='flex flex-col px-2 2xl:px-32 3xl:px-96 items-center md:flex-row md:justify-around md:flex-wrap gap-8'>
                    <div className='flex flex-col md:w-1/3 items-center gap-4'>
                        <h3 className='text-xl font-bold'>Levels of Agency</h3>
                        <p className=''>When it comes to setting goals and how we think about achieving them, we all have our unique approaches, which can range from very abstract to quite concrete. Think about how you set goals in your life. Do you often find yourself pondering big, abstract questions like "What makes a happy life?" or "What's my long-term career path?" These are abstract goals. They're broad, long-term, and often require many, many actions to be fulfilled. On the other hand, some of us focus more on concrete, day-to-day objectives. Questions like "What do I need to accomplish today?" or "How can I improve my skills at this task?" are examples of concrete goals. These goals are more immediate, tangible, and often involve direct actions. In reality, everyone's mind navigates somewhere on this spectrum, from abstract to concrete, in how we represent our goals and think about achieving them.</p>
                    </div>
                    <div className='-z-10 relative w-80 h-80 md:w-1/3 my-10'>
                        <Image className='object-contain' src='/assets/col.png' alt='column range scheme' fill />
                    </div>
                    <div className='flex flex-col md:w-1/3 items-center gap-4'>
                        <h3 className='text-xl font-bold'>Exploration-Exploitation</h3>
                        <p className=''>Now, let's consider how we approach achieving these goals. Do you love exploring new ideas, trying different things, and embracing the unknown? This is exploration – it's about seeking out new experiences, learning new skills, or finding new ways to solve problems. Conversely, do you prefer sticking with what you know, refining your existing skills, and exploiting familiar strategies? This is exploitation – it's about optimizing what you already have and making the most of your current knowledge and skills. In life, just like in games, we constantly balance between exploring new possibilities and exploiting known strategies.</p>
                    </div>
                    <div className='-z-10 relative w-80 h-60 md:w-1/3'>
                        <Image className='object-contain' src='/assets/row.png' alt='row range scheme' fill />
                    </div>
                </div>
                <span className='w-full border-b-2 h-[1px]' />
                <div className='flex flex-col items-center gap-4 px-2 2xl:px-32 3xl:px-96'>
                    <h3 className='text-xl font-bold'>The four DEEP dimensions</h3>
                    <p className=''>The DEEP model offers a nuanced view of gaming preferences, where players aren't boxed into a single category. Instead, each gamer has a unique profile across four dimensions, scoring higher or lower in each. This diversity reflects the multifaceted nature of gaming experiences. Let's dive into each dimension with this perspective in mind:</p>
                </div>
                <div className='flex flex-col px-2 2xl:px-32 3xl:px-96 relative lg:flex-row lg:justify-center lg:py-10 lg:gap-16 lg:my-10 flex-wrap items-center gap-4'>
                    <p className='lg:w-1/3 lg:px-4'><span className='text-[#ED5C8A]'>Expanding</span>: High scorers here are attracted to games with rich narratives and thematic depth. They find games like Mass Effect or The Witcher series captivating, where immersing in the story is key. Gamers with lower scores in Expanding may prefer games that focus less on narrative and more on immediate gameplay mechanics.</p>
                    <p className='lg:w-1/3 lg:px-4'><span className='text-[#B751BA]'>Experimenting</span>: Gamers who score high in Experimenting enjoy hands-on experimentation and learning through direct interaction. They thrive in games like Minecraft or Kerbal Space Program, where trial and error lead to tangible outcomes. A lower score in this dimension might suggest a preference for games with more defined rules or structured gameplay.</p>
                    <p className='lg:w-1/3 lg:px-4'><span className='text-[#7A45F0]'>Discovering</span>: This dimension measures a player's interest in exploring abstract concepts within a game. High scorers are drawn to games that offer rich, complex worlds to unravel, like the intricate lore in The Elder Scrolls series or the boundless universe of No Man's Sky. Lower scores might indicate a preference for more straightforward, action-focused gameplay.</p>
                    <p className='lg:w-1/3 lg:px-4'><span className='text-[#FF922A]'>Performing</span>: Those who score high in Performing excel in and enjoy games where skill, precision, and efficiency are vital. Titles like Dark Souls and competitive esports games like League of Legends are typical favorites. A lower score in this dimension might indicate a preference for games that are less about mastery and more about exploration or narrative.</p>
                    <div className='-z-10 lg:absolute relative h-80 w-full lg:w-full lg:h-full'>
                        <Image className='object-contain lg:scale-[1.15]' src='/assets/cross.png' alt='cross scheme' fill />
                    </div>
                </div>
                <span className='w-full border-b-2 h-[1px]' />
                <div className='flex flex-col px-2 2xl:px-32 3xl:px-96 items-center gap-4'>
                    <h3 className='text-xl font-bold'>Psychometric scales</h3>
                    <p className=''>Before diving into how we used factor analysis in the DEEP model, let's address a fundamental question: How do we compute a score for each gamer in each dimension? Psychologists have developed a tool called psychometric scales. These scales are designed to measure habits, preferences, and tendencies in a consistent and reliable way. The rationale behind this is simple yet powerful: by quantifying habits or preferences, we can better understand patterns and correlations in human behavior. For instance, to measure how much someone enjoys Discovering in games, we might ask them to rate statements like "I like discovering new places" on a scale from strongly disagree to strongly agree. These ratings are then used to calculate their score in the Discovering dimension.</p>
                    <p className=''>To determine these dimensions in the DEEP model, we employed the factor analysis method. Think of this process like solving a complex, multi-dimensional puzzle. Imagine each gamer’s individual preferences and behaviors as puzzle pieces. At first, these pieces are jumbled together – it's unclear how they fit into a bigger picture. Factor analysis is like sorting these pieces into groups that naturally belong together. For instance, all preferences related to exploring game worlds might cluster together, forming the 'Discovering' dimension of the puzzle.</p>
                    <p className=''>An important step in this process was to check that these dimensions were consistent over time. Why is this important? Because if people's responses to these preferences change significantly over time, it could mean our 'puzzle' isn’t put together correctly. We want to ensure that when someone scores high in, say, Experimenting, it's a true reflection of their gaming preferences, not just a temporary mood or a random choice. To test this, we asked gamers to complete the questionnaire at different times and checked for consistency in their responses. Consistent scores over time indicate that our dimensions are reliable and accurately reflect stable gaming preferences.</p>
                </div>
                <span className='w-full border-b-2 h-[1px]' />
                <div className='flex flex-col px-2 2xl:px-32 3xl:px-96 items-center gap-4'>
                    <h3 className='text-xl font-bold'>Levels of Agency</h3>
                    <p className=''>To truly understand the value of the DEEP model, we needed to answer a critical question: Can the model predict the types of games a player would enjoy?</p>
                    <p className=''>First, we gathered data from 1,000 gamers who completed the DEEP questionnaire, which rated their preferences across the four dimensions. Then, we asked them to list their 10 favorite video games. The challenge was to connect these two sets of data - the gamers' DEEP scores and their preferred games.</p>
                    <p className=''>To bridge this gap, we turned to GPT, a large language model. GPT has been trained on an enormous amount of text, including vast content related to video games from websites, forums, and reviews. It's as if GPT has 'played' these games through the experiences and descriptions of countless gamers. We used GPT to annotate each video game on the four DEEP dimensions. The advantage of using GPT is its ability to provide consistent and comparable ratings across a wide range of games. This consistency is crucial because it allows us to compare apples to apples, so to speak, when correlating gamers' preferences with game characteristics.</p>
                    <p className=''>After gathering the DEEP scores of gamers and their favorite games, we conducted a correlation analysis to see how these two sets of scores relate to each other. Imagine this analysis as drawing a line on a graph that best fits a scatter of points, where each point represents a gamer. One axis of the graph shows the gamer's DEEP scores, and the other shows the DEEP scores of their favorite games. If gamers who score high in a particular DEEP dimension (like Expanding) tend to favor games that also score high in that dimension, the points will cluster along the line in a pattern. This pattern – the correlation – is what we were looking for. A strong clustering of points along the line indicated a significant relationship, showing that our DEEP model can effectively predict which games players will enjoy based on their individual gaming styles.</p>
                </div>
                <div className='-z-10 relative w-full h-80 my-10 '>
                    <Image className='object-contain' src='/assets/graph.png' alt='graph' fill />
                </div>
            </div>
            <div className='px-8 flex justify-center'>
                <FancyButton onClick={() => router.push("/consent")}>TAKE THE TEST</FancyButton>
            </div>
            <Footer />
        </main>
    )
}
