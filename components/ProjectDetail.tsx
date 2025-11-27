import { Image } from "./Image";
import { ArrowLeft, Calendar, CheckCircle2, Clock } from "lucide-react";

interface ProjectDetailProps {
  projectId: string;
  onNavigate: (page: string) => void;
}

export function ProjectDetail({ projectId, onNavigate }: ProjectDetailProps) {
  const projects: { [key: string]: any } = {
    "arduino-switch": {
      title: "Arduino Communication Switch",
      status: "Active",
      description:
        "Our flagship project developing a specialized Arduino-based switch system that enables children with severe disabilities to communicate their needs through simple, accessible button presses.",
      image: "https://images.unsplash.com/photo-1634452021892-eaabbdc4a0bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmR1aW5vJTIwZWxlY3Ryb25pY3MlMjBoYXJkd2FyZXxlbnwxfHx8fDE3NjM2MDA0NTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      started: "January 2024",
      team: "8 members",
      overview:
        "This project aims to create an affordable, easy-to-use communication device for children with severe physical and cognitive disabilities. Using Arduino microcontrollers and customizable switches, we're building a system that can be adapted to each child's specific needs and abilities.",
      goals: [
        "Develop a low-cost, reliable switch-based communication system",
        "Create customizable software that can be programmed for different communication needs",
        "Ensure the device is durable enough for daily use in various environments",
        "Partner with local schools and care facilities for testing and feedback",
        "Provide comprehensive documentation for caregivers and technicians",
      ],
      updates: [
        {
          date: "November 2024",
          title: "Prototype Testing Phase",
          description:
            "We've begun testing our latest prototype with three local families. Early feedback has been overwhelmingly positive, with one parent reporting that their child was able to communicate hunger for the first time independently.",
          status: "completed",
        },
        {
          date: "October 2024",
          title: "Software Interface Update",
          description:
            "Completed development of an intuitive configuration interface that allows caregivers to easily customize switch functions and communication messages without programming knowledge.",
          status: "completed",
        },
        {
          date: "September 2024",
          title: "Hardware Revision 2.0",
          description:
            "Upgraded to a more robust switch mechanism that can withstand repeated use. Also reduced production cost by 30% through design optimization.",
          status: "completed",
        },
        {
          date: "December 2024",
          title: "Durability Testing",
          description:
            "Currently conducting long-term durability tests to ensure the device can withstand daily use over extended periods. Results expected in early 2025.",
          status: "in-progress",
        },
      ],
    },
    "project-2": {
      title: "Future Project 2",
      status: "Planning",
      description:
        "An upcoming initiative focused on expanding our assistive technology portfolio. More details coming soon as we develop this exciting new solution.",
      image: "https://images.unsplash.com/photo-1760920248606-4a151ef75cce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc3Npc3RpdmUlMjB0ZWNobm9sb2d5JTIwZGV2aWNlfGVufDF8fHx8MTc2MzYwMDQ1N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      started: "Coming 2025",
      team: "4 members",
      overview:
        "This project is currently in the planning phase. We're conducting research and gathering requirements for our next assistive technology initiative. Stay tuned for updates!",
      goals: [
        "Define project scope and objectives",
        "Conduct user research with target population",
        "Develop initial prototypes",
        "Secure funding and resources",
      ],
      updates: [
        {
          date: "November 2024",
          title: "Project Kickoff",
          description:
            "Initial team meetings have begun to define the scope and direction of this new project. More details will be shared as plans solidify.",
          status: "in-progress",
        },
      ],
    },
  };

  const project = projects[projectId];

  if (!project) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h2 className="mb-4">Project Not Found</h2>
        <button
          className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
          onClick={() => onNavigate("projects")}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Projects
        </button>
      </div>
    );
  }

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <button
          className="mb-8 inline-flex items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
          onClick={() => onNavigate("projects")}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Projects
        </button>

        <div className="mb-12">
          <div className="mb-6 flex flex-wrap items-center gap-4">
            <h1>{project.title}</h1>
            <span className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-medium ${
              project.status === "Active" 
                ? "bg-primary text-primary-foreground" 
                : "bg-secondary text-secondary-foreground"
            }`}>
              {project.status}
            </span>
          </div>

          <div className="mb-8 overflow-hidden rounded-lg">
            <Image
              src={project.image}
              alt={project.title}
              className="h-96 w-full object-cover"
            />
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <div className="mb-8 rounded-lg border bg-card text-card-foreground shadow-sm">
                <div className="p-6">
                  <h3 className="mb-4">Project Overview</h3>
                  <p className="mb-4 text-muted-foreground">
                    {project.description}
                  </p>
                  <p className="text-muted-foreground">{project.overview}</p>
                </div>
              </div>

              <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                <div className="p-6">
                  <h3 className="mb-4">Project Goals</h3>
                  <ul className="space-y-3">
                    {project.goals.map((goal: string, index: number) => (
                      <li key={index} className="flex gap-3">
                        <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                        <span className="text-muted-foreground">{goal}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <div className="sticky top-24 rounded-lg border bg-card text-card-foreground shadow-sm">
                <div className="p-6">
                  <h4 className="mb-4">Project Info</h4>
                  <div className="space-y-4">
                    <div>
                      <p className="mb-1 text-sm text-muted-foreground">
                        Started
                      </p>
                      <p>{project.started}</p>
                    </div>
                    <div>
                      <p className="mb-1 text-sm text-muted-foreground">Team Size</p>
                      <p>{project.team}</p>
                    </div>
                    <div>
                      <p className="mb-1 text-sm text-muted-foreground">Status</p>
                      <p>{project.status}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="mb-8">Project Updates</h3>
          <div className="space-y-6">
            {project.updates.map((update: any, index: number) => (
              <div
                key={index}
                className={`rounded-lg border bg-card text-card-foreground shadow-sm ${
                  update.status === "in-progress" ? "border-primary border-2" : ""
                }`}
              >
                <div className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      {update.status === "completed" ? (
                        <CheckCircle2 className="h-6 w-6 text-primary" />
                      ) : (
                        <Clock className="h-6 w-6 text-primary" />
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="mb-2 flex flex-wrap items-center gap-3">
                        <h4>{update.title}</h4>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          {update.date}
                        </div>
                      </div>
                      <p className="text-muted-foreground">
                        {update.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
