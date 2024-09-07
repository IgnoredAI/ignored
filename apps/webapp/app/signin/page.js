import { signIn } from "../api/[...nextauth]/auth";
import { GoogleSignInButton } from "@/components/GoogleSignInButton";
import { TypewriterTextView } from "@/components/TypewriterTextView";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Header } from "./components/Header";

export default function SignInPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[rgb(16,16,16)]">
      <Header />

      <div className="flex flex-col lg:flex-row flex-grow p-6">
        <div className="lg:w-1/2 p-8 flex flex-col justify-center items-start">
          <h1 className="text-white text-6xl font-ppfragment pb-24">
            Smart way to manage your tabs.
          </h1>
          
          <p className="text-white text-lg mb-8" style={{ fontFamily: 'Inter' }}>
            Manage and control your infinite browser tabs with a single click
          </p>

          <form
            action={async () => {
              "use server";
              await signIn("google", {
                redirectTo: "/home",
              });
            }}
          >
            <GoogleSignInButton />
          </form>
        </div>

        <div className="lg:w-1/2 p-8 flex flex-col justify-center items-center">
          <TypewriterTextView className="text-white tracking-wide text-3xl" />
        </div>
      </div>
    </div>
  );
}
