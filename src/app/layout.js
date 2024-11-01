import "./globals.css";

export const metadata = {
  title: "Web Developement",
  description: "Here You will learn FullStack Developement"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
