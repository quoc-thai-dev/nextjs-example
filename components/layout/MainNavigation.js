import classes from './MainNavigation.module.css';
import Link from 'next/link';
import {usePathname} from "next/navigation";
function MainNavigation() {
  const pathName=  usePathname()
  return (
    <header className={classes.header}>
      <Link href='/' className={classes.logo}>React Meetups</Link>
      <nav>
        <ul>
          <li>
            <Link href='/' className={pathName==="/"?classes.active:""}>All Meetups</Link>
          </li>
          <li>
            <Link href='/new-meetup' className={pathName==="/new-meetup"?classes.active:""}>Add New Meetup</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
