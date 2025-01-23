import React from "react";
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    Button
} from "@nextui-org/react";

export default function nav() {

    return (
        <Navbar
            position="static"
            className="max-page-width mx-auto bg-transparent backdrop-filter-none pt-8 md:pt-16"
        >
            <NavbarContent className="p-0">
                <NavbarBrand>
                    <img src="/logo.svg" alt="Logo"/>
                </NavbarBrand>
            </NavbarContent>
            <NavbarContent justify="end" className="p-0">
                <Button className="px-8 py-3 shadow-michi bg-michi-purple rounded-md font-bold" onPress={() => open("https://app.pichi.finance", "_blank")}>
                    Launch App
                </Button>
            </NavbarContent>
        </Navbar>
    );
}