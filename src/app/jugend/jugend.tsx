"use client";

import React from "react";
import {Tooltip, Typography} from "@material-tailwind/react";
import {Trainingszeiten} from "@/app/jugend/trainingszeiten";
import {ProfileCard} from "@/components";

const TRAINER = {
    "U19 (SG) A-Jugend": [
        {
            team: "(SG) A-Jugend",
            name: "Andreas Gebhardt",
            section: "Trainer",
            mail: "",
            phone: "+49 (0) 1577 4440480",
        }
    ],
    "U17 (SG) B-Jugend": [
        {
            team: "(SG) B-Jugend",
            name: "Andreas Gebhardt",
            section: "Trainer",
            mail: "",
            phone: "+49 (0) 1577 4440480",
        }
    ],
    "U15 (SG) C1-Jugend": [
        {
            team: "(SG) C1-Jugend",
            name: "Manfred Jobst",
            section: "Trainer",
            mail: "",
            phone: "+49 (0) 176 43246360",
        },
    ],
    "U15 (SG) C2-Jugend": [
        {
            team: "(SG) C2-Jugend",
            name: "Marco Weber",
            section: "1. Trainer",
            mail: "",
            phone: "",
        },
        {
            team: "(SG) C2-Jugend",
            name: "Alfred Knoll",
            section: "2. Trainer",
            mail: "",
            phone: "+49 (0) 171 9120211",
        }
    ],
    "U15 C-Juniorinnen": [
        {
            team: "C-Juniorinnen",
            name: "Jochen Schirmer",
            section: "1. Trainer",
            mail: "",
            phone: "+49 (0) 1511 4072581",
        },
        {
            team: "C-Juniorinnen",
            name: "Christina Schirmer",
            section: "2. Trainer",
            mail: "",
            phone: "+49 (0) 173 3592401",
        },
        {
            team: "C-Juniorinnen",
            name: "Lea Stefani",
            section: "3. Trainer",
            mail: "",
            phone: "+49 (0) 162 9433129",
        }
    ],
    "U13 (SG) D1-Jugend": [
        {
            team: "(SG) D1-Jugend",
            name: "Uwe Kunkel",
            section: "1. Trainer",
            mail: "",
            phone: "+49 (0) 160 97215535",
        },
        {
            team: "(SG) D1-Jugend",
            name: "Andreas Schaupp",
            section: "2. Trainer",
            mail: "",
            phone: "+49 (0) 160 4454169",
        },
    ],
    "U13 (SG) D2-Jugend": [
        {
            team: "(SG) D2-Jugend",
            name: "Dieter Ruppe",
            section: "1. Trainer",
            mail: "",
            phone: "+49 (0) 1514 1395756",
        },
        {
            team: "(SG) D2-Jugend",
            name: "Stefan Köhler",
            section: "2. Trainer",
            mail: "",
            phone: "+49 (0) 176 45500055",
        }
    ],
    "U11 E1-Jugend": [
        {
            team: "E1-Jugend",
            name: "Jochen Datz",
            section: "1. Trainer",
            mail: "",
            phone: "+49 (0) 179 7584825",
        },
        {
            team: "E1-Jugend",
            name: "Thomas Bibelriether",
            section: "2. Trainer",
            mail: "",
            phone: "+49 (0) 175 2021964",
        },
        {
            team: "E1-Jugend",
            name: "Sven Tiefel",
            section: "Spielleiter",
            mail: "",
            phone: "+49 (0) 173 8583978",
        },
    ],
    "U11 E2-Jugend": [
        {
            team: "E2-Jugend",
            name: "Tobias Wehr",
            section: "1. Trainer",
            mail: "",
            phone: "+49 (0) 170 3152002",
        }
    ],
    "U9 F-Jugend": [
        {
            team: "F-Jugend",
            name: "Rene Hofmockel",
            section: "1. Trainer",
            mail: "",
            phone: "+49 (0) 176 61042669",
        },
        {
            team: "F-Jugend",
            name: "Markus Sandmann",
            section: "2. Trainer",
            mail: "",
            phone: "+49 (0) 1575 6026348",
        },
        {
            team: "F-Jugend",
            name: "Luis Reuthlingshöfer",
            section: "3. Trainer",
            mail: "",
            phone: "+49 (0) 171 2929094",
        }
    ],
    "U7 G-Jugend": [
        {
            team: "G-Jugend",
            name: "Helmut Hofmockel",
            section: "1. Trainer",
            mail: "",
            phone: "+49 (0) 172 8563666",
        },
        {
            team: "G-Jugend",
            name: "Andreas Schönleben",
            section: "2. Trainer",
            mail: "",
            phone: "+49 (0) 179 3624394",
        }
    ],
}

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
            <div className="container mx-auto">
                <Typography variant="h2" color="blue-gray" className="mb-4 uppercase">
                    Trainer
                </Typography>
                <div
                    className="container mx-auto grid h-full gap-10 w-full grid-cols-1 items-start 2xl:grid-cols-2 lg:grid-cols-2 mb-20">
                    {Object.entries(TRAINER).map(([key, value], idx) => (
                        <div key={idx}>
                            <Typography variant="h3" color="blue-gray" className="mb-4 uppercase">
                                {key}
                            </Typography>
                            <div className="grid grid-cols-1 gap-10">
                                {value.map((props, idx) => (
                                    <div>
                                        <Typography variant="paragraph" color="blue-gray">
                                            {props.name}
                                        </Typography>
                                        <Typography variant="paragraph" color="blue-gray">
                                            {props.section}
                                        </Typography>
                                        <Typography
                                            as="a"
                                            href={`tel:${props.mail}`}
                                            variant="paragraph"
                                            color="blue-gray">
                                            {props.mail}
                                        </Typography>
                                        <Typography
                                            as="a"
                                            href={`tel:${props.phone}`}
                                            variant="paragraph"
                                            color="blue-gray">
                                            {props.phone}
                                        </Typography>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="container mx-auto h-full gap-10 w-full items-start">
                <Typography variant="h2" color="blue-gray" className="mb-4 uppercase">
                    Trainingszeiten
                </Typography>
                <Trainingszeiten/>
            </div>
        </header>
    );
}

export default Jugend;
