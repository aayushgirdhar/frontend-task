"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import WhatshotIcon from "@mui/icons-material/Whatshot";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import TimelineIcon from "@mui/icons-material/Timeline";

export function BottomNavigation() {
  const pathname = usePathname();

  return (
    <div className="fixed bottom-0 md:w-[30rem] w-full py-2 px-5 md:px-10 flex justify-between items-center bg-bg-tertiary">
      <Link
        href="/"
        className={`flex flex-col gap-1 justify-center items-center cursor-pointer ${
          pathname === "/" ? "text-accent-primary" : "text-accent-secondary"
        } `}
      >
        <WhatshotIcon />
        <p
          className={`text-xs cursor-pointer ${
            pathname === "/" ? "text-accent-primary" : "text-accent-secondary"
          }`}
        >
          Page 1
        </p>
      </Link>
      <Link
        href="/page2"
        className={`flex flex-col gap-1 justify-center items-center cursor-pointer ${
          pathname === "/page2"
            ? "text-accent-primary"
            : "text-accent-secondary"
        } `}
      >
        <FitnessCenterIcon />
        <p
          className={`text-xs cursor-pointer ${
            pathname === "/page2"
              ? "text-accent-primary"
              : "text-accent-secondary"
          }`}
        >
          Page 2
        </p>
      </Link>
      <Link
        href="/page3"
        className={`flex flex-col gap-1 justify-center items-center cursor-pointer ${
          pathname === "/page3"
            ? "text-accent-primary"
            : "text-accent-secondary"
        } `}
      >
        <RestaurantIcon />
        <p
          className={`text-xs cursor-pointer ${
            pathname === "/page3"
              ? "text-accent-primary"
              : "text-accent-secondary"
          }`}
        >
          Page 3
        </p>
      </Link>
      <Link
        href="/page4"
        className={`flex flex-col gap-1 justify-center items-center cursor-pointer ${
          pathname === "/page4"
            ? "text-accent-primary"
            : "text-accent-secondary"
        } `}
      >
        <TimelineIcon />
        <p
          className={`text-xs cursor-pointer ${
            pathname === "/page4"
              ? "text-accent-primary"
              : "text-accent-secondary"
          }`}
        >
          Page 4
        </p>
      </Link>
    </div>
  );
}
