import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import Header from "./components/Header";
import "../app/globals.css";

export const metadata = {
  title: "James Delas Alas - Portfolio",
  description:
    "Welcome to my portfolio! I'm a passionate Full Stack Developer and UI Designer dedicated to crafting beautiful, intuitive, and highly functional digital experiences.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="antialiased">
        <Header />
        <main className="min-h-screen-minus-header">{children}</main>
      </body>
    </html>
  );
}
