import { NextResponse } from 'next/server';
export function GET(req, res) {

const status = 1;

 return NextResponse.json({status})
}