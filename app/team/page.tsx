'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
// import { Button } from "@/components/ui/button"
import { CircuitBoard, Github, Linkedin, Twitter, Mail } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const teamMember = {
  name: "Shruti Gandhi",
  role: "Founder & Managing Partner",
  bio: "Shruti Gandhi is the Founder and Managing Partner of Array Ventures. With over 15 years of experience in venture capital and technology, Shruti has a proven track record of identifying and supporting innovative startups. Her expertise spans across various sectors including AI, machine learning, enterprise software, and emerging technologies.",
  image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Shruti-sVZNC7z6q6iS6OaeaalufH06qCn7eT.png",
  linkedin: "https://www.linkedin.com/in/shrutigandhi/",
  twitter: "https://x.com/atShruti",
  email: "shruti@array.vc"
}

const advisors = [
  {
    name: "Lucas Baker",
    role: "Google Deepmind",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Lucas%20Baker-ISyUzT8YJngLMlllbwQzvjPJZ7RYwD.png",
    linkedin: "https://www.linkedin.com/in/tesuji/",
  },
  {
    name: "Anthony Wu",
    role: "Apple",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AnthonyWu-3q514spbEQrUMgFcQzAd2YoiJJHbOf.png",
    linkedin: "https://www.crunchbase.com/person/anthony-wu",
  },
  {
    name: "Dan Janney",
    role: "Alta Partners",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Dan%20Janney-IZXJDddHllyCPVU83zZ1nWieRtZoRu.png",
    linkedin: "https://www.altapartners.com/leadership/dan-janney/",
  },
  {
    name: "Kimberly Ha",
    role: "FTI Consulting",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/KimberleyHa-ZbVmJI4RmOuEEH8YBFTOEsO8TU0d7N.png",
    linkedin: "https://www.linkedin.com/in/kimberlyha/",
  },
  {
    name: "Ellen Rudnick",
    role: "Liberty Mutual Board of Director and Booth",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Ellen%20Rudnick-VNK0NrWkFgn6liTVJOW1NcixLyhpFw.png",
    linkedin: "https://www.linkedin.com/in/ellen-rudnick-364a793/",
  },
  {
    name: "Henning Schulzrinne",
    role: "Former FCC CTO",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Henning-vSSjb7P7HKncED8mOkDx2k1lxXmeIi.png",
    linkedin: "https://www.linkedin.com/in/henningschulzrinne/",
  },
  {
    name: "Christine Schmid",
    role: "Lecturer Executive Master of European and International Business Law",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Christine-LLc6pzEQyisY4HrnGGsvBAbJuJhJAJ.png",
    linkedin: "https://www.linkedin.com/in/dr-christine-schmid-96092416a/?originalSubdomain=de",
  },
]

