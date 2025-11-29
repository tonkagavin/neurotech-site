import { Image } from "./Image";
import { Heart, Users, Zap, CheckCircle2, Smartphone, Copy } from "lucide-react";
import { toast } from "sonner";

interface DonateProps {
  onNavigate: (page: string) => void;
}

export function Donate({ onNavigate }: DonateProps) {
  const zelleEmail = "neurotech-org@ncsu.edu";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(zelleEmail);
    toast("Zelle email copied to clipboard!");
  };

  const impactAreas = [
    {
      icon: Zap,
      title: "Research & Development",
      description:
        "Your donations fund the development of new assistive technologies and improvements to existing systems.",
    },
    {
      icon: Users,
      title: "Community Outreach",
      description:
        "We work directly with families and care facilities to ensure our solutions meet real needs.",
    },
    {
      icon: Heart,
      title: "Free Devices",
      description:
        "We provide devices at no cost to families who cannot afford commercial alternatives.",
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl md:text-4xl">Support Our Mission</h2>
          <div className="mx-auto h-1 w-24 bg-primary mb-6"></div>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Your generous donations help us develop and provide assistive communication 
            technology to children who need it most.
          </p>
        </div>

        {/* Zelle Donation Section - PRIMARY */}
        <div className="mb-16">
          <div className="rounded-lg border-2 border-primary bg-card text-card-foreground shadow-sm overflow-hidden">
            <div className="bg-primary text-primary-foreground p-6 text-center">
              <Smartphone className="mx-auto mb-3 h-12 w-12" />
              <h3 className="text-white mb-2">Donate via Zelle</h3>
              <p className="text-white/90">Quick, secure, and fee-free donations</p>
            </div>
            <div className="p-8 md:p-12">
              <div className="max-w-2xl mx-auto">
                <div className="mb-8 text-center">
                  <p className="mb-6 text-muted-foreground">
                    Support NC State Neurotech through Zelle - 100% of your donation goes 
                    directly to helping children communicate.
                  </p>
                  
                  <div className="bg-muted/50 rounded-lg p-6 mb-6">
                    <div className="mb-2 text-sm text-muted-foreground">Send your donation to:</div>
                    <div className="flex items-center justify-center gap-3 flex-wrap">
                      <div className="text-2xl break-all">{zelleEmail}</div>
                      <button
                        className="inline-flex items-center justify-center rounded-md border-2 border-border bg-background px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 gap-2"
                        onClick={copyToClipboard}
                      >
                        <Copy className="h-4 w-4" />
                        Copy
                      </button>
                    </div>
                  </div>

                  <div className="text-left max-w-md mx-auto space-y-3 mb-8">
                    <h4 className="mb-4 text-center">How to Donate:</h4>
                    <div className="flex gap-3">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm">
                        1
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Open your banking app and find Zelle (usually in the transfers or payments section)
                      </p>
                    </div>
                    <div className="flex gap-3">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm">
                        2
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Enter our email address: <span className="font-medium">{zelleEmail}</span>
                      </p>
                    </div>
                    <div className="flex gap-3">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm">
                        3
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Choose your donation amount and send - it's that easy!
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap justify-center gap-3">
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                      No Processing Fees
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                      Instant Transfer
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                      100% Goes to Projects
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why Your Support Matters */}
        <div className="mb-16">
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="relative flex items-center justify-center p-4 md:p-8">
                <Image
                  src="/images/donate/studious.webp"
                  alt="Community support"
                  className="max-w-md w-full max-h-64 h-auto rounded-lg object-contain shadow-lg"
                />
              </div>
              <div className="p-8 md:p-12">
                <h3 className="mb-4">Why Your Support Matters</h3>
                <p className="mb-4 text-muted-foreground">
                  Commercial assistive communication devices can cost thousands of dollars, 
                  putting them out of reach for many families. As a student-led organization, 
                  we rely on donations to fund our research, development, and community outreach efforts.
                </p>
                <p className="mb-6 text-muted-foreground">
                  Every dollar you contribute goes directly toward creating affordable, 
                  accessible technology that empowers children to communicate and connect 
                  with the world around them.
                </p>
                <div className="flex flex-wrap gap-3">
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    100% Student-Led
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    Non-Profit
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    Community Focused
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Impact Areas */}
        <div className="mb-12">
          <h3 className="mb-8 text-center">Where Your Money Goes</h3>
          <div className="grid gap-8 md:grid-cols-3">
            {impactAreas.map((area) => (
              <div key={area.title} className="rounded-lg border bg-card text-card-foreground shadow-sm text-center">
                <div className="p-6">
                  <div className="mb-4 flex justify-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                      <area.icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <h4 className="mb-4">{area.title}</h4>
                  <p className="text-muted-foreground">{area.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View Donors */}
        <div className="text-center">
          <div className="inline-block rounded-lg border bg-card text-card-foreground shadow-sm">
            <div className="p-8">
              <h4 className="mb-3">Want to see who's already supporting us?</h4>
              <button
                className="inline-flex items-center justify-center rounded-md border-2 border-border bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                disabled
              >
                View Our Donors
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
