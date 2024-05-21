export const dynamic = 'force-dynamic' // defaults to auto

import { NextResponse } from "next/server";
import OpenAI from "openai";

export async function POST(request) {
    const openai = new OpenAI({
        apiKey: process.env.OPENAI_API_KEY
    })

    // Grabbing user's input
    const params = await request.json()
    const discScore = params.scores[0]
    const expaScore = params.scores[1]
    const expeScore = params.scores[2]
    const perfScore = params.scores[3]

    // Passing it to chat GPT API
    const completion = await openai.chat.completions.create({
        messages: [
            {
                role: "system",
                content: "You are a helpful assistant."
            },
            {
                role: "user",
                content: `Here are the four dimensions of video game traits: \n\nDiscovering: High-level exploration, innovative for abstract goals, world exploration, uncovering secrets, non-linear play, side quests, insight, discovering new goals. \n\nExperimenting: Low-level exploration, novel actions for concrete goals, diverse strategies, multiple weapons, abilities, tools, challenge innovation, unique solutions. \n\nExpanding: High-level exploitation, familiar actions for abstract goals, deep lore engagement, storylines, characters, exploring narrative, lore-rich interaction, high-level strategy. \n\nPerforming: Low-level exploitation, mastered strategies for concrete goals, mechanics mastery, precise strategy execution, effective abilities, timing, skill-based gameplay, advanced technique utilization. \n\nA participant has scored as such: \n\nDiscovering: ${discScore}/7 \n\nExpanding: ${expaScore}/7 \n\nExperimenting: ${expeScore}/7\n\nPerforming: ${perfScore}/7\n\nParticipants scoring low out of 7 dislike this dimension, while those scoring high enjoy it. Create a one-paragraph, 150-word personalized summary of the gamer's personality, addressing the gamer directly. Avoid segregation by dimensions or explicit mention of scores. Use a capital letter for the four dimensions. Contrast their profile with gamers who have different scores. Extrapolate specific insights into their preferences for very specific game mechanics, design, format, and genres, using game-specific terminology. Include things they should like and not like. Include distinctive details to enhance personalization. Use a simple, straightforward, science-y style, without pompous words. Conclude with 'Your gaming persona is one of...' summarizing everything in under 20 words.`
            },
        ],
        model: "gpt-4o",
    });

    return NextResponse.json(completion)
}