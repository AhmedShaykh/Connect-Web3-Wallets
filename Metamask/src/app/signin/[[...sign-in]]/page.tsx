import { SignIn } from "@clerk/nextjs";

export default function Page() {
    return (
        <div className="flex justify-center items-start h-full mt-8">
            <SignIn />
        </div>
    );
};