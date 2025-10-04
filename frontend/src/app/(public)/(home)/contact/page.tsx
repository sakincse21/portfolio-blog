import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import SendMessage from "@/components/ui/send-message";
import { Textarea } from "@/components/ui/textarea";

interface ContactProps {
  title?: string;
  description?: string;
  phone?: string;
  email?: string;
  web?: { label: string; url: string };
}

export default function ContactPage({
  title = "Contact Me",
  description = "We are available for questions, feedback, or collaboration opportunities. Let us know how we can help!",
  phone = "+8801833410082",
  email = "saleheen.sakin@gmail.com",
  web = { label: "github/sakincse21", url: "https://github.com/sakincse21" },
}: ContactProps) {
  return (
    <div className="mx-auto flex max-w-7xl flex-col justify-between gap-10 lg:flex-row lg:gap-20 py-20 items-center h-full">
      <div className="mx-auto flex max-w-sm flex-col justify-between gap-10">
        <div className="text-center lg:text-left">
          <h1 className="mb-2 text-5xl font-semibold lg:mb-1 lg:text-6xl">
            {title}
          </h1>
          <p className="text-muted-foreground">{description}</p>
        </div>
        <div className="mx-auto w-fit lg:mx-0">
          <h3 className="mb-6 text-center text-2xl font-semibold lg:text-left">
            Contact Details
          </h3>
          <ul className="ml-4 list-disc">
            <li>
              <span className="font-bold">Phone: </span>
              {phone}
            </li>
            <li>
              <span className="font-bold">Email: </span>
              <a href={`mailto:${email}`} className="underline">
                {email}
              </a>
            </li>
            <li>
              <span className="font-bold">Web: </span>
              <a href={web.url} target="_blank" className="underline">
                {web.label}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mx-auto flex max-w-3xl flex-col gap-6 rounded-lg border p-10 w-96">
        <div className="flex gap-4">
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="firstname">First Name</Label>
            <Input type="text" id="firstname" placeholder="First Name" />
          </div>
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="lastname">Last Name</Label>
            <Input type="text" id="lastname" placeholder="Last Name" />
          </div>
        </div>
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" placeholder="Email" />
        </div>
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="subject">Subject</Label>
          <Input type="text" id="subject" placeholder="Subject" />
        </div>
        <div className="grid w-full gap-1.5">
          <Label htmlFor="message">Message</Label>
          <Textarea placeholder="Type your message here." id="message" />
        </div>
        <SendMessage />
      </div>
    </div>
  );
}
