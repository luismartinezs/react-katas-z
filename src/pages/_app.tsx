import { type AppType } from "next/dist/shared/lib/utils";
import { PageLayout } from "~/layouts/PageLayout";
import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <PageLayout>
      <Component {...pageProps} />
    </PageLayout>
  );
};

export default MyApp;
