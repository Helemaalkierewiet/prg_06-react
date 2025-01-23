import {Link, Outlet} from "react-router";
import Beat from "./Beat.jsx";
import {useEffect, useState} from "react";
function Beats() {

    const [beats, setBeats] = useState([]);

    useEffect(() => {
        async function fetchBeats() {
            try {
                const response = await fetch('http://145.24.223.55:8002/tracks', {
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



            } catch (error) {
                console.error('Fout bij het ophalen van het product:', error);
            }
        }


        fetchBeats();


    }, []);

    console.log(beats)


    return (
        <>
            <div className="flex flex-col h-screen overflow-y-hidden ">
                <div>
                    <h1 className="text-white text-6xl mt-10 mb-10 text-center">List of beats</h1>
                    {/*<h1   className="text-pink-400 text-6xl mb-4 text-center ">List of beats</h1>*/}

                </div>


                {beats ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 h-auto">
                        {beats.map((beat) => (
                            <Beat key={beat.id} beat={beat}></Beat>
                        ))}
                    </div>
                ) : (
                    <div>Beats are loading...</div>
                )}
            </div>
        </>
    );


}

export default Beats;