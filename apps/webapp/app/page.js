"use client";

import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <Card className="max-w-2xl w-full p-8 shadow-lg">
        <CardHeader className="flex flex-col items-center">
          <CardTitle className="text-4xl font-extrabold text-center">Welcome to Ignore AI Tab Manager</CardTitle>
          <CardDescription className="text-center mt-4 text-lg text-gray-600">
            Efficiently manage your browser tabs with our AI-powered solutions.
          </CardDescription>
        </CardHeader>
        <CardContent className="mt-6">
          <div className="flex justify-center space-x-4">
            <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-lg">
              Learn More
            </Button>
            <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-lg">
              Get Started
            </Button>
          </div>
        </CardContent>
        <CardFooter className="mt-8 flex flex-col items-center">
          <p className="text-sm text-gray-500 mt-2">No sign-up required. Free to use with basic features.</p>
        </CardFooter>
      </Card>
    </div>
  );
}
