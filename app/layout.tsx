import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best resources",
  description: "Best resources to learn web development in one place",
  other: {
    "theme-color": "#0d1117",
    "color-scheme": "dark only",
    "twitter:image":
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvgjE0SHirWc2o3CIpxGIot_NA9aFDZkfkrA&usqp=CAU",
    "og:image":
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvgjE0SHirWc2o3CIpxGIot_NA9aFDZkfkrA&usqp=CAU",
    "og:type": "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-black-100">{children}</body>
    </html>
  );
}
