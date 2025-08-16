import styled from "@emotion/styled";
import Link from "next/link";

export const Grid = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
`;

export const Card = styled.div`
  background: ${({ theme }) => theme.colors.light};
  color: ${({ theme }) => theme.colors.dark};
  border: 1px solid ${({ theme }) => theme.colors.medium};
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  }
`;

export const CardHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.2rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.medium};
  font-size: 1.2rem;
  font-weight: bold;
`;

export const Heading = styled.h1`
  color: ${({ theme }) => theme.colors.dark};
  font-size: 2rem;
  margin-bottom: 1.3rem;
  letter-spacing: 0.04em;
  text-align: center;
  font-weight: 900;
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.colors.dark};
  font-size: 1.13rem;
  opacity: 0.94;
  text-align: center;
  margin-bottom: 1rem;
`;

export const DescriptionBlock = styled.div`
  max-width: 600px;
  margin: 0 auto 2.5rem auto;
  font-size: 1rem;
`;

export const Highlight = styled.span`
  color: ${({ theme }) => theme.colors.accent};
  font-weight: 700;
`;

export const LinkButton = styled(Link)`
  background: ${({ theme }) => theme.colors.accent};
  color: #fff;
  border: none;
  padding: 1rem 2rem;
  border-radius: 8px;
  font-weight: 600;
  text-decoration: none;
  transition: background 0.2s ease, transform 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover,
  &:focus {
    background: ${({ theme }) => theme.colors.dark};
    transform: translateY(-3px);
  }
`;

export const BackLink = styled(LinkButton)`
  width: 300px;
  margin: 0 auto 2rem;
`;
