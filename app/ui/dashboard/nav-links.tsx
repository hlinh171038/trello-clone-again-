import {
    UserGroupIcon,
    HomeIcon,
    DocumentDuplicateIcon,
  } from '@heroicons/react/24/outline';
import Link from 'next/link';

const links = [
    {
        icon: UserGroupIcon,
        name: "User",
        href:'/user'

    },
    {
        icon: HomeIcon,
        name: "Home",
        href:'/home'

    },
    {
        icon: DocumentDuplicateIcon,
        name: "Document",
        href:'/document'

    }
]

const NavLink = () =>{
    return (
        <div className='flex justify-center space-x-3 my-3 items-center  transition-all'>
            {links && links.map((item)=>{
                const LinkIcon = item.icon;
                return <Link
                            key={item.name}
                            href={item.href}
                            className='hover:text-neutral-200 cursor-pointer'
                        >
                            <LinkIcon className='w-6 h-6' />
                        </Link>
            })}
        </div>
    )
}

export default NavLink