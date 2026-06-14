import React from 'react';
import RedesignedHomepage from '@/src/components/home/RedesignedHomepage';

export const metadata = {
  title: `${process.env.NEXT_PUBLIC_BRAND_NAME || 'Pleasure Drive Ltd'} | Luxury Car Rental — Island Wide Delivery`,
  description: 'Discover Mauritius in style with our premium car rental service. 20+ elite vehicles, 24/7 support, and free island-wide delivery. Book your dream car today.',
};

export default async function HomePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AutoRental',
    name: process.env.NEXT_PUBLIC_BRAND_NAME || 'Pleasure Drive Ltd',
    image: 'https://images.unsplash.com/photo-1506012733851-4043ce625295?q=80&w=1200',
    description: 'Mauritius\'s most trusted luxury car rental service since 2010.',
    url: process.env.NEXT_PUBLIC_APP_URL || 'https://carehireos.shop',
    telephone: process.env.NEXT_PUBLIC_BRAND_PHONE || '+2305255369',
    priceRange: '$$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'SSR International Airport',
      addressLocality: 'Plaine Magnien',
      addressRegion: 'Grand Port',
      postalCode: '51520',
      addressCountry: 'MU'
    }
  };

  return (
    <div className="flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <RedesignedHomepage />
    </div>
  );
}
