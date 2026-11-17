import Link from 'next/link';
import {notFound} from 'next/navigation';
import Experience from '../../../components/Experience';
export function generateStaticParams(){return [{locale:'en'},{locale:'es'}];}
export default async function Morning({params}:{params:Promise<{locale:string}>}){const {locale}=await params;if(locale!=='en'&&locale!=='es')notFound();return <main><header className="wrap header"><Link className="logo" href={`/${locale}`}>devos<span>.</span></Link><Link className="lang" href={locale==='en'?'/es/morning':'/en/morning'}>{locale==='en'?'Español':'English'}</Link></header><div className="wrap experienceWrap"><Link className="backLink" href={`/${locale}`}>← {locale==='en'?'Back to home':'Volver al inicio'}</Link><Experience locale={locale} kind="morning"/></div><footer className="wrap footer"><span className="logo">devos<span>.</span></span><p>Little moments. Lifelong faith.</p></footer></main>;}
