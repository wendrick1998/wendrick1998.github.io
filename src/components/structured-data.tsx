import { STORE } from "@/lib/constants";

export function StructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: STORE.name,
    description: "Loja de iPhones originais em Blumenau. Aparelhos revisados, com garantia e atendimento via WhatsApp.",
    url: "https://wendrick1998.github.io/",
    telephone: "+55" + STORE.phone.replace(/\D/g, ""),
    address: {
      "@type": "PostalAddress",
      streetAddress: "R. São Valentim, 483",
      addressLocality: "Blumenau",
      addressRegion: "SC",
      postalCode: STORE.cep,
      addressCountry: "BR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -26.8698,
      longitude: -49.0958,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: STORE.rating,
      reviewCount: STORE.reviews,
      bestRating: "5",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "18:00",
    },
    priceRange: "$$",
    image: "https://wendrick1998.github.io/og-image.png",
    sameAs: [`https://www.instagram.com/${STORE.instagram}`],
  };

  // Schema is built from static constants only — no user input
  const jsonLd = JSON.stringify(schema);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: jsonLd }}
    />
  );
}
