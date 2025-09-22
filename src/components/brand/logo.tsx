import Image from 'next/image'

export function Logo({ className = '' }: { className?: string }) {
  return (
    <Image 
      src="/brand/cossim-logo.png" 
      alt="Cossim" 
      width={140} 
      height={40} 
      className={className} 
      unoptimized 
    />
  )
}