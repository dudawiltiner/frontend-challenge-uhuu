import { getCssText } from '@/../stitches.config';
import Head from 'next/head';
import './globals.css';

export const metadata = {
  title: 'TMDB',
  description: 'Movies List',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
      <Head>
        <style
          id="stitches"
          dangerouslySetInnerHTML={{ __html: getCssText() }}
        />
      </Head>
      <body>{children}</body>
    </html>
  );
}
