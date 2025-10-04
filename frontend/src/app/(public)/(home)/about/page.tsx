import AboutMe from "@/modules/about/AboutMe";
import Education from "@/modules/about/Education";

export default function Page() {
    return (
        <div className="w-full h-full">
            <AboutMe />
            <Education />
        </div>
    );
}