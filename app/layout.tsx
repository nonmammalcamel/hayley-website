import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hayley Trafzer — Writer · Director · Filmmaker",
  description: "Portfolio of writer and director Hayley Trafzer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}