import Link from 'next/link';
import { useUser } from '@auth0/nextjs-auth0/client';
import Image from 'next/image';
import HeroImage from '../public/hero.webp';
import { Logo } from '../components/Logo/Logo';

export default function Home() {
  return (
    <div className="relative flex h-screen w-screen items-center justify-center overflow-hidden">
      <Image src={HeroImage} alt="Hero" fill className="absolute" />
      <div className="relative z-10 max-w-screen-sm rounded-md bg-slate-900/90 px-10 py-5 text-center text-white backdrop-blur-sm">
        <Logo />
        <p>
          The AI-powered SAAS solution to generate SEO-optimized blog posts in
          minutes. Get high-quality content, without sacrificing your time.
        </p>
        <Link href="/post/new" className="btn mt-2">
          Begin
        </Link>
      </div>
    </div>
  );
}
