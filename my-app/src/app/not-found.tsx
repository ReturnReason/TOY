import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h2>404 Not Found</h2>
      <p>존재하지 않는 페이지입니다.</p>
      <button>
        <Link href="/">Return Home</Link>
      </button>
    </div>
  );
}
