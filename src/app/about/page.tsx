"use client";

import React from "react";
import PageHeader from "@/components/page-header";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { SOCIALS } from "@/constants";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

export default function AboutPage() {
  return (
    <div className="container relative max-w-6xl py-6 lg:py-10">
      <PageHeader
        title="Tentang CS AI"
        description="Transparansi adalah prioritas kami"
      />
      <hr className="my-8" />

      <div className="prose prose-lg dark:prose-invert max-w-none">
        {/* Latar Belakang */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="mb-4 text-2xl font-bold">Mengapa CS AI Dibuat?</h2>
          <p className="mb-4 leading-relaxed text-muted-foreground">
            CS AI lahir dari pengalaman pribadi yang frustasi dengan layanan CS
            AI lain di pasaran. Banyak provider yang mengiklankan harga murah,
            tapi setelah konsultasi atau trial, ternyata ada biaya tersembunyi,
            setup fee yang mahal, atau paket yang tidak sesuai ekspektasi.
          </p>
          <p className="mb-4 leading-relaxed text-muted-foreground">
            Kami percaya bahwa <strong>transparansi harga</strong> adalah hak
            setiap calon customer. Tidak ada yang suka merasa dibohongi atau
            terjebak dengan biaya yang tidak jelas di awal.
          </p>
          <p className="leading-relaxed text-muted-foreground">
            Karena itu, CS AI hadir dengan komitmen:{" "}
            <strong>Harga yang tertera adalah harga final</strong>. Tidak ada
            biaya tersembunyi. Tidak ada setup fee tambahan. Yang Anda lihat
            adalah yang Anda bayar.
          </p>
        </motion.section>

        {/* Komitmen Transparansi */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12 rounded-2xl border bg-muted/30 p-8"
        >
          <h2 className="mb-4 text-2xl font-bold">Komitmen Kami</h2>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <span className="text-2xl">✅</span>
              <div>
                <strong className="text-foreground">Harga Transparan</strong>
                <p className="text-muted-foreground">
                  Semua harga sudah termasuk setup, support, dan maintenance.
                  Tidak ada biaya tambahan.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">✅</span>
              <div>
                <strong className="text-foreground">No Hidden Fee</strong>
                <p className="text-muted-foreground">
                  Tidak ada biaya setup, biaya aktivasi, atau biaya admin yang
                  tiba-tiba muncul.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">✅</span>
              <div>
                <strong className="text-foreground">Unlimited Chat</strong>
                <p className="text-muted-foreground">
                  Tidak ada batasan jumlah chat atau percakapan. Bayar flat,
                  gunakan sepuasnya.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">✅</span>
              <div>
                <strong className="text-foreground">Free Support</strong>
                <p className="text-muted-foreground">
                  Support teknis dan update sistem sudah termasuk dalam harga
                  paket.
                </p>
              </div>
            </li>
          </ul>
        </motion.section>

        {/* Masalah di Industri */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-12"
        >
          <h2 className="mb-4 text-2xl font-bold">
            Masalah yang Sering Terjadi di Industri Ini
          </h2>
          <div className="space-y-4">
            <div className="rounded-lg border-l-4 border-red-500 bg-red-50 p-4 dark:bg-red-950/20">
              <p className="text-foreground/90">
                <strong>❌ Iklan: "Mulai dari Rp50.000"</strong>
                <br />
                <span className="text-sm text-muted-foreground">
                  Realita: Setelah konsultasi, ternyata harga sebenarnya
                  Rp500.000 dengan berbagai syarat.
                </span>
              </p>
            </div>
            <div className="rounded-lg border-l-4 border-red-500 bg-red-50 p-4 dark:bg-red-950/20">
              <p className="text-foreground/90">
                <strong>❌ "Setup Gratis"</strong>
                <br />
                <span className="text-sm text-muted-foreground">
                  Realita: Setup gratis, tapi biaya maintenance bulanan sangat
                  mahal.
                </span>
              </p>
            </div>
            <div className="rounded-lg border-l-4 border-red-500 bg-red-50 p-4 dark:bg-red-950/20">
              <p className="text-foreground/90">
                <strong>❌ "Unlimited Chat"</strong>
                <br />
                <span className="text-sm text-muted-foreground">
                  Realita: Ada fair usage policy yang membatasi, atau kena
                  charge per chat setelah limit tertentu.
                </span>
              </p>
            </div>
          </div>
        </motion.section>

        {/* Solusi Kami */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-12"
        >
          <h2 className="mb-4 text-2xl font-bold">Solusi CS AI</h2>
          <p className="mb-4 leading-relaxed text-muted-foreground">
            Kami tidak percaya dengan model bisnis yang menipu customer. CS AI
            dibangun dengan prinsip:
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                icon: "💰",
                title: "Harga Jelas",
                desc: "Rp150.000/bulan atau Rp280.000/2 bulan. Sudah termasuk semua. Tidak ada tambahan.",
              },
              {
                icon: "🚀",
                title: "Setup Gratis",
                desc: "Benar-benar gratis. Tidak ada biaya aktivasi atau instalasi.",
              },
              {
                icon: "💬",
                title: "Unlimited Chat",
                desc: "Benar-benar unlimited. Tidak ada batasan jumlah chat atau fair usage policy.",
              },
              {
                icon: "🛠️",
                title: "Support Gratis",
                desc: "Support teknis, update, dan maintenance sudah termasuk dalam paket.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="rounded-xl border bg-background p-6"
              >
                <h3 className="mb-2 text-lg font-bold">
                  {item.icon} {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Penutup */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="rounded-2xl border-2 border-primary/20 bg-primary/5 p-8 text-center"
        >
          <h2 className="mb-4 text-2xl font-bold">
            Kami Percaya pada Transparansi
          </h2>
          <p className="mb-6 leading-relaxed text-muted-foreground">
            Bisnis yang baik dibangun atas kepercayaan. Kami tidak ingin
            customer merasa tertipu atau kecewa setelah menggunakan layanan
            kami. Harga yang jelas, layanan yang jujur, dan support yang
            responsif adalah komitmen kami.
          </p>
          <Link
            href="https://wa.me/6285158067122?text=Halo,%20saya%20tertarik%20dengan%20CS%20AI"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md bg-foreground px-8 py-3 font-medium text-background transition-all hover:bg-foreground/90"
          >
            Hubungi Kami via WhatsApp
          </Link>
        </motion.section>

        {/* Contact */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-12 text-center"
        >
          <h3 className="mb-4 text-xl font-bold">Ada Pertanyaan?</h3>
          <p className="mb-6 text-muted-foreground">
            Hubungi kami langsung via WhatsApp. Kami akan jawab dengan jujur dan
            transparan.
          </p>
          <div className="flex items-center justify-center gap-4">
            {SOCIALS.map((social) => (
              <Link
                key={social.label}
                href={social.path}
                rel="noreferrer"
                target="_blank"
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "transition-colors"
                )}
              >
                <social.icon className="mr-2 size-5" />
                {social.label}
              </Link>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
}
