'use client'
import { Button } from "@/components/ui/button"
import Hero from "@/modules/home/Hero"
import toast from "react-hot-toast"

export default function Home() {
  const notify = ()=>{
  toast.success("hi thanks")}
  return (
    <div>
      <Hero />
    </div>
  )
}