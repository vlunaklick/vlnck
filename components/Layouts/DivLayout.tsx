import Head from "next/head";

type Props = {
  children: React.ReactNode;
};

function DivLayout({ children }: Props) {
  return (
    <div className="dark:bg-[#080C24] bg-white w-full transition-colors">
      <Head>
        <title>Valentín Lunaklick</title>
        <meta name="description" content="Valentin Lunaklick's portfolio" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/logo192.png" />
        <meta name="theme-color" content="#000000" />
      </Head>

      {children}
    </div>
  );
}

export default DivLayout;
