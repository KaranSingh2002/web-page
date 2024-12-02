import { Checkbox } from "@/components/ui/checkbox"

export function SidebarFilters() {
  return (
    <div className="w-64 p-6 bg-zinc-800 rounded-lg">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-white">Filters</h2>
        <button className="text-sm text-zinc-400 hover:text-white">Clear all</button>
      </div>
      
      <div className="space-y-6">
        <div>
          <h3 className="text-sm text-zinc-400 mb-3">Working schedule</h3>
          <div className="space-y-2">
            <div className="flex items-center">
              <Checkbox id="fulltime" className="mr-2" />
              <label htmlFor="fulltime" className="text-sm text-white">Full time</label>
            </div>
            <div className="flex items-center">
              <Checkbox id="parttime" className="mr-2" />
              <label htmlFor="parttime" className="text-sm text-white">Part time</label>
            </div>
            <div className="flex items-center">
              <Checkbox id="internship" className="mr-2" />
              <label htmlFor="internship" className="text-sm text-white">Internship</label>
            </div>
            <div className="flex items-center">
              <Checkbox id="projectwork" className="mr-2" />
              <label htmlFor="projectwork" className="text-sm text-white">Project work</label>
            </div>
            <div className="flex items-center">
              <Checkbox id="volunteering" className="mr-2" />
              <label htmlFor="volunteering" className="text-sm text-white">Volunteering</label>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-sm text-zinc-400 mb-3">Employment type</h3>
          <div className="space-y-2">
            <div className="flex items-center">
              <Checkbox id="fullday" className="mr-2" />
              <label htmlFor="fullday" className="text-sm text-white">Full day</label>
            </div>
            <div className="flex items-center">
              <Checkbox id="flexible" className="mr-2" />
              <label htmlFor="flexible" className="text-sm text-white">Flexible schedule</label>
            </div>
            <div className="flex items-center">
              <Checkbox id="shiftwork" className="mr-2" />
              <label htmlFor="shiftwork" className="text-sm text-white">Shift work</label>
            </div>
            <div className="flex items-center">
              <Checkbox id="distant" className="mr-2" />
              <label htmlFor="distant" className="text-sm text-white">Distant work</label>
            </div>
            <div className="flex items-center">
              <Checkbox id="shiftmethod" className="mr-2" />
              <label htmlFor="shiftmethod" className="text-sm text-white">Shift method</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

