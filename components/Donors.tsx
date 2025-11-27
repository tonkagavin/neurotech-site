import { Heart, Building2, Users } from "lucide-react";

interface DonorsProps {
  onNavigate: (page: string) => void;
}

export function Donors({ onNavigate }: DonorsProps) {
  const organizations = [
    "NC State Engineering Foundation",
    "TechForGood Initiative",
    "Raleigh Robotics Club",
    "Innovation Labs Inc.",
    "NC Assistive Technology Program",
    "Community Care Partners",
    "NC State University",
    "Arduino Foundation",
    "Local Maker Space",
  ];

  const benefactors = [
    "The Martinez Family Foundation",
    "Dr. Sarah Johnson",
    "Dr. Michael Chen",
    "Smith & Associates",
    "Anonymous Benefactor",
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl md:text-4xl">Our Generous Donors</h2>
          <div className="mx-auto h-1 w-24 bg-primary mb-6"></div>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            We are incredibly grateful to the individuals and organizations who support 
            our mission to empower children through assistive technology.
          </p>
        </div>

        <div className="mb-16">
          <div className="rounded-lg border bg-gradient-to-br from-primary to-primary/80 text-primary-foreground shadow-sm">
            <div className="p-8 md:p-12 text-center">
              <Heart className="mx-auto mb-4 h-16 w-16 text-white" />
              <h3 className="mb-4 text-white">Thank You!</h3>
              <p className="mx-auto mb-6 max-w-2xl text-white/90">
                Your generosity makes our work possible. Every donation, regardless of size, 
                directly contributes to developing life-changing communication technology 
                for children in need.
              </p>
              <button
                className="inline-flex items-center justify-center rounded-md bg-white px-8 py-3 text-sm font-medium text-primary transition-colors hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                onClick={() => onNavigate("donate")}
              >
                Join Our Supporters
              </button>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <div className="flex items-center justify-center gap-3 mb-8">
            <Building2 className="h-8 w-8 text-primary" />
            <h3 className="text-center">Organizations & Corporate Partners</h3>
          </div>
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
            <div className="p-8">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {organizations.map((org, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 rounded-lg bg-muted/30 p-4 hover:bg-muted/50 transition-colors"
                  >
                    <div className="h-2 w-2 rounded-full bg-primary shrink-0"></div>
                    <span>{org}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <div className="flex items-center justify-center gap-3 mb-8">
            <Users className="h-8 w-8 text-primary" />
            <h3 className="text-center">Generous Benefactors</h3>
          </div>
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
            <div className="p-8">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {benefactors.map((benefactor, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 rounded-lg bg-muted/30 p-4 hover:bg-muted/50 transition-colors"
                  >
                    <div className="h-2 w-2 rounded-full bg-primary shrink-0"></div>
                    <span>{benefactor}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="inline-block rounded-lg border bg-muted/30 text-card-foreground shadow-sm">
            <div className="p-8">
              <p className="mb-4 text-muted-foreground">
                Names are listed with permission. Some donors have chosen to remain anonymous.
              </p>
              <p className="text-sm text-muted-foreground">
                Donor list updated as of November 2024
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
