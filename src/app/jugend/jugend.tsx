"use client";

import React from "react";
import {Typography} from "@material-tailwind/react";
import {Trainingszeiten} from "@/app/jugend/trainingszeiten";

function Jugend() {
    return (

        <header className="bg-white p-8">
            <div className="container mx-auto mb-20">
                <Typography
                    variant="h1"
                    color="blue-gray"
                    className="mb-4 lg:text-5xl !leading-tight text-3xl"
                >
                    Jugendmannschaften
                </Typography>
            </div>
            <div
                className="container mx-auto grid h-full gap-10 min-h-[60vh] w-full grid-cols-1 items-start lg:grid-cols-2">
                <Trainingszeiten/>
            </div>
        </header>
    );
}

export default Jugend;
