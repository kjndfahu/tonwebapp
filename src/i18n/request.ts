import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from './routing';

export default getRequestConfig(async (params) => {
    const locale = await params.locale as string;

    if (!routing.locales.includes(locale as "en" | "ru")) {
        notFound();
    }

    return {
        messages: (await import(`./../../messages/${locale}.json`)).default,
    };
});