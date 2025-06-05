import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-900 text-white">
      <div className="text-center">
        <Image
          src="/assets/logo.png"
          alt="Radio IA logo"
          width={200}
          height={200}
          className="mx-auto mb-6"
          priority
        />
        <h1 className="text-5xl font-bold">Radio IA</h1>
        <p className="mt-2 text-lg text-gray-300">
          La radio 100% générée par intelligence artificielle
        </p>
      </div>
    </main>
  );
}
