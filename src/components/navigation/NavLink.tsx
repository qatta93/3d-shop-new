import React from 'react'
import Link from 'next/link';
import { useRouter } from 'next/router';

const NavLink = ({href, children, ...props}) => {

  const router = useRouter();
  const isActive = router.pathname === href && router.pathname !== '/cart';
  const className = isActive ? 'linkNav-active' : 'linkNav'

  return(
    <Link href={href}>
      <p {...props} className={className}>
        {children}
      </p>
    </Link>
  );
}

export default NavLink;