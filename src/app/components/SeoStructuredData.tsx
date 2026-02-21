const BASE = "https://www.naturesteel.in";

export function SeoStructuredData() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Nature Steel",
    url: BASE,
    logo: `${BASE}/assets/logo.svg`,
    description:
      "Precision-driven steel detailing, 3D modeling, and fabrication drawings. On-time delivery, global code compliance, and dedicated project coordination for commercial and industrial projects in USA and Canada.",
    foundingDate: "2020",
    areaServed: ["US", "CA", "IN"],
    sameAs: [],
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Nature Steel",
    url: BASE,
    description:
      "Nature Steel - Precision steel detailing and structural engineering services. India-based company delivering global standards to USA and Canada.",
    publisher: { "@id": `${BASE}#organization` },
    inLanguage: "en",
  };

  const professionalService = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Nature Steel",
    image: `${BASE}/assets/services.jpg`,
    url: BASE,
    description:
      "Steel detailing, 3D modeling using Tekla Structures, fabrication drawings, shop drawings, erection drawings, and BIM services for commercial and industrial projects.",
    areaServed: { "@type": "GeoCircle", geo: { "@type": "GeoCoordinates", latitude: 20.5937, longitude: 78.9629 } },
    priceRange: "$$",
    serviceType: [
      "Steel Detailing",
      "3D Modeling",
      "Fabrication Drawings",
      "Shop Drawings",
      "Erection Drawings",
      "BIM",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organization),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(website),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(professionalService),
        }}
      />
    </>
  );
}
