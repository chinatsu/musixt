import { pickRandomColor } from "@/app/utils"

export default function GenreCard({ name, title }: { name: string, title: string }) {
    const color = pickRandomColor(name);
    return (
        <span className={`${color.bg} border ${color.border} p-0.5 rounded`}>
            <a className="text-black no-underline" href={`/genre/${name}`}>{title}</a>
        </span>
    )
}