import Link from 'next/link'
 
export default function Footer() {
    return(
    <>
    <div className="flex flex-col gap-4 bg-slate-950 h-12 items-center justify-center">
        <div className='flex gap-4'>
            <Link href="/" className='hover:underline'>Home</Link>
            <Link href="/graph" className='hover:underline'>Expensive crypto</Link>
        </div>
    </div>
    </>
)
}