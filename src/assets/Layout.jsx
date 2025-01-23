import {Link, Outlet, useLocation} from "react-router";
import { CSSTransition, SwitchTransition } from 'react-transition-group'

function Layout() {
    const location = useLocation(); // Use useLocation to get the current path


    return(
        <div
            className="h-screen  bg-black flex justify-center backdrop-blur-2xl" // Use h-screen to set full height
            style={{
                backgroundImage: "url('https://64.media.tumblr.com/94d635e42c8da6d07c5c1257cac71a36/tumblr_ozu04bxEkd1wxdq3zo1_500.gifv')",
                backgroundSize: 'cover', // Ensure the background image covers the container
                backgroundPosition: 'center', // Center the background image
                backgroundRepeat: 'no-repeat', // Prevent the image from repeating
            }}
        >
                <link href="https://fonts.googleapis.com/css2?family=Jersey+10&display=swap" rel="stylesheet"/>
            <SwitchTransition>
                <CSSTransition
                    key={location.pathname}

                    timeout={600}
                    classNames="page"
                    // unmountOnExit
                >

                        <Outlet/>


                </CSSTransition>
            </SwitchTransition>
        </div>

    )
}

export default Layout;