import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import Aside from "./Aside";

const Navbar = dynamic(() => import("./Navbar"), { ssr: false });

export default function Header() {
  return (
    <header className="py-5 md:pt-10 md:pb-0 backdrop-blur fixed w-full z-50">
      <div className="container mx-auto px-3 sm:px-5 md:px-10 lg:px-14 xl:px-16 2xl:px-20">
        <div className="flex items-center justify-between relative">
          <div className="flex items-center justify-center flex-col gap-5">
            <figure>
              <Link href={"/"}>
                <Image
                  src={"/belal.svg"}
                  alt="Nex-Logo"
                  width={50}
                  height={50}
                  priority
                  quality={100}
                />
              </Link>
            </figure>
            <aside className="absolute top-14 sm:top-20">
              <Aside />
            </aside>
          </div>
          <nav>
            <Navbar />
          </nav>
        </div>
      </div>
    </header>
  );
}
