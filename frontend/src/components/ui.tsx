"use client";

import styled from "@emotion/styled";
import Link from "next/link";

export const Grid = styled.div`
  display: grid;
  gap: 2.5rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`;

export const Card = styled.div`
  background: ${({ theme }) => theme.colors.light};
  color: ${({ theme }) => theme.colors.dark};
  border: 1px solid ${({ theme }) => theme.colors.greenLight};
  border-radius: 18px;
  padding: 2rem 1.5rem 1.5rem 1.5rem;
  box-shadow: 0 4px 24px rgba(58,90,64,0.08);
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  transition: transform 0.18s cubic-bezier(.4,0,.2,1), box-shadow 0.18s cubic-bezier(.4,0,.2,1);
  position: relative;
  overflow: hidden;

  &:before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 18px;
    pointer-events: none;
    border: 2px solid transparent;
    transition: border-color 0.2s;
  }

  &:hover {
    transform: translateY(-6px) scale(1.01);
    box-shadow: 0 8px 32px rgba(58,90,64,0.13);
  }

  &:hover:before {
    border-color: ${({ theme }) => theme.colors.accent};
  }
`;

export const CardHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.2rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.greenLight};
  font-size: 1.25rem;
  font-family: ${({ theme }) => theme.font.heading};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.green};
`;

export const Heading = styled.h1`
  color: ${({ theme }) => theme.colors.green};
  font-size: 2.3rem;
  margin-bottom: 1.3rem;
  letter-spacing: 0.04em;
  text-align: center;
  font-family: ${({ theme }) => theme.font.heading};
  font-weight: 900;
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.colors.medium};
  font-size: 1.13rem;
  opacity: 0.97;
  text-align: center;
  margin-bottom: 1.2rem;
`;

export const DescriptionBlock = styled.div`
  max-width: 600px;
  margin: 0 auto 2.5rem auto;
  font-size: 1rem;
`;

export const Highlight = styled.span`
  color: ${({ theme }) => theme.colors.accent};
  font-weight: 700;
  font-family: ${({ theme }) => theme.font.heading};
`;

export const LinkButton = styled(Link)`
  background: linear-gradient(90deg, ${({ theme }) => theme.colors.green} 60%, ${({ theme }) => theme.colors.accent} 100%);
  color: #fff;
  border: none;
  padding: 1rem 2.2rem;
  border-radius: 12px;
  font-weight: 600;
  font-size: 1.08rem;
  text-decoration: none;
  transition: background 0.18s cubic-bezier(.4,0,.2,1), transform 0.18s cubic-bezier(.4,0,.2,1);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px rgba(191,161,129,0.08);

  &:hover,
  &:focus {
    background: linear-gradient(90deg, ${({ theme }) => theme.colors.greenLight} 60%, ${({ theme }) => theme.colors.accent} 100%);
    color: ${({ theme }) => theme.colors.dark};
    transform: translateY(-3px) scale(1.03);
  }
`;

export const BackLink = styled(LinkButton)`
  width: 300px;
  margin: 0 auto 2rem;
  font-size: 1rem;
`;
