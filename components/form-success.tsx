import { CheckCircledIcon } from "@radix-ui/react-icons";

interface FormErrorProps {
    message?: string;
}

export const FormSuccess = ({ message }: FormErrorProps) => {
    if (!message) return null;

    return (
        <div className="flex items-center space-x-2 text-emerald-500 bg-emerald-500/15 rounded-md font-semibold p-3 text-sm">
            <CheckCircledIcon className="size-4" />
            <span>{message}</span>
        </div>
    );
};
