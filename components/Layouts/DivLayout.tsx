import Head from "next/head";

type Props = {
  children: React.ReactNode;
};

function DivLayout({ children }: Props) {
  return (
    <div className="dark:bg-slate-900 bg-slate-50 w-full transition-colors">
      <Head>
        <title>Valentín Lunaklick</title>
        <meta name="description" content="Valentin Lunaklick's portfolio" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/logo192.png" />
        <meta name="theme-color" content="#000000" />
        <script
          async
          defer
          data-website-id="d1111e7f-4e0d-4279-9d7f-7db04bc1c7b9"
          src="https://analytics-umami-production-1d9d.up.railway.app/umami.js"
        ></script>
      </Head>

      {children}
    </div>
  );
}

export default DivLayout;