export default function Team() {
  const [activeSection, setActiveSection] = useState('team')
  const [currentInnovator, setCurrentInnovator] = useState("B2B SaaS")
  const innovatorTypes = ["B2B SaaS", "Pre Seed", "Enterprise", "Technical"]

  useEffect(() => {
    const innovatorInterval = setInterval(() => {
      setCurrentInnovator(prev => {
        const currentIndex = innovatorTypes.indexOf(prev)
        return innovatorTypes[(currentIndex + 1) % innovatorTypes.length]
      })
    }, 2000)

    return () => clearInterval(innovatorInterval)
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
              <Link href="/" className="hover:text-gray-300 transition-colors">Home</Link>
              <Link href="/portfolio" className="hover:text-gray-300 transition-colors">Portfolio</Link>
              <Link href="/team" className="font-bold">Team</Link>
              <Link href="/news" className="hover:text-gray-300 transition-colors">News</Link>
            </motion.div>
          </nav>
        </header>
        
        <main className="container mx-auto px-4 pt-20">
          <section className="py-12">
            <motion.h1 
              className="text-6xl font-bold mb-8 text-center"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Meet Array Ventures
            </motion.h1>
            <motion.div 
              className="flex justify-center space-x-4 mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >

            <div className="flex items-center space-x-4">
              <label>
                <input
                  type="radio"
                  name="section"
                  value="team"
                  checked={activeSection === 'team'}
                  onChange={() => setActiveSection('team')}
                />
                <span className="ml-2">Our Team</span>
              </label>
              <label>
                <input
                  type="radio"
                  name="section"
                  value="advisors"
                  checked={activeSection === 'advisors'}
                  onChange={() => setActiveSection('advisors')}
                />
                <span className="ml-2">Our Advisors</span>
              </label>
            </div>

              {/* <Button 
                variant="outline" 
                className={`bg-white text-black hover:bg-black hover:text-white border-2 border-white transition-colors ${activeSection === 'team' ? 'bg-black text-white' : ''}`}
                onClick={() => setActiveSection('team')}
              >
                Our Team
              </Button>
              <Button 
                variant="outline" 
                className={`bg-white text-black hover:bg-black hover:text-white border-2 border-white transition-colors ${activeSection === 'advisors' ? 'bg-black text-white' : ''}`}
                onClick={() => setActiveSection('advisors')}
              >
                Our Advisors
              </Button> */}
            </motion.div>
          </section>

          <AnimatePresence mode="wait">
            {activeSection === 'team' && (
              <motion.section 
                key="team"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5 }}
                className="py-12"
              >
                <div className="max-w-4xl mx-auto">
                  <div className="bg-gray-900 rounded-lg overflow-hidden shadow-2xl">
                    <div className="md:flex">
                      <div className="md:flex-shrink-0">
                        <Image src={teamMember.image} alt={teamMember.name} width={400} height={400} className="h-full w-full object-cover md:w-48" />
                      </div>
                      <div className="p-8">
                        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{teamMember.role}</div>
                        <h2 className="mt-2 text-3xl leading-tight font-bold text-white">{teamMember.name}</h2>
                        <p className="mt-4 text-gray-300">{teamMember.bio}</p>
                        <div className="mt-6 flex space-x-4">
                          <a href={teamMember.linkedin} target="_blank" rel="noopener noreferrer">
                            <Linkedin className="w-6 h-6 hover:text-blue-400 transition-colors" />
                          </a>
                          <a href={teamMember.twitter} target="_blank" rel="noopener noreferrer">
                            <Twitter className="w-6 h-6 hover:text-blue-400 transition-colors" />
                          </a>
                          <a href={`mailto:${teamMember.email}`}>
                            <Mail className="w-6 h-6 hover:text-blue-400 transition-colors" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.section>
            )}

            {activeSection === 'advisors' && (
              <motion.section 
                key="advisors"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5 }}
                className="py-12"
              >
                <h2 className="text-4xl font-bold mb-12 text-center">Our Advisors</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {advisors.map((advisor, index) => (
                    <motion.div 
                      key={advisor.name}
                      className="bg-gray-900 rounded-lg overflow-hidden shadow-lg"
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Image src={advisor.image} alt={advisor.name} width={400} height={400} className="w-full h-64 object-cover" />
                      <div className="p-6">
                        <h3 className="text-2xl font-bold mb-2">{advisor.name}</h3>
                        <p className="text-gray-400 mb-4">{advisor.role}</p>
                        <div className="flex space-x-4">
                          <a href={advisor.linkedin} target="_blank" rel="noopener noreferrer">
                            <Linkedin className="w-6 h-6 hover:text-blue-400 transition-colors" />
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.section>
            )}
          </AnimatePresence>
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
    </div>
  )
}

// 'use client'

// import { useState, useEffect } from 'react'
// import { motion, AnimatePresence } from 'framer-motion'
// // import { Button } from "@/components/ui/button"
// import { CircuitBoard, Github, Linkedin, Twitter, Mail } from "lucide-react"
// import Link from "next/link"
// import Image from "next/image"

// const teamMember = {
//   name: "Shruti Gandhi",
//   role: "Founder & Managing Partner",
//   bio: "Shruti Gandhi is the Founder and Managing Partner of Array Ventures. With over 15 years of experience in venture capital and technology, Shruti has a proven track record of identifying and supporting innovative startups. Her expertise spans across various sectors including AI, machine learning, enterprise software, and emerging technologies.",
//   image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Shruti-sVZNC7z6q6iS6OaeaalufH06qCn7eT.png",
//   linkedin: "https://www.linkedin.com/in/shrutigandhi/",
//   twitter: "https://twitter.com/atShruti"
// }

