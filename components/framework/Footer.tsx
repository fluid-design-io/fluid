import Link from 'next/link';


export default function Footer() {
  return (
    <footer className="mt-8 relative z-[10]">
      <div className="px-4 py-12 mx-auto overflow-hidden max-w-7xl sm:px-6 lg:px-8 flex space-x-6">
        <p className="mt-8 text-xs text-center text-gray-400">
          &copy; 2021 ImageVision Inc. All rights reserved.
        </p>
        <a className="mt-8 text-xs text-center text-gray-400">
          Terms
        </a>
      </div>
    </footer>
  );
}
