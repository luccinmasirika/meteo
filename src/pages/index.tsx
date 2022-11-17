import Header from "@/components/header/Header";
import Search from "@/components/search/Search";
import Town from "@/components/town/Town";
import Head from "next/head";

const Home = () => {
  return (
    <>
      <Head>
        <title>Météo App</title>
        <meta name="description" content="React test - Météo app" />
      </Head>
      <Header />
      <Search />
      <Town />
    </>
  );
};

export default Home;
