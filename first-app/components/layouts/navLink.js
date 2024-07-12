"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";


import classes from "./header.module.css";

const NavLink = ({ children, href }) => {
    const path = usePathname();
    return (
        
        <Link 
            href={ href }
            className={ `${classes.link} ${path.startsWith(href)? classes.active: ""}` }
        >
            {
                children
            }
        </Link>
    );
};

export default NavLink;