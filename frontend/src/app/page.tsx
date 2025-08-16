// src/app/page.tsx
import "@/styles/components.css";
import "@/styles/global.css";
import Link from "next/link";

export default function HomePage() {
        return (
                <section>
                        <div className="description-block">
                                <p>
                                        <span className="highlight">Docker</span>,{" "}
                                        <span className="highlight">Django</span>, and
                                        <span className="highlight"> Next.js</span> power this starter
                                        project.
                                </p>
                                <p
                                        style={{ marginTop: "1.5rem", fontWeight: 700, textAlign: "center" }}
                                >
                                        Select an option below.
                                </p>
                        </div>

                        <div className="grid">
                                <Link href="/plants" className="link">
                                        Plants
                                </Link>
                                <Link href="/tutorial" className="link">
                                        Tutorial
                                </Link>
                        </div>
                </section>
        );
}
