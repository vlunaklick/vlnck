import type { NextPage } from "next";
import DivLayout from "../components/Layouts/DivLayout";
import MainLayout from "../components/Layouts/MainLayout";
import NormalLayout from "../components/Layouts/NormalLayout";
import ExpSection from "../components/ExperiencePage/ExpSection";

const Exp: NextPage = () => {
  return (
    <DivLayout>
      <MainLayout>
        <NormalLayout>
          <ExpSection />
        </NormalLayout>
      </MainLayout>
    </DivLayout>
  );
};

export default Exp;
