import { pickRandomColor } from "@/app/utils"

export default function GenreCard({ id, title }: { id: string, title: string }) {
    const color = pickRandomColor(id);
    return (
        <span className={`${color.bg} border ${color.border} p-0.5 rounded`}>
            <a className="text-black no-underline" href={`/genre/${id}`}>{title}</a>
        </span>
    )
}