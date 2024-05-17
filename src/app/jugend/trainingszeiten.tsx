import {Card, Typography} from "@material-tailwind/react";

const TABLE_HEAD = ["Team", "Montag", "Dienstag", "Mitwoch", "Donnerstag", "Freitag"];

const TABLE_ROWS = [
    {
        team: "U19",
        montag: "",
        dienstag: "19:00 - 20:30 Uhr",
        mittwoch: "",
        donnerstag: "",
        freitag: "",
    },
];

export function Trainingszeiten() {
    return (
        <Card className="h-full w-full overflow-scroll">
            <table className="w-full min-w-max table-auto text-left" style={{tableLayout: 'fixed'}}>
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
