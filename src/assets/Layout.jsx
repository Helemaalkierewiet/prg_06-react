import {Link, Outlet} from "react-router";

function Layout() {
    return(
        <div
            className="h-screen bg-gray-100 flex justify-center items-center" // Use h-screen to set full height
            style={{
                backgroundImage: "url('https://64.media.tumblr.com/94d635e42c8da6d07c5c1257cac71a36/tumblr_ozu04bxEkd1wxdq3zo1_500.gifv')",
                backgroundSize: 'cover', // Ensure the background image covers the container
                backgroundPosition: 'center', // Center the background image
                backgroundRepeat: 'no-repeat', // Prevent the image from repeating
            }}
        >
                <link href="https://fonts.googleapis.com/css2?family=Jersey+10&display=swap" rel="stylesheet"/>

            <Outlet/>
        </div>

    )
}

export default Layout;