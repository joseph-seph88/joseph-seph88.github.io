import Image from "next/image";

export default function Header() {
  return (
    <div className="flex justify-between items-start mb-8 pb-4">
      <div className="header-left">
        <h1 className="m-0 text-5xl text-gray-800">LIM..(Joseph88)</h1>
        <h2 className="m-0 text-2xl text-gray-500 font-normal">앱 풀스택 개발자</h2>
      </div>
      <div className="text-right">
        <div className="mb-2">
          <a href="https://github.com/joseph-seph88" className="no-underline mr-4 inline-block">
            <Image
              src="/assets/images/git_logo.png"
              alt="GitHub"
              width={100}
              height={100}
              className="transition-transform duration-200 hover:scale-110 object-contain"
            />
          </a>
          <a href="https://www.notion.so/75a120158a584d4aae253bdc1e5164e0" className="no-underline mr-4 inline-block">
            <Image
              src="/assets/images/notion_logo.png"
              alt="Notion"
              width={80}
              height={80}
              className="transition-transform duration-200 hover:scale-110 object-contain"
            />
          </a>
        </div>
        <p className="text-base m-0">Email: <strong>pathetic.sim@gmail.com</strong></p>
      </div>
    </div>
  );
} 