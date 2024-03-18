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
                content: `Here are the four dimensions of video game traits: \n\nDiscovering: High-level exploration, innovative for abstract goals, world exploration, uncovering secrets, non-linear play, side quests, insight, discovering new goals. \n\nExperimenting: Low-level exploration, novel actions for concrete goals, diverse strategies, multiple weapons, abilities, tools, challenge innovation, unique solutions. \n\nExpanding: High-level exploitation, familiar actions for abstract goals, deep lore engagement, storylines, characters, exploring narrative, lore-rich interaction, high-level strategy. \n\nPerforming: Low-level exploitation, mastered strategies for concrete goals, mechanics mastery, precise strategy execution, effective abilities, timing, skill-based gameplay, advanced technique utilization. \n\nA participant has scored as such: \n\nDiscovering: ${discScore}/7 \n\nExpanding: ${expaScore}/7 \n\nExperimenting: ${expeScore}/7\n\nPerforming: ${perfScore}/7\n\nCraft a one-paragraph, 150-word personalized, insightful summary of the gamer's personality, with no return to line. Address the gamer directly. Avoid segregating the analysis by dimensions or explicitly mentioning the scores. First, weave a short cohesive description akin to the results of a personality test. When you mention the four dimensions, put a capital letter. Contrast their profile with those of gamers who manifest different scores. Then, add insights about their preference in terms of concrete game mechanics , game design, game format, or game genres. Expand beyond these suggestions. Be precise and specific, using gamer lingo and game-specific words. The last sentence should start with \"Your gaming persona is one of…\" to sum up everything, and must be less than 20 words long. `
            },
        ],
        model: "gpt-3.5-turbo",
    });

    // console.log(completion.choices[0])

    return NextResponse.json(completion)
}