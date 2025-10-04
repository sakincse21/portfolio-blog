"use client"
import toast from "react-hot-toast";
import { Button } from "./button";

export default function SendMessage() {
  const handleClick = () => {
    toast.success(
      "Message sent successfully. We'll respond within next 24hours."
    );
  };
  return (
    <Button className="w-full" onClick={handleClick}>
      Send Message
    </Button>
  );
}
