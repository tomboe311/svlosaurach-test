import React from "react";
import {
    Navbar as MTNavbar,
    Collapse,
    IconButton,
    Typography,
} from "@material-tailwind/react";
import {
    XMarkIcon,
    Bars3Icon,
} from "@heroicons/react/24/solid";
import Link from "next/link";

const NAV_MENU = [
    {
        name: "Verein",
        href: "/verein",
    },
    {
        name: "Herren",
        href: "/herren",
    },
    {
        name: "Damen",
        href: "/damen",
    },
    {
        name: "Jugend",
        href: "/jugend",
    },
    {
        name: "Schützen",
        href: "/schuetzen",
    },
    {
        name: "Seifenkiste",
        href: "/seifenkiste",
    },
    {
        name: "Darts",
        href: "/darts",
    },
    {
        name: "Förderverein",
        href: "/foerderverein"
    },
    {
        name: "Fanshop",
        href: "https://www.sv-losaurach.de/fanshop/"
    }
];

interface NavItemProps {
    children: React.ReactNode;
    href?: string;
}

function NavItem({children, href}: NavItemProps) {
    return (
        <li>
            <Typography
                as="a"
                href={href || "#"}
                target="_self"
                variant="paragraph"
                color="gray"
                className="flex items-center gap-2 font-medium text-gray-900"
            >
                {children}
            </Typography>
        </li>
    );
}

export function Navbar() {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => setOpen((cur) => !cur);

    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpen(false)
        );
    }, []);

    return (
        <MTNavbar shadow={false} fullWidth className="border-0 sticky top-0 z-50">
            <div className="container mx-auto flex items-center justify-between">
                <Link href="/">
                    <div className="flex">
                        <img src="/image/sv-losaurach-wappen.png" alt="SV Losaurach e. V."
                             className="h-12 self-center"/>&nbsp;
                        <Typography color="blue-gray" className="text-lg font-bold self-center">
                            SV Losaurach
                        </Typography>
                    </div>
                </Link>
                <ul className="ml-10 hidden items-center gap-8 lg:flex">
                    {NAV_MENU.map(({name, href}) => (
                        <NavItem key={name} href={href}>
                            {name}
                        </NavItem>
                    ))}
                </ul>
                <div className="hidden items-center gap-2 lg:flex">
                    <a href="https://www.instagram.com/sv_losaurach_1972" target="_blank">
                        <IconButton variant="text">
                            <i className="fa-brands fa-instagram text-lg"/>
                        </IconButton>
                    </a>
                    <a href="https://www.facebook.com/SVLosaurach1972" target="_blank">
                        <IconButton variant="text">
                            <i className="fa-brands fa-facebook text-lg"/>
                        </IconButton>
                    </a>
                </div>
                <IconButton
                    variant="text"
                    color="gray"
                    onClick={handleOpen}
                    className="ml-auto inline-block lg:hidden"
                >
                    {open ? (
                        <XMarkIcon strokeWidth={2} className="h-6 w-6"/>
                    ) : (
                        <Bars3Icon strokeWidth={2} className="h-6 w-6"/>
                    )}
                </IconButton>
            </div>
            <Collapse open={open}>
                <div className="container mx-auto mt-3 border-t border-gray-200 px-2 pt-4">
                    <ul className="flex flex-col gap-4">
                        {NAV_MENU.map(({name, href}) => (
                            <NavItem key={name} href={href}>
                                {name}
                            </NavItem>
                        ))}
                    </ul>
                    <div className="mt-6 mb-4 flex items-center gap-2">
                        <a href="https://www.instagram.com/sv_losaurach_1972" target="_blank">
                            <IconButton variant="text">
                                <i className="fa-brands fa-instagram text-lg"/>
                            </IconButton>
                        </a>
                        <a href="https://www.facebook.com/SVLosaurach1972" target="_blank">
                            <IconButton variant="text">
                                <i className="fa-brands fa-facebook text-lg"/>
                            </IconButton>
                        </a>
                    </div>
                </div>
            </Collapse>
        </MTNavbar>
    );
}

export default Navbar;
