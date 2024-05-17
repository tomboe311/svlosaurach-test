"use client";

import React from "react";
import {Typography} from "@material-tailwind/react";
import {ProfileCard} from "@/components";

const VORSTANDSCHAFT = [
    {
        img: "/teams/herren-2022.jpeg",
        name: "Susanne Strohmaier",
        section: "1. Vorsitzender",
        mail: "info@sv-losaurach.de",
        phone: "+49 9161 1267",
    },
    {
        img: "/teams/herren-2022.jpeg",
        name: "Bernd Schemm",
        section: "2. Vorsitzender",
        mail: "info@sv-losaurach.de",
        phone: "+49 9161 1267",
    },
    {
        img: "/teams/herren-2022.jpeg",
        name: "Kevin Neumeister",
        section: "2. Vorsitzender",
        mail: "info@sv-losaurach.de",
        phone: "+49 9161 1267",
    },
    {
        img: "/teams/herren-2022.jpeg",
        name: "Heiko Gräbner",
        section: "1. Kassier",
        mail: "info@sv-losaurach.de",
        phone: "+49 9161 1267",
    },
    {
        img: "/teams/herren-2022.jpeg",
        name: "Henric Raab",
        section: "1. Schriftführer",
        mail: "info@sv-losaurach.de",
        phone: "+49 9161 1267",
    },
    {
        img: "/teams/herren-2022.jpeg",
        name: "Helmut Hofmockel",
        section: "2. Kassier",
        mail: "info@sv-losaurach.de",
        phone: "+49 9161 1267",
    },
    {
        img: "/teams/herren-2022.jpeg",
        name: "Thomas Zeilinger",
        section: "2. Schriftführer",
        mail: "info@sv-losaurach.de",
        phone: "+49 9161 1267",
    },
    {
        img: "/teams/herren-2022.jpeg",
        name: "Sebastian Klein",
        section: "Ausschussmitglied",
        mail: "info@sv-losaurach.de",
        phone: "+49 9161 1267",
    },
    {
        img: "/teams/herren-2022.jpeg",
        name: "Heiko Schemm",
        section: "Ausschussmitglied",
        mail: "info@sv-losaurach.de",
        phone: "+49 9161 1267",
    },
    {
        img: "/teams/herren-2022.jpeg",
        name: "Christian König",
        section: "Ausschussmitglied",
        mail: "info@sv-losaurach.de",
        phone: "+49 9161 1267",
    },
    {
        img: "/teams/herren-2022.jpeg",
        name: "Karin Klein",
        section: "Ausschussmitglied",
        mail: "info@sv-losaurach.de",
        phone: "+49 9161 1267",
    },
    {
        img: "/teams/herren-2022.jpeg",
        name: "Stefan Demjanowitsch",
        section: "Ausschussmitglied",
        mail: "info@sv-losaurach.de",
        phone: "+49 9161 1267",
    },
    {
        img: "/teams/herren-2022.jpeg",
        name: "Jochen Schirmer",
        section: "Ausschussmitglied",
        mail: "info@sv-losaurach.de",
        phone: "+49 9161 1267",
    },
    {
        img: "/teams/herren-2022.jpeg",
        name: "Niklas Stahringer",
        section: "Abteilungsleiter Fußball",
        mail: "info@sv-losaurach.de",
        phone: "+49 9161 1267",
    },
    {
        img: "/teams/herren-2022.jpeg",
        name: "Marco Weber",
        section: "Abteilungsleiter Fußball",
        mail: "info@sv-losaurach.de",
        phone: "+49 9161 1267",
    },
    {
        img: "/teams/herren-2022.jpeg",
        name: "Dominik Tuleweit",
        section: "Jugendleiter",
        mail: "info@sv-losaurach.de",
        phone: "+49 9161 1267",
    },
    {
        img: "/teams/herren-2022.jpeg",
        name: "Henric Raab",
        section: "Jugendleiter",
        mail: "info@sv-losaurach.de",
        phone: "+49 9161 1267",
    },
    {
        img: "/teams/herren-2022.jpeg",
        name: "Sebastian Strohmaier",
        section: "Abteilungsleiter Seifenkiste",
        mail: "info@sv-losaurach.de",
        phone: "+49 9161 1267",
    },
    {
        img: "/teams/herren-2022.jpeg",
        name: "Christian Mederer",
        section: "Schützenmeister",
        mail: "info@sv-losaurach.de",
        phone: "+49 9161 1267",
    },
    {
        img: "/teams/herren-2022.jpeg",
        name: "Armin Krauß",
        section: "Abteilungsleiter Dart",
        mail: "info@sv-losaurach.de",
        phone: "+49 9161 1267",
    },
    {
        img: "/teams/herren-2022.jpeg",
        name: "Erich Reuther",
        section: "Kassenprüfer",
        mail: "info@sv-losaurach.de",
        phone: "+49 9161 1267",
    },
    {
        img: "/teams/herren-2022.jpeg",
        name: "Erwin Sandmann",
        section: "Kassenprüfer",
        mail: "info@sv-losaurach.de",
        phone: "+49 9161 1267",
    },
];

