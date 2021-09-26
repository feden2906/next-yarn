import Link from "next/link";
import Head from "next/head";

export function MainLayout({ children, title = 'Next' }) {
  return (
    <>
      <Head>
        <title>{title} | Next</title>
        <meta name={'keywords'} content={'next, yarn'}/>
        <meta name={'description'} content={'next project'}/>
        <meta charSet={'utf-8'}/>
      </Head>

      <div className={'container'}>
        <nav>
          <div className={'logo'}>
            <img src={'/logo.png'} alt={'logo'}/>
          </div>

          <div className={'navigator'}>
            <Link href={'/'}>Home</Link>
            <Link href={'/about'}>About</Link>
          </div>
        </nav>

        <main>
          {children}
        </main>
      </div>
    </>
  )
}
