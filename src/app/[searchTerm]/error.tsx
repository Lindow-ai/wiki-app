"use client"; // Error components must be Client components

import { useEffect } from "react";
import Link from "next/link";
import { Typography } from "@material-tailwind/react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <main className="mx-auto max-w-lg py-1 px-4 flex flex-col items-center justify-center min-h-screen">
      <Typography variant="h1" className="mb-4 text-center">
        Ooooops...
      </Typography>
      <Typography variant="h1" className="mb-4 text-center">
        That page cannot be found.
      </Typography>
      <Typography className="text-center">
        Go back to the <Link href="/">Homepage</Link>
      </Typography>
    </main>
  );
}
