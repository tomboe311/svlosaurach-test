import {Card, CardBody, IconButton, Typography} from "@material-tailwind/react";
import React from "react";

interface SectionCardProps {
    title: string;
    iconFontName: string;
    children: React.ReactNode;
}

export function SectionCard({iconFontName, title, children}: SectionCardProps) {
    return (
        <Card color="transparent" shadow={false}>
            <CardBody className="grid justify-center text-center">
                <div
                    className="mx-auto mb-6 grid h-12 w-12 place-items-center rounded-full bg-yellow-500 p-2.5 text-gray-900 shadow">
                    <i className={`fa-solid ${iconFontName} text-lg`}/>
                </div>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                    {title}
                </Typography>
                <Typography className="px-8 font-normal !text-gray-500">
                    {children}
                </Typography>
            </CardBody>
        </Card>
    );
}

export default SectionCard;
