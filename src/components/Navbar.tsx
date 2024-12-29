'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import MaxWidthWrapper from './wrapper/MaxwidthWrapper'
import { buttonVariants } from './Button1'

interface AuthSession {
  user?: {
    name?: string | null;
    email?: string | null;
    image?: string | null;
  };
  expires?: string;
}

interface NavbarProps {
  session: AuthSession | null;
}

const Navbar: React.FC<NavbarProps> = ({ session }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const navigationItems = session?.user
    ? [
        { name: 'Food Recognition', href: '/food-recognition' },
        { name: 'BMI Calculator', href: '/bmi-calculator' },
        { name: 'Health History', href: '/health-history' },
        { name: 'AI Suggestions', href: '/ai-suggestions' },
      ]
    : [
        { name: 'Features', href: '#features' },
        { name: 'Benefits', href: '#benefits' },
        { name: 'About', href: '#about' },
      ]

  return (
    <nav className="bg-white shadow-sm">
      <MaxWidthWrapper>
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-green-600">
              NutriWell
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-600 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              {session?.user ? (
                <Link
                  href="/dashboard"
                  className={buttonVariants({
                    size: "lg",
                    className:
                      "hidden sm:flex items-center gap-1 px-4 py-2 text-sm font-medium text-white bg-green-600 hover:bg-green-700 transition-colors rounded-md",
                  })}
                >
                  Dashboard
                </Link>
              ) : (
                <>
                  <Link
                    href="/sign-in"
                    className={buttonVariants({
                      size: "lg",
                      className:
                        "hidden sm:flex items-center gap-1 px-4 py-2 text-sm font-medium text-white bg-green-600 hover:bg-green-700 transition-colors rounded-md",
                    })}
                  >
                    Login
                  </Link>
                  <div className="hidden sm:block h-6 w-px bg-zinc-300" />
                  <Link
                    href="/sign-up"
                    className={buttonVariants({
                      size: "lg",
                      className:
                        "hidden sm:flex items-center gap-1 px-4 py-2 text-sm font-medium text-green-600 border border-green-600 transition-colors rounded-md",
                    })}
                  >
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-green-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </MaxWidthWrapper>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-600 hover:text-green-600 block px-3 py-2 rounded-md text-base font-medium"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="px-2 space-y-1">
              <div className="flex flex-col space-y-2">
                {session?.user ? (
                  <Link
                    href="/dashboard"
                    className={buttonVariants({
                      size: "lg",
                      className:
                        "flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-green-600 hover:bg-green-700 transition-colors rounded-md",
                    })}
                  >
                    Dashboard
                  </Link>
                ) : (
                  <>
                    <Link
                      href="/sign-in"
                      className={buttonVariants({
                        size: "lg",
                        className:
                          "flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-green-600 hover:bg-green-700 transition-colors rounded-md",
                      })}
                    >
                      Login
                    </Link>
                    <Link
                      href="/sign-up"
                      className={buttonVariants({
                        size: "lg",
                        className:
                          "flex items-center justify-center px-4 py-2 text-sm font-medium text-green-600 border border-green-600 transition-colors rounded-md",
                      })}
                    >
                      Sign Up
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar

