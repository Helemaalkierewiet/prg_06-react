import {useEffect, useState} from "react";
import {useParams} from "react-router";



function BeatEdit() {
    let params = useParams()
    const id = params.id;
    console.log(id);
    const [beat, setBeat] = useState();


    useEffect(() => {
        async function fetchBeats() {
            try {
                const response = await fetch(`http://145.24.223.55:8002/tracks/` + id, {
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
                console.log(data, 'dit zit nu in beat');

            } catch (error) {
                console.error('Fout bij het ophalen van het product:', error);
            }
        }


        fetchBeats();


    }, []);

    const [formData, setFormData] = useState({
        title: '',
        description: '',
        genre: '',
    });

    async function fetchNewBeats() {
        try {
            const response = await fetch(`http://145.24.223.55:8002/tracks/` + id, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: 'PUT',
                body: JSON.stringify({
                    title: formData.title,
                    description: formData.description,
                    genre: formData.genre
                })

            });


        } catch (error) {
            console.error('(create form log error:)', error);
        }
    }

    const handleInputChange = (event) => {
        const {name, value} = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Formulier verzonden:', formData ,fetchNewBeats());
    };

    return(
        <>
            <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold text-center mb-6">Edit Beat</h2>

                <form onSubmit={handleSubmit}>
                    {/* Title Field */}
                    <div className="mb-4">
                        <label htmlFor="title" className="block text-sm font-medium text-black">Title</label>
                        {beat ? (
                        <input
                            type="text"
                            id="title"
                            name="title"
                            value={formData.title}
                            placeholder={beat.title}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        ) : (
                        <h2>loading</h2>
                        )}
                    </div>

                    {/* Description Field */}
                    <div className="mb-4">
                        <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
                        {beat ? (
                        <input
                            id="description"
                            name="description"
                            value={formData.description}
                            placeholder={beat.description}
                            onChange={handleInputChange}
                            required

                            className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        ) : (
                        <h2>loading</h2>
                        )}
                    </div>

                    {/* Genre Field */}
                    <div className="mb-6">
                        <label htmlFor="genre" className="block text-sm font-medium text-gray-700">Genre</label>
                        {beat ? (
                        <input
                            type="text"
                            id="genre"
                            name="genre"
                            value={formData.genre}
                            placeholder={beat.genre}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        ) : (
                            <h2>loading</h2>
                        )}
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-center">
                        <button
                            type="submit"

                            className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200 focus:outline-none"
                        >

                        </button>
                    </div>
                </form>


            </div>
        </>
    )


}

export default BeatEdit;