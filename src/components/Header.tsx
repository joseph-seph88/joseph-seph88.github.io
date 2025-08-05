import Image from "next/image";

export default function Header() {
  return (
    <div className="flex justify-between items-start mb-8 pb-4">
      <div className="header-left">
        <h1 className="ml-10 mt-7 text-4xl text-gray-700 font-medium tracking-wide">임종섭 (JOSEPH)</h1>
        <h2 className="ml-11 mt-3 text-2xl text-gray-400 font-medium tracking-tight">앱 풀스택 개발자</h2>
      </div>
      <div className="text-right">
        <div className="mb-5">
          <a href="https://github.com/joseph-seph88" className="no-underline mr-4 inline-block bg-gray-100 rounded-full p-3 transition-transform duration-200 hover:scale-110 hover:bg-gray-200 border-1 border-gray-300">
            <Image
              src="/assets/images/git_logo.png"
              alt="GitHub"
              width={60}
              height={60}
              className="object-contain"
            />
          </a>
          <a href="https://www.notion.so/75a120158a584d4aae253bdc1e5164e0" className="no-underline mr-4 inline-block bg-gray-100 rounded-full p-3 transition-transform duration-200 hover:scale-110 hover:bg-gray-200 border-1 border-gray-300">
            <Image
              src="/assets/images/notion_logo.png"
              alt="Notion"
              width={60}
              height={60}
              className="object-contain py-3 px-3"
            />
          </a>
        </div>
        <p className="text-base m-0">Email: <strong>pathetic.sim@gmail.com</strong></p>
      </div>
    </div>
  );
} 