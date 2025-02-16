export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-8 font-sans tracking-tight">
      <div className="bg-white rounded-xl p-8 sm:p-12 space-y-8 w-full max-w-2xl">
        <h1 className="text-2xl sm:text-3xl font-medium text-gray-900 tracking-tighter">
          KOOPA STUDIOS
        </h1>

        <div className="flex flex-col gap-2">
          <a
            href="https://youtube.com/@ahtasports"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg text-gray-900 hover:opacity-70 transition-opacity"
          >
            ahta sports
          </a>
          <a
            href="https://youtube.com/@heysamarth"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg text-gray-900 hover:opacity-70 transition-opacity"
          >
            heysamarth
          </a>
          <a
            href="https://youtube.com/@therealsiddhu"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg text-gray-900 hover:opacity-70 transition-opacity"
          >
            therealsiddhu
          </a>
        </div>

        <footer className="mt-auto">
          <div className="flex justify-between items-center pt-6 border-t border-gray-100 text-sm text-gray-500">
            <p className="m-0">KOOPA LLC</p>
            <a
              href="mailto:samarth@koopa.studio"
              className="hover:opacity-70 transition-opacity"
            >
              Contact
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}
