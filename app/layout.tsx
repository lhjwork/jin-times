import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      루트레이아웃
      <body>{children}</body>
    </html>
  );
}
