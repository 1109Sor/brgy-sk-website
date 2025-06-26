import Image from "next/image";
import Link from "next/link";

export default function DanicaProfile() {
  return (
    <div className="min-h-screen bg-green-50 text-green-900 px-6 py-12 font-poppins">
      <div className="max-w-4xl mx-auto text-center">
        <div className="text-left mb-6">
          <Link href="/">
            <span className="inline-flex items-center text-green-800 hover:text-green-900 transition">← Back to Home</span>
          </Link>
        </div>
        <div className="flex justify-center mb-6">
          <Image src="/danica.jpg" alt="Danica Marie Q. Seraspi" width={160} height={160} className="rounded-full shadow-lg border-4 border-green-300" />
        </div>
        <h1 className="text-3xl font-bold mb-2">Meet SK Secretary Danica Marie Q. Seraspi</h1>
        <h2 className="text-xl text-green-800 font-semibold mb-4">Secretary & Child Rights Advocate</h2>
        <p className="max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
          Danica supports SK operations while also promoting children's rights and welfare through CHRA advocacy, ensuring youth voices are heard.
        </p>
      </div>
    </div>
  );
}