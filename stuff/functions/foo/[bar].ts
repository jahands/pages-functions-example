export async function onRequest(request) {
    return new Response(`foo/[bar].ts`);
}