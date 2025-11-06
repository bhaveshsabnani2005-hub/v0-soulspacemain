"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Heart, Menu } from "lucide-react"
import { useState } from "react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-lg flex items-center justify-center">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
              Soul Space
            </span>
          </Link>

          <div className="hidden md:flex space-x-8">
            <Link href="/#features" className="text-slate-600 hover:text-teal-600 transition-colors">
              Features
            </Link>
            <Link href="/pricing" className="text-slate-600 hover:text-teal-600 transition-colors">
              Pricing
            </Link>
            <Link href="/#resources" className="text-slate-600 hover:text-teal-600 transition-colors">
              Resources
            </Link>
            <Link href="/#contact" className="text-slate-600 hover:text-teal-600 transition-colors">
              Contact
            </Link>
          </div>

          <div className="flex space-x-3">
            <Link href="/auth">
              <Button variant="outline" className="border-teal-600 text-teal-600 hover:bg-teal-50 bg-transparent">
                Sign In
              </Button>
            </Link>
            <Link href="/auth">
              <Button className="bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700">
                Get Started
              </Button>
            </Link>
          </div>

          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </nav>
  )
}
