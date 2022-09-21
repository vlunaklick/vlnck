import type { NextPage } from "next";
import DivLayout from "../components/Layouts/DivLayout";
import MainLayout from "../components/Layouts/MainLayout";
import Link from "next/link";
import NormalLayout from "../components/Layouts/NormalLayout";

const Custom404: NextPage = () => {
  return (
    <DivLayout>
      <MainLayout>
        <NormalLayout>
          <div className="mx-auto text-center font-bold">
            <p className="text-2xl">Page not found</p>
            <Link href="/">
              <a className="text-slate-400 text-sm text-center mx-auto underline">
                Home
              </a>
            </Link>
          </div>
        </NormalLayout>
      </MainLayout>
    </DivLayout>
  );
};

export default Custom404;
