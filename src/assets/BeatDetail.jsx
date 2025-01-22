import {Link, useParams} from "react-router";
import {useEffect, useState} from "react";
import beat from "./Beat.jsx";

function BeatDetail() {
    let params = useParams()
    console.log(params, ' params logger');
    const [beat, setBeat] =useState(null);

    useEffect(() => {
        async function fetchBeats() {
            try {
                const response = await fetch(`http://145.24.223.55:8002/tracks/${params.id}`, {
                        headers: {
                            'Accept': 'application/json'
                        }
                    }
                );
                console.log('const data await response beneath this line');
                const data = await response.json();

                // console.log(data);
                console.log('het doet het wel');
                setBeat(data);
                console.log(data.items);

            } catch (error) {
                console.error('Fout bij het ophalen van het product:', error);
            }
        }


        fetchBeats();


    }, []);

    return (
        <>
            {beat ? (

                    <div className="w-90 max-w-3xl bg-none rounded-lg shadow-lg p-8 space-y-6">
                        {/* Header Section */}
                        <div className="">
                            <h1 className="text-4xl font-bold text-gray-100">{beat.title}</h1>
                            <p className="text-lg text-pink-400 mt-2">{beat.genre}</p>
                        </div>

                        {/* Description Section */}
                        <div>
                            <h2 className="text-2xl font-semibold text-gray-100">Description:</h2>
                            <p className="text-lg text-pink-400 mt-2">{beat.description}</p>
                        </div>

                        {/* Links for Edit and Delete */}
                        <div className="flex items-center mt-6 space-x-4">
                            <Link
                                to={`/beats/${beat.id}/edit`}
                                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                            >
                                Edit
                            </Link>
                            <Link
                                to={`/beats/${beat.id}/delete`}
                                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                            >
                                Delete
                            </Link>
                        </div>

                        {/* Back to List Button */}
                        <div className="mt-6 text-center">
                            <Link
                                to="/beats"
                                className="px-6 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition"
                            >
                                Back to Beats List
                            </Link>
                        </div>
                    </div>

            ) : (
                <h2 className="text-5xl text-white">loading...</h2>
            )}
        </>
    )

}




export default BeatDetail;