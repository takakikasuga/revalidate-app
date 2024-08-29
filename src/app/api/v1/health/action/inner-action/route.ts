
export async function GET() {

  return Response.json({ timeStamp: new Date().toISOString() });
}
