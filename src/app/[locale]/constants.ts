export const locales = ['en', 'ukr'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale = 'en' as const;