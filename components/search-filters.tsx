"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Search, MapPin, Briefcase, Calendar } from 'lucide-react'
import { Slider } from "@/components/ui/slider"
import { useState } from "react"

export function SearchFilters() {
  const [salaryRange, setSalaryRange] = useState([1200])

  return (
    <div className="w-full bg-zinc-800 p-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="relative">
          <Search className="absolute left-3 top-3 h-4 w-4 text-zinc-400" />
          <Select>
            <SelectTrigger className="w-full bg-zinc-700 border-zinc-600 pl-10 text-white">
              <SelectValue placeholder="Designer" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="designer">Designer</SelectItem>
              <SelectItem value="developer">Developer</SelectItem>
              <SelectItem value="manager">Manager</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="relative">
          <MapPin className="absolute left-3 top-3 h-4 w-4 text-zinc-400" />
          <Select>
            <SelectTrigger className="w-full bg-zinc-700 border-zinc-600 pl-10 text-white">
              <SelectValue placeholder="Work location" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="remote">Remote</SelectItem>
              <SelectItem value="onsite">On-site</SelectItem>
              <SelectItem value="hybrid">Hybrid</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="relative">
          <Briefcase className="absolute left-3 top-3 h-4 w-4 text-zinc-400" />
          <Select>
            <SelectTrigger className="w-full bg-zinc-700 border-zinc-600 pl-10 text-white">
              <SelectValue placeholder="Experience" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="entry">Entry Level</SelectItem>
              <SelectItem value="mid">Mid Level</SelectItem>
              <SelectItem value="senior">Senior Level</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="relative">
          <Calendar className="absolute left-3 top-3 h-4 w-4 text-zinc-400" />
          <Select>
            <SelectTrigger className="w-full bg-zinc-700 border-zinc-600 pl-10 text-white">
              <SelectValue placeholder="Per month" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="fulltime">Full Time</SelectItem>
              <SelectItem value="parttime">Part Time</SelectItem>
              <SelectItem value="contract">Contract</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="mt-4 flex items-center gap-4">
        <span className="text-sm text-zinc-400 min-w-[100px]">Salary range</span>
        <Slider
          defaultValue={[1200]}
          max={20000}
          min={1200}
          step={100}
          className="w-[200px]"
          onValueChange={setSalaryRange}
        />
        <span className="text-sm text-white">${salaryRange[0]} - $20,000</span>
      </div>
    </div>
  )
}

