import Logo from "@/components/atoms/Logo";
import Nav from "@/components/molecules/Nav";
import styled from "styled-components";

export default function Header() {
    return (
        <header>
            <Logo />
            <Nav />
        </header>
    )
}