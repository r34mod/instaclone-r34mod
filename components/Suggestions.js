import { useEffect, useState } from "react";
import faker from "faker";

function Suggestions() {

    const [suggestions, setSuggetions] = useState([]);

    useEffect(() => {
        const suggestions = [...Array(5)].map((_, i)=>(
            {
                ...faker.helpers.contextualCard(),
                id: i
            }
        ))

        setSuggetions(suggestions);
    }, [])
    return (
        <div className="mt-4 ml-16">
            <div className="flex justify-between text-sm mb-5">
                <h3 className="text-sm font-bold text-gray-400">Sugerencias para ti</h3>
                <button className="text-gray-700 font-semibold">Visualizarlas</button>
            </div>

            {
                suggestions.map(profile=>(
                    <div  key={profile.id}
                    className="flex items-center justify-between mt-3">
                       <img className="w-10 h-10 rounded-full" src={profile.avatar} alt="" />

                       <div className="flex-1 ml-4">
                            <h2 className="text-sm text-gray-700">{profile.username}</h2>
                            <h3 className="text-sm text-gray-500">{profile.name}</h3>
                       </div>
                       <button className="text-sm text-blue-500 font-semibold">Seguir</button>
                    </div>

                   
                ))
            }
        </div>
    )
}

export default Suggestions
