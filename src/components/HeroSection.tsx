import React from 'react'
import Link from 'next/link'
import Sliderone from './Sliderone'

function HeroSection() {
  return (
    <div className="p-4 mx-auto relative z-10 w-full pt-10 md:pt-20 px-2">
          <div className="text-4xl pb-5 md:text-7xl px-6 text-center  text-[#39FF14] bg-clip-text text-transparent bg-gradient-to-b
                        from-neutral-50 to bg-neutral-400 bg-opacity-50"
          >
            Great, grow, and <br /> scale your bussiness
          </div>

        <p className="text-center mt-6 text-lg font-normal text-neutral-300 max-w-lg mx-auto px-4">
          Custom tailored solutions for your business. We are a team of creativness who are excited to help you grow your bussiness.
        </p>

        <Link href="/book" className="flex items-center text-white hover:text-[#39FF14] justify-center w-48 p-2 mx-auto my-6 border-4 border-[#39FF14] rounded-full cursor-pointer">

          Book a Call

        </Link>

      </div>

    
  )
}

export default HeroSection