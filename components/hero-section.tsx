import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function HeroSection() {
  return (
    <section className="w-full py-12 md:py-16 mb-0 bg-gradient-to-b from-blue-50 to-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Find Your Dream Job Today
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Discover thousands of job opportunities with top employers. Your next career move is just a click away.
            </p>
          </div>
          <div className="w-full max-w-sm space-y-2">
            <form className="flex space-x-2">
              <Input className="flex-1" placeholder="Enter job title or keyword" type="text" />
              <Button type="submit">Search</Button>
            </form>
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {['Remote', 'Full-time', 'Part-time', 'Contract', 'Internship'].map((tag) => (
              <Button key={tag} variant="outline" size="sm">
                {tag}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

