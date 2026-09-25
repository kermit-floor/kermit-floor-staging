import posts from './instagram-posts.json';

export interface InstagramPost {
  id: string;
  videoSrc: string;
  posterSrc: string;
  caption_en: string;
  caption_ro: string;
  postUrl: string;
}

export function getInstagramPosts(): InstagramPost[] {
  return posts;
}
