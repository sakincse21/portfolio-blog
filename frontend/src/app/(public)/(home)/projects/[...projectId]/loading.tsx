import { LoaderCircleIcon } from "lucide-react";

export default function LoadingPage() {
    return (
        <div className="w-full h-screen flex flex-col justify-center items-center">
            <LoaderCircleIcon className=" animate-spin" />
        </div>
    );
}