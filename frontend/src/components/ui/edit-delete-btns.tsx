'use client'
import { redirect } from "next/navigation";
import { Button } from "./button";
import { deleteEntity } from "@/actions/delete";
import toast from "react-hot-toast";

export default function EditDeleteButtons({endpoint,id}:{endpoint:string;id:string}) {
    const handleDelete = async (endpoint:string, id:string)=>{
        const result = await deleteEntity(endpoint,id)
        console.log(result)
        toast.success("Post deleted successfully.");
    }
    return (
        <span className="flex flex-row justify-center items-center gap-2">
            <Button variant={'secondary'} onClick={()=>redirect(`/dashboard/${endpoint}/edit/${id}`)} >Edit</Button>
            <Button variant={'destructive'} onClick={()=>handleDelete(endpoint,id)}>Delete</Button>
        </span>
    );
}