import React from "react";
import { Button } from "./ui/button";
import { Link, useLocation } from "react-router-dom";
import { UserButton, useUser } from "@clerk/clerk-react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export default function Header() {

  const { user, isSignedIn } = useUser();

  return (
    <div className="p-[45px] px-10 flex justify-between items-center shadow-md bg-white h-16">
      {/* Logo (Clickable) */}
      <Link to="/">
        <img src="../src/assets/Intellidocs.svg" width={115} height={115} alt="Logo" className="hover:opacity-80 transition-opacity" />
      </Link>
      {/* {location.pathname === "/" && (
        <div className="">
          <Input type="text" placeholder="Search..." className="rounded-2xl w-[500px] focus:outline-none" />
        </div>
      )} */}

      {/* Search Bar */}
      {location.pathname === "/" && (
        <div className="relative w-[500px]">
          <Search className="absolute left-3 top-2.5 text-gray-400" />
          <Input type="text" placeholder="Search Here" className="pl-10 rounded-full w-full focus:outline-none" />
        </div>
      )}

      {/* Right Section: Conditional Rendering */}
      <div className="flex items-center gap-4">
        {isSignedIn ? (
          <div className="flex gap-3 items-center">
            <span className="font-medium text-gray-700">{user?.fullName}</span>
            <UserButton />
          </div>
        ) : (
          <Link to="/auth/login">
            <Button className="hover:bg-blue-600 transition">Get Started</Button>
          </Link>
        )}
      </div>
    </div>

  );
}
