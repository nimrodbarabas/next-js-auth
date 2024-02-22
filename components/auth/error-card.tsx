import { CardWrapper } from "@/components/auth/card-wrapper";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

export const ErrorCard = () => {
    return (
        <CardWrapper
            headerLabel="Opps! Something went wrong"
            backButtonLabel="Back to login"
            backButtonHref="/auth/login"
            showSocials={false}>
            <div className="w-full flex justify-center items-center">
                <ExclamationTriangleIcon className="size-10 text-destructive" />
            </div>
        </CardWrapper>
    );
};
