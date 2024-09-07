import { Header } from "./signin/components/Header";

export const runtime = "edge";

export default function Page404() {
  return (
    <div className="min-h-screen flex flex-col bg-[rgb(16,16,16)]">
      <Header />

      <div className="flex flex-col justify-center items-center flex-grow">
        <h1 className="text-white font-bold text-8xl">
          404
        </h1>

        <p className="text-white text-5xl mt-4 font-ppfragment">
          Page not found
        </p>
      </div>
    </div>
  );
}
