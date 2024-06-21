"use client";

import Image from "next/image";
import {Input, Button, Typography} from "@material-tailwind/react";

function Hero() {
    return (
        <header className="bg-white p-8">
            <div
                className="container mx-auto grid h-full gap-10 min-h-[60vh] w-full grid-cols-1 items-center lg:grid-cols-2">
                <div className="row-start-2 lg:row-auto">
                    <Typography
                        variant="h1"
                        color="blue-gray"
                        className="mb-4 lg:text-5xl !leading-tight text-3xl"
                    >
                        SV Losaurach
                    </Typography>
                    <Typography
                        variant="lead"
                        className="mb-4 !text-gray-500 md:pr-16 xl:pr-28"
                    >
                        Schwarz-Gelbe Bomber!
                    </Typography>
                    <div className="grid">
                        <div className="mb-2 flex w-full flex-col gap-4 md:w-10/12 md:flex-row">
                            {/* @ts-ignore */}
                            <a href="/verein">
                                <Button color="yellow" className="w-full px-4 md:w-[12rem]">
                                    Erfahre mehr
                                </Button>
                            </a>
                        </div>
                    </div>
                </div>
                <Image
                    width={1024}
                    height={1024}
                    alt="team work"
                    src="/teams/herren-2022.jpeg"
                    className="h-[28rem] w-full rounded-xl object-cover"
                />
            </div>
        </header>
    );
}

export default Hero;
