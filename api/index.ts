
// api/index.js
export default async (request) => {
  return new Response("Hello from Vercel Edge Function!", {
    headers: { "content-type": "text/plain" },
  });
};