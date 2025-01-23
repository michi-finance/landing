`use client`
import React, {useEffect, useState} from "react";
import Nav from "./navbar";
import Header from "./header";
import Footer from "./footer";
import App from "../../pages";

interface Props {
    children?: React.ReactNode;
}

const positions = [
    { x: 50, y: 20}, { x: 75, y: 30}, { x: 50, y: 90 },
    { x: 50, y: 70 }, { x: 50, y: 50 }
];

function generateGradient(index: number) {
    const pos = positions[index % positions.length];
    return `radial-gradient(15vw at ${pos.x}% ${pos.y}%, rgba(255, 168, 90, 0.10) 0%, rgba(255, 168, 90, 0.00) 100%)`;
}

const Layout: React.FC<Props> = ({children}) => {
    const [hasMounted, setHasMounted] = useState(false);
    const [backgroundStyle, setBackgroundStyle] = useState('');

    useEffect(() => {
        setHasMounted(true);
    }, []);

    useEffect(() => {
        const gradients = [];
        for (let i = 0; i < 4; i++) {
            gradients.push(generateGradient(i));
        }
        setBackgroundStyle(gradients.join(', '));
    }, []);


    if (!hasMounted) {
        return null;
    }
    return (
        <html lang='en' className='dark'>
            <body>
                <main className="min-h-[100vh] no-scrollbar"  style={{ background: backgroundStyle }}>
                    <Header />
                    <Nav />
                        <App />
                    <Footer />
                </main>
            </body>
        </html>
       
    );
};

export default Layout;
