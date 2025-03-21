import { Inter } from 'next/font/google';
import { Playfair_Display } from 'next/font/google';

export const inter = Inter({ subsets: ['latin'] });

export const playfairDisplay = Playfair_Display({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700', '800', '900'],
});