import { Button } from "@/components/ui/button"
import { Bookmark } from 'lucide-react'

interface JobCardProps {
  date: string
  company: string
  position: string
  tags: string[]
  location: string
  salary: string
  backgroundColor: string
}

export function JobCard({
  date,
  company,
  position,
  tags,
  location,
  salary,
  backgroundColor
}: JobCardProps) {
  return (
    <div 
      className={`${backgroundColor} rounded-2xl p-6 flex flex-col h-[400px] transition-shadow hover:shadow-lg`}
    >
      <div className="flex justify-between items-start mb-4">
        <time className="text-sm text-gray-600" dateTime={date}>
          {date}
        </time>
        <Button 
          variant="ghost" 
          size="icon"
          className="text-gray-400 hover:text-gray-600"
          aria-label="Bookmark job"
        >
          <Bookmark className="h-5 w-5" />
        </Button>
      </div>

      <div className="mb-2">
        <span className="text-sm font-medium text-gray-700">{company}</span>
      </div>

      <h3 className="text-xl font-semibold mb-3 text-gray-900 line-clamp-2">{position}</h3>

      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 rounded-full bg-white/30 text-sm text-gray-700"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-auto">
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm text-gray-600">{location}</span>
          <span className="font-semibold text-gray-900">₹{salary}</span>
        </div>

        <Button 
          variant="default" 
          className="w-full bg-zinc-900 text-white hover:bg-zinc-800"
        >
          Details
        </Button>
      </div>
    </div>
  )
}

