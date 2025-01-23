import {useState} from "react";
import {useNavigate} from "react-router";


function BeatCreateForm() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        genre: '',
    });


    async function fetchBeats() {
        try {
            const response = await fetch('http://145.24.223.55:8002/tracks', {
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    method: 'POST',
                    body: JSON.stringify({
                        title: formData.title,
                        description: formData.description,
                        genre: formData.genre
                    })


            });
            console.log('yooo dit is je debug JUNO', response);
            const createdBeat = await response.json(); // Parse the response as JSON
            console.log('Created Beat:', createdBeat);
            navigate(`/beats/${createdBeat.id}`);

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
        console.log('Formulier verzonden:', formData ,fetchBeats());

    };

    return(
        <>
            <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold text-center mb-6">Add a New Beat</h2>

                <form onSubmit={handleSubmit}>
                    {/* Title Field */}
                    <div className="mb-4">
                        <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            value={formData.title}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>

                    {/* Description Field */}
                    <div className="mb-4">
                        <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
                        <textarea
                            id="description"
                            name="description"
                            value={formData.description}
                            onChange={handleInputChange}
                            required
                            rows="4"
                            className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>

                    {/* Genre Field */}
                    <div className="mb-6">
                        <label htmlFor="genre" className="block text-sm font-medium text-gray-700">Genre</label>
                        <input
                            type="text"
                            id="genre"
                            name="genre"
                            value={formData.genre}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
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

                {/* Feedback Messages */}
            </div>
        </>
    )


}

export default BeatCreateForm;