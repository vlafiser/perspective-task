import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "Perspective | Funnel Mobile Preview",
  description: "Experience the Mobile Preview of the Perspective Funnel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased bg-[#F3F4F6]`}>
        <div className="flex items-center absolute left-10 top-7">
          <Link href="/" className="cursor-pointer transition-scale duration-200 will-change-transform active:scale-[0.98]">
            <Image
              width={36}
              height={36}
              alt="Perspective Brand"
              src='https://perspective.imgix.net/assets/app/logo/256x256.png?auto=compress&dpr=2'
              className='w-9 h-9'
            />
          </Link>
          <h1 className={`mt-0 mb-0 ml-4 text-md font-semibold leading-[120%] text-black cursor-default`}>
            Funnel Mobile Preview
          </h1>
        </div>
        {children}
      </body>
    </html>
  );
}
