import styles from './Fotter.module.css';
import Link from 'next/link'

const LINKS = [
    
    {href: '/vilkor', text: 'Vilkor'},
    {href: '/servic', text: 'Kund Service'},    
    {href: '/help', text: 'Help'},
    {href: '/contact', text: 'Contact us'},
    
]
export default function Fotter(){
    return (<div className= {styles.grid}>    

        {LINKS.map(x => <FotterLink key= {x.href} {...x} />)}
         </div>);
}

function FotterLink({ text, href }){
    return(<Link href={href}
    className={styles.card}
    >
    <h2>
      {text} <span>-&gt;</span>
    </h2>
    
  </Link>)
}