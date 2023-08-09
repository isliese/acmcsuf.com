import type { PageLoadEvent } from './$types';
import type { CertificatePageData } from '$lib/public/certificates';
import { LATEST, makeCertificatePageDataURL } from '$lib/public/certificates/urls';

export async function load({ fetch, params, url }: PageLoadEvent) {
  const release = url.searchParams.get('release') ?? LATEST;
  const response = await fetch(makeCertificatePageDataURL(params.username, release));
  const data: CertificatePageData = await response.json();
  return data;
}