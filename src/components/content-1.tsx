"use client";

import { motion } from "motion/react";
import { ShoppingCart, Shirt, Utensils, Home, Briefcase, Heart, GraduationCap, Wrench } from "lucide-react";

const useCases = [
  {
    icon: ShoppingCart,
    title: "E-Commerce & Toko Online",
    description: "Otomatis jawab pertanyaan produk, cek stok, proses order, dan konfirmasi pembayaran 24/7.",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Shirt,
    title: "Laundry & Dry Cleaning",
    description: "Terima order, update status cucian, reminder pengambilan, dan keluhan pelanggan otomatis.",
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: Utensils,
    title: "Restoran & Katering",
    description: "Terima pesanan, info menu, jam buka, delivery tracking, dan reservasi meja otomatis.",
    color: "from-orange-500 to-orange-600",
  },
  {
    icon: Home,
    title: "Properti & Real Estate",
    description: "Info listing properti, jadwal viewing, harga, lokasi, dan follow-up calon pembeli.",
    color: "from-green-500 to-green-600",
  },
  {
    icon: Briefcase,
    title: "Jasa Profesional",
    description: "Konsultan, lawyer, akuntan - jadwal appointment, info layanan, dan FAQ klien.",
    color: "from-indigo-500 to-indigo-600",
  },
  {
    icon: Heart,
    title: "Klinik & Kesehatan",
    description: "Booking dokter, info layanan, reminder kontrol, dan pertanyaan umum kesehatan.",
    color: "from-pink-500 to-pink-600",
  },
  {
    icon: GraduationCap,
    title: "Pendidikan & Kursus",
    description: "Info program, jadwal kelas, pendaftaran, pembayaran, dan pertanyaan siswa.",
    color: "from-yellow-500 to-yellow-600",
  },
  {
    icon: Wrench,
    title: "Service & Maintenance",
    description: "AC, elektronik, kendaraan - booking service, estimasi biaya, dan status perbaikan.",
    color: "from-red-500 to-red-600",
  },
];

export default function ContentSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 font-bold text-3xl text-foreground lg:text-4xl">
            CS AI Cocok untuk Berbagai Jenis Bisnis
          </h2>
          <p className="mx-auto max-w-2xl text-foreground/70 text-lg">
            Dari toko online hingga jasa profesional, CS AI siap membantu bisnis Anda melayani pelanggan dengan lebih baik
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group relative overflow-hidden rounded-2xl border bg-background p-6 shadow-sm transition-all hover:shadow-xl"
            >
              {/* Gradient Background on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${useCase.color} opacity-0 transition-opacity group-hover:opacity-5`} />
              
              {/* Icon */}
              <div className="relative mb-4">
                <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${useCase.color} text-white shadow-lg`}>
                  <useCase.icon className="h-6 w-6" />
                </div>
              </div>

              {/* Content */}
              <div className="relative">
                <h3 className="mb-2 font-bold text-foreground text-lg">
                  {useCase.title}
                </h3>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  {useCase.description}
                </p>
              </div>

              {/* Hover Effect Border */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${useCase.color} opacity-0 transition-opacity group-hover:opacity-20 pointer-events-none`} />
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="mb-6 text-foreground/80 text-lg">
            Apapun jenis bisnis Anda, CS AI bisa disesuaikan dengan kebutuhan spesifik Anda
          </p>
          <a
            href="#pricing"
            className="inline-flex items-center justify-center rounded-md bg-foreground px-8 py-3 font-medium text-background transition-all hover:bg-foreground/90 hover:scale-105"
          >
            Mulai Sekarang
          </a>
        </motion.div>
      </div>
    </section>
  );
}
