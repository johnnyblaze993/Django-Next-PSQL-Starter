// src/app/page.tsx
import { DescriptionBlock, Highlight, Grid, LinkButton } from "@/components/ui";
import { Tooltip } from "@/components/Tooltip";

export default function HomePage() {
        return (
                <section>
                        <DescriptionBlock>
                                <p>
                                        <Highlight>Docker</Highlight>, <Highlight>Django</Highlight>, and
                                        <Highlight> Next.js</Highlight> power this starter project.
                                </p>
                                <p
                                        style={{ marginTop: "1.5rem", fontWeight: 700, textAlign: "center" }}
                                >
                                        Select an option below.
                                </p>
                        </DescriptionBlock>

                        <Grid>
                                <Tooltip text="View sample plants built with Next.js">
                                        <LinkButton href="/plants">Plants</LinkButton>
                                </Tooltip>
                                <Tooltip text="Learn how this setup works">
                                        <LinkButton href="/tutorial">Tutorial</LinkButton>
                                </Tooltip>
                        </Grid>
                </section>
        );
}
