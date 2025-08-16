import { BackLink } from "./ui";

interface BackButtonProps {
    href?: string;
    children?: React.ReactNode;
}

export function BackButton({ href = "/", children }: BackButtonProps) {
    return <BackLink href={href}>← {children || "Back"}</BackLink>;
}
