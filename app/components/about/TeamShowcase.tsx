import Image from "next/image";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  alt: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Jane Doe",
    role: "Founder & CEO",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAoEY966bNyOcfD7uEuxQdDbxR4u0hPF04iTEQAjV94slkqTy1CKWSFuLUuRcvb6MUVSNCGndmPekT_GUo2kWC_04Dov4mtf1fq_peYnZ-U4pDeezMtuTJjn_nNU-XkWOrZ7cw8zFbQYPN1PzOsJUZYVn554uALJ1qwAvZwnQ0Kra-apFtEENwTGNEHUuj7BjaXQ99wzxropOM1QPxaFART1B6Ky1s0LdmzA66DRrNF38vdOT41gyDvRJ7QGa44XDszMqj-CSu140Q",
    alt: "Headshot of Jane Doe",
  },
  {
    name: "John Smith",
    role: "Chief Technology Officer",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA_fm33JaKb0ogww_mLMeeSgda8wj0ZqW8CetaMVwMzzYWOLU-fH6yNqdSOaOXn7xIKsjbq9WXOHeG2OP8YAeDHEpf7Rl3AMQSXo1SUQT0CGdaH9Uc_I8ce-p4VPYODov0wdy2Zv-1myeQJjgC3St6ZcyDdBhfVR6TLKghCmvZaORbU1zXrJhvSddsbw2HTikareNDy0F4YS7fuCUE2ytcom9Cx7MLlxAA_W0dALgedrMbElt5I9xOJe9x_BTw9fYlgwDNWQe4dgxw",
    alt: "Headshot of John Smith",
  },
  {
    name: "Emily White",
    role: "Head of Product",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCargO139j3RSVAvTq1eK10O5ym6tx_xbYTYP0emPprStpyuushe2NjCFp_Zk4LjNOgZzxtGENgHd8rwuFiPWkiiF2Saz2x8G0ZrGCjKzNixn4RHvQG64_a7S44W1dgMrUXaWdqR476Wmqs5D00t7mYTgFHTXh4ANEuyYubL4yyQj0bgPF2jvKpIl5owUcB57atvlD6msDHo9U_Hpg0BKAh2jsIptBnv2FujTWvb4XwHjMzHCwEaRI7YLLF8pQPkdnWVZMPTumatB0",
    alt: "Headshot of Emily White",
  },
];

export default function TeamShowcase() {
  return (
    <div className="bg-primary/10 dark:bg-primary/20 p-8 md:p-16 text-center">
      <div className="flex flex-col gap-4 text-center mb-12">
        <h2 className="text-primary dark:text-white text-3xl font-bold leading-tight tracking-tight">
          Meet the Team
        </h2>
        <p className="text-text-light dark:text-text-dark text-lg max-w-2xl mx-auto">
          The innovators, creators, and problem-solvers dedicated to
          revolutionizing your workflow.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <div className="relative w-32 h-32 mb-4">
              <Image
                src={member.image}
                alt={member.alt}
                fill
                className="rounded-full object-cover border-4 border-white dark:border-primary/20 shadow-lg"
              />
            </div>
            <h3 className="text-primary dark:text-white text-xl font-bold">
              {member.name}
            </h3>
            <p className="text-secondary font-medium">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}