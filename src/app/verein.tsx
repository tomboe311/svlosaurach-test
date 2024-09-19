"use client";

import {Typography, Button} from "@material-tailwind/react";
import Link from "next/link";
import {
    UserGroupIcon,
    SwatchIcon,
    CalendarIcon,
    ArrowRightIcon,
    FireIcon,
    GlobeAltIcon
} from "@heroicons/react/24/solid";
import {VereinItem} from "@/components";

const VEREIN_ITEMS = [
    {
        icon: CalendarIcon,
        children: "Gründungsjahr 1972",
    },
    {
        icon: SwatchIcon,
        children: "Vereinsfarben: Gelb Schwarz",
    },
    {
        icon: UserGroupIcon,
        children: "650 Mitglieder",
    },
    {
        icon: FireIcon,
        children: "4 Abteilungen",
    },
    {
        icon: GlobeAltIcon,
        children: "16 Fußballteams",
    }
];

export function Verein() {
    return (
        <section className="px-8 py-24">
            <div className="container mx-auto grid w-full grid-cols-1 items-center gap-16 lg:grid-cols-2">
                <div className="col-span-1">
                    <Typography variant="h2" color="blue-gray">
                        Unser stolzer Verein
                    </Typography>
                    <Typography className="mb-4 mt-3 w-9/12 font-normal !text-gray-500">
                        Gründungsjahr 1972. Unser Verein ist Schwarz-Gelb!
                    </Typography>
                    <Link href="/verein">
                        <Button
                            variant="text"
                            color="gray"
                            className="flex items-center gap-2"
                        >
                            Erfahre mehr
                            <ArrowRightIcon
                                strokeWidth={3}
                                className="h-3.5 w-3.5 text-gray-900"
                            />
                        </Button>
                    </Link>
                </div>
                <div className="col-span-1 grid gap-y-6 lg:ml-auto pr-0 lg:pr-12 xl:pr-32">
                    {VEREIN_ITEMS.map((props, idx) => (
                        <VereinItem key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Verein;
