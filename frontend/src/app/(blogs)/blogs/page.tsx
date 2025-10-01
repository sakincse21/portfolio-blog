import { envVars } from "@/configs/env";

export default async function BlogsPage() {
    const res = await fetch(`${envVars.backend_base_url}/post`,{
        cache: "no-store"
    })
    const data = await res.json();
    console.log(data?.data)
    return (
        <div>blogs page</div>
    );
}