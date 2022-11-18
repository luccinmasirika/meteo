import Header from "@/components/header/Header";
import Search from "@/components/search/Search";
import Town from "@/components/town/Town";
import Head from "next/head";
import { Container } from "@/layouts/Container";

const Home = () => {
  return (
    <Container>
      <Head>
        <title>Météo App</title>
        <meta name="description" content="React test - Météo app" />
      </Head>
      <Header />
      <Search />
      <Town />
    </Container>
  );
};

export default Home;
