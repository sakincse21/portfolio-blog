
'use client'
import { redirect } from "next/navigation";
import { Button } from "./button";

export default function AddNew({endpoint}:{endpoint:string}) {
    return (
        <div className="w-full flex flex-row justify-end items-center">
            <Button onClick={()=>redirect(`/dashboard/${endpoint}/new`)}>
                Add New
            </Button>
        </div>
    );
}