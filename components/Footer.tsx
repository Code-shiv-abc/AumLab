import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} AumLabs. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          <Link href="#" className="text-sm text-gray-500 hover:text-white transition-colors">
            Twitter
          </Link>
          <Link href="#" className="text-sm text-gray-500 hover:text-white transition-colors">
            LinkedIn
          </Link>
          <Link href="#" className="text-sm text-gray-500 hover:text-white transition-colors">
            GitHub
          </Link>
        </div>
      </div>
    </footer>
  );
}
