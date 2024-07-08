const products = [
  { name: "ball", price: 7 },
  { name: "frisbee", price: 2 },
];

export function GET() {
  return new Response(JSON.stringify(products));
}

export async function POST({ req }: { req: any }) {
  const body = await req.json();
  const name = body.name;

  return new Response(
    JSON.stringify({
      message: "Product: " + name,
    })
  );
}
