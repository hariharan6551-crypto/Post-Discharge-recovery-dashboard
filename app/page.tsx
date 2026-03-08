import Link from "next/link"

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-screen bg-gray-100">

      <h1 className="text-4xl font-bold mb-8">
        Healthcare Recovery Dashboard
      </h1>

      <div className="space-x-6">

        <Link 
          href="/upload"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
        >
          Upload Dataset
        </Link>

        <Link 
          href="/dashboard"
          className="px-6 py-3 bg-green-600 text-white rounded-lg shadow hover:bg-green-700"
        >
          Open Dashboard
        </Link>

      </div>

    </main>
  )
}