import Link from "next/link";
import { prisma } from "@/lib/prisma";
import {redirect} from "next/navigation";

async function createTodo(data:FormData){
"use server"
    const title = data.get("title")?.valueOf()
    if (typeof title !=="string"||title.length === 0 ) {
        throw new Error("invalid title")
    }
   await  prisma.todo.create({data:{title,complete:false}})
    redirect("/")
}

const Page=()=>{
    return (
    <div className="p-10">
        <h1>New Page</h1>
        <div>
    
    
    <form action={createTodo} className="flex gap-2 flex-col">
        <input 
         name="title"
         type="text"
         className="border border-slate-400"
         />
        <div className="flex gap-4 justify-end ">
<Link href="http://localhost:3000/" className="p-2 border border-slate-400">Cancel</Link>
<button type="submit" className="p-2 border border-slate-400" >Create</button>
        </div>
        </form>
            
        </div>
    </div>)
}
export default Page;