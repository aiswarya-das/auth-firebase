import Header from '@/components/header';
import { cookies } from 'next/headers';
import { SESSION_COOKIE_NAME } from '@/constants';

export default function Home() {
  const session = cookies().get(SESSION_COOKIE_NAME)?.value || null;

  return (
    <main className="flex min-h-screen w-full flex-col bg-[#0a2540] text-white">
      <Header session={session} />
      <div className="w-full p-4 md:p-8">
        <h2 className="text-white text-2xl md:text-3xl font-bold mb-4">Popular Topics 🔥</h2>
        <div className="flex overflow-x-auto space-x-4 scrollbar-hide">
          <div className="bg-[#123456] rounded-lg p-4 shadow-md w-64 flex-shrink-0 flex flex-col">
            <div className="flex items-start">
              <img src="https://cdn-icons-png.flaticon.com/128/7202/7202291.png" alt="Rocket Icon" width={40} height={40} />
              <div className="ml-4 flex-grow">
                <h3 className="text-lg font-semibold">Introduction to Rocket Science</h3>
                <p className="mb-4 text-gray-300">Covers fundamentals, design, construction, operation, and programming of rockets.</p>
              </div>
            </div>
            <button className="mt-auto px-4 py-2 bg-[#0a2540] text-white rounded-lg w-full"><a href='https://www.sciencefocus.com/space/what-is-rocket-science' className="hover:text-blue-600 transition duration-300">READ</a></button>
          </div>
          <div className="bg-[#123456] rounded-lg p-4 shadow-md w-64 flex-shrink-0 flex flex-col">
            <div className="flex items-start">
              <img src="https://cdn-icons-png.freepik.com/512/13403/13403955.png" alt="Astro Icon" width={40} height={40} />
              <div className="ml-4 flex-grow">
                <h3 className="text-lg font-semibold">Astro Physics</h3>
                <p className="mb-4 text-gray-300">Covers fundamentals, design, construction, operation, and programming of rockets.</p>
              </div>
            </div>
            <button className="mt-auto px-4 py-2 bg-[#0a2540] text-white rounded-lg w-full"><a href='https://www.space.com/26218-astrophysics.html' className="hover:text-blue-600 transition duration-300">READ</a></button>
          </div>
          <div className="bg-[#123456] rounded-lg p-4 shadow-md w-64 flex-shrink-0 flex flex-col">
            <div className="flex items-start">
              <img src="https://cdn-icons-png.flaticon.com/128/8131/8131880.png" alt="AI Icon" width={40} height={40} />
              <div className="ml-4 flex-grow">
                <h3 className="text-lg font-semibold">Artificial Intelligence</h3>
                <p className="mb-4 text-gray-300">Introduction to the design, construction, and programming of robots.</p>
              </div>
            </div>
            <button className="mt-auto px-4 py-2 bg-[#0a2540] text-white rounded-lg w-full"><a href='https://www.techtarget.com/searchenterpriseai/definition/AI-Artificial-Intelligence' className="hover:text-blue-600 transition duration-300">READ</a></button>
          </div>
          <div className="bg-[#123456] rounded-lg p-4 shadow-md w-64 flex-shrink-0 flex flex-col">
            <div className="flex items-start">
              <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/quantum-computing-2140511-1808515.png?f=webp&w=256" alt="Quantum Computing Icon" width={40} height={40} />
              <div className="ml-4 flex-grow">
                <h3 className="text-lg font-semibold">Quantum Computing</h3>
                <p className="mb-4 text-gray-300">Introduction to quantum algorithms and computational theory.</p>
              </div>
            </div>
            <button className="mt-auto px-4 py-2 bg-[#0a2540] text-white rounded-lg w-full"><a href='https://aws.amazon.com/what-is/quantum-computing/#:~:text=Quantum%20computing%20is%20a%20multidisciplinary,faster%20than%20on%20classical%20computers.' className="hover:text-blue-600 transition duration-300">READ</a></button>
          </div>
          <div className="bg-[#123456] rounded-lg p-4 shadow-md w-64 flex-shrink-0 flex flex-col">
            <div className="flex items-start">
              <img src="https://cdn-icons-png.flaticon.com/512/3029/3029703.png" alt="Data Science Icon" width={40} height={40} />
              <div className="ml-4 flex-grow">
                <h3 className="text-lg font-semibold">Data Science</h3>
                <p className="mb-4 text-gray-300">Covers data analysis, machine learning, and statistical models.</p>
              </div>
            </div>
            <button className="mt-auto px-4 py-2 bg-[#0a2540] text-white rounded-lg w-full"><a href='https://www.simplilearn.com/tutorials/data-science-tutorial/what-is-data-science' className="hover:text-blue-600 transition duration-300">READ</a></button>
          </div>
          <div className="bg-[#123456] rounded-lg p-4 shadow-md w-64 flex-shrink-0 flex flex-col">
            <div className="flex items-start">
              <img src="https://cdn-icons-png.flaticon.com/128/15097/15097046.png" alt="Cybersecurity Icon" width={40} height={40} />
              <div className="ml-4 flex-grow">
                <h3 className="text-lg font-semibold">Cybersecurity</h3>
                <p className="mb-4 text-gray-300">Introduction to cybersecurity principles and practices.</p>
              </div>
            </div>
            <button className="mt-auto px-4 py-2 bg-[#0a2540] text-white rounded-lg w-full"><a href='https://www.cisco.com/site/us/en/learn/topics/security/what-is-cybersecurity.html' className="hover:text-blue-600 transition duration-300">READ</a></button>
          </div>
        </div>
      </div>
    </main>
  );
}
