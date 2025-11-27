import { Image } from "./Image";
import { Users, Heart, Lightbulb, Target } from "lucide-react";

export function AboutUs() {
  const values = [
    {
      icon: Heart,
      title: "Compassion",
      description: "We are driven by empathy for those who face communication barriers.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We leverage cutting-edge technology to create meaningful solutions.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We work together as students, researchers, and community partners.",
    },
    {
      icon: Target,
      title: "Impact",
      description: "We measure success by the lives we improve and the barriers we break.",
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl md:text-4xl">About NC State Neurotech</h2>
          <div className="mx-auto h-1 w-24 bg-primary"></div>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <Image
              src="/images/about/girls.jpg"
              alt="NC State Neurotech team members"
              className="rounded-lg shadow-2xl"
            />
          </div>

          <div>
            <h3 className="mb-6">Who We Are</h3>
            <p className="mb-4 text-muted-foreground">
              NC State Neurotech is a student-led organization at North Carolina State University 
              dedicated to developing assistive technology solutions for individuals with severe 
              mental and physical disabilities.
            </p>
            <p className="mb-4 text-muted-foreground">
              Our team consists of passionate students from various disciplines including engineering, 
              computer science, industrial design, and business. Together, we combine our diverse skills and 
              knowledge to create innovative solutions that make a real difference in people's lives.
            </p>
            <p className="mb-8 text-muted-foreground">
              We work closely with the caregivers of <a href="https://www.hilltophome.org" target="_blank" className="text-red-600 hover:text-red-700 underline">Hilltop Home</a> to 
              ensure our technology meets real needs and truly empowers the children who use it.
            </p>

            <div className="grid gap-6 sm:grid-cols-2">
              {values.map((value) => (
                <div key={value.title} className="rounded-lg border-2 bg-card text-card-foreground shadow-sm hover:border-primary transition-colors">
                  <div className="p-6">
                    <value.icon className="mb-3 h-8 w-8 text-primary" />
                    <h4 className="mb-2">{value.title}</h4>
                    <p className="text-sm text-muted-foreground">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
