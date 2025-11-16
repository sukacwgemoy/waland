"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

type PriceFlowProps = {
  value: number;
  className?: string;
};

function PriceFlow({ value, className = "" }: PriceFlowProps) {
  const [prevValue, setPrevValue] = useState(value);
  const prevTensRef = useRef<HTMLSpanElement>(null);
  const nextTensRef = useRef<HTMLSpanElement>(null);
  const prevOnesRef = useRef<HTMLSpanElement>(null);
  const nextOnesRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (value !== prevValue) {
      const prevTens = prevTensRef.current;
      const nextTens = nextTensRef.current;
      const prevOnes = prevOnesRef.current;
      const nextOnes = nextOnesRef.current;

      if (
        prevTens &&
        nextTens &&
        Math.floor(value / 10) !== Math.floor(prevValue / 10)
      ) {
        if (Math.floor(value / 10) > Math.floor(prevValue / 10)) {
          prevTens.classList.add("slide-out-up");
          nextTens.classList.add("slide-in-up");
        } else {
          prevTens.classList.add("slide-out-down");
          nextTens.classList.add("slide-in-down");
        }

        const handleTensAnimationEnd = () => {
          prevTens.classList.remove("slide-out-up", "slide-out-down");
          nextTens.classList.remove("slide-in-up", "slide-in-down");
          prevTens.removeEventListener("animationend", handleTensAnimationEnd);
        };

        prevTens.addEventListener("animationend", handleTensAnimationEnd);
      }

      if (prevOnes && nextOnes && value % 10 !== prevValue % 10) {
        setTimeout(() => {
          if (value % 10 > prevValue % 10) {
            prevOnes.classList.add("slide-out-up");
            nextOnes.classList.add("slide-in-up");
          } else {
            prevOnes.classList.add("slide-out-down");
            nextOnes.classList.add("slide-in-down");
          }

          const handleOnesAnimationEnd = () => {
            prevOnes.classList.remove("slide-out-up", "slide-out-down");
            nextOnes.classList.remove("slide-in-up", "slide-in-down");
            prevOnes.removeEventListener(
              "animationend",
              handleOnesAnimationEnd
            );
          };

          prevOnes.addEventListener("animationend", handleOnesAnimationEnd);
        }, 50);
      }

      setPrevValue(value);
    }
  }, [value, prevValue]);

  const formatValue = (val: number) => val.toString().padStart(2, "0");
  const prevFormatted = formatValue(prevValue);
  const currentFormatted = formatValue(value);

  return (
    <span className={cn("relative inline-flex items-center", className)}>
      <span className="relative inline-block overflow-hidden">
        <span
          className="absolute inset-0 flex items-center justify-center"
          ref={prevTensRef}
          style={{ transform: "translateY(-100%)" }}
        >
          {prevFormatted[0]}
        </span>
        <span
          className="flex items-center justify-center"
          ref={nextTensRef}
          style={{ transform: "translateY(0%)" }}
        >
          {currentFormatted[0]}
        </span>
      </span>
      <span className="relative inline-block overflow-hidden">
        <span
          className="absolute inset-0 flex items-center justify-center"
          ref={prevOnesRef}
          style={{ transform: "translateY(-100%)" }}
        >
          {prevFormatted[1]}
        </span>
        <span
          className="flex items-center justify-center"
          ref={nextOnesRef}
          style={{ transform: "translateY(0%)" }}
        >
          {currentFormatted[1]}
        </span>
      </span>
    </span>
  );
}

const pricingPlans = [
  {
    name: "Paket Basic",
    price: "200.000",
    period: "1 Bulan",
    description: "Cocok untuk UMKM & bisnis kecil-menengah",
    gradient: "from-green-400 to-green-600",
    features: [
      "CS AI aktif 24/7",
      "Unlimited chat masuk",
      "Jawaban natural & akurat",
      "Handover otomatis ke admin",
      "1 Nomor WhatsApp",
      "Bisa custom gaya bahasa",
      "Free Setup",
      "Free Support",
    ],
  },
  {
    name: "Paket Hemat",
    price: "380.000",
    period: "2 Bulan",
    badge: "Hemat 20%",
    description: "Termasuk semua fitur Paket Basic, ditambah:",
    gradient: "from-blue-400 to-blue-600",
    features: [
      "CS AI aktif 24/7",
      "Unlimited chat masuk",
      "Jawaban natural & akurat",
      "Handover otomatis ke admin",
      "2 Nomor WhatsApp",
      "Bisa custom gaya bahasa",
      "Prioritas support",
      "Update & perbaikan rutin",
      "Pengaturan fitur lanjutan",
      "Free Setup",
      "Free Support",
    ],
  },
];

export function PricingSimple() {
  return (
    <section id="pricing">
      <div className="relative bg-muted/50 py-16 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="text-balance font-bold text-3xl md:text-4xl lg:text-5xl lg:tracking-tight">
              Simple & Transparan
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-balance text-foreground/70 text-lg">
              Termasuk Free Setup & Free Support
            </p>
          </motion.div>
          <div className="container mt-12">
            <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
              {pricingPlans.map((plan, index) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="group relative flex flex-col overflow-hidden rounded-2xl border bg-background p-8 transition-all hover:shadow-xl"
                >
                  {/* Gradient Accent */}
                  <div
                    className={`gradient-accent absolute top-0 right-0 h-4 w-32 rounded-bl-2xl bg-gradient-to-r ${plan.gradient}`}
                  />

                  {plan.badge && (
                    <div className="absolute top-4 left-4 rounded-full bg-blue-500 px-3 py-1 text-white text-xs font-medium">
                      {plan.badge}
                    </div>
                  )}

                  <div className="card-content relative z-10 flex h-full flex-col">
                    {/* Title */}
                    <h3 className="mb-4 font-bold text-2xl text-foreground">
                      {plan.name}
                    </h3>
                    {/* Price & Duration */}
                    <div className="mb-6">
                      <span className="font-semibold text-3xl text-foreground">
                        Rp{plan.price}
                      </span>
                      <span className="mx-2 text-foreground/70">•</span>
                      <span className="text-foreground/70">{plan.period}</span>
                    </div>
                    {/* CTA Button */}
                    <button
                      className="mb-6 inline-flex h-10 w-full cursor-pointer items-center justify-center gap-2 rounded-md bg-foreground px-4 py-2 font-medium text-background text-sm transition-colors hover:bg-foreground/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                      type="button"
                    >
                      {index === 0 ? "Mulai Sekarang" : "Pilih Paket Hemat"}
                    </button>
                    {/* Description */}
                    <p className="mb-6 text-foreground/70 text-sm leading-relaxed">
                      {plan.description}
                    </p>
                    {/* What's Included */}
                    <div className="space-y-4 flex-grow">
                      <h4 className="font-medium text-foreground/70 text-xs uppercase tracking-wider">
                        Termasuk:
                      </h4>
                      <ul className="space-y-3">
                        {plan.features.map((item) => (
                          <li
                            className="flex items-center gap-3 text-foreground text-sm"
                            key={item}
                          >
                            <div className="flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-foreground">
                              <svg
                                aria-hidden="true"
                                className="h-2 w-2 text-background"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  clipRule="evenodd"
                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                  fillRule="evenodd"
                                />
                              </svg>
                            </div>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PricingSimple;
