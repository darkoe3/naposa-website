import { Banknote, Camera, Mail, MapPin, Phone, Send, Smartphone } from "lucide-react";
import PlaceholderBadge from "@/components/ui/PlaceholderBadge";
import SectionHeading from "@/components/ui/SectionHeading";
import { contactPlaceholders } from "@/data/site";

const contactIcons = {
  Phone,
  Email: Mail,
  WhatsApp: Smartphone,
  Facebook: Send,
  Instagram: Camera,
  TikTok: Send,
  "Postal address": MapPin,
};

export default function ContactCallout() {
  return (
    <section id="contact" className="bg-white py-16 md:py-20 lg:py-24">
      <div className="section-shell grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-md bg-navy p-7 text-white md:p-9">
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-md bg-naposaGold text-navy">
            <Banknote size={24} aria-hidden="true" />
          </span>
          <SectionHeading
            eyebrow="Donation Readiness"
            title="Verified Giving Channels Will Appear Here."
            inverse
          >
            Official donation channels will be published after verification.
          </SectionHeading>
          <div className="mt-6">
            <PlaceholderBadge>Payment details pending</PlaceholderBadge>
          </div>
        </div>

        <div className="rounded-md border border-line bg-cream/45 p-7 md:p-9">
          <SectionHeading
            eyebrow="Contact"
            title="Connect With NAPOSA."
          >
            These contact fields are placeholders until official communication
            channels are verified and approved for publication.
          </SectionHeading>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {contactPlaceholders.map((item) => {
              const Icon = contactIcons[item.label] || Mail;
              return (
                <div key={item.label} className="rounded-md border border-line bg-white p-4">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-navy text-white">
                      <Icon size={18} aria-hidden="true" />
                    </span>
                    <div>
                      <p className="text-sm font-extrabold text-navy">{item.label}</p>
                      <p className="text-sm text-muted">{item.value}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <button
            type="button"
            disabled
            className="mt-7 inline-flex min-h-11 cursor-not-allowed items-center justify-center rounded-md border border-line bg-white px-5 py-3 text-sm font-semibold text-muted"
          >
            Email details pending
          </button>
        </div>
      </div>
    </section>
  );
}
