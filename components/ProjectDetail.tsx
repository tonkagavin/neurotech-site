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
      started: "August 2025",
      team: "5 members",
      overview:
        "This project aims to create an affordable, easy-to-use communication device for children with severe physical and cognitive disabilities. Using Arduino microcontrollers and customizable switches that can be programmed to trigger commands and can be adapted to each child's specific needs and abilities.",
      goals: [
        "Develop a low-cost, reliable switch-based communication system",
        "Create customizable software that can be programmed for different communication needs",
        "Ensure the device is durable enough for extensive daily use",
        "Test and gather feedback from the Hilltop Home caregivers",
        "Provide comprehensive documentation for caregivers and technicians to use the device",
      ],
      updates: [
        {
          date: "August 2025",
          title: "Initial Idea Development Phase",
          description:
            "Founders initially developed the idea with the goals of reduced size, make compatible with the existing audio cable switch on children's wheelchairs, add ability to change input type, investigate need for debouncing, and consider ability to add multiple switches and inputs.",
          status: "completed",
        },
        {
          date: "October 2025",
          title: "Prototype Development",
          description:
            "Completed development of an initial arudino switch prototype.",
          status: "completed",
        },
        {
          date: "November 2025",
          title: "Breadboard Circuit Development",
          description:
            "Developing a breadboard circuit to test the functionality of the arduino switch prototype.",
          status: "in-progress",
        }, 
        {
          date: "November 2025",
          title: "Software Design Integration with Prototype",
          description:
            "Integrating the software design with the arduino switch prototype to test the functionality of the software.",
          status: "in-progress",
        }
      ],
    },
    "eeg-headset": {
      title: "EEG Headset for Reading Brain Signals for Communication",
      status: "Planning",
      description:
        "This project focuses on our EEG headset that will be used to read the brain signals of children with severe disabilities. Determining what signals coorelate with communication will be a key step in developing assistive technologies.",
      image: "https://plus.unsplash.com/premium_photo-1681426643645-77d6b5130b50?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      started: "November 2025",
      team: "8 members",
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
          date: "November 2025",
          title: "EEG Configuration",
          description:
            "Currently configuring our EEG headset to properly display the brain signals to determine what signals coorelate with communication.",
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
          className="mb-8 inline-flex items-center justify-center rounded-md bg-transparent px-4 py-2 text-lg font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
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
          className="mb-8 inline-flex items-center justify-center rounded-md bg-transparent px-4 py-2 text-large font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
          onClick={() => onNavigate("projects")}
        >
          <ArrowLeft className="mr-3 h-4 w-4" />
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
