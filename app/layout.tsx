import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: "DUTO - 캐릭터를 키우듯, 인생을 키운다",
  description: "목표를 오늘의 퀘스트로 구조화하고, 실행할수록 캐릭터가 성장하는 목표·루틴 앱",
  keywords: ["목표 관리", "루틴", "습관", "게이미피케이션", "DUTO"],
  openGraph: {
    title: "DUTO - 캐릭터를 키우듯, 인생을 키운다",
    description: "목표를 오늘의 퀘스트로 구조화하고, 실행할수록 캐릭터가 성장하는 목표·루틴 앱",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased">
        <Toaster />
        {children}
      </body>
    </html>
  );
}
