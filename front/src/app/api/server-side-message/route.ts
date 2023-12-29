import { NextResponse } from 'next/server';

export async function GET() {
  const message = await fetch('http://127.0.0.1:4010/serverSideMessage');
  const data = await message.json();
  return NextResponse.json(data);
}
