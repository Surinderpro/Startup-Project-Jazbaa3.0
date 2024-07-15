import { TypewriterEffect,TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import Image from "next/image";
import Link from "next/link";
import{ AnimatedTooltipPreview} from "@/components/animated"
import { NavbarDemo } from "@/components/Navbar";
import Naaavi from "@/components/ui/naaavi";
import Footer from "@/components/ui/footer2";
import Header from "@/components/ui/header";
export default function Home() {
  const words = [
    {
      text: "Build",
    },
    {
      text: "effortlessly",
    },
    {
      text: "with",
    },
    {
      text: "SKYOPS",
    },
    {
      text: "AI.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <>
    <Header></Header>
    {/* <Naaavi></Naaavi> */}
    {/* <NavbarDemo></NavbarDemo> */}
     <div className="flex flex-col items-center justify-center h-[40rem]  ">
      <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  ">
      Effortless Cloud Control
      </p>
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <Link href={'/ai'}>
        <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
          Go to Prompt
        </button>
        </Link>
        {/* <Link href={'/sign'}>
        <button className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
          Signup
        </button>
        </Link> */}
      </div>
    </div>
    <Footer></Footer>
    </>
  );
}
