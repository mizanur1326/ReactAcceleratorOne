import AirBnb from "./assets/svgComponents/AirBnbIcon";
import GoogleIcon from "./assets/svgComponents/GoogleIcon";
import MailChimpIcon from "./assets/svgComponents/MailChimpIcon";
import MashableIcon from "./assets/svgComponents/MashableIcon";
import MicrosoftIcon from "./assets/svgComponents/MicrosoftIcon";
import SpotifyIcon from "./assets/svgComponents/SpotifyIcon";

export default function CompaniesLogo(){
    return (
        <section className="bg-white dark:bg-gray-900">
        <div className="max-w-screen-xl px-4 pb-8 mx-auto lg:pb-16">
            <div
                className="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 sm:grid-cols-3 lg:grid-cols-6 dark:text-gray-400">
                <a href="#" className="flex items-center lg:justify-center">
                    {/* AirBNB */}
                    <AirBnb />
                </a>
                <a href="#" className="flex items-center lg:justify-center">
                    {/* Google */}
                    <GoogleIcon />
                </a>
                <a href="#" className="flex items-center lg:justify-center">
                    {/* Microsoft */}
                    <MicrosoftIcon />
                </a>
                <a href="#" className="flex items-center lg:justify-center">
                    {/* Spotify */}
                    <SpotifyIcon />
                </a>
                <a href="#" className="flex items-center lg:justify-center">
                    {/* Mailchimp */}
                    <MailChimpIcon/>
                </a>
                <a href="#" className="flex items-center lg:justify-center">
                    {/* Mashable */}
                    <MashableIcon />
                </a>
            </div>
        </div>
    </section>
    );
}