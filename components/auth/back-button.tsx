import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface BackButtonProps {
    label: string;
    href: string;
}
export const BackButton = ({ label, href }: BackButtonProps) => {
    return (
        <Link className={cn(buttonVariants({ variant: "link" }), "font-normal w-full")} href={href}>
            {label}
        </Link>
    );
};
