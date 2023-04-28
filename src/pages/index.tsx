import Head from "next/head";
import { Navbar, Hero, Testimonial, ProductOverview, Services, More } from "@/components";
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Navbar />
        <Hero />
        {/* <p style={{ position: 'relative', top: '5em' }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum blanditiis, libero, consectetur voluptas dolore consequatur beatae nisi sed earum vitae accusamus sint assumenda aliquam eveniet quo nostrum porro nobis! Eaque.</p> */}
        <ProductOverview />
        <Services />
        <Testimonial />
      </div>
    </>
  );
}
