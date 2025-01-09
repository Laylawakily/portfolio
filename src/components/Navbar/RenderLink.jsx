import Link from "next/link";

export default function RenderLink({title,href}) {
  return (
    <Link href={href} className="block py-2 pl-3 pr4 md:p-0">
      {title}
    </Link>
    )
}
