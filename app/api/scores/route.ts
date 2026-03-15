export async function GET() {
  const scoreRes = await fetch(
    "https://turtle-quest-api.vercel.app/api/scores",
  );
  if (scoreRes.ok) {
    return new Response(JSON.stringify(await scoreRes.json()));
  } else {
    return new Response(
      JSON.stringify({
        message: "Failed to load scores.",
        httpStatusCode: scoreRes.status,
      }),
      { status: 400 },
    );
  }
}
