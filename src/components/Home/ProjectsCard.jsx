import Link from "next/link";
import { LuCode2 } from "react-icons/lu";
import { FaGithub } from "react-icons/fa";

export default function ProjectsCard({ imageUrl, title, getUrl, githubUrl }) {
  return (
    <div className="w-full rounded-xl overflow-hidden shadow-lg group bg-[#1e1e1e] relative">
      <div
        className="w-full h-60 md:h-72 bg-cover bg-center"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      ></div>

      <div className="absolute top-0 left-0 w-full h-60 md:h-72 bg-black bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-70 transition-all duration-500">
        <div className="flex justify-center items-center gap-4 w-full">
          {/* Live Link */}
          {getUrl && (
            <Link href={getUrl} passHref>
              <span className="  cursor-pointer">
                <LuCode2 size={40} className="text-white" />
              </span>
            </Link>
          )}

          {githubUrl && (
            <Link href={githubUrl} passHref>
              <span className="  cursor-pointer">
                <FaGithub size={40} className="text-white" />
              </span>
            </Link>
          )}

        </div>
      </div>

      <div className="p-6">
        <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
      </div>
    </div>
  );
}
