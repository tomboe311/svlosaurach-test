"use client";

import React from "react";
import {Typography} from "@material-tailwind/react";
import {Trainingszeiten} from "@/app/herren/trainingszeiten";
import {ProfileCard} from "@/components";

const TRAINER = [
    {
        img: "/teams/herren-2022.jpeg",
        name: "Jonas Scheuenstuhl",
        section: "Trainer 1. Herrenmannschaft",
        mail: "scheu.j@hotmail.de",
        phone: "+49 (0) 151 18054220",
    },
    {
        img: "/teams/herren-2022.jpeg",
        name: "Niklas Stahringer",
        section: "Spielleiter 1. Herrenmannschaft",
        mail: "",
        phone: "+49 (0) 178 2873224",
    },
    {
        img: "/teams/herren-2022.jpeg",
        name: "Marco Weber",
        section: "Trainer 2. Herrenmannschaft",
        mail: "",
        phone: "+49 (0) 151 18054220",
    },
    {
        img: "/teams/herren-2022.jpeg",
        name: "Henric Raab",
        section: "Trainerassistent/Betreuer",
        mail: "",
        phone: "+49 (0) 174 9175951",
    },
    {
        img: "/teams/herren-2022.jpeg",
        name: "Christian König",
        section: "Trainerassistent/Betreuer",
        mail: "",
        phone: "+49 (0) 178 2873224",
    },
    {
        img: "/teams/herren-2022.jpeg",
        name: "Norbert Scheuenstuhl",
        section: "Torwarttrainer Herrenmannschaften",
        mail: "",
        phone: "+49 (0) 160 5846098",
    },
    {
        img: "/teams/herren-2022.jpeg",
        name: "Jonas Ruppe",
        section: "Medizinische Betreuung",
        mail: "",
        phone: "+49 (0) 1512 9121998",
    },
    {
        img: "/teams/herren-2022.jpeg",
        name: "Rene Hofmockel",
        section: "Fotograf",
        mail: "",
        phone: "+49 (0) 176 61042669",
    },
]

function Herren() {
    return (

        <header className="bg-white p-8">
            <div className="container mx-auto mb-20">
                <Typography
                    variant="h1"
                    color="blue-gray"
                    className="mb-4 lg:text-5xl !leading-tight text-3xl"
                >
                    Herrenmannschaften
                </Typography>
                <Typography variant="lead" className="mb-4 !text-gray-500 md:pr-16 xl:pr-28">
                    Unsere Herrenmannschaften sind ein wichtiger Bestandteil des Sportvereins Losaurach. Mit insgesamt 2
                    Herrenmannschaften bieten wir ein breites Spektrum an Möglichkeiten für alle Altersgruppen, um aktiv
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

export default Herren;
