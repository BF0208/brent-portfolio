import Head from 'next/head'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function Home() {
  const introRef = useRef()

  useEffect(() => {
    gsap.fromTo(introRef.current, { y: 50, opacity: 0 }, {
      y: 0,
      opacity: 1,
      duration: 1.2,
      ease: 'power2.out',
    })
  }, [])

  return (
    <>
      <Head>
        <title>Brent Ferguson Portfolio</title>
      </Head>
      <main className="min-h-screen px-8 py-24">
        <section ref={introRef} className="max-w-3xl mx-auto text-center space-y-4">
          <h1 className="text-5xl font-bold uppercase">Brent Ferguson</h1>
          <p className="text-lg text-gray-600">Visual Designer • Photographer • DJ</p>
          <p className="text-md text-gray-500 max-w-xl mx-auto">
            Archive of selected works across photography, design, and sound. Built to grow.
          </p>
        </section>
      </main>
    </>
  )
}