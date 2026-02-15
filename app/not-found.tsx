import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center space-y-6">
        <h1 className="text-6xl font-bold text-[var(--duto-text)]">404</h1>
        <p className="text-xl text-[var(--duto-muted)]">페이지를 찾을 수 없습니다</p>
        <Link
          href="/"
          className="inline-block px-6 py-3 rounded-full font-semibold transition-all"
          style={{
            backgroundColor: "var(--duto-primary-dark)",
            color: "white",
          }}
        >
          홈으로 돌아가기
        </Link>
      </div>
    </div>
  );
}
