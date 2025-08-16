"use client";

import { ReactNode } from "react";
import styled from "@emotion/styled";

const Tip = styled.span`
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translate(-50%, 10px);
  background: ${({ theme }) => theme.colors.dark};
  color: ${({ theme }) => theme.colors.light};
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.2s ease, transform 0.2s ease;
  font-size: 0.8rem;
  z-index: 10;
`;

const Wrapper = styled.span`
  position: relative;
  display: inline-block;

  &:hover ${Tip} {
    opacity: 1;
    transform: translate(-50%, 0);
  }
`;

export function Tooltip({ text, children }: { text: string; children: ReactNode }) {
  return (
    <Wrapper>
      {children}
      <Tip role="tooltip">{text}</Tip>
    </Wrapper>
  );
}
