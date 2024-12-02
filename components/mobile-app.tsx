import Image from "next/image"
import { Button } from "@/components/ui/button"
import mobileimage from "./mobile.png"

export function MobileApp() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-primary">
      <div className="container px-4 md:px-6">
        <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary-foreground">
                Get Jobs On The Go
              </h2>
              <p className="max-w-[600px] text-primary-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Download our mobile app and never miss a job opportunity. Apply to jobs, track your applications, and get notified about new openings instantly.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button variant="secondary" size="lg">
                Download for iOS
              </Button>
              <Button variant="secondary" size="lg">
                Download for Android
              </Button>
            </div>
            <h2 className="text-2xl font-serif tracking-normal sm:text-4xl text-primary-foreground">
  <a 
    href="/download" 
    className="hover:text-blue-600 hover:underline transition duration-300 ease-in-out"
  >
    Download
  </a>{" "}
  the Mobile App
</h2>


          </div>
          <div className="flex justify-center lg:justify-end">
            <Image
              src= {mobileimage}
              alt="JobRinger Mobile App"
              width={300}
              height={600}
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

