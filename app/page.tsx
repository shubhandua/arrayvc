"use client";

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
// import { Button } from "@/components/ui/button"
import { CircuitBoard, Github, Linkedin, Twitter, ChevronDown } from "lucide-react"
import Link from "next/link"

const innovatorTypes = ["B2B SaaS", "Pre Seed", "Enterprise", "Technical"]

const carouselItems = [
  {
    title: "Your First Business Development Hire",
    content: "Think of us as your first Business Development hire. Our team of investors, advisors, and mentors is invaluable and contributes to the success of your company and the fund."
  },
  {
    title: "Access to Expertise",
    content: "We provide access to over 200 C-level experts from top public and private companies to help startups from day one."
  },
  {
    title: "Diverse Industry Coverage",
    content: "Our experts come from every major company inside and outside of Silicon Valley, across various industries including health, retail, education, security, SaaS, and communication."
  },
  {
    title: "Comprehensive Support",
    content: "We're committed to providing comprehensive support to ensure the success of your startup, leveraging our extensive network and expertise."
  }
]

export default function ArrayVenture() {
  const [currentInnovator, setCurrentInnovator] = useState(innovatorTypes[0])
  const [currentCarouselItem, setCurrentCarouselItem] = useState(0)

  useEffect(() => {
    const innovatorInterval = setInterval(() => {
      setCurrentInnovator(prev => {
        const currentIndex = innovatorTypes.indexOf(prev)
        return innovatorTypes[(currentIndex + 1) % innovatorTypes.length]
      })
    }, 2000)

    const carouselInterval = setInterval(() => {
      setCurrentCarouselItem(prev => (prev + 1) % carouselItems.length)
    }, 5000)

    return () => {
      clearInterval(innovatorInterval)
      clearInterval(carouselInterval)
    }
  }, [])

  return (
    <div className="min-h-screen bg-black text-white font-mono overflow-hidden relative">
      <div className="absolute inset-0 overflow-hidden">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
          {[...Array(20)].map((_, i) => (
            <motion.circle
              key={i}
              cx={Math.random() * 100 + "%"}
              cy={Math.random() * 100 + "%"}
              r="1"
              fill="white"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{
                repeat: Infinity,
                duration: Math.random() * 3 + 2,
                delay: Math.random() * 2
              }}
            />
          ))}
        </svg>
      </div>
      
      <div className="relative z-10">
        <header className="fixed w-full z-20 bg-black bg-opacity-50 backdrop-blur-md">
          <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
            <motion.div 
              className="flex items-center space-x-2"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <CircuitBoard className="w-6 h-6" />
              <span className="text-xl font-bold">[ARRAY VC]</span>
            </motion.div>
            <motion.div 
              className="space-x-4"
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              
              <Link href="/portfolio" className="hover:text-gray-300 transition-colors">Portfolio</Link>
              <Link href="/team" className="hover:text-gray-300 transition-colors">Team</Link>
              <Link href="/news" className="hover:text-gray-300 transition-colors">News</Link>
            </motion.div>
          </nav>
        </header>
        
        <main className="container mx-auto px-4 pt-20">
          <section id="hero" className="min-h-screen flex flex-col justify-center items-start">
            <div className="max-w-3xl">
              <motion.h1 
                className="text-6xl font-bold mb-4 flex flex-col items-start"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <span>Empowering</span>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentInnovator}
                    className="text-white inline-block"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                  >
                    {currentInnovator}
                  </motion.span>
                </AnimatePresence>
                <span>Innovators</span>
              </motion.h1>
              <motion.p 
                className="text-xl mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                Backing founders building the future
              </motion.p>
              <motion.div 
                className="space-x-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}
              >
                {/* <Button variant="outline" className="bg-white text-black hover:bg-black hover:text-white border-2 border-white transition-colors">
                  Explore Portfolio
                </Button>
                <Button variant="outline" className="bg-white text-black hover:bg-black hover:text-white border-2 border-white transition-colors">
                  Meet the Team
                </Button> */}
              </motion.div>
            </div>
            <motion.div 
              className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <ChevronDown className="w-8 h-8" />
            </motion.div>
          </section>

          <section className="py-20 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between">
            <div className="w-full md:w-1/2 mb-8 md:mb-0">
              <motion.div
                className="w-64 h-64 mx-auto border-2 border-white relative"
                animate={{
                  rotate: [0, 90, 180, 270, 360],
                  borderRadius: ["0%", "25%", "50%", "25%", "0%"],
                }}
                transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
              >
                <motion.div
                  className="absolute inset-2 bg-white"
                  animate={{
                    rotate: [360, 270, 180, 90, 0],
                    borderRadius: ["0%", "25%", "50%", "25%", "0%"],
                  }}
                  transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
                />
              </motion.div>
            </div>
            <div className="w-full md:w-1/2 text-right">
              <h2 className="text-4xl font-bold mb-4">Tell us what the world is going to look like in 10 years</h2>
              <p className="text-xl text-gray-300">
                We invest in smart people with a bold mission who take big risks in large or new markets.
              </p>

              
            </div>
          </section>

          <section className="py-20 border-t border-gray-800">
            <h2 className="text-4xl font-bold mb-8 text-center">Our Twist</h2>
            <div className="relative overflow-hidden bg-white text-black rounded-lg shadow-lg">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentCarouselItem}
                  className="p-8"
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="text-2xl font-bold mb-4">{carouselItems[currentCarouselItem].title}</h3>
                  <p>{carouselItems[currentCarouselItem].content}</p>
                </motion.div>
              </AnimatePresence>
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {carouselItems.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full ${
                      index === currentCarouselItem ? 'bg-black' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </section>
        </main>

        <footer className="relative border-t border-gray-800 py-8 mt-20">
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
    </div>
  )
}

