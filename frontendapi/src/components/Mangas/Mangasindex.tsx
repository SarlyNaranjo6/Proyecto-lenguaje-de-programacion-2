import { useEffect, useState } from "react"
import { deleteMangaRequest, getMangaRequest } from "../../api/apiMangas"
import { PencilIcon, TrashIcon } from "@heroicons/react/24/solid";

function MangasIndex() {
    const [ mangas, setMangas ] = useState([]);
    const [ error, setError] = useState("");
    const [ updateList, setUpdateList ] = useState(false);


    useEffect(() => {
        setUpdateList(false);
        const fetchMangas = async () => {
            try {
                const response = await getMangaRequest();
                const data = await response.json();
                setMangas(data);
            } catch (e) {
                setError('No se trajo los valores');
                console.error(e);
            }
            
        }
        fetchMangas();
    }, [updateList])

const handleEdit = (id) => {
    console.log (`Editar actividad con ID: ${id}`);
}

const handleDelete = async (id) => {
    try {
        console.log(`Eliminar actividad con ID: ${id}`);
        await deleteMangaRequest(id);
        setMangas(mangas.filter((manga) => manga._id !== id));
        setUpdateList(true);
    } catch (error) {
        console.log(error);
    }
};


    return (
        <div>
            <div className="mt-2 mx-20 px-5 py-4 flex flex-wrap justify-between">
                <h2 className="text-2xl font-bold mb-4">Lista de Actividades</h2>
                <a href="/productos/nuevo" className="bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-full">
                    Crear nuevo Manga
                </a>               
            </div>
            {error && <p className="text-red-500">{error}</p>}
            <div className="mt-2 px-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-h-[75vh] overflow-y-auto">
                {mangas.length > 0 ? (
                mangas.map((manga) => (
                    <div
                    key={manga._id}
                    className="bg-gray-800 p-4 rounded-2xl shadow-lg relative"
                    >
                    <h3 className="text-xl font-semibold">{manga.title}</h3>
                    <p className="text-yellow-400">Precio: {manga.price}</p>
                    <p className="text-gray-400">Descripcion: {manga.description || "Sin descripción"}</p>
                    <div className="flex justify-end space-x-2 mt-4">
                        <button
                        className="flex items-center px-3 py-1 bg-indigo-600 text-white rounded-lg hover:bg-indigo-500"
                        onClick={() => handleEdit(manga._id)}
                        >
                            <PencilIcon className="h-5 w-5 mr-1" />
                            Editar
                        </button>
                        <button
                        className="flex items-center px-3 py-1 bg-red-600 text-white rounded-lg hover:bg-red-500"
                        onClick={() => handleDelete(manga._id)}
                        >
                                <TrashIcon className="h-5 w-5 mr-1" />
                                Eliminar
                        </button>
                    </div>
                    </div>
                ))
                ) : (
                    <p>No hay actividades disponibles.</p>
                )}
            </div>
        </div>
    )
}
export default MangasIndex
