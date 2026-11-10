import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <section className="topo-bg px-6 pt-10 pb-24 md:px-10 md:pt-16">
        

        <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
        

          <h1 className="mt-2 max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl">
            An <span className="text-primary">AI Platform</span> for whatever
            you&apos;re building
          </h1>

          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            Chat with an AI agent that draws on your canvas and writes your
            docs, while your whole team works alongside it in real time.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="gap-2 text-base">
              <Link href="/sign-up">
                Start building free <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-base">
              <Link href="#how-it-works">See how it works</Link>
            </Button>
          </div>
        </div>

        <div className="survey-frame scroll-tilt mx-auto mt-16 max-w-5xl">
          <div className="aspect-16/9.25 overflow-hidden rounded-2xl border border-white/10 bg-card shadow-2xl shadow-black/40">
            
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 px-6 py-10 md:px-10">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 text-center sm:flex-row sm:justify-between sm:text-left">
          <p className="text-sm text-muted-foreground">
            Built for teams who sketch first and write specs second
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-sm text-muted-foreground/70">
            
          </div>
        </div>
      </section>


    </div>
  );
}
