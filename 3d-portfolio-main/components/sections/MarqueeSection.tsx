'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';

const images = [
  'https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif',
  'https://motionsites.ai/assets/hero-codenest-preview-Cgppc2qV.gif',
  'https://motionsites.ai/assets/hero-vex-ventures-preview-BczMFIiw.gif',
  'https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif',
  'https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif',
  'https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif',
  'https://motionsites.ai/assets/hero-vitara-preview-Cjz2QYyU.gif',
  'https://motionsites.ai/assets/hero-terra-preview-BFjrCr7T.gif',
  'https://motionsites.ai/assets/hero-skyelite-preview-DHaZIgUv.gif',
  'https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif',
  'https://motionsites.ai/assets/hero-designpro-preview-D8c5_een.gif',
  'https://motionsites.ai/assets/hero-stellar-ai-preview-D3HL6bw1.gif',
];

const row2Images = images.slice(12).concat(images.slice(0, 9));

function MarqueeRow({
  images,
  direction = 'right',
  offset,
}: {
  images: string[];
  direction?: 'left' | 'right';
  offset: number;
}) {
  const tripled = [...images, ...images, ...images];

  const moveAmount = direction === 'right' ? offset - 200 : -(offset - 200);

  return (
    <motion.div
      className="flex gap-3"
      style={{
        x: moveAmount,
        willChange: 'transform',
      }}
    >
      {tripled.map((img, idx) => (
        <div
          key={idx}
          className="flex-shrink-0 w-[420px] h-[270px] rounded-2xl overflow-hidden"
        >
          <Image
            src={img}
            alt={`UI design preview ${idx}`}
            width={420}
            height={270}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      ))}
    </motion.div>
  );
}

export function MarqueeSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;

      const sectionTop = ref.current.getBoundingClientRect().top + window.scrollY;
      const scrollOffset =
        (window.scrollY - sectionTop + window.innerHeight) * 0.3;
      setOffset(scrollOffset);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={ref}
      className="bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10 overflow-x-hidden"
    >
      <div className="flex flex-col gap-3">
        <MarqueeRow images={images.slice(0, 11)} direction="right" offset={offset} />
        <MarqueeRow
          images={row2Images}
          direction="left"
          offset={offset}
        />
      </div>
    </section>
  );
}
