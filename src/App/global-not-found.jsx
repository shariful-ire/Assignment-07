'use client';
import './globals.css'

const GlobalNotFound = () => {

    return (
        <html lang="en" data-theme='light' className="h-full md:w-4/5 md:mx-auto mx-4 bg-base-300">
            <body className="rounded-3xl lg:mt-30 md:mt-20 mt-15">
                <div className="flex items-center justify-center bg-base-100 px-6 py-10 sm:py-12 lg:px-8 border-2 border-dashed rounded-3xl shadow-2xl shadow-red-400">
                    <div className="text-center">

                        <p className="text-6xl font-black text-red-500 animate-bounce">
                            404
                        </p>

                        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                            Page Not Found
                        </h1>

                        <p className="mt-6 text-base leading-7 text-gray-600 max-w-md mx-auto">
                            The page you are looking for could not be found. It might have been removed, had its name changed, or is temporarily unavailable.
                        </p>


                        <div className="mt-10 flex items-center justify-center gap-x-6">
                                <div onClick={() => window.history.back(-1)}
                                    
                                    className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-gray-300 hover:bg-gray-50 transition-all cursor-pointer"
                                >
                                    Go Back
                                </div>


                            <div onClick={() => window.location.replace('/')}
                                
                                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 transition-all cursor-pointer"
                            >
                                Go Home
                            </div>
                        </div>
                    </div>
                </div>
            </body>
        </html>
    );
};

export default GlobalNotFound;