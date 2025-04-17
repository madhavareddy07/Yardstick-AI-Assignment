import connectMongo from "@/lib/mongodb";
import Budget from "@/models/budget";

export async function GET(){
  await connectMongo();
  const budgets = await Budget.find({});
  return new Response(JSON.stringify(budgets), { status: 200 });
}

export async function POST(req: Request){
  await connectMongo();
  const body = await req.json();
  const budget = await Budget.findOneAndUpdate(
    { category: body.category, month: body.month },
    body,
    { upsert: true, new: true }
  );
  return new Response(JSON.stringify(budget), { status: 201 });
}