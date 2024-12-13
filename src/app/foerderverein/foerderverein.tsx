"use client";

import React from "react";
import {Button, Typography} from "@material-tailwind/react";
import {ProfileCard} from "@/components";

const VORSTANDSCHAFT = [
    {
        img: "/teams/herren-2022.jpeg",
        name: "Marcel Weber",
        section: "1. Vorsitzender",
        mail: "",
        phone: "+49 176 76858126",
    },
    {
        img: "/teams/herren-2022.jpeg",
        name: "Melanie Demjanowitsch",
        section: "2. Vorsitzender",
        mail: "",
        phone: "+49 173 5622661",
    },
    {
        img: "/teams/herren-2022.jpeg",
        name: "Bernd Schemm",
        section: "Kassier",
        mail: "",
        phone: "+49 170 8322215",
    },
    {
        img: "/teams/herren-2022.jpeg",
        name: "Stefan Löw",
        section: "Schriftführer",
        mail: "",
        phone: "+49 177 1944123",
    },
    {
        img: "/teams/herren-2022.jpeg",
        name: "Daniel Eckert",
        section: "Ausschussmitglied",
        mail: "",
        phone: "+49 1578 6867893",
    },
    {
        img: "/teams/herren-2022.jpeg",
        name: "Jürgen Feinauer",
        section: "Ausschussmitglied",
        mail: "",
        phone: "+49 1511 9526558",
    },
    {
        img: "/teams/herren-2022.jpeg",
        name: "Jürgen Raab",
        section: "Kassenprüfer",
        mail: "",
        phone: "",
    },
    {
        img: "/teams/herren-2022.jpeg",
        name: "Bernd Trapp",
        section: "Kassenprüfer",
        mail: "",
        phone: "",
    },
];

function Foerderverein() {
    return (
        <header className="bg-white p-8">
            <div className="container mx-auto mb-20">
                <Typography
                    variant="h1"
                    color="blue-gray"
                    className="mb-4 lg:text-5xl !leading-tight text-3xl"
                >
                    Förderverein Oberer Aurachgrund
                </Typography>
                <Typography variant="lead" className="mb-4 !text-gray-500 md:pr-16 xl:pr-28">
                    Der Förderverein Oberer Aurachgrund wurde am 19. April 1996 von der damaligen Vorstandschaft des SV Losaurach und Umg. e.V. gegründet.

                    Die Aufgabe des Fördervereins ist die Durchführung diverser  Veranstaltungen, sowie die Verwaltung der Bandenwerbung am A-Platz, was dem Erhalt der Sportanlage und dem Spielbetrieb der Mannschaften des SV Losaurach und Umg. e.V. zur Unterstützung dienen soll.

                    Aktuell sind 59 Mitglieder im Förderverein Oberer Aurachgrund, bei denen wir uns für Ihre Unterstützung recht herzlich bedanken möchten.
                </Typography>
                <Typography variant="h2" color="blue-gray" className="mb-4 uppercase">
                    Mitglied werden
                </Typography>
                <Typography variant="paragraph" className="mb-4 md:pr-16 xl:pr-28">
                    Wenn sich jemand dem FÖV anschließen möchte, der wendet sich bitte an die Vorstandschaft.

                    Der momentane Jahresbeitrag beträgt: 30,00 €
                </Typography>
                <Button color="yellow" className="mb-4">
                    Mitgliedsantrag
                </Button>
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
        </header>
    );
}

export default Foerderverein;
