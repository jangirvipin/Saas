'use client'
import HomePage from "@/components/App/ui/Home";
import How_it_works from "@/components/App/ui/How_it_works";
import {useRouter} from "next/navigation";

export default function Home(){
    const router = useRouter();
  return (
      <>
       <HomePage />
          <How_it_works />
          <section className="py-16 px-6 text-center bg-zinc-900">
              <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-zinc-200 via-zinc-400 to-white">
                  Get Started with GitSpotlight
              </h2>
              <p className="text-zinc-300 mt-4 max-w-3xl mx-auto text-lg">
                  Sign up today and take your developer profile to the next level.
              </p>
              <button onClick={()=>{router.push('/signin')}}  className="mt-8 px-8 py-3 bg-zinc-800 cursor-pointer text-white rounded-lg hover:bg-zinc-700 border border-zinc-700">
                  Sign Up for Free
              </button>
          </section>


      </>
  )
}