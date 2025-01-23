import {Link, Outlet} from "react-router";
import Beat from "./Beat.jsx";
import {useEffect, useState} from "react";
import {CSSTransition, TransitionGroup} from "react-transition-group";
function Beats() {

    const [beats, setBeats] = useState([]);

    const [pagination, setPagination] = useState({});
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState("");
    const limit = 12;


        async function fetchBeats(page = 1, limit = 12) {
            try {
                const response = await fetch(`http://145.24.223.55:8002/tracks?page=${page}&limit=${limit}`, {
                        headers: {
                            'Accept': 'application/json'
                        }
                    }
                );
                console.log('const data await response beneath this line');
                const data = await response.json();

                // console.log(data);
                console.log('het doet het wel');
                setBeats(data.items);
                setPagination(data.pagination || {});


            } catch (error) {
                console.error('Fout bij het ophalen van het product:', error);
            }
        }







    console.log(beats)

    useEffect(() => {
         fetchBeats(currentPage, limit);
    }, [currentPage]);

    const handlePageChange = (page) => {
        if (page >= 1 && page <= (pagination.totalPages || 1)) {
            setCurrentPage(page);
        }
    };


    return (
        <>
            <div className="flex flex-col h-screen overflow-y-hidden ">
                <div>
                    <h1 className="text-white text-6xl mt-10 mb-10 text-center">List of beats</h1>
                    {/*<h1   className="text-pink-400 text-6xl mb-4 text-center ">List of beats</h1>*/}

                </div>


                {beats ? (

                    <TransitionGroup className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 h-auto">
                        {beats.map((beat) => (
                            <CSSTransition key={beat.id} timeout={500} classNames="beat">
                                <Beat key={beat.id} beat={beat}></Beat>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                ) : (
                    <div>Beats are loading...</div>
                )}



                {/* Pagination Buttons */}
                <div className="flex justify-center mt-6 space-x-4">
                    <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className={`px-4 py-2 rounded-md text-white ${
                            currentPage === 1 ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"
                        }`}
                    >
                        Previous
                    </button>
                    <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === pagination.totalPages}
                        className={`px-4 py-2 rounded-md text-white ${
                            currentPage === pagination.totalPages
                                ? "bg-gray-400 cursor-not-allowed"
                                : "bg-blue-500 hover:bg-blue-600"
                        }`}
                    >
                        Next
                    </button>
                </div>


            </div>
        </>
    );


}

export default Beats;