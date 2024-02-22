import { Button } from "@/components/ui/button";
import LoginButton from "@/components/auth/login-button";

export default function Home() {
    return (
        <div className="flex h-screen flex-col items-center justify-center space-y-4">
            <h1 className="text-6xl font-semibold  drop-shadow-lg">Auth</h1>
            <p className="text-muted-foreground">A simple authentication service</p>
            <div>
                <LoginButton>
                    <Button variant="secondary" size="lg">
                        Sign in
                    </Button>
                </LoginButton>
            </div>
        </div>
    );
}
