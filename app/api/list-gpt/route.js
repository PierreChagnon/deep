export const dynamic = 'force-dynamic' // defaults to auto
export const maxDuration = 30; // This function can run for a maximum of 30 seconds

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
                content: `Here are the four dimensions of video game traits (DEEP model): Discovering: High-level exploration, innovative for abstract goals, world exploration, uncovering secrets, non-linear play, side quests, insight, discovering new goals. Experimenting: Low-level exploration, novel actions for concrete goals, diverse strategies, multiple weapons, abilities, tools, challenge innovation, unique solutions. Expanding: High-level exploitation, familiar actions for abstract goals, deep lore engagement, storylines, characters, exploring narrative, lore-rich interaction, high-level strategy. Performing: Low-level exploitation, mastered strategies for concrete goals, mechanics mastery, precise strategy execution, effective abilities, timing, skill-based gameplay, advanced technique utilization. You will be provided with the user's score, and your task is to create a video game list, 30 items long, wich represent the taste of the user, based on their DEEP model score. Just give a list of game in a javascript array format. No other thing, just the javascript array. The response must start with "[" and end with "]".`
            },
            {
                role: "user",
                content: `Discovering: ${discScore}/7, Expanding: ${expaScore}/7, Experimenting: ${expeScore}/7, Performing: ${perfScore}/7`
            },
        ],
        model: "gpt-4o",
        // response_format: { type: "json_object" },
    });
    // console.log(completion.choices[0].message.content);
    return NextResponse.json(completion)
}