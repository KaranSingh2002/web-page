"use client"

import * as React from "react"
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { JobCard } from "@/components/job-card"
import useEmblaCarousel from 'embla-carousel-react'

const featuredJobs = [
  {
    date: "20 May, 2023",
    company: "Amazon",
    position: "Senior UI/UX Designer",
    tags: ["Part time", "Senior level", "Distant", "Project work"],
    location: "New Delhi",
    salary: "25000",
    backgroundColor: "bg-orange-100"
  },
  {
    date: "4 Feb, 2023",
    company: "Google",
    position: "Junior UI/UX Designer",
    tags: ["Full time", "Junior level", "Distant", "Project work", "Flexible Schedule"],
    location: "Kolkata",
    salary: "Not Disclosed",
    backgroundColor: "bg-emerald-100"
  },
  {
    date: "29 Jan, 2023",
    company: "Dribbble",
    position: "Senior Motion Designer",
    tags: ["Part time", "Senior level", "Full Day", "Shift work"],
    location: "Mumbai",
    salary: "26000",
    backgroundColor: "bg-purple-100"
  }
]

const remoteJobs = [
  {
    date: "11 Apr, 2023",
    company: "Twitter",
    position: "UX Designer",
    tags: ["Full time", "Middle level", "Distant", "Project work"],
    location: "Chennai",
    salary: "12000",
    backgroundColor: "bg-blue-100"
  },
  {
    date: "2 Apr, 2023",
    company: "Airbnb",
    position: "Graphic Designer",
    tags: ["Part time", "Senior level"],
    location: "Tamil Nadu",
    salary: "30000",
    backgroundColor: "bg-pink-100"
  },
  {
    date: "18 Jan, 2023",
    company: "Apple",
    position: "Graphic Designer",
    tags: ["Part time", "Distant"],
    location: "San Francisco, CA",
    salary: "14000",
    backgroundColor: "bg-gray-100"
  }
]

interface JobsSectionProps {
  title: string
  jobs: typeof featuredJobs
}

function JobsSection({ title, jobs }: JobsSectionProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    loop: false,
    dragFree: true,
  })

  const scrollPrev = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <div className="relative">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl md:text-3xl font-bold">
          <span className="text-blue-600">{title}</span>
        </h2>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={scrollPrev}
            className="rounded-full hover:bg-blue-50"
          >
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Previous jobs</span>
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={scrollNext}
            className="rounded-full hover:bg-blue-50"
          >
            <ChevronRight className="h-4 w-4" />
            <span className="sr-only">Next jobs</span>
          </Button>
        </div>
      </div>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex -ml-4">
          {jobs.map((job) => (
            <div key={`${job.company}-${job.position}`} className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_calc(50%-16px)] lg:flex-[0_0_calc(33.333%-16px)] pl-4">
              <JobCard {...job} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export function JobsSections() {
  return (
    <section className="py-12 space-y-12">
      <div className="container px-4">
        <JobsSection title="Featured Jobs" jobs={featuredJobs} />
      </div>
      <div className="container px-4">
        <JobsSection title="Remote Jobs" jobs={remoteJobs} />
      </div>
    </section>
  )
}

