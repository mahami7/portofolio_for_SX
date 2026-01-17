import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-data';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Target, Eye } from 'lucide-react';

export default function AboutPage() {
  const aboutImage = PlaceHolderImages.find((img) => img.id === 'about');

  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">
            About Smart Integrated Environment
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            Pioneering the future of intelligent living and working spaces through technology and innovation.
          </p>
        </div>

        <div className="mt-16 grid gap-12 md:grid-cols-2 md:gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight">Our Story</h2>
            <p className="text-muted-foreground leading-relaxed">
              Founded on the principle that technology should simplify and enhance our lives, Smart Integrated Environment started as a small team of passionate innovators. We saw a future where homes and businesses could be more than just buildings—they could be responsive, efficient, and secure ecosystems.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              From our humble beginnings, we have grown into a trusted leader in smart technology solutions. Our journey is one of continuous learning, adaptation, and an unwavering commitment to quality and customer satisfaction. We have successfully transformed countless properties into state-of-the-art smart environments, proving that a connected future is not just possible, but practical.
            </p>
          </div>
          <div className="relative h-80 w-full rounded-lg overflow-hidden shadow-lg">
             {aboutImage && (
              <Image
                src={aboutImage.imageUrl}
                alt={aboutImage.description}
                fill
                className="object-cover"
                data-ai-hint={aboutImage.imageHint}
              />
            )}
          </div>
        </div>

        <div className="mt-24 grid md:grid-cols-2 gap-12">
            <div className="flex flex-col items-center text-center p-8 border rounded-lg bg-card">
              <div className="p-3 bg-primary rounded-full mb-4">
                <Eye className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Our Vision</h3>
              <p className="text-muted-foreground">
                To be the leading provider of smart, sustainable, and secure environment solutions that empower individuals and organizations to thrive in a connected world. We envision a future where technology works in harmony with people and the planet.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-8 border rounded-lg bg-card">
              <div className="p-3 bg-primary rounded-full mb-4">
                <Target className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Our Mission</h3>
              <p className="text-muted-foreground">
                To design, deliver, and support innovative, reliable, and user-friendly technology solutions. We are dedicated to providing exceptional value to our clients through expert consultation, seamless integration, and unparalleled customer service.
              </p>
            </div>
        </div>

         <div className="mt-24 text-center bg-secondary p-12 rounded-lg">
          <h2 className="text-3xl font-bold">Ready to build a smarter future?</h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">Let's discuss how we can bring smart technology to your home or business.</p>
          <Button asChild size="lg" className="mt-6">
            <Link href="/contact">
              Contact Us Today
            </Link>
          </Button>
        </div>

      </div>
    </div>
  );
}
