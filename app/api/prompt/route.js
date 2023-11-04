import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";

export const GET = async (request) => {
    try {
        await connectToDB();

        const prompts = await Prompt.find({}).populate('creator');

        const headers = {
            'Content-Type': 'application/json',
            'Cache-Control': 'no-store, max-age=0', // Add this line to disable caching
        };

        return new Response(JSON.stringify(prompts), {
            status: 200,
            headers,
        })
    } catch(error) {
        console.log(error);
        return new Response("Failed to fetch all prompts", {status: 500})
    }
}

export const revalidate = 0;
