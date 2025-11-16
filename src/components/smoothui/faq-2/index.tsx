"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const ANIMATION_DURATION = 0.6;
const STAGGER_DELAY = 0.1;
const INITIAL_Y_OFFSET = 20;
const HOVER_SCALE = 1.01;
const TAP_SCALE = 0.99;
const ROTATION_OPEN = 180;
const ROTATION_CLOSED = 0;
const CONTENT_DELAY = 0.1;
const INITIAL_CONTENT_Y = -10;

type FaqsAccordionProps = {
  title?: string;
  description?: string;
  faqs?: Array<{
    question: string;
    answer: string;
  }>;
};

export function FaqsAccordion({
  title = "Pertanyaan yang Sering Ditanyakan",
  description = "Temukan jawaban untuk pertanyaan umum tentang CS AI",
  faqs = [
    {
      question: "Apakah platform ini resmi dari WhatsApp?",
      answer:
        "Tidak. Sistem ini menggunakan WAHA (WhatsApp HTTP API), sebuah gateway independen yang umum digunakan untuk automasi CS. Tetapi aman digunakan jika untuk customer service saja.",
    },
    {
      question: "Apakah aman dipakai sebagai CS AI?",
      answer:
        "Ya. Sangat aman karena: Hanya menjawab chat masuk, Tidak melakukan spam, Tidak melakukan blasting massal, Dipakai banyak bisnis tanpa kendala.",
    },
    {
      question: "Apakah bisa digunakan untuk broadcast?",
      answer:
        "❌ Tidak. Kami tidak mendukung broadcast, spam, atau blasting. Jika dipaksa broadcast, risiko blokir sepenuhnya bukan tanggung jawab kami.",
    },
    {
      question: "Apa yang perlu saya siapkan sebelum memakai CS AI?",
      answer:
        "✔ 1. Gmail / Akun Google untuk login & konfigurasi. ✔ 2. Data untuk melatih CS AI: Deskripsi bisnis, Produk/layanan, FAQ internal, SOP pelayanan, Harga & katalog (opsional), Gaya bahasa yang diinginkan. Semakin lengkap datanya, semakin pintar AI menjawab.",
    },
    {
      question: "Apa keunggulan CS AI ini?",
      answer:
        "Respon instan, natural & sopan. Handover otomatis ke admin. Unlimited chat. Bekerja 24 jam nonstop. Bisa custom sesuai bisnis. Hemat biaya & waktu.",
    },
    {
      question: "Apakah perlu server sendiri?",
      answer:
        "Tidak. Sistem sudah siap pakai. Anda tinggal menggunakan.",
    },
    {
      question: "Apakah bisa custom?",
      answer:
        "Bisa sekali. Gaya bahasa, SOP, dan alur jawaban semua bisa diatur sesuai kebutuhan bisnis Anda.",
    },
  ],
}: FaqsAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20">
      <div className="mx-auto max-w-4xl px-6">
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 text-center"
          initial={{ opacity: 0, y: INITIAL_Y_OFFSET }}
          transition={{ duration: ANIMATION_DURATION }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h2 className="mb-4 font-bold text-3xl text-foreground lg:text-4xl">
            {title}
          </h2>
          <p className="mx-auto max-w-2xl text-foreground/70 text-lg">
            {description}
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              animate={{ opacity: 1, y: 0 }}
              className="group overflow-hidden rounded-2xl border border-border bg-background transition-all hover:border-brand hover:shadow-lg"
              initial={{ opacity: 0, y: INITIAL_Y_OFFSET }}
              key={faq.question}
              transition={{
                duration: ANIMATION_DURATION,
                delay: index * STAGGER_DELAY,
              }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <motion.button
                className="flex w-full items-center justify-between p-6 text-left transition-colors hover:bg-background/50"
                onClick={() => toggleAccordion(index)}
                type="button"
                whileHover={{ scale: HOVER_SCALE }}
                whileTap={{ scale: TAP_SCALE }}
              >
                <h3 className="pr-4 font-semibold text-foreground text-lg">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{
                    rotate:
                      openIndex === index ? ROTATION_OPEN : ROTATION_CLOSED,
                  }}
                  className="flex-shrink-0"
                  transition={{
                    duration: ANIMATION_DURATION,
                    ease: "easeInOut",
                  }}
                >
                  <svg
                    aria-hidden="true"
                    className="h-5 w-5 text-foreground/60"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M19 9l-7 7-7-7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                    />
                  </svg>
                </motion.div>
              </motion.button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    animate={{ height: "auto", opacity: 1 }}
                    className="overflow-hidden"
                    exit={{ height: 0, opacity: 0 }}
                    initial={{ height: 0, opacity: 0 }}
                    transition={{
                      duration: ANIMATION_DURATION,
                      ease: "easeInOut",
                    }}
                  >
                    <motion.div
                      animate={{ y: 0 }}
                      className="px-6 pb-6"
                      exit={{ y: INITIAL_CONTENT_Y }}
                      initial={{ y: INITIAL_CONTENT_Y }}
                      transition={{
                        duration: ANIMATION_DURATION,
                        delay: CONTENT_DELAY,
                      }}
                    >
                      <p className="text-foreground/70 leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FaqsAccordion;
