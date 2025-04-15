import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "결혼인성",
  description: "결혼을 위한 인성 및 호환성 확인 앱",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#3b82f6" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <link rel="apple-touch-icon" href="/icon-192x192.png" />
      </head>
      <body className={inter.className}>
        <header className="bg-blue-600 text-white p-4 text-center">
          <h1 className="text-2xl font-bold">
            <Link href="/" className="hover:text-blue-100">결혼인성</Link>
          </h1>
        </header>
        <main className="max-w-4xl mx-auto p-4">{children}</main>
        <footer className="bg-gray-800 text-white p-4 text-center text-sm mt-8">
          <div className="flex justify-center space-x-6 mb-3">
            <Link href="/about" className="hover:text-blue-300 transition">소개</Link>
            <Link href="/faq" className="hover:text-blue-300 transition">자주 묻는 질문</Link>
            <Link href="/privacy" className="hover:text-blue-300 transition">개인정보 보호</Link>
            <Link href="/quiz" className="hover:text-blue-300 transition">테스트 시작</Link>
          </div>
          <p>© {new Date().getFullYear()} 결혼인성 앱</p>
        </footer>
      </body>
    </html>
  );
}
