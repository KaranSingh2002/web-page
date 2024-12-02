import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Linkedin, Youtube, Instagram } from 'lucide-react'
import whatsapp from './whatsapp.png'
import telegram from './telegram.png'
import startup from './Startup.png'
export function Footer() {
  return (
    <footer className="w-full bg-white border-t">
      <div className="container px-4 py-8">
        {/* Jobs Location Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="font-semibold text-lg mb-4 text-gray-900">JOBS IN INDIA</h3>
            <div className="flex flex-wrap gap-2">
              {[
                'Mumbai', 'Delhi', 'Ajmer', 'Pune', 'Hyderabad', 'Agra', 'Chennai',
                'Kolkata', 'Indore', 'Gurugram', 'Jaipur', 'Ahmedabad'
              ].map((city) => (
                <Link
                  key={city}
                  href="#"
                  className="text-zinc-600 hover:text-blue-700 transition-colors"
                >
                  #{city}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4 text-gray-900">INTERNATIONAL JOBS</h3>
            <div className="flex flex-wrap gap-2">
              {[
                'Africa', 'USA', 'UK', 'Australia', 'Canada', 'Singapore',
                'Dubai', 'Saudi Arabia', 'New Zealand'
              ].map((country) => (
                <Link
                  key={country}
                  href="#"
                  className="text-zinc-600 hover:text-blue-700 transition-colors"
                >
                  #{country}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="border-t border-b py-8 mb-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <p className="font-bold text-3xl text-blue-600">31004</p>
              <p className="text-sm text-gray-600">Jobs Posted</p>
            </div>
            <div>
              <p className="font-bold text-3xl text-blue-600">15153</p>
              <p className="text-sm text-gray-600">Jobs Filled</p>
            </div>
            <div>
              <p className="font-bold text-3xl text-blue-600">19768</p>
              <p className="text-sm text-gray-600">Employers</p>
            </div>
            <div>
              <p className="font-bold text-3xl text-blue-600">1293690</p>
              <p className="text-sm text-gray-600">Active Users</p>
            </div>
          </div>
        </div>

        {/* Disclaimer Section */}
        <div className="mb-8 text-sm text-gray-600">
          <p className="mb-4">
            <span className="font-semibold">Disclaimer:</span> All Trademarks and Logos are the property of their respective owners, depicted here purely for representation purpose.
            Jobringer.com has taken all reasonable steps to ensure that information on this site is genuine. Job Applicants are advised to evaluate
            independently. Jobringer.com shall not have any responsibility in this regard. All Jobseeker services are strictly designed & meant only for job
            search assistance and to maximize the chances for the jobseekers to get their dream job. All Job Seeker Credentials and Employment
            Opportunities are subject to individual merit & evaluation. We do not guarantee any job to any jobseeker.
          </p>
        </div>

        {/* Social Media and Recognition */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <div className="flex items-center gap-2">
            <span className="text-gray-600">Follow us on</span>
            <div className="flex space-x-2">
  {/* WhatsApp Icon */}
  <Link
  href="#"
  className="bg-slate-600 p-1 rounded-full w-8 h-8 flex items-center justify-center"
  aria-label="WhatsApp"
>
  <Image
    src={whatsapp}
    alt="WhatsApp"
    className="h-4 w-4"
  />
</Link>

  {/* Facebook Icon */}
  <Link
    href="#"
    className="bg-slate-600 p-1 rounded-full w-8 h-8 flex items-center justify-center"
    aria-label="Facebook"
  >
    <Facebook className="h-4 w-4 text-white" />
  </Link>

  {/* Twitter Icon */}
  <Link
    href="#"
    className="bg-slate-600 p-1 rounded-full w-8 h-8 flex items-center justify-center"
    aria-label="Twitter"
  >
    <Twitter className="h-4 w-4 text-white" />
  </Link>

  {/* Instagram Icon */}
  <Link
    href="#"
    className="bg-slate-600 p-1 rounded-full w-8 h-8 flex items-center justify-center"
    aria-label="Instagram"
  >
    <Instagram className="h-4 w-4 text-white" />
  </Link>

  {/* LinkedIn Icon */}
  <Link
    href="#"
    className="bg-slate-600 p-1 rounded-full w-8 h-8 flex items-center justify-center"
    aria-label="LinkedIn"
  >
    <Linkedin className="h-4 w-4 text-white" />
  </Link>

  {/* YouTube Icon */}
  <Link
    href="#"
    className="bg-slate-600 p-1 rounded-full w-8 h-8 flex items-center justify-center"
    aria-label="YouTube"
  >
    <Youtube className="h-4 w-4 text-white" />
  </Link>

  {/* Telegram Icon */}
  <Link
  href="#"
  className="bg-slate-600 p-1 rounded-full w-8 h-8 flex items-center justify-center"
  aria-label="Telegram"
>
  <Image
    src={telegram}
    alt="WhatsApp"
    className="h-4 w-4"
  />
</Link>
</div>


          </div>
          <div className="flex items-center gap-2">
            <span className="text-gray-600">Recognized By</span>
            <Image
              src={startup}
              alt="Startup India Logo"
              width={210}
              height={40}
              className="object-contain"
            />
          </div>
        </div>

        {/* Bottom Links */}
        <div className="flex flex-wrap justify-center gap-4 text-sm mb-4">
          <Link href="/terms" className="text-gray-600 hover:text-blue-600">Terms and conditions</Link>
          <span className="text-gray-300">|</span>
          <Link href="/privacy" className="text-gray-600 hover:text-blue-600">Privacy Policy</Link>
          <span className="text-gray-300">|</span>
          <Link href="/refund" className="text-gray-600 hover:text-blue-600">Refund / Cancellation Policy</Link>
          <span className="text-gray-300">|</span>
          <Link href="/about" className="text-gray-600 hover:text-blue-600">About Us</Link>
          <span className="text-gray-300">|</span>
          <Link href="/contact" className="text-gray-600 hover:text-blue-600">Contact Us</Link>
          <span className="text-gray-300">|</span>
          <Link href="/faq" className="text-gray-600 hover:text-blue-600">FAQ</Link>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-gray-600">
          <p>© All Rights Reserved @ 2024.</p>
        </div>
      </div>
    </footer>
  )
}

