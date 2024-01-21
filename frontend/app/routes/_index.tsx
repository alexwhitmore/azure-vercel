import type { MetaFunction } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import { json } from '@remix-run/node'
import Navbar from '../components/NavBar'
import Hero from '~/components/Hero'

export async function loader() {
  const res = await fetch('http://localhost:3003/repos')
  return json(await res.json())
}

export const meta: MetaFunction = () => {
  return [{ title: 'New Remix App' }, { name: 'description', content: 'Welcome to Remix!' }]
}

export default function Index() {
  const repos = useLoaderData<typeof loader>()

  return (
    <div style={{ fontFamily: 'sans-serif', lineHeight: '1.8' }}>
      <Navbar />
      <Hero repos={repos} />
    </div>
  )
}
