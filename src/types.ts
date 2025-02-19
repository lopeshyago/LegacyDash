export interface User {
  id: string;
  first_name: string;
  last_name: string;
  username: string;
  email: string;
  social_media: {
    twitter?: string;
    instagram?: string;
    youtube?: string;
    kawai?: string;
    tiktok?: string;
    facebook?: string;
    whatsapp?: string;
  };
}

export interface Publication {
  id: string;
  user_id: string;
  platform: 'twitter' | 'instagram' | 'youtube' | 'kawai' | 'tiktok' | 'facebook';
  url: string;
  metrics: {
    likes?: number;
    retweets?: number;
    shares?: number;
    comments?: number;
    views?: number;
    bookmarks?: number;
  };
  created_at: string;
}

export interface Engagement {
  id: string;
  title: string;
  description: string;
  platform: string;
  requirements: string;
  deadline: string;
  created_at: string;
}