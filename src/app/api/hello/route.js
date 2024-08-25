import { NextResponse } from "next/server";
import {mydata} from "@/app/DB/data"


export function GET(req, res) {
    // Assume some data
  //  const data = { message: "Hello from the API!" };
  const data = mydata;
  
   return NextResponse.json(data)
  }