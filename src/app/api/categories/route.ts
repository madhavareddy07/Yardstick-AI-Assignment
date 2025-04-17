import { predefinedCategories } from "@/data/categories";

const customCategories: string[] = [];

export async function GET() {
  return new Response(
    JSON.stringify([...predefinedCategories, ...customCategories]),
    { status: 200 }
  );
}

export async function POST(req: Request) {
  const body = await req.json();
  const { category } = body;

  if (!category || customCategories.includes(category)) {
    return new Response("Invalid or duplicate category", { status: 400 });
  }

  customCategories.push(category);
  return new Response(JSON.stringify(customCategories), { status: 201 });
}
