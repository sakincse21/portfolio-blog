import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
// import designerPortrait from "/designer-portrait.jpg";
import { TiltEffect } from "@/components/ui/tilt-effect";
import { ImageZoom } from "@/components/ui/shadcn-io/image-zoom";
import { Card } from "@/components/ui/card";
import MyProfiles from "./MyProfiles";
import Image from "next/image";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="min-h-screen mx-auto flex items-center justify-center md:gap-0 px-10 py-20">
      <div className="max-w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-20 items-center">
        {/* Text Content */}
        <div
          className={`space-y-8 fade-in text-center lg:text-left ${
            isVisible ? "visible" : ""
          }`}
        >
            
          <div className="space-y-4">
            <h1 className="hero-text">
              Hi, I am
              <br />
              <span>Saleheen Uddin Sakin</span>
            </h1>
            <h2 className="text-4xl font-bold gradient-text">
              A Full Stack Developer
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
             <a
              href="https://drive.google.com/file/d/1VmYR8kHNNAuXTYH10-fUUkQC0A4H9EAM/view?usp=sharing"
              target="_blank"
            >
              <Button
                className="bg-hero-accent text-surface px-8 py-3 hover:bg-hero-accent/90 transition-all duration-300"
                size="lg"
              >
                Preview Resume
              </Button>
            </a>
            <a
              href="https://drive.usercontent.google.com/download?id=1VmYR8kHNNAuXTYH10-fUUkQC0A4H9EAM&export=download&authuser=0"
              target="_blank"
            >
              <Button
                variant="outline"
                className="border-hero-accent text-hero-accent hover:bg-hero-accent hover:text-surface px-8 py-3 transition-all duration-300"
                size="lg"
              >
                Download Resume
              </Button>
            </a>
          </div>
          <MyProfiles />
        </div>

        {/* Portrait */}
        <div
          className={`flex justify-center lg:justify-end fade-in order-first lg:order-last ${
            isVisible ? "visible" : ""
          }`}
          style={{ animationDelay: "0.2s" }}
        >
          <div className="relative">
            <ImageZoom>
              <TiltEffect>
                <Card className="overflow-hidden pt-0 w-[280px] sm:w-[320px] md:w-[380px] lg:w-[420px] bg-transparent border-0">
                  <Image
                    alt="Portrait image"
                    width={360}
                    height={390}
                    className="h-auto w-full border-b-8 border-accent-warm rounded-lg"
                    src={'/designer-portrait.jpg'}
                  />
                </Card>
              </TiltEffect>
            </ImageZoom>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;