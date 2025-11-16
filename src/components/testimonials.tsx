import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

const testimonials = [
    {
        text: "CS AI ini sangat membantu. Chat langsung dijawab otomatis bahkan saat saya tidur. Orderan jadi lebih rapi.",
        name: "Bima",
        role: "Toko Herbal",
        avatar: "https://ui-avatars.com/api/?name=Bima&background=random",
        rating: 5
    },
    {
        text: "Yang paling saya suka adalah fitur handover ke admin. Kalau pertanyaannya sulit, langsung dilempar ke saya. Super praktis!",
        name: "Sarah",
        role: "Owner Butik",
        avatar: "https://ui-avatars.com/api/?name=Sarah&background=random",
        rating: 5
    },
    {
        text: "Sangat cocok untuk klien-klien saya. Tidak ada batas chat, dan bisa custom gaya bahasanya.",
        name: "Agung",
        role: "Digital Agency",
        avatar: "https://ui-avatars.com/api/?name=Agung&background=random",
        rating: 5
    }
];

export default function TestimonialsSection() {
    return (
        <section className="py-16 md:py-32">
            <div className="mx-auto max-w-6xl px-6">
                <div className="mb-16 text-center">
                    <h2 className="mb-4 font-bold text-3xl text-foreground lg:text-4xl">
                        Apa Kata Pengguna?
                    </h2>
                </div>
                <div className="grid gap-8 md:grid-cols-3">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="rounded-2xl border bg-background p-6 shadow-sm">
                            <div className="mb-4 flex gap-1">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <span key={i} className="text-yellow-500">⭐</span>
                                ))}
                            </div>
                            <blockquote className="mb-6">
                                <p className="text-foreground/80 leading-relaxed">{testimonial.text}</p>
                            </blockquote>
                            <div className="flex items-center gap-4">
                                <Avatar className="size-12">
                                    <AvatarImage
                                        src={testimonial.avatar}
                                        alt={testimonial.name}
                                        height="48"
                                        width="48"
                                        loading="lazy"
                                    />
                                    <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                                </Avatar>
                                <div>
                                    <cite className="font-medium not-italic">{testimonial.name}</cite>
                                    <span className="text-muted-foreground block text-sm">{testimonial.role}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
