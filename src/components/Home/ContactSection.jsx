import Link from "next/link";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { SiFrontendmentor } from "react-icons/si";


export default function ContactSection() {
  return (
    <div className="grid md:grid-cols-2 md:my-8 py-10 gap-4" id="contact">
      <div>
        <h3 className="font-bold text-4xl my-4">Contact Me</h3>
        <p className="mb-4 text-white">
          You can contact me through this form<br/> If you have any questions or want
          to know more about the projects and work I do, I would be happy to
          hear from you through this form. If you have any suggestions or are
          interested in collaborating on a project, please feel free to send me
          your message.
        </p>
        <h1 className="mb-4 font-bold cursor-pointer border-b rounded-2xl px-4  border-purple-100 w-fit ">Laylawakily@gmail.com</h1>

        <div className="flex gap-2">
          <Link href="https://github.com/Laylawakily">
            <FaGithub size={40} />
          </Link>
          <Link href="https://www.linkedin.com/in/layla-wakily-4b453a31a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
            <FaLinkedin size={40} />
          </Link>
          <Link href="https://www.frontendmentor.io/home">
            <SiFrontendmentor size={40} />
          </Link>
        </div>
      </div>
    </div>
  );
}
