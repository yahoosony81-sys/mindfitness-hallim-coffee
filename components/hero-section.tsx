"use client"

import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image

          src="/images/hero-bg.jpg"
          alt="커피한잔 - PT 트레이닝 전문 관리"

         
          

          fill
          className="object-cover object-center"
          priority
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 py-20 text-center">
        {/* Badge */}
        <div className="mb-8 rounded-full bg-orange-500/90 px-6 py-2.5 backdrop-blur-sm">
          <span className="text-sm font-semibold tracking-wide text-white">
            한림점 ONLY 특별 프로그램
          </span>
        </div>

        {/* Main Title */}
        <h1 className="mb-6 max-w-4xl text-balance text-4xl font-extrabold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl xl:text-7xl">
          <span className="bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent">

            커피 한잔 가격에
          </span>
          <br />
          PT 관리 받으세요

            
        
        

        </h1>

        {/* Subtitle */}
        <p className="mb-12 max-w-2xl text-pretty text-lg leading-relaxed text-white/90 md:text-xl lg:text-2xl">
          딱 <span className="font-bold text-orange-300">25분</span>, 한림점에서만 만나는 특별한 관리 시스템
        </p>

        {/* Trust Indicators */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-white/70">
          <div className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-400">
              <path d="M20 6 9 17l-5-5" />
            </svg>
            <span>전문 트레이너 상주</span>
          </div>
          <div className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-400">
              <path d="M20 6 9 17l-5-5" />
            </svg>
            <span>1:1 맞춤 관리</span>
          </div>
          <div className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-400">
              <path d="M20 6 9 17l-5-5" />
            </svg>
            <span>합리적인 가격</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </div>
    </section>
  )
}
