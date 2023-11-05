import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
        <main className="bg-slate-50 dark:bg-gray-900 dark:text-white">
          <Navbar />
          <div className="pt-8">{children}</div>
          <Footer />
        </main>
      </body>
    </html>
  );
}
