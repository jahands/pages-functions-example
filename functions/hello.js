// Reacts to POST /hello-world
export async function onRequestGet(request) {
  // ...
  return new Response(`Hello world from functions!`);
}
