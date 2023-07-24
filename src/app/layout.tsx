import { getCssText } from '@/../stitches.config';
import Menu from '@components/molecules/General/Menu';
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
    <html lang="en">
      <head>
        <style
          id="stitches"
          dangerouslySetInnerHTML={{ __html: getCssText() }}
        />
      </head>
      <body>
        <Menu />
        {children}
      </body>
    </html>
  );
}
