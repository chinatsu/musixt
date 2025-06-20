const cyrb128 = (seed: string): [number, number, number, number] => {
    let h1 = 1779033703, h2 = 3144134277,
        h3 = 1013904242, h4 = 2773480762;
    for (let i = 0, k; i < seed.length; i++) {
        k = seed.charCodeAt(i);
        h1 = h2 ^ Math.imul(h1 ^ k, 597399067);
        h2 = h3 ^ Math.imul(h2 ^ k, 2869860233);
        h3 = h4 ^ Math.imul(h3 ^ k, 951274213);
        h4 = h1 ^ Math.imul(h4 ^ k, 2716044179);
    }
    h1 = Math.imul(h3 ^ (h1 >>> 18), 597399067);
    h2 = Math.imul(h4 ^ (h2 >>> 22), 2869860233);
    h3 = Math.imul(h1 ^ (h3 >>> 17), 951274213);
    h4 = Math.imul(h2 ^ (h4 >>> 19), 2716044179);
    h1 ^= (h2 ^ h3 ^ h4), h2 ^= h1, h3 ^= h1, h4 ^= h1;
    return [h1 >>> 0, h2 >>> 0, h3 >>> 0, h4 >>> 0];
}

const xoshiro128ss = (seed: string) => {
    let [a, b, c, d] = cyrb128(seed)
    let t = b << 9, r = b * 5;
    r = (r << 7 | r >>> 25) * 9;
    c ^= a;
    d ^= b;
    b ^= c;
    a ^= d;
    c ^= t;
    d = d << 11 | d >>> 21;
    return (r >>> 0) / 4294967296;

}

interface ColorSet {
    bg: string,
    border: string
}


export const pickRandomColor = (seed: string): ColorSet => {
    const colors: ColorSet[] = [
        { bg: "bg-red-100", border: "border-red-400" },
        { bg: "bg-orange-100", border: "border-orange-400" },
        { bg: "bg-amber-100", border: "border-amber-400" },
        { bg: "bg-yellow-100", border: "border-yellow-400" },
        { bg: "bg-lime-100", border: "border-lime-400" },
        { bg: "bg-green-100", border: "border-green-400" },
        { bg: "bg-emerald-100", border: "border-emerald-400" },
        { bg: "bg-teal-100", border: "border-teal-400" },
        { bg: "bg-cyan-100", border: "border-cyan-400" },
        { bg: "bg-sky-100", border: "border-sky-400" },
        { bg: "bg-blue-100", border: "border-blue-400" },
        { bg: "bg-indigo-100", border: "border-indigo-400" },
        { bg: "bg-violet-100", border: "border-violet-400" },
        { bg: "bg-purple-100", border: "border-purple-400" },
        { bg: "bg-fuchsia-100", border: "border-fuchsia-400" },
        { bg: "bg-pink-100", border: "border-pink-400" },
        { bg: "bg-rose-100", border: "border-rose-400" },
        { bg: "bg-slate-100", border: "border-slate-400" },
        { bg: "bg-gray-100", border: "border-gray-400" },
        { bg: "bg-zinc-100", border: "border-zinc-400" },
        { bg: "bg-neutral-100", border: "border-neutral-400" },
        { bg: "bg-stone-100", border: "border-stone-400" },
        { bg: "bg-red-200", border: "border-red-400" },
        { bg: "bg-orange-200", border: "border-orange-400" },
        { bg: "bg-amber-200", border: "border-amber-400" },
        { bg: "bg-yellow-200", border: "border-yellow-400" },
        { bg: "bg-lime-200", border: "border-lime-400" },
        { bg: "bg-green-200", border: "border-green-400" },
        { bg: "bg-emerald-200", border: "border-emerald-400" },
        { bg: "bg-teal-200", border: "border-teal-400" },
        { bg: "bg-cyan-200", border: "border-cyan-400" },
        { bg: "bg-sky-200", border: "border-sky-400" },
        { bg: "bg-blue-200", border: "border-blue-400" },
        { bg: "bg-indigo-200", border: "border-indigo-400" },
        { bg: "bg-violet-200", border: "border-violet-400" },
        { bg: "bg-purple-200", border: "border-purple-400" },
        { bg: "bg-fuchsia-200", border: "border-fuchsia-400" },
        { bg: "bg-pink-200", border: "border-pink-400" },
        { bg: "bg-rose-200", border: "border-rose-400" },
        { bg: "bg-slate-200", border: "border-slate-400" },
        { bg: "bg-gray-200", border: "border-gray-400" },
        { bg: "bg-zinc-200", border: "border-zinc-400" },
        { bg: "bg-neutral-200", border: "border-neutral-400" },
        { bg: "bg-stone-200", border: "border-stone-400" },
        { bg: "bg-red-200", border: "border-red-400" },
        { bg: "bg-orange-300", border: "border-orange-400" },
        { bg: "bg-amber-300", border: "border-amber-400" },
        { bg: "bg-yellow-300", border: "border-yellow-400" },
        { bg: "bg-lime-300", border: "border-lime-400" },
        { bg: "bg-green-300", border: "border-green-400" },
        { bg: "bg-emerald-300", border: "border-emerald-400" },
        { bg: "bg-teal-300", border: "border-teal-400" },
        { bg: "bg-cyan-300", border: "border-cyan-400" },
        { bg: "bg-sky-300", border: "border-sky-400" },
        { bg: "bg-blue-300", border: "border-blue-400" },
        { bg: "bg-indigo-300", border: "border-indigo-400" },
        { bg: "bg-violet-300", border: "border-violet-400" },
        { bg: "bg-purple-300", border: "border-purple-400" },
        { bg: "bg-fuchsia-300", border: "border-fuchsia-400" },
        { bg: "bg-pink-300", border: "border-pink-400" },
        { bg: "bg-rose-300", border: "border-rose-400" },
        { bg: "bg-slate-300", border: "border-slate-400" },
        { bg: "bg-gray-300", border: "border-gray-400" },
        { bg: "bg-zinc-300", border: "border-zinc-400" },
        { bg: "bg-neutral-300", border: "border-neutral-400" },
        { bg: "bg-stone-300", border: "border-stone-400" }
    ]

    return colors[Math.floor(xoshiro128ss(seed) * colors.length)]
}