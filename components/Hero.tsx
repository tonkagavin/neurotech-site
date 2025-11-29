import { Image } from "./Image";
import { ArrowRight } from "lucide-react";

interface HeroProps {
  onNavigate: (page: string) => void;
}

export function Hero({ onNavigate }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-black to-gray-900">
      <div className="absolute inset-0 opacity-20">
        <Image
          src="/images/hero/team.webp"
          alt="Children learning with technology"
          className="h-full w-full object-cover"
          fallbackSrc="https://images.unsplash.com/photo-1759646827278-27c5733e0cee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMGxlYXJuaW5nJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjM1NTIyMzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        />
      </div>
      
      <div className="container relative mx-auto px-4 py-24 md:py-32">
        <div className="mx-auto max-w-4xl text-center text-white">
          <div className="mb-6 inline-block rounded-full bg-primary px-4 py-2">
            NC State University
          </div>
          
          <h1 className="mb-6 text-4xl md:text-5xl lg:text-6xl">
            "Empowering Communication Through Technology"
          </h1>
          
          <p className="mb-8 text-lg md:text-xl text-gray-200">
            NC State Neurotech is dedicated to helping severely mentally and physically 
            disabled children communicate with their caretakers through innovative assistive technology.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              className="inline-flex items-center justify-center rounded-md border-2 border-white bg-transparent px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-primary hover:border-primary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none"
              onClick={() => onNavigate("projects")}
            >
              View Our Projects
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button
              className="inline-flex items-center justify-center rounded-md border-2 border-white bg-transparent px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-primary hover:border-primary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none"
              onClick={() => onNavigate("donate")}
            >
              Support Our Mission
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
