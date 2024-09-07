import Image from "next/image";

export function Header() {
  return (
    <header className="flex items-center space-x-2 p-8">
      <Image src="/assets/logo.svg" alt="logo" width={40} height={40}/>
      <h1 className="text-white font-bold text-2xl pl-4 tracking-wider" style={{ fontFamily: "Inter" }}>IGNORED AI</h1>
    </header>
  );
}
