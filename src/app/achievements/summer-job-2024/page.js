import Link from "next/link";
import Image from "next/image";

export default function SummerJob2024Page() {
  const imageNames = [
    "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg",
    "6.jpg", "7.jpg", "8.jpg", "9.jpg", "10.jpg"
  ];

  return (
    <div className="min-h-screen bg-white font-poppins py-12 px-6">
      <Link
        href="/achievements"
        className="text-green-700 text-sm hover:underline mb-4 block"
      >
        ← Back to Achievements
      </Link>

      <h1 className="text-3xl font-bold text-green-900 mb-4">
        Summer Job Program – Year 2 (2025)
      </h1>

      <p className="text-green-800 text-sm mb-4">
        The second wave of the SK Summer Job Program was held from June 9 to 13, 2025. This weeklong initiative aimed to provide local youth with valuable work experience, enhance their community involvement, and offer financial assistance during their school break. A total of 40 participants were selected and deployed to various offices and community tasks in Barangay Taloc.
      </p>

      <p className="text-green-800 text-sm mb-8">
        To formally conclude the program, a simple payroll distribution ceremony took place on Sunday, June 15, 2025, at the Barangay Hall of Taloc. The event recognized the efforts of each participant and served as a testament to the SK’s continued efforts in empowering and engaging the youth through meaningful and developmental opportunities.
      </p>

      {/* 📸 Image Gallery */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-12">
        {imageNames.map((name, index) => (
          <div
            key={index}
            className="w-full h-64 relative rounded-lg overflow-hidden border"
          >
            <Image
              src={`/summerjob/${name}`}
              alt={`Summer Job Photo ${index + 1}`}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>

      {/* 👥 Team Section */}
      <div className="bg-green-50 border border-green-100 rounded-xl p-6 shadow-sm max-w-4xl mx-auto">
        <h2 className="text-xl font-semibold text-green-900 mb-4">Team Behind the Project</h2>

        <div className="mb-6">
          <p className="text-green-800 text-sm"><span className="font-semibold">Spearheaded by:</span> Juliane P. Cuayson</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-2 text-sm text-green-800">
          <div>
            <p className="font-medium">Rowel A. Capillo</p>
            <p className="text-xs text-green-600">SK Chairman</p>
          </div>

          <div>
            <p className="font-medium">Kevin H. Carmona</p>
            <p className="text-xs text-green-600">SK Kagawad</p>
          </div>

          <div>
            <p className="font-medium">Hannah S. Lobrido</p>
            <p className="text-xs text-green-600">SK Kagawad</p>
          </div>

          <div>
            <p className="font-medium">Earl John M. Paildan</p>
            <p className="text-xs text-green-600">SK Kagawad</p>
          </div>

          <div>
            <p className="font-medium">Adrian M. Cobrador</p>
            <p className="text-xs text-green-600">SK Kagawad</p>
          </div>

          <div>
            <p className="font-medium">Martin B. Malunes</p>
            <p className="text-xs text-green-600">SK Kagawad</p>
          </div>

          <div>
            <p className="font-medium">Katlene Ann M. Paredes</p>
            <p className="text-xs text-green-600">SK Kagawad</p>
          </div>

          <div>
            <p className="font-medium">Krischan S. Gelasan</p>
            <p className="text-xs text-green-600">SK Treasurer</p>
          </div>

          <div>
            <p className="font-medium">Danica M. Seraspi</p>
            <p className="text-xs text-green-600">SK Secretary</p>
          </div>
        </div>
      </div>
    </div>
  );
}
