import type {AppProps} from "next/app";
import "../styles/globals.scss";
import {NextUIProvider} from "@nextui-org/react";
import {Analytics} from "@vercel/analytics/react";
import Layout from "../components/layout/layout";

function MyApp({Component, pageProps}: AppProps) {

    return (
        <Layout>
            <NextUIProvider>
                <Component {...pageProps} />
                <Analytics/>
            </NextUIProvider>
        </Layout>
    );
}

export default MyApp;
