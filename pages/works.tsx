import type { NextPage } from "next";
import DivLayout from "../components/Layouts/DivLayout";
import MainLayout from "../components/Layouts/MainLayout";

import WorksSection from "../components/WorksPage/WorksSection";
import NormalLayout from "../components/Layouts/NormalLayout";

const Works: NextPage = () => {
  return (
    <DivLayout>
      <MainLayout>
        <NormalLayout>
          <WorksSection />
        </NormalLayout>
      </MainLayout>
    </DivLayout>
  );
};

export default Works;
