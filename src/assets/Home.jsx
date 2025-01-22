import {Link, Outlet} from "react-router";

function Home() {
    return (
        <div className="flex flex-col items-center space-y-6 w-full"> {/* Center and stack items vertically */}
            <h1 className="text-4xl font-bold text-white mb-4">Select option:</h1>
            <div className="flex flex-col space-y-3"> {/* Vertical stacking for buttons */}
                <Link to="/beats">
                    <button className="button-with-bg text-3xl px-6 py-2 text-white rounded-lg transform transition-all w-64 h-14 duration-1000">
                        Beats
                    </button>
                </Link>
                <button className="button-with-bg text-3xl px-6 py-2 text-white rounded-lg transform transition-all duration-1000">
                    Kits
                </button>
                <button className="button-with-bg text-3xl px-6 py-2 text-white rounded-lg transform transition-all duration-1000">
                    Portfolio
                </button>
            </div>
        </div>
    );
}

export default Home;
