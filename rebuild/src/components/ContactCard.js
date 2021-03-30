import React from "react";


function ContactCard() {
    return (
        <div className="h-screen w-full pt-8">
            <div className="h-80 w-full md:w-1/3 my-0 mx-auto">
                <main className="w-full h-full p-2 mx-2">
                    <div className="flex flex-row justify-start items-center p-2">
                        <a href="mailto: trevorsmithbanjo@gmail.com" className="hover:opacity-50">
                            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="60" viewBox="-13.2 -16.50405 114.4 99.0243"><path fill="#4285f4" d="M6 66.0162h14v-34l-20-15v43c0 3.315 2.685 6 6 6z" /><path fill="#34a853" d="M68 66.0162h14c3.315 0 6-2.685 6-6v-43l-20 15z" /><path fill="#fbbc04" d="M68 6.0162v26l20-15v-8c0-7.415-8.465-11.65-14.4-7.2z" /><path fill="#ea4335" d="M20 32.0162v-26l24 18 24-18v26l-24 18z" /><path fill="#c5221f" d="M0 9.0162v8l20 15v-26l-5.6-4.2c-5.935-4.45-14.4-.215-14.4 7.2z" /></svg>
                        </a>
                        <h3 className="text-sm md:text-xl font-semibold">trevorsmithbanjo@gmail.com</h3>
                    </div>
                    <div className="flex flex-row justify-start items-center p-2">
                        <a href="https://twitter.com/trevorsbanjo" className="hover:opacity-50">
                            <svg xmlns="http://www.w3.org/2000/svg" height="60" width="100" viewBox="-44.7006 -60.54775 387.4052 363.2865"><path fill="#1da1f2" d="M93.719 242.19c112.46 0 173.96-93.168 173.96-173.96 0-2.646-.054-5.28-.173-7.903a124.338 124.338 0 0030.498-31.66c-10.955 4.87-22.744 8.148-35.11 9.626 12.622-7.57 22.313-19.543 26.885-33.817a122.62 122.62 0 01-38.824 14.841C239.798 7.433 223.915 0 206.326 0c-33.764 0-61.144 27.381-61.144 61.132 0 4.798.537 9.465 1.586 13.941-50.815-2.557-95.874-26.886-126.03-63.88a60.977 60.977 0 00-8.279 30.73c0 21.212 10.794 39.938 27.208 50.893a60.685 60.685 0 01-27.69-7.647c-.009.257-.009.507-.009.781 0 29.61 21.075 54.332 49.051 59.934a61.218 61.218 0 01-16.122 2.152 60.84 60.84 0 01-11.491-1.103c7.784 24.293 30.355 41.971 57.115 42.465-20.926 16.402-47.287 26.171-75.937 26.171-4.929 0-9.798-.28-14.584-.846 27.059 17.344 59.189 27.464 93.722 27.464" /></svg>
                        </a>
                        <h3 className="text-m md:text-xl font-semibold">@trevorsbanjo</h3>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default ContactCard;