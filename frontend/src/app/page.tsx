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
                                <Tooltip text="View all plants in the store">
                                        <LinkButton href="/plants">Plants</LinkButton>
                                </Tooltip>
                                <Tooltip text="Browse plant categories">
                                        <LinkButton href="/categories">Categories</LinkButton>
                                </Tooltip>
                                <Tooltip text="See available accessories">
                                        <LinkButton href="/accessories">Accessories</LinkButton>
                                </Tooltip>
                                <Tooltip text="Get plant care tips">
                                        <LinkButton href="/care-tips">Care Tips</LinkButton>
                                </Tooltip>
                                {/* Tutorial link removed */}
                        </Grid>
                </section>
        );
}
