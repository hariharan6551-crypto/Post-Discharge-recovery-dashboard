import Link from "next/link"

export default function Home() {
  return (
    <main style={{ padding: 40 }}>
      <h1>Healthcare Recovery Dashboard</h1>

      <div style={{ marginTop: 20 }}>
        <Link href="/upload">Upload Dataset</Link>
      </div>

      <div style={{ marginTop: 20 }}>
        <Link href="/dashboard">Open Dashboard</Link>
      </div>
    </main>
  )
}