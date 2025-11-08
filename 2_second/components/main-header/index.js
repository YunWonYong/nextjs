"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import logoImg from "@/assets/logo.png";
import classes from "./main-header.module.css";
import { MainHeaderBackground } from "./main-header-background";

export default function MainHeader() {
    const pathname = usePathname();
    return (
        <>
            <MainHeaderBackground />
            <header className={ classes.header }>
                <Link className={ classes.logo } href="/">
                    <Image 
                        src={logoImg}
                        alt="A plate with food on it"
                        priority
                    />
                    NextLevel Food
                </Link>
                <nav className={ classes.nav }>
                    <ul>
                        <li>
                            <Link 
                                href="/meals"
                                className={ pathname.startsWith("/meals") ? classes.active: undefined }
                            >
                                Browse Meals
                            </Link>
                        </li>
                        <li>
                            <Link 
                                href="/community"
                                className={ pathname.startsWith("/community") ? classes.active: undefined }
                            >
                                Foodies Community
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    ); 
}