"use client";
import Image from "next/image";
import { SideBarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const SideBar = () => {
  const pathName = usePathname();
  return (
    <section className="sticky l-0 flex h-screen w-fit felx-col justify-between bg-dark-1 p-6 pt-28 text-white max-sm:hidden lg:w-[264px]">
      <div className="flex flex-1 flex-col gap-6 ">
        {SideBarLinks.map((link) => {
          const isActive =
            pathName === link.route || pathName.startsWith(link.route);

          return (
            <Link
              href={link.route}
              key={link.label}
              className={cn(
                "flex gap-4 items-center p-4 rounded-lg justify-start",
                { "bg-blue-1": isActive }
              )}
            >
              <Image
                src={link.imgUrl}
                width={24}
                height={24}
                alt={link.label}
              />
              <p className="text-lg font-semibold max-lg:hidden">
                {link.label}
              </p>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default SideBar;
