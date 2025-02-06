function Bienvenida() {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="bg-black rounded-lg p-8 max-w-2xl text-center border border-gray-300">
                <div className="flex items-center justify-center gap-2 mb-4">
                    <h1 className="text-4xl font-extrabold text-indigo-600 drop-shadow-lg">
                        Bienvenidos a MangaKami
                    </h1>
                </div>

                <h3 className="text-lg text-gray-100">
                    En MangaKami, tu tienda definitiva para los mejores mangas. 
                    Descubre las últimas novedades, ediciones exclusivas y clásicos imperdibles en un solo lugar. 
                    Sumérgete en un mundo lleno de aventuras, fantasía y emoción con nuestras colecciones 
                    cuidadosamente seleccionadas para los verdaderos fanáticos del manga.
                </h3>
            </div>
        </div>
    );
}

export default Bienvenida;
