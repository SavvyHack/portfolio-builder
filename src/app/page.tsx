import Link from 'next/link';

export default function Home() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">Welcome to My Portfolio</h1>
      <p className="mt-4 text-gray-600">This is the home screen.</p>

      <Link href="/auth/sign-up">
        <button className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
          Sign Up
        </button>
      </Link>
    </main>
  );
}
