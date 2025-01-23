import Link from 'next/link';

const Navigation = () => {
    return (
        <nav className="bg-blue-500 w-full">
        <div className="flex flex-row justify-between text-white max-w-screen-2xl mx-auto py-2">
          <h4 className="font-bold underline bg-gray-100 text-black p-2 rounded-full">Alpha-Omega</h4>

            <ul className='flex flex-row gap-2'>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/problemset">Problemas</Link></li>
            </ul>
            <div>
                Profile
            </div>
   
        </div>
        </nav>

    );
}

export default Navigation