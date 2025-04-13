import Link from 'next/link'
 
export default function Nav() {
    return(
    <>
    <div className="flex gap-4 bg-slate-950 h-12 items-center justify-center">
        <Link href="/" className='hover:underline'>Home</Link>
        <Link href="/graph" className='hover:underline'>Expensive crypto</Link>
    </div>
    </>
)
}