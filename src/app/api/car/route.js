import { NextResponse } from 'next/server';
export function GET(req, res) {

const status = "my car";

 return NextResponse.json({status})
}