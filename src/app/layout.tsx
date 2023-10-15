import Navbar from "../../components/Navbar";
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
      <body>
        <main className="bg-slate-50">
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
