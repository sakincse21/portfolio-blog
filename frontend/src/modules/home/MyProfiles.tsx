import { Feather, GithubIcon, Globe, LinkedinIcon, MessageCircle, Send } from "lucide-react"
import Link from "next/link"

const MyProfiles = () => {
  return (
              <div className="my-2 flex flex-wrap justify-center lg:justify-start gap-6 text-sm">
                {/* Using generic icons for social links */}
                <Link
                  href="https://github.com/sakincse21"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Social Link 1" // Generic label
                  className="text-muted-foreground hover:text-primary block"
                >
                  <GithubIcon className="size-6" /> {/* Generic "Share" icon */}
                </Link>
                <Link
                  href="https://wa.me/+8801833410082"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Social Link 2"
                  className="text-muted-foreground hover:text-primary block"
                >
                  <MessageCircle className="size-6" />{" "}
                  {/* Generic "Message" icon */}
                </Link>
                <Link
                  href="https://www.linkedin.com/in/saleheen-sakin/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Social Link 3"
                  className="text-muted-foreground hover:text-primary block"
                >
                  <LinkedinIcon className="size-6" /> {/* Generic "Link" icon */}
                </Link>
                <Link
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Social Link 4"
                  className="text-muted-foreground hover:text-primary block"
                >
                  <Globe className="size-6" />{" "}
                  {/* Generic "Globe" (website/world) icon */}
                </Link>
                <Link
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Social Link 5"
                  className="text-muted-foreground hover:text-primary block"
                >
                  <Send className="size-6" /> {/* Generic "Send" icon */}
                </Link>
                <Link
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Social Link 6"
                  className="text-muted-foreground hover:text-primary block"
                >
                  <Feather className="size-6" />{" "}
                  {/* Generic "Feather" (post/write) icon */}
                </Link>
              </div>
  )
}

export default MyProfiles