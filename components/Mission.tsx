import { MessageSquare, Zap, HandHelping, Globe } from "lucide-react";
import { Image } from "./Image";

export function Mission() {
  const goals = [
    {
      icon: MessageSquare,
      title: "Enable Communication",
      description:
        "Develop assistive technology that gives a voice to children with severe communication disabilities, allowing them to express their needs, feelings, and thoughts.",
    },
    {
      icon: Zap,
      title: "Accessible Technology",
      description:
        "Create affordable, easy-to-use solutions that can be widely adopted by families, schools, and healthcare facilities without extensive training or resources.",
    },
    {
      icon: HandHelping,
      title: "Improve Quality of Life",
      description:
        "Enhance the daily lives of not only the children, but their caretakers as well by reducing frustration, improving understanding, and fostering new levels of independence through effective communication.",
    },
    {
      icon: Globe,
      title: "Expand Impact",
      description:
        "Scale our solutions to reach more children in need, collaborate with other organizations, and share our knowledge to create broader positive change.",
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl md:text-4xl">Our Mission</h2>
          <div className="mb-6 flex justify-center">
            <Image
              src="/images/team/trio.webp"
              alt="Founding trio"            
              className="max-w-md w-full h-auto rounded-lg object-cover shadow-lg"
            />
          </div>
          <div className="mx-auto h-1 w-24 bg-primary mb-6"></div>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
            To empower children with severe mental and physical disabilities by developing 
            innovative assistive communication technology that bridges the gap between them 
            and their caretakers, enabling meaningful connections and improved quality of life.
          </p>
        </div>

        <div className="mb-16">
          <div className="mx-auto max-w-4xl">
            <div className="rounded-lg border-2 border-primary bg-white shadow-sm">
              <div className="p-8 md:p-12">
                <h3 className="mb-6 text-center">What Drives Us</h3>
                <p className="mb-4 text-muted-foreground">
                  Every child deserves the ability to communicate. For children with severe disabilities, 
                  expressing basic needs, emotions, or discomfort can be an insurmountable challenge. 
                  This communication barrier doesn't just affect the child—it impacts families, caregivers, 
                  educators, and healthcare providers.
                </p>
                <p className="mb-4 text-muted-foreground">
                  At Neurotech at NC State, we believe that technology can break down these barriers. 
                  Our current focus is on developing specialized Arduino-based switch systems that 
                  children can activate to trigger commands, enabling them to communicate their needs 
                  effectively and independently.
                </p>
                <p className="text-muted-foreground">
                  We're not just building devices—we're building bridges to understanding, independence, 
                  and dignity for some of the most vulnerable members of our community.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="mb-8 text-center">Our Goals</h3>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {goals.map((goal) => (
              <div key={goal.title} className="rounded-lg border bg-card text-card-foreground shadow-sm group hover:shadow-lg transition-all hover:border-primary">
                <div className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary group-hover:scale-110 transition-all">
                      <goal.icon className="h-8 w-8 text-primary group-hover:text-white" />
                    </div>
                  </div>
                  <h4 className="mb-3">{goal.title}</h4>
                  <p className="text-sm text-muted-foreground">
                    {goal.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
