import styles from './Navigation.module.css';
import Link from 'next/link'

const LINKS = [
    {href: '/', text: 'Home', description: 'Go Back to home page'},
    {href: '/about', text: 'About', description: 'About MIRAI'},
    {href: '/goals', text: 'Goal', description: 'MIRAI goals'},
    {href: '/member', text: 'Member', description: 'How to become member'},
    
    
]
export default function Navigation(){
    return (<div className= {styles.grid}>    

        {LINKS.map(x => <NavigationLink key= {x.href} {...x} />)}
         </div>);
}

function NavigationLink({ text, href, description }){
    return(<Link href={href}
    className={styles.card}
    >
    <h2>
      {text} <span>-&gt;</span>
    </h2>
    <p>{description}</p>
  </Link>)
}