export const WHATSAPP_NUMBER = "5547992231192";
export const WHATSAPP_MESSAGE = encodeURIComponent(
  "Olá! Vim pelo site e quero saber quais iPhones estão disponíveis no momento."
);
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

export function whatsappLink(utm?: string) {
  const base = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;
  return utm ? `${base}&utm_source=site&utm_medium=cta&utm_campaign=${encodeURIComponent(utm)}` : base;
}

export const STORE = {
  name: "iBlu Store",
  fullName: "iBlu Store",
  tagline: "iPhones Originais em Blumenau",
  since: "2013",
  address: "R. São Valentim, 483 - Itoupava Norte",
  city: "Blumenau - SC",
  cep: "89053-330",
  phone: "(47) 99223-1192",
  rating: "4.9",
  reviews: "179",
  instagram: "iblu.store",
  mapsUrl: "https://maps.app.goo.gl/YourRealLinkHere",
  mapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3577.1!2d-49.0958!3d-26.8698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94df1909e98c0ead%3A0x2e3e9e2e9e3e9e2e!2sR.%20S%C3%A3o%20Valentim%2C%20483%20-%20Itoupava%20Norte%2C%20Blumenau%20-%20SC!5e0!3m2!1spt-BR!2sbr",
} as const;
