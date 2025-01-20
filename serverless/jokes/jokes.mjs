// Docs on request and context https://docs.netlify.com/functions/build/#code-your-function-2
export default async (request, context) => {
  try {
    const url = "https://icanhazdadjoke.com/";

    const jokeStream = await fetch(url, {
      headers: {
        Accept: "application/json"
      }
    });
    const jsonJoke = await jokeStream.json();
    
    return new Response(JSON.stringify(jsonJoke));
  } catch (error) {
    return new Response(error.toString(), {
      status: 500,
    })
  }
}
