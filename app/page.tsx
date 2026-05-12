import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-gray-50">
      <div className="max-w-2xl text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Frontend Technical Test
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Aplikasi manajemen user sederhana yang dibangun dengan Next.js, TypeScript dan React Query untuk menampilkan data dari JSONPlaceholder.
        </p>
        
        <div className="flex justify-center gap-4">
          <Link 
            href="/users"
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-md"
          >
            Lihat Daftar User
          </Link>
        </div>
      </div>

      <footer className="absolute bottom-8 text-sm text-gray-400">
        © 2026 PT Mampu Inovasi Digital - Frontend Task
      </footer>
    </main>
  );
}