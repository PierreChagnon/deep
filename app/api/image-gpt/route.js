import { NextResponse } from "next/server";
import OpenAI from "openai";

export const maxDuration = 60; // This function can run for a maximum of 60 seconds
// Error: Builder returned invalid maxDuration value for Serverless Function "api/image-gpt". Serverless Functions must have a maxDuration between 1 and 10 for plan hobby.
export const dynamic = 'force-dynamic';
// https://vercel.com/docs/functions/configuring-functions/duration

export async function POST(request) {
    const openai = new OpenAI({
        apiKey: process.env.OPENAI_API_KEY
    })

    // Grabbing user's input
    const params = await request.json()
    const prompt = `${params.lastSentence} Generate a video game character based on this gaming persona. Focus on specific, visually representable elements. Avoid ambiguous language that could be interpreted as including text. Only display a portrait of the character in front of a background based on his theorical proper universe. digital art`
    console.log("PROMPT : ", prompt)

    // Passing it to chat GPT API
    const response = await openai.images.generate({
        model: "dall-e-3",
        prompt: prompt,
        size: "1024x1024",
        quality: "standard",
        n: 1,
    });

    console.log("response in api (image) : ", response.data[0].url)

    return NextResponse.json(response.data[0].url)
}