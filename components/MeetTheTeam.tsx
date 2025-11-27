import { Image } from "./Image";
import { Linkedin, Mail } from "lucide-react";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
  email?: string;
  linkedin?: string;
}

export function MeetTheTeam() {
  const teamLeaders: TeamMember[] = [
    {
      name: "Rayan Rao",
      role: "Cofounder, Co-President, R&D Lead",
      image: "/images/team/obama.jpg",
      bio: "Rayan is a junior in Biomedical Engineering and the head of the R&D team. He is focusing on developing novel designs for affordable EEG headsets and adaptive switches to implement in Hilltop Home.",
      email: "rsrao2@ncsu.edu",
      linkedin: "rayan-rao-4737b421a/"
    },
    {
      name: "Armaan Raina",
      role: "Cofounder, Co-President, Algorithms Lead",
      image: "/images/team/armaani.jpg",
      bio: "Armaan is a junior double majoring in Computer Science and Statistics. He cofounded the club alongside Rayan and Will, mainly focusing on decoding algorithms, general device design, and grant writing.",
      email: "araina3@ncsu.edu",
      linkedin: "armaanraina/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BoPmmxYDiSDWlojvXTN1tEQ%3D%3D"
    },
    {
      name: "Will Sammons",
      role: "Cofounder, Treasurer, Hardware Lead",
      image: "/images/team/salmon.jpg",
      bio: "Will is a Junior and is in the Electrical and Computer Engineering Dual Degree program. He is a cofounder and head of hardware for Neurotech, and leads the development and utilization of the technology utilized for the club.",
      email: "twsammon@ncsu.edu",
      linkedin: "will-sammons-7196a42b5/"
    },
    {
      name: "Gavin McKay",
      role: "Software Lead",
      image: "/images/team/gabinkerton.png",
      bio: "Gavin is a junior in Computer Science minoring in Philosophy and Economics. He is the head of software development team, leading projects for game development and assitive communicative technologies for the children of Hilltop Home. (I also made the website!)",
      email: "gjmckay@ncsu.edu",
      linkedin: "gjmckay"
    },

    {
      name: "Dr. Alper Bozkurt",
      role: "Faculty Advisor",
      image: "/images/team/boz.jpg",
      bio: "Dr. Bozkurt serves as the Neurotech club advisor and guides us in project direction and idea development.",
      email: "aybozkur@ncsu.edu",
      linkedin: "alper-bozkurt-ncsu"
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl md:text-4xl">Meet the Team</h2>
          <div className="mx-auto h-1 w-24 bg-primary mb-6"></div>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Our team consists of passionate students and faculty dedicated to 
            developing assistive technology solutions that make a real difference 
            in people's lives.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {teamLeaders.map((member, index) => (
            <div
              key={index}
              className="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="aspect-square w-full overflow-hidden bg-muted">
                <Image
                  src={member.image}
                  alt={member.name}
                  className="h-full w-full object-cover"
                  fallbackSrc={`https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face&auto=format&q=80`}
                />
              </div>
              <div className="p-6">
                <h3 className="mb-1 text-xl">{member.name}</h3>
                <p className="mb-4 text-sm font-medium text-primary">
                  {member.role}
                </p>
                <p className="mb-4 text-sm text-muted-foreground leading-relaxed">
                  {member.bio}
                </p>
                <div className="flex gap-3">
                  {member.email && (
                    <a
                      href={`mailto:${member.email}`}
                      className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Mail className="h-4 w-4" />
                      Email
                    </a>
                  )}
                  {member.linkedin && (
                    <a
                      href={`https://linkedin.com/in/${member.linkedin}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Linkedin className="h-4 w-4" />
                      LinkedIn
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="rounded-lg border bg-muted/30 p-8 max-w-2xl mx-auto">
            <h3 className="mb-4 text-2xl">Join Our Team</h3>
            <p className="mb-6 text-muted-foreground">
              We're always looking for passionate students who want to make a difference. 
              Whether you're interested in engineering, design, research, or community outreach, 
              there's a place for you in NC State Neurotech.
            </p>
            <a
              href="mailto:contact@ncstateneurotech.org"
              className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            >
              Get in Touch
              <Mail className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