// const advisors = [
//   {
//     name: "Lucas Baker",
//     role: "Google Deepmind",
//     image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Lucas%20Baker-ISyUzT8YJngLMlllbwQzvjPJZ7RYwD.png",
//     linkedin: "https://www.linkedin.com/in/lucasbaker/",
//   },
//   {
//     name: "Anthony Wu",
//     role: "Apple",
//     image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AnthonyWu-3q514spbEQrUMgFcQzAd2YoiJJHbOf.png",
//     linkedin: "https://www.linkedin.com/in/anthonywu/",
//   },
//   {
//     name: "Dan Janney",
//     role: "Alta Partners",
//     image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Dan%20Janney-IZXJDddHllyCPVU83zZ1nWieRtZoRu.png",
//     linkedin: "https://www.linkedin.com/in/danjanney/",
//   },
//   {
//     name: "Kimberly Ha",
//     role: "FTI Consulting",
//     image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/KimberleyHa-ZbVmJI4RmOuEEH8YBFTOEsO8TU0d7N.png",
//     linkedin: "https://www.linkedin.com/in/kimberlyha/",
//   },
//   {
//     name: "Ellen Rudnick",
//     role: "Liberty Mutual Board of Director and Booth",
//     image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Ellen%20Rudnick-VNK0NrWkFgn6liTVJOW1NcixLyhpFw.png",
//     linkedin: "https://www.linkedin.com/in/ellenrudnick/",
//   },
//   {
//     name: "Henning Schulzrinne",
//     role: "Former FCC CTO",
//     image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Henning-vSSjb7P7HKncED8mOkDx2k1lxXmeIi.png",
//     linkedin: "https://www.linkedin.com/in/henningschulzrinne/",
//   },
//   {
//     name: "Christine Schmid",
//     role: "Lecturer Executive Master of European and International Business Law",
//     image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Christine-LLc6pzEQyisY4HrnGGsvBAbJuJhJAJ.png",
//     linkedin: "https://www.linkedin.com/in/christineschmid/",
//   },
// ]

// export default function Team() {
//   const [activeSection, setActiveSection] = useState('team')
//   const [currentInnovator, setCurrentInnovator] = useState("B2B SaaS")
//   const innovatorTypes = ["B2B SaaS", "Pre Seed", "Enterprise", "Technical", "Visionary"]

//   useEffect(() => {
//     const innovatorInterval = setInterval(() => {
//       setCurrentInnovator(prev => {
//         const currentIndex = innovatorTypes.indexOf(prev)
//         return innovatorTypes[(currentIndex + 1) % innovatorTypes.length]
//       })
//     }, 2000)

//     return () => clearInterval(innovatorInterval)
//   })

//   return (
//     <div className="min-h-screen bg-black text-white font-mono overflow-hidden relative">
//       <div className="absolute inset-0 overflow-hidden">
//         <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
//           <defs>
//             <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
//               <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
//             </pattern>
//           </defs>
//           <rect width="100%" height="100%" fill="url(#grid)" />
//           {[...Array(20)].map((_, i) => (
//             <motion.circle
//               key={i}
//               cx={Math.random() * 100 + "%"}
//               cy={Math.random() * 100 + "%"}
//               r="1"
//               fill="white"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: [0, 1, 0] }}
//               transition={{
//                 repeat: Infinity,
//                 duration: Math.random() * 3 + 2,
//                 delay: Math.random() * 2
//               }}
//             />
//           ))}
//         </svg>
//       </div>
      
//       <div className="relative z-10">
//         <header className="fixed w-full z-20 bg-black bg-opacity-50 backdrop-blur-md">
//           <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
//             <motion.div 
//               className="flex items-center space-x-2"
//               initial={{ x: -20, opacity: 0 }}
//               animate={{ x: 0, opacity: 1 }}
//               transition={{ duration: 0.5 }}
//             >
//               <CircuitBoard className="w-6 h-6" />
//               <span className="text-xl font-bold">[ARRAY VC]</span>
//             </motion.div>
//             <motion.div 
//               className="space-x-4"
//               initial={{ x: 20, opacity: 0 }}
//               animate={{ x: 0, opacity: 1 }}
//               transition={{ duration: 0.5, delay: 0.2 }}
//             >
//               <Link href="/" className="hover:text-gray-300 transition-colors">Home</Link>
//               <Link href="/portfolio" className="hover:text-gray-300 transition-colors">Portfolio</Link>
//               <Link href="/team" className="font-bold">Team</Link>
//               <Link href="/news" className="hover:text-gray-300 transition-colors">News</Link>
//             </motion.div>
//           </nav>
//         </header>
        
