import { Link, Tag } from "@navikt/ds-react";

export default function GenreCard({ name, title }: { name: string, title: string}) {
    return (
        <Tag variant="neutral"><Link href={`/genre/${name}`}>{title}</Link></Tag>
    )
}