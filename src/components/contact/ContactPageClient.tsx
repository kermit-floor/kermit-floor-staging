'use client';

import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { MapPin, Phone, Mail, Building } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '../ui/separator';
import { trackEvent } from '@/lib/consent/gtag';

function LocationCard({ location }: { location: { title: string; details: any[] } }) {
  return (
    <Card className="flex flex-col h-full">
      <CardHeader>
        <CardTitle className="font-headline text-xl text-center tracking-wider">{location.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow space-y-4">
        {location.details.map((item, index) => (
          item.value && <React.Fragment key={index}>
            <div className="flex items-start gap-4">
              <item.icon className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
              <div className="text-muted-foreground whitespace-pre-line text-sm">
                {item.href ? (
                  <a
                    href={item.href}
                    className="hover:text-primary transition-colors"
                    onClick={item.leadMethod ? () => trackEvent('generate_lead', {method: item.leadMethod, location: 'contact_page', office: location.title}) : undefined}
                  >{item.value}</a>
                ) : (
                  <span>{item.value}</span>
                )}
              </div>
            </div>
            {index < location.details.length - 1 && <Separator />}
          </React.Fragment>
        ))}
      </CardContent>
    </Card>
  );
}


export default function ContactPageClient() {
  const t = useTranslations('ContactPage');
  const tLoc = useTranslations('ContactPage.locations');
  
  const locations = [{
    title: tLoc('romaniaTitle'),
    details: [
      {icon: Building, value: tLoc('romaniaCompany')},
      {icon: MapPin, value: tLoc('romaniaAddress')},
      {icon: Phone, value: '+40 722 547 258', href: 'tel:+40722547258', leadMethod: 'phone'},
      {icon: Phone, value: '+40 738 754 074', href: 'tel:+40738754074', leadMethod: 'phone'},
      {icon: Mail, value: tLoc('romaniaEmail'), href: `mailto:${tLoc('romaniaEmail')}`, leadMethod: 'email'},
    ],
  }];

  return (
    <>
      <section className="relative h-64 w-full">
        <Image
          src="/images/hero-images/contact-us-hero-image.jpg"
          alt={t('hero.title')}
          fill
          className="object-cover"
          data-ai-hint="business office contact"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center p-4">
          <h1 className="font-headline text-4xl lg:text-5xl font-bold tracking-tight text-white">
            {t('hero.title')}
          </h1>
          <p className="mt-4 text-lg text-white/90 max-w-3xl mx-auto">
            {t('hero.subtitle')}
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12 md:py-16 space-y-12">
        <section>
          <h2 className="text-3xl font-bold font-headline text-center mb-8">{tLoc('title')}</h2>
          <div className="mx-auto max-w-2xl">
            {locations.map((loc, index) => (
              <LocationCard key={index} location={loc} />
            ))}
          </div>
        </section>

      </div>
    </>
  );
}
