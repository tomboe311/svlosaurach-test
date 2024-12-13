"use client";

import React from "react";
import {Typography} from "@material-tailwind/react";
import {ProfileCard} from "@/components";

const VORSTANDSCHAFT = [
    {
        img: "",
        name: "Susanne Strohmaier",
        section: "1. Vorsitzender",
        mail: "",
        phone: "+49 170 7688000",
    },
    {
        img: "",
        name: "Bernd Schemm",
        section: "2. Vorsitzender",
        mail: "",
        phone: "+49 170 8322215",
    },
    {
        img: "",
        name: "Kevin Neumeister",
        section: "2. Vorsitzender",
        mail: "",
        phone: "+49 1522 6567348",
    },
    {
        img: "",
        name: "Heiko Gräbner",
        section: "1. Kassier",
        mail: "",
        phone: " +49 172 8621772",
    },
    {
        img: "",
        name: "Henric Raab",
        section: "1. Schriftführer",
        mail: "",
        phone: "+49 174 9175951",
    },
    {
        img: "",
        name: "Helmut Hofmockel",
        section: "2. Kassier",
        mail: "",
        phone: "+49 172 8563666",
    },
    {
        img: "",
        name: "Thomas Zeilinger",
        section: "2. Schriftführer",
        mail: "",
        phone: "+49 172 8608855",
    },
    {
        img: "",
        name: "Sebastian Klein",
        section: "Ausschussmitglied",
        mail: "",
        phone: "+49 173 5701415",
    },
    {
        img: "",
        name: "Heiko Schemm",
        section: "Ausschussmitglied",
        mail: "",
        phone: "+49 1522 2675391",
    },
    {
        img: "",
        name: "Christian König",
        section: "Ausschussmitglied",
        mail: "",
        phone: "+49 1515 0678043",
    },
    {
        img: "",
        name: "Karin Klein",
        section: "Ausschussmitglied",
        mail: "",
        phone: "+49 1515 6805378",
    },
    {
        img: "",
        name: "Stefan Demjanowitsch",
        section: "Ausschussmitglied",
        mail: "",
        phone: "+49 172 8647778",
    },
    {
        img: "",
        name: "Jochen Schirmer",
        section: "Ausschussmitglied",
        mail: "",
        phone: "+49 1511 4072581",
    },
    {
        img: "",
        name: "Niklas Stahringer",
        section: "Abteilungsleiter Fußball",
        mail: "",
        phone: "+49 178 2873224",
    },
    {
        img: "",
        name: "Marco Weber",
        section: "Abteilungsleiter Fußball",
        mail: "",
        phone: "+49 1516 1597159",
    },
    {
        img: "",
        name: "Dominik Tuleweit",
        section: "Jugendleiter",
        mail: "",
        phone: "+49 173 8800888",
    },
    {
        img: "",
        name: "Henric Raab",
        section: "Jugendleiter",
        mail: "",
        phone: "+49 174 9175951",
    },
    {
        img: "",
        name: "Sebastian Strohmaier",
        section: "Abteilungsleiter Seifenkiste",
        mail: "",
        phone: "+49 1516 4736110",
    },
    {
        img: "",
        name: "Christian Mederer",
        section: "Schützenmeister",
        mail: "",
        phone: "+49 173 1928863",
    },
    {
        img: "",
        name: "Unbesetzt",
        section: "Abteilungsleiter Dart",
        mail: "",
        phone: "",
    },
    {
        img: "",
        name: "Erich Reuther",
        section: "Kassenprüfer",
        mail: "",
        phone: "",
    },
    {
        img: "",
        name: "Erwin Sandmann",
        section: "Kassenprüfer",
        mail: "",
        phone: "",
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
