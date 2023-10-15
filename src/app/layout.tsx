import "./globals.css";

export const metadata = {
  title: "Lumina",
  description:
    "Unlocking Innovation Through Screens: Lumina - Your Gateway to Inspiration, Insight, and Ideas.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
