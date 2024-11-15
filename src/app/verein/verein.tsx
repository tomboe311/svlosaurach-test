"use client";

import React from "react";
import {Typography} from "@material-tailwind/react";
import {ProfileCard} from "@/components";

const VORSTANDSCHAFT = [
    {
        img: "",
        name: "Susanne Strohmaier",
        section: "1. Vorsitzender",
        mail: "info@sv-losaurach.de",
        phone: "+49 9161 1267",
    },
    {
        img: "",
        name: "Bernd Schemm",
        section: "2. Vorsitzender",
        mail: "info@sv-losaurach.de",
        phone: "+49 9161 1267",
    },
    {
        img: "",
        name: "Kevin Neumeister",
        section: "2. Vorsitzender",
        mail: "info@sv-losaurach.de",
        phone: "+49 9161 1267",
    },
    {
        img: "",
        name: "Heiko Gräbner",
        section: "1. Kassier",
        mail: "info@sv-losaurach.de",
        phone: "+49 9161 1267",
    },
    {
        img: "",
        name: "Henric Raab",
        section: "1. Schriftführer",
        mail: "info@sv-losaurach.de",
        phone: "+49 9161 1267",
    },
    {
        img: "",
        name: "Helmut Hofmockel",
        section: "2. Kassier",
        mail: "info@sv-losaurach.de",
        phone: "+49 9161 1267",
    },
    {
        img: "",
        name: "Thomas Zeilinger",
        section: "2. Schriftführer",
        mail: "info@sv-losaurach.de",
        phone: "+49 9161 1267",
    },
    {
        img: "",
        name: "Sebastian Klein",
        section: "Ausschussmitglied",
        mail: "info@sv-losaurach.de",
        phone: "+49 9161 1267",
    },
    {
        img: "",
        name: "Heiko Schemm",
        section: "Ausschussmitglied",
        mail: "info@sv-losaurach.de",
        phone: "+49 9161 1267",
    },
    {
        img: "",
        name: "Christian König",
        section: "Ausschussmitglied",
        mail: "info@sv-losaurach.de",
        phone: "+49 9161 1267",
    },
    {
        img: "",
        name: "Karin Klein",
        section: "Ausschussmitglied",
        mail: "info@sv-losaurach.de",
        phone: "+49 9161 1267",
    },
    {
        img: "",
        name: "Stefan Demjanowitsch",
        section: "Ausschussmitglied",
        mail: "info@sv-losaurach.de",
        phone: "+49 9161 1267",
    },
    {
        img: "",
        name: "Jochen Schirmer",
        section: "Ausschussmitglied",
        mail: "info@sv-losaurach.de",
        phone: "+49 9161 1267",
    },
    {
        img: "",
        name: "Niklas Stahringer",
        section: "Abteilungsleiter Fußball",
        mail: "info@sv-losaurach.de",
        phone: "+49 9161 1267",
    },
    {
        img: "",
        name: "Marco Weber",
        section: "Abteilungsleiter Fußball",
        mail: "info@sv-losaurach.de",
        phone: "+49 9161 1267",
    },
    {
        img: "",
        name: "Dominik Tuleweit",
        section: "Jugendleiter",
        mail: "info@sv-losaurach.de",
        phone: "+49 9161 1267",
    },
    {
        img: "",
        name: "Henric Raab",
        section: "Jugendleiter",
        mail: "info@sv-losaurach.de",
        phone: "+49 9161 1267",
    },
    {
        img: "",
        name: "Sebastian Strohmaier",
        section: "Abteilungsleiter Seifenkiste",
        mail: "info@sv-losaurach.de",
        phone: "+49 9161 1267",
    },
    {
        img: "",
        name: "Christian Mederer",
        section: "Schützenmeister",
        mail: "info@sv-losaurach.de",
        phone: "+49 9161 1267",
    },
    {
        img: "",
        name: "Armin Krauß",
        section: "Abteilungsleiter Dart",
        mail: "info@sv-losaurach.de",
        phone: "+49 9161 1267",
    },
    {
        img: "",
        name: "Erich Reuther",
        section: "Kassenprüfer",
        mail: "info@sv-losaurach.de",
        phone: "+49 9161 1267",
    },
    {
        img: "",
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
                    <Typography variant="h5" color="blue-gray" className="mb-4 uppercase">
                        Abteilungsleiter
                    </Typography>
                    <div
                        className="container mx-auto grid h-full gap-10 w-full grid-cols-1 items-start 2xl:grid-cols-3 lg:grid-cols-2 mb-20">
                        {VORSTANDSCHAFT.filter(props => props.section === "Abteilungsleiter Fußball" || props.section === "Jugendleiter").map((props, idx) => (
                            <ProfileCard key={idx} {...props} />
                        ))}
                    </div>
                    <Typography variant="h3" color="blue-gray" className="mb-4 uppercase">
                        Schützen
                    </Typography>
                    <Typography variant="lead" className="mb-4 !text-gray-500 md:pr-16 xl:pr-28">
                        Die Schützenabteilung des SVL ist eine der ältesten Abteilungen des Vereins.
                    </Typography>
                    <Typography variant="h5" color="blue-gray" className="mb-4 uppercase">
                        Schützenmeister
                    </Typography>
                    <div
                        className="container mx-auto grid h-full gap-10 w-full grid-cols-1 items-start 2xl:grid-cols-3 lg:grid-cols-2 mb-20">
                        {VORSTANDSCHAFT.filter(props => props.section === "Schützenmeister").map((props, idx) => (
                            <ProfileCard key={idx} {...props} />
                        ))}
                    </div>
                    <Typography variant="h3" color="blue-gray" className="mb-4 uppercase">
                        Dart
                    </Typography>
                    <Typography variant="lead" className="mb-4 !text-gray-500 md:pr-16 xl:pr-28">
                        Die Dartabteilung des SVL ist eine der jüngsten Abteilungen des Vereins.
                    </Typography>
                    <Typography variant="h5" color="blue-gray" className="mb-4 uppercase">
                        Abteilungsleiter
                    </Typography>
                    <div
                        className="container mx-auto grid h-full gap-10 w-full grid-cols-1 items-start 2xl:grid-cols-3 lg:grid-cols-2 mb-20">
                        {VORSTANDSCHAFT.filter(props => props.section === "Abteilungsleiter Dart").map((props, idx) => (
                            <ProfileCard key={idx} {...props} />
                        ))}
                    </div>
                    <Typography variant="h3" color="blue-gray" className="mb-4 uppercase">
                        Seifenkisten
                    </Typography>
                    <Typography variant="lead" className="mb-4 !text-gray-500 md:pr-16 xl:pr-28">
                        Die Seifenkistenabteilung des SVL ist eine der neuesten Abteilungen des Vereins.
                    </Typography>
                    <Typography variant="h5" color="blue-gray" className="mb-4 uppercase">
                        Abteilungsleiter
                    </Typography>
                    <div
                        className="container mx-auto grid h-full gap-10 w-full grid-cols-1 items-start 2xl:grid-cols-3 lg:grid-cols-2 mb-20">
                        {VORSTANDSCHAFT.filter(props => props.section === "Abteilungsleiter Seifenkiste").map((props, idx) => (
                            <ProfileCard key={idx} {...props} />
                        ))}
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Verein;
