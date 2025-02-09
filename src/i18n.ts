import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';


export const locales = ['en', 'ru'] as const;
export const defaultLocale = 'ru';

export default getRequestConfig(async ({ locale }: { locale: string}) => {

    if (!locales.includes(locale as "en" | "ru")) notFound();

    return {
        messages: (await import(`../messages/${locale}.json`)).default
    };
});