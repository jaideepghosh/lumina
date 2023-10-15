import "./globals.css";
import Navbar from "@/components/Navbar";

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
      <body>
        <main className="bg-slate-50">
          <Navbar />
          <div className="pt-8">{children}</div>
        </main>
      </body>
    </html>
  );
}
