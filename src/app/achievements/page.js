import Link from "next/link";

export default function AchievementsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white font-poppins py-12 px-6 relative">
      
      {/* 🔙 Back Button */}
      <Link href="/" className="absolute top-6 left-6 text-green-700 text-sm hover:text-green-900 hover:underline flex items-center gap-1">
        <span className="text-xl">&larr;</span> Back to Home
      </Link>

      <h1 className="text-4xl font-extrabold text-green-900 text-center mb-10">
        Achievements & Accomplishment Reports
      </h1>

      {/* ==== 2025 ==== */}
      <h2 className="text-2xl font-semibold text-green-900 mb-4 mt-10 border-b pb-1">2025</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
        {/* 2025 EduKit */}
        <div className="bg-white border border-green-200 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6">
          <h3 className="text-xl font-bold text-green-800 mb-2">✔ 2025 SK Project EduKit</h3>
          <p className="text-green-700 text-sm mb-3">Distributed over 500 school kits to Taloc youth. A continued commitment to education support.</p>
          <Link href="/achievements/edukit-2024" className="text-sm text-green-600 hover:underline">Read More</Link>
        </div>

        {/* 2025 Summer Job */}
        <div className="bg-white border border-green-200 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6">
          <h3 className="text-xl font-bold text-green-800 mb-2">✔ Summer Job Program 2025</h3>
          <p className="text-green-700 text-sm mb-3">Provided job experience and allowance to more than 50 students during summer break.</p>
          <Link href="/achievements/summer-job-2024" className="text-sm text-green-600 hover:underline">Read More</Link>
        </div>

        {/* Dummy for 2025 */}
        <div className="bg-white border border-green-100 rounded-xl p-6 text-green-400 border-dashed text-sm">
          Placeholder for future 2025 projects...
        </div>
      </div>

      {/* ==== 2024 ==== */}
{/* ==== 2024 ==== */}
<h2 className="text-2xl font-semibold text-green-900 mb-4 mt-10 border-b pb-1">2024</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
  
  {/* Pasidungog 2024 */}
  <div className="bg-white border border-green-200 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6">
    <h3 className="text-xl font-bold text-green-800 mb-2">✔ Pasidungog 2024</h3>
    <p className="text-green-700 text-sm mb-3">A milestone event honoring youth and community excellence with the theme “Igniting the Future, Honoring Excellence.”</p>
    <Link href="/achievements/pasidungog-2024" className="text-sm text-green-600 hover:underline">Read More</Link>
  </div>

  {/* Basketball League Opening */}
  <div className="bg-white border border-green-200 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6">
    <h3 className="text-xl font-bold text-green-800 mb-2">✔ Basketball League Opening</h3>
    <p className="text-green-700 text-sm mb-3">Opened December 21 with a parade and games — a celebration of unity, sportsmanship, and barkada spirit.</p>
    <Link href="/achievements/basketball-2024" className="text-sm text-green-600 hover:underline">Read More</Link>
  </div>

  {/* Bloodletting Activity */}
  <div className="bg-white border border-green-200 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6">
    <h3 className="text-xl font-bold text-green-800 mb-2">✔ Bloodletting Activity</h3>
    <p className="text-green-700 text-sm mb-3">Over 70 donors participated in saving lives through blood donation, supported by the City Health Office.</p>
    <Link href="/achievements/bloodletting-2024" className="text-sm text-green-600 hover:underline">Read More</Link>
  </div>

  {/* Anti-Illegal Drugs Symposium */}
  <div className="bg-white border border-green-200 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6">
    <h3 className="text-xl font-bold text-green-800 mb-2">✔ Anti-Illegal Drugs Symposium</h3>
    <p className="text-green-700 text-sm mb-3">A youth-centered event that raised awareness and encouraged action against illegal drug use.</p>
    <Link href="/achievements/anti-drugs-2024" className="text-sm text-green-600 hover:underline">Read More</Link>
  </div>

  {/* KK Assembly & Mental Health Talk */}
  <div className="bg-white border border-green-200 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6">
    <h3 className="text-xl font-bold text-green-800 mb-2">✔ KK Assembly & Mental Health Talk</h3>
    <p className="text-green-700 text-sm mb-3">Held in October, this event promoted mental wellness and presented youth plans for progress.</p>
    <Link href="/achievements/kk-assembly-2024" className="text-sm text-green-600 hover:underline">Read More</Link>
  </div>

  {/* Linggo ng Kabataan 2024 */}
  <div className="bg-white border border-green-200 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6">
    <h3 className="text-xl font-bold text-green-800 mb-2">✔ Linggo ng Kabataan 2024</h3>
    <p className="text-green-700 text-sm mb-3">A full week of contests and youth empowerment activities under the theme “Pag-usbong ng Kakayahan at Talento.”</p>
    <Link href="/achievements/linggo-ng-kabataan-2024" className="text-sm text-green-600 hover:underline">Read More</Link>
  </div>
        <div className="bg-white border border-green-100 rounded-xl p-6 text-green-400 border-dashed text-sm">
          Additional 2024 achievements coming soon...
        </div>
</div>

      {/* ==== 2023 ==== */}
      <h2 className="text-2xl font-semibold text-green-900 mb-4 mt-10 border-b pb-1">2023</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
        <div className="bg-white border border-green-200 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6">
          <h3 className="text-xl font-bold text-green-800 mb-2">✔ Youth Leadership Camp 2023</h3>
          <p className="text-green-700 text-sm mb-3">A 3-day camp that trained future leaders through workshops, team-building, and civic immersion.</p>
          <Link href="/achievements/youth-camp-2023" className="text-sm text-green-600 hover:underline">Read More</Link>
        </div>
        <div className="bg-white border border-green-100 rounded-xl p-6 text-green-400 border-dashed text-sm">
          Additional 2023 achievements coming soon...
        </div>
      </div>

      {/* Footer Contact */}
      <div className="mt-16 text-center">
        <p className="text-green-800 text-sm">
          Want to request a full PDF of our annual reports? Contact us at{" "}
          <a href="mailto:sktaloc@gmail.com" className="underline hover:text-green-600">sktaloc@gmail.com</a>
        </p>
      </div>
    </div>
  );
}
