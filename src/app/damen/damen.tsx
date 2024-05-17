"use client";

import React from "react";
import {Typography} from "@material-tailwind/react";
import {Trainingszeiten} from "@/app/alte-herren/trainingszeiten";
import {PersonCard, ProfileCard} from "@/components";

const TRAINER = [
    {
        img: "/teams/damen-2022-2023.jpeg",
        name: "Heiko Gräbner",
        section: "Trainer 1. Damenmannschaft",
        mail: "heiko.graebner@sparkasse-nea.de",
        phone: "+49 (0) 172 8621772",
    },
    {
        img: "/teams/damen-2022-2023.jpeg",
        name: "Franziska Clemens",
        section: "Trainer 2. Damenmannschaft",
        mail: "",
        phone: "+49 (0) 1525 6158385",
    },
    {
        img: "/teams/damen-2022-2023.jpeg",
        name: "Susi Strohmaier",
        section: "Spielleiter Damen",
        mail: "",
        phone: "+49 (0) 170 7688000",
    },
]

function Damen() {
    return (

        <header className="bg-white p-8">
            <div className="container mx-auto mb-20">
                <Typography
                    variant="h1"
                    color="blue-gray"
                    className="mb-4 lg:text-5xl !leading-tight text-3xl"
                >
                    Damenmannschaften
                </Typography>
                <Typography variant="lead" className="mb-4 !text-gray-500 md:pr-16 xl:pr-28">
                    Unsere Damenmannschaften sind ein wichtiger Bestandteil des Sportvereins Losaurach. Mit insgesamt 2
                    Damenmannschaften bieten wir ein breites Spektrum an Möglichkeiten für alle Altersgruppen, um aktiv
                    zu werden und sich sportlich zu entfalten.
                </Typography>
            </div>
            <div className="container mx-auto">
                <Typography variant="h2" color="blue-gray" className="mb-4 uppercase">
                    Trainerstab
                </Typography>
                <div
                    className="container mx-auto grid h-full gap-10 w-full grid-cols-1 items-start 2xl:grid-cols-3 lg:grid-cols-2 mb-20">
                    {TRAINER.map((props, idx) => (
                        <ProfileCard key={idx} {...props} />
                    ))}
                </div>
            </div>
            <div className="container mx-auto h-full gap-10 w-full items-start">
                <Typography variant="h2" color="blue-gray" className="mb-4 uppercase">
                    Trainingszeiten
                </Typography>
                <Trainingszeiten/>
                <Typography variant="small" color="blue-gray" className="my-4">
                    Trainingsort: Sportplatz Losaurach
                </Typography>
                <Typography variant="small" color="blue-gray" className="my-4">
                    Trainingszeiten können sich kurzfristig ändern. Bitte informieren Sie sich bei den Trainern.
                </Typography>
            </div>
        </header>
    );
}

export default Damen;
