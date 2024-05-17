"use client";

import React from "react";
import {Button, Typography} from "@material-tailwind/react";
import {ProfileCard} from "@/components";

const VORSTANDSCHAFT = [
    {
        img: "/teams/herren-2022.jpeg",
        name: "Marcel Weber",
        section: "1. Vorsitzender",
        mail: "info@sv-losaurach.de",
        phone: "+49 9161 1267",
    },
    {
        img: "/teams/herren-2022.jpeg",
        name: "Melanie Demjanowitsch",
        section: "2. Vorsitzender",
        mail: "info@sv-losaurach.de",
        phone: "+49 9161 1267",
    },
    {
        img: "/teams/herren-2022.jpeg",
        name: "Bernd Schemm",
        section: "Kassier",
        mail: "info@sv-losaurach.de",
        phone: "+49 9161 1267",
    },
    {
        img: "/teams/herren-2022.jpeg",
        name: "Stefan Löw",
        section: "Schriftführer",
        mail: "info@sv-losaurach.de",
        phone: "+49 9161 1267",
    },
    {
        img: "/teams/herren-2022.jpeg",
        name: "Daniel Eckert",
        section: "Ausschussmitglied",
        mail: "info@sv-losaurach.de",
        phone: "+49 9161 1267",
    },
    {
        img: "/teams/herren-2022.jpeg",
        name: "Jürgen Feinauer",
        section: "Ausschussmitglied",
        mail: "info@sv-losaurach.de",
        phone: "+49 9161 1267",
    },
    {
        img: "/teams/herren-2022.jpeg",
        name: "Jürgen Raab",
        section: "Kassenprüfer",
        mail: "info@sv-losaurach.de",
        phone: "+49 9161 1267",
    },
    {
        img: "/teams/herren-2022.jpeg",
        name: "Bernd Trapp",
        section: "Kassenprüfer",
        mail: "info@sv-losaurach.de",
        phone: "+49 9161 1267",
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
                    Förderverein "Oberer Aurachgrund"
                </Typography>
                <Typography variant="lead" className="mb-4 !text-gray-500 md:pr-16 xl:pr-28">
                    Der Förderverein "Oberer Aurachgrund" wurde am 19. April 1996 von der damaligen Vorstandschaft des SV Losaurach und Umg. e.V. gegründet.

                    Die Aufgabe des Fördervereins ist die Durchführung diverser  Veranstaltungen, sowie die Verwaltung der Bandenwerbung am A-Platz, was dem Erhalt der Sportanlage und dem Spielbetrieb der Mannschaften des SV Losaurach und Umg. e.V. zur Unterstützung dienen soll.

                    Aktuell sind 59 Mitglieder im Förderverein "Oberer Aurachgrund", bei denen wir uns für Ihre Unterstützung recht herzlich bedanken möchten.
                </Typography>
                <Typography variant="h2" color="blue-gray" className="mb-4 uppercase">
                    Mitglied werden
                </Typography>
                <Typography variant="paragraph" className="mb-4 md:pr-16 xl:pr-28">
                    Wenn sich jemand dem FÖV anschließen möchte, der wendet sich bitte an die Vorstandschaft.

                    Der momentane Jahresbeitrag beträgt: 30,00 €
                </Typography>
                <Button color="yellow" ripple="light" className="mb-4">
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

export default Foerderverein;
