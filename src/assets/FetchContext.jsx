import React, { createContext, useContext, useState } from 'react';

export const FetchContext = createContext();



export const BeatsProvider = ({ children }) => {


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

// Context value
    const value = {
        beats,
        pagination,
        currentPage,
        setCurrentPage,
        searchTerm,
        setSearchTerm,
        fetchBeats,
    };

    return <FetchContext.Provider value={value}>{children}</FetchContext.Provider>;
}


export const useBeats = () => {
    const context = useContext(FetchContext);
    if (!context) {
        throw new Error("useBeats must be used within a BeatsProvider");
    }
    return context;
};
