import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Building2, Clock, MapPin, Briefcase } from "lucide-react"

interface Job {
  id: number
  title: string
  company: string
  location: string
  type: string
  salary: string
  posted: string
}

const jobs: Job[] = [
  {
    id: 1,
    title: "Senior Full Stack Developer",
    company: "TechCorp",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$120k - $160k",
    posted: "2 days ago"
  },
  {
    id: 2,
    title: "UX Designer",
    company: "DesignHub",
    location: "New York, NY",
    type: "Contract",
    salary: "$80k - $100k",
    posted: "1 week ago"
  },
  {
    id: 3,
    title: "DevOps Engineer",
    company: "CloudSys",
    location: "Remote",
    type: "Full-time",
    salary: "$100k - $130k",
    posted: "3 days ago"
  },
  {
    id: 5,
    title: "Product Manager",
    company: "InnovateCo",
    location: "Seattle, WA",
    type: "Full-time",
    salary: "$110k - $150k",
    posted: "5 days ago"
  },
  {
    id: 6,
    title: "Cloud Engineer",
    company: "InnovateCo",
    location: "Seattle, WA",
    type: "Full-time",
    salary: "$110k - $150k",
    posted: "5 days ago"
  },
  {
    id: 7,
    title: "React JS Developer",
    company: "InnovateCo",
    location: "Seattle, WA",
    type: "Full-time",
    salary: "$110k - $150k",
    posted: "5 days ago"
  },
  {
    id: 8,
    title: "Full Stack Developer",
    company: "InnovateCo",
    location: "Seattle, WA",
    type: "Full-time",
    salary: "$110k - $150k",
    posted: "5 days ago"
  }
]

export function FeaturedJobs() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Featured Jobs</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {jobs.map((job) => (
            <Card key={job.id} className="flex flex-col">
              <CardHeader>
                <CardTitle>{job.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                  <Building2 className="h-4 w-4" />
                  <span>{job.company}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400 mt-2">
                  <MapPin className="h-4 w-4" />
                  <span>{job.location}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400 mt-2">
                  <Briefcase className="h-4 w-4" />
                  <span>{job.salary}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400 mt-2">
                  <Clock className="h-4 w-4" />
                  <span>{job.posted}</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Apply Now</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link href="/jobs" passHref>
            <Button size="lg">View All Jobs</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

