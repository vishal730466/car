import { NextResponse } from "next/server";
import {mydata} from "@/app/DB/data"


export function GET(req, res) {
  const check = (a)=>{
    if(a.id == res.params.id){return a}
  }
    // Assume some data
  //  const data = { message: "Hello from the API!" };
 // const data = mydata;
  console.log(res.params.id)
  
  const data = mydata.filter(check)
  
   return NextResponse.json(data)
  }