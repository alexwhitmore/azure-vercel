import { Squircle } from 'lucide-react'
import SideMenu from '~/components/SideMenu'

export default function Navbar() {
  return (
    <header className='sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
      <div className='container h-14 max-w-screen-2xl items-center flex justify-between'>
        <a href='/'>
          <Squircle className='h-8 w-8' />
        </a>
        <nav>
          <div className='hidden sm:flex space-x-8'>
            <a href='#' className='transition-colors hover:text-foreground/80 text-foreground/60'>
              Docs
            </a>
            <a href='#' className='transition-colors hover:text-foreground/80 text-foreground/60'>
              About
            </a>
            <a href='#' className='transition-colors hover:text-foreground/80 text-foreground/60'>
              Contact
            </a>
          </div>
          <div className='sm:hidden flex items-center'>
            <SideMenu />
          </div>
        </nav>
      </div>
    </header>
  )
}
