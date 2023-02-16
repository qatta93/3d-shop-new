import React from 'react'
import Link from 'next/link';
import { useRouter } from 'next/router';

const NavLink = ({href, children, ...props}) => {

  const router = useRouter();
  const isActive = router.pathname === href;
  const className = isActive ? 'linkNav-active' : 'linkNav'

  return(
    <Link href={href}>
      <a {...props} className={className}>
        {children}
      </a>
    </Link>
  );
}

export default NavLink;