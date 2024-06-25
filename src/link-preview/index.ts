import axios from 'axios';
import { JSDOM } from 'jsdom';
import { fixUrl } from '../utils/url';

function appendUrl(url: string | null, array?: string[]) {
	if (url) {
		const fixedUrl = fixUrl(url);
		if (fixedUrl) {
			array?.push(fixedUrl.toString());
		}
	}
}



export async function linkPreview(requestUrl: string) {
  const targetURL = fixUrl(requestUrl);
  if (!targetURL) {
    throw new Error('Invalid URL');
  }

  const response = await axios.get(targetURL.href);
  const html = response.data;
  const dom = new JSDOM(html);

  const res = {
    url: response.config.url as string,
    images: [] as string[],
    videos: [] as string[],
    favicons: [] as string[],
    title: '',
    siteName: '',
    description: '',
    mediaType: '',
  };

  dom.window.document.querySelectorAll('meta').forEach(tag => {
    const property = tag.getAttribute('property') || tag.getAttribute('name');
    const content = tag.getAttribute('content');
    if (property && content) {
      switch (property.toLowerCase()) {
        case 'og:title': res.title = content; break;
        case 'og:site_name': res.siteName = content; break;
        case 'og:description': res.description = content; break;
        case 'og:image': appendUrl(content, res.images); break;
        case 'og:video': appendUrl(content, res.videos); break;
        case 'og:type': res.mediaType = content; break;
        case 'description': if (!res.description) res.description = content; break;
      }
    }
  });

  res.title = res.title || dom.window.document.querySelector('title')?.textContent || '';

  dom.window.document.querySelectorAll('link[rel*="icon"]').forEach(link => {
    const href = link.getAttribute('href');
    console.log(href);
    if (href) appendUrl(href, res.favicons);
  });

  // get favicon by looking for the root domain and appending /favicon.ico
  if (!res.favicons.length) {
    const rootDomain = targetURL.protocol + '//' + targetURL.hostname;
    appendUrl(rootDomain + '/favicon.ico', res.favicons);
  }

  dom.window.document.querySelectorAll('img').forEach(img => {
    const src = img.getAttribute('src');
    if (src) appendUrl(src, res.images);
  });

  dom.window.document.querySelectorAll('video').forEach(video => {
    const src = video.getAttribute('src');
    if (src) appendUrl(src, res.videos);
  });

  return res;
}