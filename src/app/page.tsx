import { Button } from "@/components/ui/button";
import Link from "next/link";
import Man from "../../images/man.png";
import Image from "next/image";
import StoryWriter  from "./StoryWriter"



 const page = () => {
  return (
    <main className="flex-1 flex flex-col">
      <section className="flex-1  grid-cols-1 lg:grid-cols-">
        {/* <div className="bg-purple-500 flex flex-col space-y-0 justify-center items-center order-1 lg:-order-1 pb-10">
          <Image src={Man} height={270} alt="logo" className="lg:h-[20rem] lg:w-[20rem]" />

          <Button asChild className="px-20 bg-purple-700 p-10 text-xl comic-neue">
            <Link href="/stories">Explore story Libary</Link>
          </Button>
        </div> */}

        <StoryWriter />

      </section>
    </main>
  );
}


export default page;


