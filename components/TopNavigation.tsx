"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FC } from "react";

interface ITopNavigation {
  title?: string;
  des: string;
  className?: string;
}

const TopNavigation: FC<ITopNavigation> = ({ title, des, className }) => {
  const router = useRouter();
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <Image
        onClick={() => router.back()}
        src={"/assets/images/back-svgrepo-com 1.svg"}
        width={40}
        height={40}
        alt="asasa"
      />
      <div className=" -space-y-1">
        {title && (
          <p className="text-sm font-medium text-light-blue">{title}</p>
        )}
        <h4 className=" text-t-22 sm:text-t-25 font-bold">{des}</h4>
      </div>
    </div>
  );
};

export default TopNavigation;
