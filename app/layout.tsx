import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'Devos | Little moments. Lifelong faith.', description: 'Screen-light Christian devotionals and bedtime stories for families.' };
export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) { return <html lang="en"><body>{children}</body></html>; }
