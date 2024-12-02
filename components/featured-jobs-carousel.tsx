"use client"

import * as React from "react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight, Building2, Clock, MapPin, Briefcase } from 'lucide-react'
import { cn } from "@/lib/utils"
import useEmblaCarousel from 'embla-carousel-react'

interface Job {
  id: number
  title: string
  company: string
  location: string
  type: string
  experience: string
  employmentType: string
  jobType: "Work From Home / WFH job" | "In Office job" | "Remote job" | "Hybrid job"
}

const featuredJobs: Job[] = [
  {
    id: 1,
    title: "Business Development Mgr(Security & Multifacility)",
    company: "Aline HR Consultancy",
    location: "Pune | Mumbai (All Areas) / India",
    type: "Full Time - Permanent",
    experience: "2 - 3 Years",
    employmentType: "Full Time",
    jobType: "Work From Home / WFH job"
  },
  {
    id: 2,
    title: "International Business Development",
    company: "Vinayak Ingredients Pvt. Ltd.",
    location: "Mumbai (All Areas) / India",
    type: "Full Time",
    experience: "1 - 2 Years",
    employmentType: "Full Time",
    jobType: "In Office job"
  },
  {
    id: 3,
    title: "Senior Data Engineer (AWS,Pyspark,Python,Redshift)",
    company: "GlobalFoundries",
    location: "Bengaluru / Bangalore / India",
    type: "Full Time - Permanent",
    experience: "0 - 5 Years",
    employmentType: "Full Time",
    jobType: "In Office job"
  },
  {
    id: 4,
    title: "Business Development Executive",
    company: "Smart Enovations",
    location: "Bengaluru / Bangalore / India",
    type: "Full Time - Permanent",
    experience: "0 - 3 Years",
    employmentType: "Full Time",
    jobType: "In Office job"
  }
]

const remoteJobs: Job[] = [
  {
    id: 5,
    title: "Salesforce CPQ Specialist",
    company: "TekWissen India",
    location: "Delhi NCR | Bengaluru / Bangalore | Hyderabad",
    type: "Full Time - Permanent",
    experience: "10 - 12 Years",
    employmentType: "Full Time",
    jobType: "Remote job"
  },
  {
    id: 6,
    title: "Digital Marketing Manager",
    company: "HostBooks Limited",
    location: "Gurgaon / Gurugram / India",
    type: "Full Time - Permanent",
    experience: "10 - 14 Years",
    employmentType: "Full Time",
    jobType: "Hybrid job"
  },
  {
    id: 7,
    title: "MEVN Stack Developer",
    company: "Fixity Technologies",
    location: "Bengaluru / Bangalore | Hyderabad - Secunderabad",
    type: "Full Time - Permanent",
    experience: "5 - 10 Years",
    employmentType: "Full Time",
    jobType: "Remote job"
  },
  {
    id: 8,
    title: "Senior Banking Consultant",
    company: "NeerInfo Solutions",
    location: "Gurgaon / Gurugram / India",
    type: "Full Time",
    experience: "3 - 15 Years",
    employmentType: "Full Time",
    jobType: "Hybrid job"
  }
]

function JobCarousel({ title, jobs }: { title: string, jobs: Job[] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    loop: false,
    skipSnaps: false,
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
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={scrollNext}
            className="rounded-full hover:bg-blue-50"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-6">
          {jobs.map((job) => (
            <div key={job.id} className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%]">
              <Card className="h-full group hover:shadow-lg transition-shadow duration-200">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start gap-4 mb-4">
                    <h3 className="font-semibold text-lg text-blue-600 line-clamp-2">
                      {job.title}
                    </h3>
                    <Badge 
                      variant="secondary" 
                      className={cn(
                        "whitespace-nowrap",
                        job.jobType.includes("Remote") && "bg-purple-100 text-purple-700",
                        job.jobType.includes("Office") && "bg-yellow-100 text-yellow-700",
                        job.jobType.includes("Hybrid") && "bg-green-100 text-green-700",
                        job.jobType.includes("WFH") && "bg-blue-100 text-blue-700"
                      )}
                    >
                      {job.jobType}
                    </Badge>
                  </div>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Building2 className="h-4 w-4 text-gray-400" />
                      <span>{job.company}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Briefcase className="h-4 w-4 text-gray-400" />
                      <span>{job.type}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Clock className="h-4 w-4 text-gray-400" />
                      <span>{job.experience}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <MapPin className="h-4 w-4 text-gray-400" />
                      <span className="line-clamp-1">{job.location}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Button 
                    className="w-full bg-teal-500 hover:bg-teal-600 text-white group-hover:shadow-md transition-all duration-200"
                  >
                    Apply
                  </Button>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export function FeaturedJobsSection() {
  return (
    <section className="pt-8 pb-12 space-y-8 text-center">
      <div className="container px-4 text-center">
        <JobCarousel title="Featured Jobs" jobs={featuredJobs} />
      </div>
      <div className="container px-4">
        <JobCarousel title="Remote Jobs" jobs={remoteJobs} />
      </div>
    </section>
  )
}

