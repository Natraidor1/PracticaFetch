import React from "react";


const CardDragonBall = ({Character}) =>{
    return(
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white border border-gray-200 m-4">
            <img className="h-54 object-cover mx-auto" src={Character.image} alt={Character.name}/>

            <div className="px-6 py-4">
                <h2 className="font-bold text-xl mb-2 text-gray-800">{Character.name}</h2>
                <p className="text-gray-600 text-sm mb-4">{Character.description}</p>
                <div className="text-gray-700 text-sm">
                    <p>
                        <span className="font-semibold">Race:</span>{Character.race}
                    </p>
                    <p>
                        <span className="font-semibold">Gender:</span>{Character.gender}
                    </p>
                    <p>
                        <span className="font-semibold">Ki</span>{Character.ki}
                    </p>
                    <p>
                        <span className="font-semibold">Max ki:</span>{Character.maxKi}
                    </p>
                    <p>
                        <span className="font-semibold">Affiliation:</span>{Character.affiliation}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CardDragonBall;
