'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
//// import { Button } from "@/components/ui/button"
import { CircuitBoard, Github, Linkedin, Twitter, ChevronLeft, ChevronRight, Calendar, ExternalLink } from "lucide-react"
import Link from "next/link" // //
import Image from "next/image"

// Sample data for LinkedIn posts
const linkedinPosts = [
  {
    id: 1,
    content: "Excited to announce our latest investment in AI-driven healthcare solutions! #VentureCapital #HealthTech",
    date: "2023-06-15",
    likes: 250,
    comments: 45,
    link: "https://www.linkedin.com/posts/shrutigandhi_venturecapital-healthtech-activity-7076543210987654321-abcd"
  },
  {
    id: 2,
    content: "Join me at the upcoming Tech Innovators Summit where I'll be speaking about the future of B2B SaaS. #TechInnovation #B2BSaaS",
    date: "2023-06-10",
    likes: 180,
    comments: 32,
    link: "https://www.linkedin.com/posts/shrutigandhi_techinnovation-b2bsaas-activity-7075432109876543210-efgh"
  },
  {
    id: 3,
    content: "Reflecting on the incredible journey of our portfolio company, XYZ Tech, as they announce their Series B funding. Proud to be part of their growth story! #StartupSuccess",
    date: "2023-06-05",
    likes: 320,
    comments: 58,
    link: "https://www.linkedin.com/posts/shrutigandhi_startupsuccess-activity-7074321098765432109-ijkl"
  }
]

// Sample data for upcoming events
const upcomingEvents = [
  {
    id: 1,
    name: "AI in Enterprise: The Next Frontier",
    date: "2023-07-15",
    time: "2:00 PM - 4:00 PM PST",
    location: "Virtual Event",
    description: "Join us for an insightful discussion on how AI is transforming enterprise solutions.",
    link: "https://arrayvc.com/events/ai-in-enterprise"
  },
  {
    id: 2,
    name: "Founder Fireside Chat: Scaling B2B SaaS",
    date: "2023-07-28",
    time: "5:30 PM - 7:00 PM PST",
    location: "Array Ventures Office, San Francisco",
    description: "Learn from successful founders about the challenges and strategies in scaling B2B SaaS companies.",
    link: "https://arrayvc.com/events/founder-fireside-chat"
  },
  {
    id: 3,
    name: "Tech Innovators Summit 2023",
    date: "2023-08-10",
    time: "9:00 AM - 5:00 PM PST",
    location: "Moscone Center, San Francisco",
    description: "A day-long summit featuring talks from industry leaders and showcasing cutting-edge technologies.",
    link: "https://arrayvc.com/events/tech-innovators-summit-2023"
  }
]

// Sample data for press coverage
const pressCoverage = [
  {
    id: 1,
    title: "Array Ventures' Shruti Gandhi on the Future of Enterprise Tech",
    publication: "TechCrunch",
    date: "2023-06-20",
    link: "https://techcrunch.com/2023/06/20/array-ventures-shruti-gandhi-on-the-future-of-enterprise-tech"
  },
  {
    id: 2,
    title: "How Array Ventures is Reshaping Early-Stage Investing",
    publication: "Forbes",
    date: "2023-06-15",
    link: "https://www.forbes.com/sites/forbesdigitalcovers/2023/06/15/how-array-ventures-is-reshaping-early-stage-investing"
  },
  {
    id: 3,
    title: "Array Ventures' Latest Fund Focuses on AI and Machine Learning Startups",
    publication: "VentureBeat",
    date: "2023-06-10",
    link: "https://venturebeat.com/2023/06/10/array-ventures-latest-fund-focuses-on-ai-and-machine-learning-startups"
  }
]

