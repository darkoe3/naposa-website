import { CalendarDays, GraduationCap, HandHeart, UsersRound } from "lucide-react";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";

const benefits = [
  { text: "Reconnect with your year group", icon: UsersRound },
  { text: "Participate in events and homecomings", icon: CalendarDays },
  { text: "Support meaningful projects", icon: HandHeart },
  { text: "Mentor the next generation", icon: GraduationCap },
];

export default function MembershipCallout() {
  return (
    <section id="membership" className="bg-navy py-16 text-white md:py-20 lg:py-24">
      <div className="section-shell grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
        <div>
          <SectionHeading
            eyebrow="Membership"
            title="Your NAPOSA Journey Continues Here."
            inverse
          >
            Every past student has a place in our community. Reconnect with
            friends, participate in alumni activities and help shape a stronger
            future for our school.
          </SectionHeading>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="#contact">Register Your Interest</Button>
            <Button href="#contact" variant="gold">
              Contact NAPOSA
            </Button>
          </div>
        </div>
        <div className="rounded-md border border-white/14 bg-white/8 p-6">
          <p className="rounded-md bg-white px-4 py-3 text-sm font-extrabold text-navy">
            Annual dues: GH₵1,000 per year group
          </p>
          <div className="mt-6 grid gap-4">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <div key={benefit.text} className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-naposaGold text-navy">
                    <Icon size={19} aria-hidden="true" />
                  </span>
                  <span className="text-sm font-semibold text-white/88">
                    {benefit.text}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
