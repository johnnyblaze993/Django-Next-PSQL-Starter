"use client";

import styled from "@emotion/styled";

const LayoutWrapper = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`;

const NavHeader = styled.header`
    background: ${({ theme }) => theme.colors.accent};
    color: #fff;
    padding: 28px 16px 24px 16px;
    text-align: center;
    font-size: 2rem;
    font-weight: bold;
    letter-spacing: 0.05em;
`;

const Content = styled.main`
    flex: 1;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 32px 16px;
`;

const Footer = styled.footer`
    background: ${({ theme }) => theme.colors.dark};
    color: ${({ theme }) => theme.colors.light};
    text-align: center;
    font-size: 1rem;
    padding: 16px 0 18px 0;
    letter-spacing: 0.04em;
`;

export default function LayoutShell({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <LayoutWrapper>
            <NavHeader>
                <span role="img" aria-label="plant" style={{ fontSize: 32, marginRight: 8 }}>
                    🌱
                </span>
                Plant Store Demo
            </NavHeader>
            <Content>{children}</Content>
            <Footer>Dev environment</Footer>
        </LayoutWrapper>
    );
}

