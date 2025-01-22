import {useEffect, useState} from "react";
import {redirect, useNavigate, useParams} from "react-router";

function BeatDelete(){
    const navigate = useNavigate();

    let params = useParams();
    const id = params.id;




    useEffect(() => {
        async function fetchBeat() {
            try {
                const response = await fetch(`http://145.24.223.55:8002/tracks/` + id, {
                    headers: {
                        'Accept': 'application/json',
                        // 'Content-Type': 'application/json'
                    },
                    method: 'DELETE',
                    }


                );


                // console.log(data);



                console.log('navigate reach log');
                // redirect back to detail
                navigate('/beats');

            } catch (error) {
                console.error('Fout bij het ophalen van het product:', error);
            }
        }


        fetchBeat();

        console.log('het doet het wel');


    }, [id, navigate]);
    console.log('?')
    // console.log(spot + ' spotlog');


    return (
        <>
            <article>

                    <h2>Deleting...</h2>

            </article>
        </>
    )
}

export default BeatDelete;