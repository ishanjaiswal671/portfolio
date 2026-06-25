'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import { LiveProjectButton } from '@/components/Buttons';

const projects = [
  {
    number: '01',
    name: 'Video Note Extractor',
    category: 'AI Project',
    images: {
      col1: [
        '/Screenshot 2026-06-25 133219.png',
        '/Screenshot 2026-06-25 133149.png',
      ],
      col2: '/Screenshot 2026-06-25 133101.png',
    },
  },
  {
    number: '02',
    name: 'Legal Document Analyzer',
    category: 'AI Project',
    images: {
      col1: [
        'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85',
        'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85',
      ],
      col2: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85',
    },
  },
  {
    number: '03',
    name: 'AI Financial Research Analyst',
    category: 'AI Project',
    images: {
      col1: [
        'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85',
        'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85',
      ],
      col2: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85',
    },
  },
  {
    number: '04',
    name: 'Government Scheme Finder for Families',
    category: 'AI Project',
    images: {
      col1: [
        'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85',
        'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85',
      ],
      col2: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85',
    },
  },
  {
    number: '05',
    name: 'AI Private Travel Concierge',
    category: 'AI Project',
    images: {
      col1: [
        'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85',
        'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85',
      ],
      col2: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85',
    },
  },
];

function ProjectCard({ project, index }: { project: (typeof projects)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start center', 'end center'],
  });

  const scale = useTransform(
    scrollYProgress,
    [0, 1],
    [1, 1 - (projects.length - 1 - index) * 0.03]
  );

  return (
    <motion.div
      ref={ref}
      style={{
        scale,
        top: `${index * 28}px`,
      }}
      className="sticky top-24 md:top-32 h-[92vh] flex items-center justify-center px-4 sm:px-6 md:px-8 z-20"
    >
      <div className="w-full bg-[#0C0C0C] rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] p-4 sm:p-6 md:p-8 overflow-hidden">
        {/* Header */}
        <div className="flex items-start justify-between gap-4 mb-4 sm:mb-6 md:mb-8">
          <div className="flex-1">
            <p className="font-black text-[clamp(2rem,8vw,120px)] leading-none text-[#D7E2EA] mb-2">
              {project.number}
            </p>
            <div className="flex flex-col gap-1">
              <p className="text-xs sm:text-sm md:text-base text-[#D7E2EA]/60 uppercase tracking-widest">
                {project.category}
              </p>
              <h3 className="text-lg sm:text-xl md:text-2xl font-medium uppercase text-[#D7E2EA]">
                {project.name}
              </h3>
            </div>
          </div>
          <LiveProjectButton />
        </div>

        {/* Images Grid */}
        <div className="flex gap-4 h-[48vh] sm:h-[52vh] md:h-[56vh] min-h-0 overflow-hidden">
          {/* Left Column - 2 images */}
          <div className="w-2/5 h-full min-h-0 flex flex-col gap-4">
            <div className="relative flex-[2] min-h-0 overflow-hidden rounded-[40px] sm:rounded-[50px] md:rounded-[60px]">
              <Image
                src={project.images.col1[0]}
                alt={`${project.name} image 1`}
                fill
                className="object-cover"
                sizes="40vw"
              />
            </div>
            <div className="relative flex-[3] min-h-0 overflow-hidden rounded-[40px] sm:rounded-[50px] md:rounded-[60px]">
              <Image
                src={project.images.col1[1]}
                alt={`${project.name} image 2`}
                fill
                className="object-cover"
                sizes="40vw"
              />
            </div>
          </div>

          {/* Right Column - 1 tall image */}
          <div className="relative w-3/5 h-full min-h-0 overflow-hidden rounded-[40px] sm:rounded-[50px] md:rounded-[60px]">
            <Image
              src={project.images.col2}
              alt={`${project.name} image 3`}
              fill
              className="object-cover"
              sizes="60vw"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function ProjectsSection() {
  return (
    <section id="projects" className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 px-5 sm:px-8 md:px-10 pt-20 pb-20 relative z-10">
      {/* Heading */}
      <div className="max-w-7xl mx-auto mb-20 sm:mb-24 md:mb-32">
        <h2 className="hero-heading font-black uppercase leading-none tracking-tight text-[clamp(3rem,12vw,160px)] text-[#D7E2EA]">
          Project
        </h2>
      </div>

      {/* Cards Stack */}
      <div className="max-w-7xl mx-auto relative" style={{ height: `${projects.length * 100}vh` }}>
        {projects.map((project, idx) => (
          <ProjectCard key={project.number} project={project} index={idx} />
        ))}
      </div>
    </section>
  );
}