//         <main className="container mx-auto px-4 pt-20">
//           <section className="py-12">
//             <motion.h1 
//               className="text-6xl font-bold mb-8 text-center"
//               initial={{ opacity: 0, y: -20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5 }}
//             >
//               Meet Array Ventures
//             </motion.h1>
//             <motion.div 
//               className="flex justify-center space-x-4 mb-12"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.5, duration: 0.5 }}
//             >
//               {/* <Button 
//                 variant="outline" 
//                 className={`bg-white text-black hover:bg-black hover:text-white border-2 border-white transition-colors ${activeSection === 'team' ? 'bg-black text-white' : ''}`}
//                 onClick={() => setActiveSection('team')}
//               >
//                 Our Team
//               </Button>
//               <Button 
//                 variant="outline" 
//                 className={`bg-white text-black hover:bg-black hover:text-white border-2 border-white transition-colors ${activeSection === 'advisors' ? 'bg-black text-white' : ''}`}
//                 onClick={() => setActiveSection('advisors')}
//               >
//                 Our Advisors
//               </Button> */}
//             </motion.div>
//           </section>

//           <AnimatePresence mode="wait">
//             {activeSection === 'team' && (
//               <motion.section 
//                 key="team"
//                 initial={{ opacity: 0, y: 50 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -50 }}
//                 transition={{ duration: 0.5 }}
//                 className="py-12"
//               >
//                 <div className="max-w-4xl mx-auto">
//                   <div className="bg-gray-900 rounded-lg overflow-hidden shadow-2xl">
//                     <div className="md:flex">
//                       <div className="md:flex-shrink-0">
//                         <Image src={teamMember.image} alt={teamMember.name} width={400} height={400} className="h-full w-full object-cover md:w-48" />
//                       </div>
//                       <div className="p-8">
//                         <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{teamMember.role}</div>
//                         <h2 className="mt-2 text-3xl leading-tight font-bold text-white">{teamMember.name}</h2>
//                         <p className="mt-4 text-gray-300">{teamMember.bio}</p>
//                         <div className="mt-6 flex space-x-4">
//                           <a href={teamMember.linkedin} target="_blank" rel="noopener noreferrer">
//                             <Linkedin className="w-6 h-6 hover:text-blue-400 transition-colors" />
//                           </a>
//                           <a href={teamMember.twitter} target="_blank" rel="noopener noreferrer">
//                             <Twitter className="w-6 h-6 hover:text-blue-400 transition-colors" />
//                           </a>
//                           <a href={`mailto:shruti@arrayvc.com`}>
//                             <Mail className="w-6 h-6 hover:text-blue-400 transition-colors" />
//                           </a>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </motion.section>
//             )}

//             {activeSection === 'advisors' && (
//               <motion.section 
//                 key="advisors"
//                 initial={{ opacity: 0, y: 50 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -50 }}
//                 transition={{ duration: 0.5 }}
//                 className="py-12"
//               >
//                 <h2 className="text-4xl font-bold mb-12 text-center">Our Advisors</h2>
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//                   {advisors.map((advisor, index) => (
//                     <motion.div 
//                       key={advisor.name}
//                       className="bg-gray-900 rounded-lg overflow-hidden shadow-lg"
//                       initial={{ opacity: 0, y: 50 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       transition={{ delay: index * 0.1 }}
//                     >
//                       <Image src={advisor.image} alt={advisor.name} width={400} height={400} className="w-full h-64 object-cover" />
//                       <div className="p-6">
//                         <h3 className="text-2xl font-bold mb-2">{advisor.name}</h3>
//                         <p className="text-gray-400 mb-4">{advisor.role}</p>
//                         <div className="flex space-x-4">
//                           <a href={advisor.linkedin} target="_blank" rel="noopener noreferrer">
//                             <Linkedin className="w-6 h-6 hover:text-blue-400 transition-colors" />
//                           </a>
//                         </div>
//                       </div>
//                     </motion.div>
//                   ))}
//                 </div>
//               </motion.section>
//             )}
//           </AnimatePresence>
//         </main>

//         <footer className="border-t border-gray-800 py-8 mt-20">
//           <div className="container mx-auto px-4 flex justify-between items-center">
//             <div>&copy; {new Date().getFullYear()} Array Venture. All rights reserved.</div>
//             <div className="flex space-x-4">
//               <a href="#" aria-label="Twitter"><Twitter className="w-5 h-5 hover:text-gray-300 transition-colors" /></a>
//               <a href="#" aria-label="LinkedIn"><Linkedin className="w-5 h-5 hover:text-gray-300 transition-colors" /></a>
//               <a href="#" aria-label="GitHub"><Github className="w-5 h-5 hover:text-gray-300 transition-colors" /></a>
//             </div>
//           </div>
//         </footer>
//       </div>
//     </div>
//   )
// }