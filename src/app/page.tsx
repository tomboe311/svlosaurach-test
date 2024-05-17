// components
import {Navbar, Footer} from "@/components";

// sections
import Hero from "./hero";
import Sponsors from "./sponsors";
import Sections from "./sections";
import Teams from "./teams";
import Verein from "@/app/verein";
import Address from "@/app/address";

export default function Home() {
    return (
        <>
            <Navbar/>
            <Hero/>
            <Verein/>
            <Teams/>
            <Sponsors/>
            <Sections/>
            <Address/>
            <Footer/>
        </>
    );
}

