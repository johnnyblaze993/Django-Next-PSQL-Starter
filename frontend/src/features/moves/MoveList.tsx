"use client";
import { useMoves } from "./useMoves";
import styled from "@emotion/styled";
import { Grid, Card, CardHeader } from "@/components/ui";

const MoveHeader = styled(CardHeader)`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const MoveDetails = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 0.9rem;
    color: ${({ theme }) => theme.colors.dark};
`;

const MoveDesc = styled.p`
    font-size: 0.9rem;
    color: ${({ theme }) => theme.colors.dark};
`;

export function MovesList() {
    const { data, isLoading, error } = useMoves();

    if (isLoading) return <div>Loading Moves...</div>;
    if (error) return <div>Failed to load moves.</div>;

    return (
        <Grid>
            {data?.map((move) => (
                <Card key={move.id}>
                    <MoveHeader>
                        <span>{move.name}</span>
                    </MoveHeader>
                    <MoveDetails>
                        <span>Power: {move.power}</span>
                        <span>Acc: {move.accuracy}</span>
                    </MoveDetails>
                    <MoveDesc>{move.description}</MoveDesc>
                </Card>
            ))}
        </Grid>
    );
}
