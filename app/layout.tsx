import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "Hockey Gear | Каталог экипировки",
  description: "Каталог хоккейной экипировки",
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ru"><body>{children}</body></html>;
}
