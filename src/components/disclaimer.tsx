export default function DisclaimerSection() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-4xl px-6">
        <div className="rounded-2xl border-2 border-yellow-500/50 bg-yellow-50 p-8 dark:bg-yellow-950/20">
          <div className="mb-4 flex items-center gap-3">
            <span className="text-3xl">⚠️</span>
            <h2 className="font-bold text-2xl text-foreground">
              DISCLAIMER PENTING
            </h2>
          </div>
          <div className="space-y-4 text-foreground/80 leading-relaxed">
            <p>
              Sistem ini menggunakan <strong>WAHA (WhatsApp HTTP API)</strong>{" "}
              yang aman untuk CS, bukan layanan resmi Meta. Kami hanya
              mendukung penggunaan untuk <strong>customer service</strong>,
              bukan broadcast.
            </p>
            <p>
              Jika pengguna memaksa menggunakan broadcast / spam hingga nomor
              diblokir, itu sepenuhnya di luar tanggung jawab kami.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
