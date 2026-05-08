import Image from "next/image";

interface PageHeroProps {
  title: string;
  description: string;
  image: string;
}

export function PageHero({ title, description, image }: PageHeroProps) {
  return (
    <section className="relative h-[300px] md:h-[400px] overflow-hidden">
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 to-foreground/40" />
      <div className="absolute inset-0 flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight text-balance">
              {title}
            </h1>
            <p className="mt-4 text-lg md:text-xl text-white/90 leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
