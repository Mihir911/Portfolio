import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{if(localStorage.getItem('mj-intro-seen')==='1'){var s=document.createElement('style');s.id='intro-seen-style';s.textContent='.intro{display:none!important}.site main{opacity:1!important;transform:none!important}';document.head.appendChild(s)}}catch(e){}",
          }}
        />
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important}.intro{display:none!important}.site main{opacity:1!important;transform:none!important}`}</style>
        </noscript>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