export default function News() {
  const [currentLinkedinPost, setCurrentLinkedinPost] = useState(0)
  const [currentPressArticle, setCurrentPressArticle] = useState(0)

  useEffect(() => {
    const linkedinInterval = setInterval(() => {
      setCurrentLinkedinPost((prev) => (prev + 1) % linkedinPosts.length)
    }, 10000)

    const pressInterval = setInterval(() => {
      setCurrentPressArticle((prev) => (prev + 1) % pressCoverage.length)
    }, 8000)

    return () => {
      clearInterval(linkedinInterval)
      clearInterval(pressInterval)
    }
  }, [])

  return (
    <div className="min-h-screen bg-black text-white font-mono">
      <header className="border-b border-gray-800">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <CircuitBoard className="w-6 h-6" />
            <span className="text-xl font-bold">[ARRAY VC]</span>
          </Link>
          <div className="space-x-4">
            <Link href="/portfolio" className="hover:text-gray-300 transition-colors">Portfolio</Link>
            <Link href="/team" className="hover:text-gray-300 transition-colors">Team</Link>
            <Link href="/news" className="font-bold">News</Link>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-12">
        <h1 className="text-6xl font-bold mb-12 text-center">Array Ventures News</h1>

        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-8">Latest from Shruti</h2>
          <div className="relative bg-gray-900 rounded-lg p-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentLinkedinPost}
                className="flex flex-col items-start"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-lg mb-4">{linkedinPosts[currentLinkedinPost].content}</p>
                <div className="flex justify-between items-center w-full">
                  <span className="text-sm text-gray-400">{linkedinPosts[currentLinkedinPost].date}</span>
                  <div className="flex items-center space-x-4">
                    <span className="text-sm text-gray-400">{linkedinPosts[currentLinkedinPost].likes} Likes</span>
                    <span className="text-sm text-gray-400">{linkedinPosts[currentLinkedinPost].comments} Comments</span>
                  </div>
                </div>
                <a 
                  href={linkedinPosts[currentLinkedinPost].link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-4 flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                >
                  View on LinkedIn
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        <div className="grid md:grid-cols-2 gap-12">
          <section>
            <h2 className="text-4xl font-bold mb-8">Upcoming Events</h2>
            <div className="space-y-8">
              {upcomingEvents.map((event) => (
                <div key={event.id} className="bg-gray-900 rounded-lg p-6">
                  <h3 className="text-2xl font-bold mb-2">{event.name}</h3>
                  <p className="text-gray-400 mb-2">
                    <Calendar className="inline-block mr-2 w-4 h-4" />
                    {event.date} | {event.time}
                  </p>
                  <p className="text-gray-400 mb-4">{event.location}</p>
                  <p className="mb-4">{event.description}</p>
                  <a 
                    href={event.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 transition-colors flex items-center"
                  >
                    Learn More & Register
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-4xl font-bold mb-8">Press Coverage</h2>
            <div className="relative bg-gray-900 rounded-lg p-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentPressArticle}
                  className="flex flex-col items-start"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="text-2xl font-bold mb-2">{pressCoverage[currentPressArticle].title}</h3>
                  <p className="text-gray-400 mb-4">{pressCoverage[currentPressArticle].publication}</p>
                  <p className="text-sm text-gray-400 mb-4">{pressCoverage[currentPressArticle].date}</p>
                  <a 
                    href={pressCoverage[currentPressArticle].link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 transition-colors flex items-center"
                  >
                    Read Full Article
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </motion.div>
              </AnimatePresence>
            </div>
          </section>
        </div>
      </main>

      <footer className="border-t border-gray-800 py-8 mt-20">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div>&copy; {new Date().getFullYear()} Array Venture. All rights reserved.</div>
          <div className="flex space-x-4">
            <a href="#" aria-label="Twitter"><Twitter className="w-5 h-5 hover:text-gray-300 transition-colors" /></a>
            <a href="#" aria-label="LinkedIn"><Linkedin className="w-5 h-5 hover:text-gray-300 transition-colors" /></a>
            <a href="#" aria-label="GitHub"><Github className="w-5 h-5 hover:text-gray-300 transition-colors" /></a>
          </div>
        </div>
      </footer>
    </div>
  )
}