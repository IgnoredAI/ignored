"use client";

import React, { useEffect } from "react";
import { useSession } from "next-auth/react";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableHead, TableRow, TableCell, TableBody } from "@/components/ui/table";
import { getSessionAuthToken } from "../api/[...nextauth]/utils";

export const runtime = "edge";

export default function HomePage() {
  const { data: session, status } = useSession();

  useEffect(() => {
    getSessionAuthToken().then((token) => {
			if (typeof window === "undefined") return;
			window.postMessage({ token: token.data }, "*");
		});
  })

  if (status === "loading") {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-lg">Loading...</p>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-black-50">
      <Card className="max-w-4xl w-full p-8 shadow-lg">
        {console.log(session)}
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center">Welcome, {session.user?.name}!</CardTitle>
        </CardHeader>
        <CardContent className="mt-6">
          <p className="text-center text-lg text-gray-600 mb-4">
            Here's a summary of your recent activity and tab management options.
          </p>
          <Table className="w-full mt-4">
            <TableHead>
              <TableRow>
                <TableCell className="font-bold">Tab</TableCell>
                <TableCell className="font-bold">Last Accessed</TableCell>
                <TableCell className="font-bold">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {/* Example rows; replace with dynamic content */}
              <TableRow>
                <TableCell>Google Docs</TableCell>
                <TableCell>10 mins ago</TableCell>
                <TableCell>
                  <Button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-3 rounded-lg">
                    Open
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>GitHub</TableCell>
                <TableCell>1 hour ago</TableCell>
                <TableCell>
                  <Button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-3 rounded-lg">
                    Open
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
        <CardFooter className="mt-8 flex justify-center">
          <Button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-lg">
            Manage Tabs
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
