import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("./Navbar"), { ssr: false });
const Aside = dynamic(() => import("./Aside"), { ssr: false });

export default function Header() {
  return (
    <header className="py-5 md:pt-10 backdrop-blur fixed w-full z-50">
      <div className="container mx-auto px-3 sm:px-5 md:px-10 lg:px-14 xl:px-16 2xl:px-20">
        <div className="flex items-center justify-between relative">
          <div className="flex items-center justify-center flex-col gap-5">
            <figure>
              <Link href={"/"}>
                <Image
                  src={"/bx.svg"}
                  alt="Nex-Logo"
                  width={30}
                  height={30}
                  priority
                  quality={100}
                />
              </Link>
            </figure>
            <aside className="absolute top-20">
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
