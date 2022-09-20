import React from "react";

type Props = {};

function Home_Info({}: Props) {
  return (
    <section className="px-4 flex flex-col gap-4 text-xs sm:text-sm leading-6">
      <div className="flex flex-col">
        <p>Welcome to my portfolio! 👏</p>
        <p>
          I am Valentín, a Fullstack developer oriented in Frontend from Buenos
          Aires, Argentina.
        </p>
      </div>
      <p>
        My favorite tech stack is JavaScript, React/Next.js, Express with Prisma
        and PostgreSQL.
      </p>
      <p>
        Currently, I am studying a “Bachelor in Information” Systems, at
        Universidad del Salvador, and working at CryptoMate, a Web3
        infrastructure service provider.
      </p>
      <p>
        Moreover, in frontend I can use frameworks as styled-components and I
        can design with Figma and Photoshop.
      </p>
      <p>
        In the backend side, I can also work in Java with SpringBoot, Golang and
        with MongoDB or Firebase.
      </p>
    </section>
  );
}

export default Home_Info;
