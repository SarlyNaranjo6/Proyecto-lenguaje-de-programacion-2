import { Manga } from "../interfaces/mangas.interface";

const API = "http://localhost:3000/api";

export const createMangaRequest = (manga: Manga) =>
    fetch(`${API}/mangas`, {
        method: "POST",
        body: JSON.stringify(manga),
        headers: {
            "Content-Type": "application/json",
        },
    });

export const getMangaRequest = () =>
    fetch(`${API}/mangas`);

export const deleteMangaRequest = (id: string) =>
    fetch(`${API}/mangas/${id}`, {
        method: "DELETE",
    });

export const updateMangaRequest = (id: string, manga: Manga) =>
    fetch(`${API}/mangas/${id}`, {
        method: "PUT",
        body: JSON.stringify(manga),
        headers: {
            "Content-Type": "application/json",
        },
    });