import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

interface FormErrorProps {
    message?: string;
}

export const FormError = ({ message }: FormErrorProps) => {
    if (!message) return null;

    return (
        <div className="flex items-center space-x-2 text-destructive bg-destructive/10 rounded-md font-semibold p-3 text-sm">
            <ExclamationTriangleIcon className="size-4" />
            <span>{message}</span>
        </div>
    );
};
