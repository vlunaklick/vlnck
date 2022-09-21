import type { NextPage } from "next";
import DivLayout from "../components/Layouts/DivLayout";
import MainLayout from "../components/Layouts/MainLayout";

import HomeInfo from "../components/HomePage/HomeInfo";
import Contact from "../components/HomePage/Contact";
import NormalLayout from "../components/Layouts/NormalLayout";

const Home: NextPage = () => {
  return (
    <DivLayout>
      <MainLayout>
        <NormalLayout>
          <HomeInfo />
          <Contact />
        </NormalLayout>
      </MainLayout>
    </DivLayout>
  );
};

export default Home;
