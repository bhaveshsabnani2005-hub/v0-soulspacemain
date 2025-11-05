"use client"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { useState } from "react"

const plans = [
  {
    name: "Starter",
    description: "Great for small businesses and startups",
    price: 12,
    yearlyPrice: 99,
    buttonText: "Get started",
    popular: false,
    includes: ["Unlimited Cards", "Custom background & stickers", "2-factor authentication", "Basic support"],
  },
  {
    name: "Business",
    description: "Best value for growing businesses",
    price: 48,
    yearlyPrice: 399,
    buttonText: "Get started",
    popular: true,
    includes: [
      "Everything in Starter, plus:",
      "Advanced checklists",
      "Custom fields",
      "Serverless functions",
      "Priority support",
    ],
  },
  {
    name: "Enterprise",
    description: "Advanced plan with enhanced security",
    price: 96,
    yearlyPrice: 899,
    buttonText: "Contact us",
    popular: false,
    includes: [
      "Everything in Business, plus:",
      "Multi-board management",
      "Multi-board guests",
      "Advanced permissions",
      "Dedicated support",
    ],
  },
]

const PricingSwitch = ({ onSwitch }: { onSwitch: (value: string) => void }) => {
  const [selected, setSelected] = useState("0")

  const handleSwitch = (value: string) => {
    setSelected(value)
    onSwitch(value)
  }

  return (
    <div className="flex justify-center gap-4">
      <button
        onClick={() => handleSwitch("0")}
        className={cn(
          "px-6 py-2 rounded-lg font-medium transition-all",
          selected === "0" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-800 hover:bg-gray-300",
        )}
      >
        Monthly
      </button>
      <button
        onClick={() => handleSwitch("1")}
        className={cn(
          "px-6 py-2 rounded-lg font-medium transition-all",
          selected === "1" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-800 hover:bg-gray-300",
        )}
      >
        Yearly
      </button>
    </div>
  )
}

export default function PricingSection() {
  const [isYearly, setIsYearly] = useState(false)

  const togglePricingPeriod = (value: string) => setIsYearly(Number.parseInt(value) === 1)

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 space-y-4">
          <h1 className="text-4xl font-bold text-gray-900">Simple, Transparent Pricing</h1>
          <p className="text-xl text-gray-600">Choose the perfect plan for your needs</p>
        </div>

        <div className="mb-8">
          <PricingSwitch onSwitch={togglePricingPeriod} />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={cn(
                "relative transition-all hover:shadow-lg",
                plan.popular && "md:scale-105 shadow-xl border-blue-300 border-2",
              )}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <CardHeader>
                <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
                <p className="text-gray-600 text-sm mt-2">{plan.description}</p>

                <div className="mt-6 flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-gray-900">${isYearly ? plan.yearlyPrice : plan.price}</span>
                  <span className="text-gray-600">/{isYearly ? "year" : "month"}</span>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <button
                  className={cn(
                    "w-full py-3 rounded-lg font-semibold transition-colors",
                    plan.popular
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : "bg-gray-100 text-gray-900 hover:bg-gray-200",
                  )}
                >
                  {plan.buttonText}
                </button>

                <div className="space-y-3 pt-4 border-t border-gray-200">
                  <p className="font-semibold text-gray-900 text-sm">What's included:</p>
                  <ul className="space-y-2">
                    {plan.includes.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-gray-700">
                        <span className="text-blue-600 font-bold mt-0.5">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">Need a custom plan?</h2>
          <p className="text-gray-600 mb-4">Contact our sales team for enterprise solutions</p>
          <button className="bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
            Contact Sales
          </button>
        </div>
      </div>
    </div>
  )
}
