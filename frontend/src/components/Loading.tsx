"use client";

import styled from "@emotion/styled";

const LoaderContainer = styled.div`
    min-height: 60vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Spinner = styled.div`
    width: 54px;
    height: 54px;
    border: 5px solid ${({ theme }) => theme.colors.light};
    border-top: 5px solid ${({ theme }) => theme.colors.accent};
    border-radius: 50%;
    animation: spin 1s linear infinite;
    margin-bottom: 18px;

    @keyframes spin {
        to {
            transform: rotate(360deg);
        }
    }
`;

const LoadingText = styled.div`
    color: ${({ theme }) => theme.colors.dark};
    font-weight: 600;
    font-size: 1.16rem;
    letter-spacing: 0.07em;
`;

export function Loading() {
    return (
        <LoaderContainer>
            <Spinner aria-label="Loading" />
            <LoadingText>Loading...</LoadingText>
        </LoaderContainer>
    );
}
