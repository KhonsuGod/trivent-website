import { useEffect } from 'react';
import { company, founder } from '../data/company';

type SeoProps = {
  title: string;
  description: string;
  path: string;
  includePerson?: boolean;
};

function upsertMeta(selector: string, create: () => HTMLMetaElement, set: (el: HTMLMetaElement) => void) {
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = create();
    document.head.appendChild(el);
  }
  set(el);
}

function upsertMetaName(name: string, content: string) {
  upsertMeta(`meta[name="${name}"]`, () => {
    const el = document.createElement('meta');
    el.setAttribute('name', name);
    return el;
  }, (el) => el.setAttribute('content', content));
}

function upsertMetaProperty(property: string, content: string) {
  upsertMeta(`meta[property="${property}"]`, () => {
    const el = document.createElement('meta');
    el.setAttribute('property', property);
    return el;
  }, (el) => el.setAttribute('content', content));
}

/** Per-route SEO: title, description, canonical, OG. Plus Organization
 *  structured data on every route and Person data on the Founder route. */
export function Seo({ title, description, path, includePerson = false }: SeoProps) {
  useEffect(() => {
    const url = `${company.siteUrl}${path}`;
    document.title = title;

    upsertMetaName('description', description);
    upsertMetaProperty('og:title', title);
    upsertMetaProperty('og:description', description);
    upsertMetaProperty('og:url', url);
    upsertMetaProperty('og:type', 'website');

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', url);

    const orgId = 'trivent-seo-organization';
    if (!document.getElementById(orgId)) {
      const script = document.createElement('script');
      script.id = orgId;
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: company.legalName,
        alternateName: company.brandName,
        url: company.siteUrl,
        email: company.email,
        foundingDate: company.established,
        address: { '@type': 'PostalAddress', addressLocality: 'Bandung Barat', addressCountry: 'ID' },
      });
      document.head.appendChild(script);
    }

    const personId = 'trivent-seo-person';
    const existing = document.getElementById(personId);
    if (includePerson && !existing) {
      const script = document.createElement('script');
      script.id = personId;
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: founder.fullName,
        jobTitle: founder.role,
        worksFor: { '@type': 'Organization', name: company.legalName },
      });
      document.head.appendChild(script);
    } else if (!includePerson && existing) {
      existing.remove();
    }
  }, [title, description, path, includePerson]);

  return null;
}
