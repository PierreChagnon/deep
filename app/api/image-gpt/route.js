import { NextResponse } from "next/server";
import OpenAI from "openai";

export async function POST(request) {
    const openai = new OpenAI({
        apiKey: process.env.OPENAI_API_KEY
    })

    // Grabbing user's input
    const params = await request.json()
    const prompt = `${params.lastSentence} Generate a visual game card featuring a video game character based on this gaming persona. Focus on specific, visually representable elements. Avoid ambiguous language that could be interpreted as including text.`
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