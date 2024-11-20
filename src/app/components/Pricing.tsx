"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Check } from 'lucide-react'

interface PricingPlan {
  name: string
  price: {
    monthly: string
    yearly: string
    once: string
  }
  period: string
  features: Array<{
    name: string
    included: boolean
  }>
  cta: string
}

export default function Component() {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly" | "once">("yearly")
  const [selectedPlan, setSelectedPlan] = useState<number>(1)

  const plans: PricingPlan[] = [
    {
      name: "Hobby",
      price: {
        monthly: "FREE",
        yearly: "FREE",
        once: "FREE"
      },
      period: "",
      features: [
        { name: "Unlimited Projects*", included: true },
        { name: "Standard Themes", included: true },
        { name: "Macroscope domain", included: true },
        { name: "Basic analytics", included: true },
        { name: "No Macroscope branding", included: false },
      ],
      cta: "Start For Free",
    },
    {
      name: "Creator",
      price: {
        monthly: "15",
        yearly: "12",
        once: "144"
      },
      period: "/mo",
      features: [
        { name: "Unlimited Projects*", included: true },
        { name: "Custom themes", included: true },
        { name: "Publish with your domain", included: true },
        { name: "Traffic analytics", included: true },
        { name: "No Macroscope branding", included: false },
      ],
      cta: "Start Free Trial",
    },
    {
      name: "Creator Pro",
      price: {
        monthly: "29",
        yearly: "24",
        once: "288"
      },
      period: "/mo",
      features: [
        { name: "Unlimited Projects*", included: true },
        { name: "Custom themes", included: true },
        { name: "Publish with your domain", included: true },
        { name: "Traffic Analytics", included: true },
        { name: "No Macroscope branding", included: true },
      ],
      cta: "Start Free Trial",
    },
  ]

  const handlePeriodChange = (period: "monthly" | "yearly" | "once") => {
    console.log('Changing period to:', period)
    setBillingPeriod(period)
  }

  return (
    <section className="py-16 px-4 bg-[#F9F9F8]" aria-labelledby="pricing-heading">
      <div className="max-w-7xl mx-auto text-center">
        {/* Label */}
        <span className="inline-block px-4 py-1 text-[#464646] bg-[#F3F2F0] rounded-full text-sm mb-4 border border-black font-inter font-medium">
          PRICING
        </span>

        {/* Heading */}
        <h1 id="pricing-heading" className="text-4xl md:text-5xl font-inter font-bold text-[#464646] mb-2">
          Start for Free
        </h1>

        {/* Subheading */}
        <p className="text-2xl md:text-3xl font-inter font-normal text-[#515151] mb-12">
          Upgrade for premium features.
        </p>

        {/* Billing Toggle Buttons */}
        <div className="relative w-full max-w-md mx-auto mb-12">
          <div className="flex justify-between bg-[#F3F2F0] rounded-full p-1">
            <button
              onClick={() => handlePeriodChange("monthly")}
              className={`flex-1 py-2 text-sm font-inter font-medium z-10 relative
                ${billingPeriod === "monthly" ? "text-white" : "text-[#464646]"}`}
            >
              Pay Monthly
            </button>
            <button
              onClick={() => handlePeriodChange("yearly")}
              className={`flex-1 py-2 text-sm font-inter font-medium z-10 relative
                ${billingPeriod === "yearly" ? "text-white" : "text-[#464646]"}`}
            >
              Pay yearly
            </button>
            <button
              onClick={() => handlePeriodChange("once")}
              className={`flex-1 py-2 text-sm font-inter font-medium z-10 relative
                ${billingPeriod === "once" ? "text-white" : "text-[#464646]"}`}
            >
              Pay Once
            </button>
            <motion.div
              className="absolute top-1 left-1 bottom-1 rounded-full bg-[#464646]"
              initial={false}
              animate={{
                left: billingPeriod === "monthly" ? "0%" : billingPeriod === "yearly" ? "33.33%" : "66.66%",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              style={{ width: "33.33%" }}
            />
          </div>
        </div>

        <p className="text-sm text-[#515151] -mt-8 mb-12 font-inter font-normal">2 months free</p>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              whileHover={{ scale: 1.02 }}
              onClick={() => setSelectedPlan(index)}
              className={`relative bg-white rounded-2xl p-8 cursor-pointer transition-all ${
                selectedPlan === index
                  ? "border-2 border-[#000000] shadow-lg"
                  : "border border-[#D7D7D7]"
              }`}
            >
              <h2 className="text-xl font-inter font-semibold text-[#464646] mb-4">{plan.name}</h2>
              <div className="mb-6">
                {plan.price[billingPeriod] === "FREE" ? (
                  <span className="text-4xl font-inter font-bold text-[#464646]">FREE</span>
                ) : (
                  <div className="flex items-start justify-center">
                    <span className="text-4xl font-inter font-bold text-[#464646]">
                      ${plan.price[billingPeriod]}
                      {billingPeriod !== "once" && (
                        <span className="text-2xl font-inter font-normal">/mo</span>
                      )}
                    </span>
                  </div>
                )}
                <span className="text-sm text-[#464646] mt-2 block font-inter font-normal">
                  {billingPeriod === "once" ? "one-time payment" : `per project billed ${billingPeriod}`}
                </span>
              </div>

              <button
                className={`w-full py-2 px-4 rounded-full mb-8 flex items-center justify-center gap-2 font-inter font-medium ${
                  selectedPlan === index
                    ? "bg-[#464646] text-white"
                    : "bg-[#F3F2F0] text-[#464646]"
                }`}
              >
                {plan.cta}
                <span aria-hidden="true">→</span>
              </button>

              <ul className="space-y-4 text-left">
                {plan.features.map((feature) => (
                  <li key={feature.name} className="flex items-center gap-3">
                    <Check
                      className={feature.included ? "text-[#464646]" : "text-[#C1C1C1]"}
                      size={20}
                    />
                    <span
                      className={`font-inter font-normal ${
                        feature.included ? "text-[#464646]" : "text-[#C1C1C1]"
                      }`}
                    >
                      {feature.name}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <p className="text-[#515151] mt-12 font-inter font-normal">
          15-day free trial • Cancel anytime • Money-back guarantee
        </p>
      </div>
    </section>
  )
}