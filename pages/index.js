import Link from 'next/link';
import { useUser } from '@auth0/nextjs-auth0/client';
import Image from 'next/image';
import HeroImage from '../public/hero.webp';

export default function Home() {
  return (
    <div className="relative flex h-screen w-screen items-center justify-center overflow-hidden">
      <Image src={HeroImage} alt="Hero" fill className="absolute" />
    </div>
  );
}
