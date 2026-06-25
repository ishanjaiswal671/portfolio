'use client';

import { FadeIn } from '@/components/FadeIn';
import { ContactButton } from '@/components/Buttons';
import { Magnet } from '@/components/Magnet';
import Image from 'next/image';

export function HeroSection() {
  return (
    <section className="h-screen flex flex-col justify-between bg-[#0C0C0C] text-[#D7E2EA] overflow-x-clip relative">
      {/* Navbar */}
      <FadeIn delay={0} y={-20} className="w-full">
        <nav className="flex justify-between items-center px-6 md:px-10 pt-6 md:pt-8">
          <div className="text-sm md:text-lg lg:text-[1.4rem] font-medium uppercase tracking-wider">
            ISHAN
          </div>
          <div className="flex gap-8 md:gap-12">
            {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm md:text-lg lg:text-[1.4rem] font-medium uppercase tracking-wider hover:opacity-70 transition-opacity duration-200"
              >
                {item}
              </a>
            ))}
          </div>
        </nav>
      </FadeIn>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center relative w-full">
        {/* Hero Heading */}
        <FadeIn delay={0.15} y={40} className="w-full overflow-hidden text-center z-5 absolute top-[10%]">
          <h1
            className="
              hero-heading
              font-black uppercase tracking-tight leading-none whitespace-nowrap
              text-[10vw] sm:text-[11vw] md:text-[12vw] lg:text-[13vw]
              mt-6 sm:mt-4 md:-mt-5 px-4
            "
          >
            Hi, i&apos;m ISHAN
          </h1>
        </FadeIn>

        {/* Portrait with Magnet Effect - Centered */}
        <Magnet padding={150} strength={3}>
          <div className="relative w-full h-full flex items-center justify-center z-10">
            <Image
              src="/ishan-face.png.jpeg"
              alt="ISHAN Portrait"
              width={520}
              height={520}
              className="w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px] h-auto rounded-2xl object-cover"
              priority
            />
          </div>
        </Magnet>

        {/* Bottom Section */}
        <div className="absolute bottom-0 w-full left-0 right-0">
          <FadeIn delay={0.35} y={20} className="w-full" as="div">
            <div className="flex justify-between items-end px-6 md:px-10 pb-7 sm:pb-8 md:pb-10">
              <p
                className="
                  font-light uppercase tracking-wide leading-snug
                  text-[clamp(0.75rem,1.4vw,1.5rem)]
                  max-w-[160px] sm:max-w-[220px] md:max-w-[260px]
                "
              >
                an AI/ML engineer with strong C++ and DSA skills, building machine
                learning, deep learning, and NLP solutions
              </p>
              <FadeIn delay={0.5} y={20} as="div">
                <ContactButton />
              </FadeIn>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
