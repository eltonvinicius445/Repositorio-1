export interface FaqItem {
  question: string;
  answer: string;
}

export interface BonusItem {
  id: number;
  title: string;
  description: string;
  originalPrice: string;
  image: string;
  tag: string;
}

export interface TestimonialItem {
  id: number;
  image: string;
  alt: string;
}