function Verein() {
    return (
        <header className="bg-white p-8">
            <div className="container mx-auto mb-20">
                <Typography
                    variant="h1"
                    color="blue-gray"
                    className="mb-4 lg:text-5xl !leading-tight text-3xl"
                >
                    Verein
                </Typography>
                <Typography variant="lead" className="mb-4 !text-gray-500 md:pr-16 xl:pr-28">
                    Unsre Heimat ist das Sportheim, unser Stolz der SVL!
                    #TraditionSeitNeunzehnhundertzweiundsiebzig
                </Typography>
            </div>
            <div className="container mx-auto">
                <Typography variant="h2" color="blue-gray" className="mb-4 uppercase">
                    Vorstandschaft
                </Typography>
                <div
                    className="container mx-auto grid h-full gap-10 w-full grid-cols-1 items-start 2xl:grid-cols-3 lg:grid-cols-2 mb-20">
                    {VORSTANDSCHAFT.map((props, idx) => (
                        <ProfileCard key={idx} {...props} />
                    ))}
                </div>
            </div>
            <div className="container mx-auto">
                <Typography variant="h2" color="blue-gray" className="mb-4 uppercase">
                    Abteilungen
                </Typography>
                <div>
                    <Typography variant="h3" color="blue-gray" className="mb-4 uppercase">
                        Fußball
                    </Typography>
                    <Typography variant="lead" className="mb-4 !text-gray-500 md:pr-16 xl:pr-28">
                        Der SVL bietet Fußball für alle Altersklassen. Von den Bambinis bis zu den Senioren.
                    </Typography>
                    <div>
                        Abteilungsleiter: Card (TODO)
                    </div>
                    <Typography variant="h3" color="blue-gray" className="mb-4 uppercase">
                        Schützen
                    </Typography>
                    <Typography variant="lead" className="mb-4 !text-gray-500 md:pr-16 xl:pr-28">
                        Die Schützenabteilung des SVL ist eine der ältesten Abteilungen des Vereins.
                    </Typography>
                    <div>
                        Abteilungsleiter: Card (TODO)
                    </div>
                    <Typography variant="h3" color="blue-gray" className="mb-4 uppercase">
                        Dart
                    </Typography>
                    <Typography variant="lead" className="mb-4 !text-gray-500 md:pr-16 xl:pr-28">
                        Die Dartabteilung des SVL ist eine der jüngsten Abteilungen des Vereins.
                    </Typography>
                    <div>
                        Abteilungsleiter: Card (TODO)
                    </div>
                    <Typography variant="h3" color="blue-gray" className="mb-4 uppercase">
                        Seifenkisten
                    </Typography>
                    <Typography variant="lead" className="mb-4 !text-gray-500 md:pr-16 xl:pr-28">
                        Die Seifenkistenabteilung des SVL ist eine der neuesten Abteilungen des Vereins.
                    </Typography>
                    <div>
                        Abteilungsleiter: Card (TODO)
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Verein;
