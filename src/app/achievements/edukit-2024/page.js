import Link from "next/link";
import Image from "next/image";

export default function Edukit2024Page() {
  const imageNames = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg", // Add more as you add new files
  ];

  return (
    <div className="min-h-screen bg-white font-poppins py-12 px-6">
      <Link href="/achievements" className="text-green-700 text-sm hover:underline mb-4 block">
        ← Back to Achievements
      </Link>

      <h1 className="text-3xl font-bold text-green-900 mb-4">2024 SK Project EduKit</h1>
<p className="text-green-800 text-sm mb-4">
  The SK EduKit Project successfully provided essential school supplies to support the education of local youth in Barangay Taloc. The first wave of distribution was held at Ramon Torres Taloc National High School (RTTNHS), where 50 EduKit packages were given to selected students. These kits contained basic educational materials aimed at helping students prepare for the upcoming school year.
</p>

<p className="text-green-800 text-sm mb-8">
  Following the initial rollout, a second wave of distribution was conducted at the Barangay Hall of Taloc, where an additional 250 EduKit packages were distributed to students from different areas of the barangay. In total, 300 EduKit packages were given out, demonstrating the Sangguniang Kabataan’s commitment to supporting youth through accessible and meaningful educational assistance programs.
</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {imageNames.map((name, index) => (
          <div key={index} className="w-full h-64 relative rounded-lg overflow-hidden border">
            <Image
              src={`/edukit/${name}`}
              alt={`Edukit Photo ${index + 1}`}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
