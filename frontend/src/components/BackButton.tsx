import Link from "next/link";
import "@/styles/components.css";

type BackButtonProps = {
	href?: string; // Default to home
	children?: React.ReactNode;
};

export function BackButton({ href = "/", children }: BackButtonProps) {
	return (
		<Link href={href} className="btn-back">
			← {children || "Back"}
		</Link>
	);
}
