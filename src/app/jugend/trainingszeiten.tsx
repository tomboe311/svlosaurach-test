import {Card, Typography} from "@material-tailwind/react";

const TABLE_HEAD = ["Team", "Montag", "Dienstag", "Mitwoch", "Donnerstag", "Freitag"];

const TABLE_ROWS = [
    {
        team: "U19/U18 (A-Junioren)",
        montag: "",
        dienstag: "19:00 - 20:30 Uhr (Sportplatz Losaurach)",
        mittwoch: "",
        donnerstag: "19:00 - 20:30 Uhr (Sportplatz Losaurach)",
        freitag: "",
    },
    {
        team: "U17/U16 (B-Junioren)",
        montag: "",
        dienstag: "19:00 - 20:30 Uhr (Sportplatz Markt Erlbach)",
        mittwoch: "",
        donnerstag: "19:00 - 20:30 Uhr (Sportplatz Markt Erlbach)",
        freitag: "",
    },
    {
        team: "U15/U14 (C-Junioren)",
        montag: "",
        dienstag: "17:30 - 19:00 Uhr (Sportplatz Markt Erlbach)",
        mittwoch: "",
        donnerstag: "17:30 - 19:00 Uhr (Sportplatz Markt Erlbach)",
        freitag: "",
    },
    {
        team: "U13/U12 (D1/D2-Junioren)",
        montag: "17:00 - 18:30 Uhr (Sportplatz Losaurach)",
        dienstag: "",
        mittwoch: "",
        donnerstag: "17:00 - 18:30 Uhr (Sportplatz Losaurach)",
        freitag: "",
    },
    {
        team: "U11/U10 (E-Junioren)",
        montag: "",
        dienstag: "17:00 - 18:30 Uhr (Sportplatz Losaurach)",
        mittwoch: "",
        donnerstag: "17:00 - 18:30 Uhr (Sportplatz Losaurach)",
        freitag: "",
    },
    {
        team: "U9/U8 (F-Junioren)",
        montag: "",
        dienstag: "17:00 - 18:30 Uhr (Sportplatz Losaurach)",
        mittwoch: "",
        donnerstag: "",
        freitag: "17:00 - 18:30 Uhr (Sportplatz Losaurach)",
    },
    {
        team: "U7 (G-Junioren)",
        montag: "",
        dienstag: "",
        mittwoch: "17:00 - 18:30 Uhr (Sportplatz Losaurach)",
        donnerstag: "",
        freitag: "",
    },
    {
        team: "U15/U14 (C-Juniorinnen)",
        montag: "",
        dienstag: "17:30 - 19:00 Uhr (Sportplatz Losaurach)",
        mittwoch: "",
        donnerstag: "17:30 - 19:00 Uhr (Sportplatz Losaurach)",
        freitag: "",
    },
];

export function Trainingszeiten() {
    return (
        <Card className="h-full w-full overflow-scroll">
            <table className="w-full h-full min-w-max table-auto text-left" style={{tableLayout: 'fixed'}}>
                <thead>
                <tr>
                    {TABLE_HEAD.map((head) => (
                        <th key={head} className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                            <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-normal leading-none opacity-70"
                            >
                                {head}
                            </Typography>
                        </th>
                    ))}
                </tr>
                </thead>
                <tbody>
                {TABLE_ROWS.map(({team, montag, dienstag, mittwoch, donnerstag, freitag}, index) => (
                    <tr key={team} className="even:bg-blue-gray-50/50">
                        <td className="p-4">
                            <Typography variant="small" color="blue-gray" className="font-normal">
                                {team}
                            </Typography>
                        </td>
                        <td className="p-4">
                            <Typography variant="small" color="blue-gray" className="font-normal">
                                {montag}
                            </Typography>
                        </td>
                        <td className="p-4">
                            <Typography variant="small" color="blue-gray" className="font-normal">
                                {dienstag}
                            </Typography>
                        </td>
                        <td className="p-4">
                            <Typography variant="small" color="blue-gray" className="font-normal">
                                {mittwoch}
                            </Typography>
                        </td>
                        <td className="p-4">
                            <Typography as="a" href="#" variant="small" color="blue-gray" className="font-medium">
                                {donnerstag}
                            </Typography>
                        </td>
                        <td className="p-4">
                            <Typography as="a" href="#" variant="small" color="blue-gray" className="font-medium">
                                {freitag}
                            </Typography>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </Card>
    );
}
