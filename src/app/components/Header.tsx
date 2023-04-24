"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  return (
    <nav className="m-4">
      <h1 className="font-bold text-center">
        r/
        <span className="underline underline-offset-4 decoration-wavy decoration-orange-500">
          CSCareerQuestions
        </span>
      </h1>

      <ul className="flex justify-between text-base my-6">
        <li>
          <Link
            className={
              pathname == "/"
                ? "border border-orange-300 bg-orange-50 rounded-full px-4 py-2"
                : "border rounded-full px-4 py-2"
            }
            href="/"
          >
            🔥 Hot
          </Link>
        </li>
        <li>
          <Link
            className={
              pathname == "/new"
                ? "border border-orange-300 bg-orange-50 rounded-full px-4 py-2"
                : "border rounded-full px-4 py-2"
            }
            href="/new"
          >
            ✨ New
          </Link>
        </li>
        <li>
          <Link
            className={
              pathname == "/top"
                ? "border border-orange-300 bg-orange-50 rounded-full px-4 py-2"
                : "border rounded-full px-4 py-2"
            }
            href="/top"
          >
            🏆 Top
          </Link>
        </li>
      </ul>
    </nav>
  );
}
