import connectMongo from "@/lib/mongodb";
import Transaction from "@/models/transaction"

export async function GET() {
  await connectMongo();
  const transactions = await Transaction.find({});
  return new Response(JSON.stringify(transactions), { status: 200 });
}

export async function POST(req) {
  await connectMongo();
  const body = await req.json();
  const transaction = new Transaction(body);
  await transaction.save();
  return new Response(JSON.stringify(transaction), { status: 201 });
}

export async function PUT(req) {
  await connectMongo();
  const { id, ...update } = await req.json();
  const transaction = await Transaction.findByIdAndUpdate(id, update, {
    new: true,
  });
  return new Response(JSON.stringify(transaction), { status: 200 });
}

export async function DELETE(req) {
  await connectMongo();
  const { id } = await req.json();
  await Transaction.findByIdAndDelete(id);
  return new Response(null, { status: 204 });
}