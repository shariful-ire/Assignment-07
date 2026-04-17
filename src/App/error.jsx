'use client'

import Link from "next/link";
import { useRouter } from "next/navigation";
const ErrorElement = ({ error, reset }) => {
    const router = useRouter();

    return (
        <div className=" flex items-center justify-center bg-base-100 px-6 py-10 sm:py-12 lg:px-8 border-2 border-dashed rounded-3xl ">
            <div className="text-center">
                
                <p className="text-6xl font-black text-blue-500 animate-bounce">
                    !
                </p>

                <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                    Something went wrong
                </h1>

                <p className="mt-6 text-base leading-7 text-gray-600 max-w-md mx-auto">
                    An unexpected error occurred. Our team has been notified and we&apos;re working on it.
                </p>

                {/* Technical Detail */}
                <p className="mt-2 text-sm font-mono text-gray-400">
                    Error Message: {error.message || "Internal Server Error"}
                </p>

                <div className="mt-10 flex items-center justify-center gap-x-6">
                    <button
                        onClick={() => router.back()}
                        className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 transition-all"
                    >
                        Go Back
                    </button>

                    <button
                        onClick={() => reset()}
                        className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 transition-all"
                    >
                        Try Again
                    </button>

                    <Link
                        href="/"
                        className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 transition-all"
                    >
                        Go Home
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ErrorElement;