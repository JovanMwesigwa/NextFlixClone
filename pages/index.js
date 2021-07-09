import Head from 'next/head'
import { signIn, signOut, useSession } from 'next-auth/client'

export default function Home() {
  const [ session, loading ] = useSession()

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black"
      style={{
        background: 'linear-gradient(rgba(0 0 0 / 60%), rgba(0 0 0 / 20%)), url(/herobg.jpg)'
      }}
    >
      <Head>
        <title>Netflix Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        {!session && <>
          Not signed in <br/>
          <button >Sign in</button>
        </>}
        {session && <>
          Signed in as {session.user.email} <br/>
          <button onClick={() => signOut()}>Sign out</button>
        </>}
        <h1 className="text-5xl font-bold text-white max-w-lg">Unlimited movies, TV shows, and more.</h1>
        <h1 className="text-2xl text-white mt-4 mb-8">Watch anywhere. Cancel anytime.</h1>
        <p className="text-white text-lg">Ready to watch? Enter your email to create or restart your membership.</p>

        <div className="flex mt-4">
          <input placeholder="Email address" className="bg-white p-4 min-w-[400px]"/>
          <button onClick={() => signIn()} className="bg-[#e50914] text-white text-xl px-8 flex items-center justify-center">
            Get Started 
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          </button>
        </div>
      </main>

    </div>
  )
}
