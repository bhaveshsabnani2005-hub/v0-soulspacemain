import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-background to-muted p-4">
      <div className="text-center space-y-6 max-w-2xl">
        <h1 className="text-5xl font-bold tracking-tight">Welcome to SoulSpace</h1>
        <p className="text-lg text-muted-foreground">
          Explore our modern pricing page with beautiful animations and interactive elements.
        </p>
        <div className="flex gap-4 justify-center">
          <Link href="/pricing">
            <Button size="lg">View Pricing</Button>
          </Link>
        </div>
      </div>
    </main>
  )
}
