// components
import {Footer, NavbarWithMegaMenu} from "@/components";
import Trainingszeiten from "@/app/trainingszeiten/trainingszeiten";

// sections

export default function TrainingszeitenPage() {
    return (
        <div>
            <NavbarWithMegaMenu/>
            <Trainingszeiten/>
            <Footer/>
        </div>
    );
}
