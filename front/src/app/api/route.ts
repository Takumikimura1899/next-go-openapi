import { NextResponse } from 'next/server';

export async function GET() {
  const message = await fetch('http://localhost:4010/hello', {
    next: { revalidate: 10 },
  });
  const data = await message.json();
  return NextResponse.json(data);
}
