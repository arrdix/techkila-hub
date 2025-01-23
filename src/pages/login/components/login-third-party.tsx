import { Button } from '@/components/ui/button.tsx'

export function LoginThirdParty(): JSX.Element {
    return (
        <>
            <div className="w-64 h-px bg-gray-200 border-0 relative">
                <span className="flex justify-center bg-background w-28 absolute left-1/2 -translate-y-1/2 -translate-x-1/2">
                    <p className="text-muted text-sm">or login with</p>
                </span>
            </div>
            <Button
                variant="outline"
                className="gap-2 font-semibold text-base w-full"
            >
                <img className="w-5 h-5" src="/google.svg" alt="Google Logo" />
                Google
            </Button>
        </>
    )
}
