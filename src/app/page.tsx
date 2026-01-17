import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { services } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-data';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import WhatsappButton from '@/components/whatsapp-button';

export default function Home() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero');

  const featuredServices = services.slice(0, 3);

  return (
    <div className="flex flex-col">
      <section className="relative h-[60vh] md:h-[80vh] w-full">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover"
            priority
            data-ai-hint={heroImage.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-primary/80" />
        <div className="relative container mx-auto flex h-full flex-col items-center justify-center px-4 text-center text-primary-foreground">
          <h1 className="text-4xl font-extrabold tracking-tight md:text-6xl lg:text-7xl">
            Smart, Secure, Sustainable Solutions
          </h1>
          <p className="mt-6 max-w-3xl text-lg md:text-xl">
            We engineer integrated environments for homes and businesses, combining cutting-edge automation, security, and energy optimization.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link href="/contact">Get a Free Consultation</Link>
            </Button>
            <WhatsappButton size="lg" variant="secondary" />
          </div>
        </div>
      </section>

      <section id="value-prop" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <CheckCircle2 className="h-12 w-12 text-accent" />
              <h3 className="mt-4 text-2xl font-bold">Innovation</h3>
              <p className="mt-2 text-muted-foreground">
                Leveraging the latest technology to deliver intelligent and future-proof solutions.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <CheckCircle2 className="h-12 w-12 text-accent" />
              <h3 className="mt-4 text-2xl font-bold">Reliability</h3>
              <p className="mt-2 text-muted-foreground">
                Building robust systems you can depend on, ensuring security and operational continuity.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <CheckCircle2 className="h-12 w-12 text-accent" />
              <h3 className="mt-4 text-2xl font-bold">Efficiency</h3>
              <p className="mt-2 text-muted-foreground">
                Optimizing energy usage and processes to save you money and protect the environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Our Core Services</h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            A glimpse into how we can elevate your environment.
          </p>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredServices.map((service) => (
              <Card key={service.title} className="text-left transform hover:-translate-y-2 transition-transform duration-300">
                <CardHeader className="flex flex-row items-center gap-4">
                  <service.icon className="h-10 w-10 text-accent" />
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <Button asChild variant="link" className="mt-12 text-lg">
            <Link href="/services">
              Explore All Services <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      <section id="about-us" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Who We Are
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-muted-foreground">
              Smart Integrated Environment is a team of passionate engineers and technicians dedicated to creating intelligent spaces. We believe in the power of technology to enhance lives, secure assets, and build a sustainable future.
            </p>
            <Button asChild className="mt-8" size="lg">
              <Link href="/about">Learn More About Us</Link>
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
}
