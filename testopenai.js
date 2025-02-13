// testOpenAI.js

require('dotenv').config(); // Load environment variables

const { Configuration, OpenAIApi } = require("openai"); // Correct import

console.log("Configuration:", Configuration);
console.log("OpenAIApi:", OpenAIApi);

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY, // Ensure this is set in your .env file
});

const openai = new OpenAIApi(configuration);

async function main() {
    try {
        const response = await openai.createCompletion({
            model: "text-davinci-003", // Ensure you're using a valid model
            prompt: "Say this is a test",
            max_tokens: 10,
        });
        console.log("OpenAI Response:", response.data.choices[0].text.trim());
    } catch (error) {
        console.error("Error with OpenAI API:", error);
    }
}

main();
