import type { Metadata } from "next";
import "@/assets/styles/globals.css";
import { Inter } from "next/font/google";
import { APP_DESCRIPTION, APP_NAME, SERVER_URL } from "@/lib/constant";
import { ThemeProvider } from "next-themes";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: `$s, | Prostore`,
    default: APP_NAME,
  },
  description: APP_DESCRIPTION,
  metadataBase: new URL(SERVER_URL),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressContentEditableWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
