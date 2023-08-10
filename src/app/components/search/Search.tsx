"use client";

import { useRouter } from "next/navigation";
import React, { useState, FormEvent, useEffect } from "react";
import { Input, Button } from "@material-tailwind/react";

export default function Search() {
  const [search, setSearch] = useState("")
  const router = useRouter()

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSearch('')
    router.push(`/${search}/`)
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        type="search"
        placeholder="Type here..."
        className="pr-20 !border bg-white !border-blue-gray-50  shadow-blue-gray-900/5 ring-4 ring-transparent placeholder:text-blue-gray-200"
        containerProps={{
          className: "min-w-[288px]",
        }}
        labelProps={{
          className: "hidden",
        }}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Button type="submit" size="sm" className="!absolute right-1 top-1 rounded flex items-center gap-3">
        Search
      </Button>
    </form>
  );
}
