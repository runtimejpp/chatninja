import type { NextPage } from "next";
import Head from "next/head";


const Home: NextPage = () => {

    return (
        <>
            <Head>
                <title>About Page</title>
                <meta name="description" content="Generated by create-t3-app" />
                <link rel="icon" href="/n.png" />
            </Head>
            <main className="container rounded-md mx-auto flex min-h-screen flex-col items-center justify-center p-4">

                <h1 className=" text-5xl font-bold leading-normal text-blue-700 md:text-[5rem]">
                    About  <span className="text-purple-300 "> Panel</span>
                </h1>

            </main>
        </>
    )
}
export default Home;
