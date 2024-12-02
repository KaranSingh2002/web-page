import Image from "next/image"
import Link from "next/link"
const employers = [
  { name: "Knight Corp", logo: "/employers/2.png", url: "#" },
  { name: "NDPS School", logo: "/employers/3.png", url: "#" },
  { name: "Steve's AI Lab", logo: "/employers/5.png", url: "#" },
  { name: "Robot Tech", logo: "/employers/micro.png", url: "#" },
  { name: "9LAB", logo: "/employers/net.png", url: "#" },
  { name: "Mavip Group", logo: "/employers/6.png", url: "#" },
  { name: "Elicit", logo: "/employers/ama.png", url: "#" },
  { name: "JB Corp", logo: "/employers/amulo.png", url: "#" },
  // Duplicate the list to create a seamless loop
  { name: "Knight Corp", logo: "/employers/2.png", url: "#" },
  { name: "NDPS School", logo: "/employers/3.png", url: "#" },
  { name: "Steve's AI Lab", logo: "/employers/5.png", url: "#" },
  { name: "Robot Tech", logo: "/employers/micro.png", url: "#" },
  { name: "9LAB", logo: "/employers/net.png", url: "#" },
  { name: "Mavip Group", logo: "/employers/6.png", url: "#" },
  { name: "Elicit", logo: "/employers/ama.png", url: "#" },
  { name: "JB Corp", logo: "/employers/amulo.png", url: "#" },
]

export function FeaturedEmployers() {
  return (
    <section className="py-12 bg-white overflow-hidden">
      <div className="container px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          <span className="text-gray-900">FEATURED</span>{" "}
          <span className="text-blue-600">EMPLOYERS</span>
        </h2>
        <div className="relative">
          <div className="flex animate-scroll">
            {employers.map((employer, index) => (
              <Link
                key={`${employer.name}-${index}`}
                href={employer.url}
                className="flex-shrink-0 group mx-3"
              >
                <div className="w-[200px] h-[120px] bg-white rounded-lg border p-4 flex items-center justify-center transition-shadow hover:shadow-md">
                  <Image
                    src={employer.logo}
                    alt={`${employer.name} logo`}
                    width={150}
                    height={80}
                    className="object-contain max-h-[80px] group-hover:scale-105 transition-transform"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

