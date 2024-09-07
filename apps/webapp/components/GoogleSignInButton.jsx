import Image from "next/image";
import { Button } from "@/components/ui/button"; 

export function GoogleSignInButton() {
  return (
    <Button
      type="submit" // Submit the form when clicked
      className="flex items-center justify-center w-full p-6 text-white rounded-lg"
      style={{
        background: "linear-gradient(90deg, rgb(251,44,10) 0%, rgb(70,53,252) 100%)",
        borderRadius: "8px",
      }}
    >
      <Image src="/assets/logo-google.svg" alt="Google" width={24} height={24} className="mr-2" style={{ filter: "invert(100%)" }}/>
      Sign in with Google
    </Button>
  );
}
