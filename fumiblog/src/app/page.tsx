import Image from "next/image";
import styles from "./page.module.css";

import Hero from "@/components/molecules/Hero";
import BlogList from "@/components/organisms/BlogList";

export default function Home() {
    return (
        <div>
            <Hero />
            <BlogList />
        </div>
    );
}
