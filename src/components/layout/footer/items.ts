import { instagram, twitter, facebook, github, visa, mastercard, paypal, applePay, googlePay } from "@/public/img";

type itemsType = {
   label: string;
   href: string;
};

type socialsType = {
   src: string;
   href: string;
   title: string;
};

type cardsType = {
   src: string;
   title: string;
};

// Menu items
export const company: itemsType[] = [
   { label: "About", href: "/" },
   { label: "Features", href: "/" },
   { label: "Works", href: "/" },
   { label: "Career", href: "/" },
];

export const help: itemsType[] = [
   { label: "Customer Support", href: "/" },
   { label: "Delivery Details", href: "/" },
   { label: "Terms & Conditions", href: "/" },
   { label: "Privacy Policy", href: "/" },
];

export const faq: itemsType[] = [
   { label: "Account", href: "/" },
   { label: "Manage Deliveries", href: "/" },
   { label: "Orders", href: "/" },
   { label: "Payments", href: "/" },
];

export const resources: itemsType[] = [
   { label: "Free eBooks", href: "/" },
   { label: "Development Tutorial", href: "/" },
   { label: "How to - Blog", href: "/" },
   { label: "Youtube Playlist", href: "/" },
];

// Social
export const social: socialsType[] = [
   { title: "Twitter", src: twitter, href: "/" },
   { title: "Facebook", src: facebook, href: "/" },
   { title: "Instagram", src: instagram, href: "/" },
   { title: "Github", src: github, href: "/" },
];

export const cards: cardsType[] = [
   { src: visa, title: "Visa" },
   { src: mastercard, title: "MasterCard" },
   { src: paypal, title: "PayPal" },
   { src: applePay, title: "Apple Pay" },
   { src: googlePay, title: "Google Pay" },
];
