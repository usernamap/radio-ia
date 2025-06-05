import Image from "next/image";
import AudioPlayer from "@/components/AudioPlayer";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-900 text-white">
      <div className="text-center space-y-6">
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
        <AudioPlayer
          src="https://example.com/stream-128.mp3"
          title="Live Stream"
          artist="AI Radio"
          qualities={[
            { label: '128 kbps', src: 'https://example.com/stream-128.mp3' },
            { label: '320 kbps', src: 'https://example.com/stream-320.mp3' },
          ]}
        />
      </div>
    </main>
  );
}
