import type { RequestHandler, Response } from '@sveltejs/kit';
import { error } from '@sveltejs/kit';

const getHandler = async (event: Record<string, any>, type: string = 'application/xml'): Response => {
    try {
      const resp = `
      <?xml version="1.0" encoding="UTF-8" ?>
      <urlset
        xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="https://www.w3.org/1999/xhtml"
        xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
        xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
        xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
        xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
      >
      <!-- <url> elements go here -->
      </urlset>
      `;
      return new Response(resp.trim(), { headers: { 'Content-Type': type } });
  	} catch (e) {
  		console.error(e);
      throw error(e.status || 400, e);
  	}
};

export const GET: RequestHandler = async (event: Record<string, any>): Response => getHandler(event);

export const prerender = true;
