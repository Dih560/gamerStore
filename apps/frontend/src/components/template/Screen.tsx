import { ReactNode } from "react"
import Header from "./Header";
import Footer from "./Footer";

export interface ScreenProps {
    children: ReactNode;
    className?: string;
    hideHeader?: boolean;
    hideFooter?: boolean;
}

export default function Screen(props: ScreenProps) {
    return (
        <div
            className="flex flex-col min-h-screen"
            style={{background: 'radial-gradient(50% 50% at 50% 50%, #2d0064 0%, #0d001c 100%)'}}
        >
            <div
                className="flex-1 flex flex-col w-screen"
                style={{background: 'url("/background.png")'}}
            >
                {!props.hideHeader && <Header />}
                <main className={`flex-1 flex flex-col ${props.className ?? ''}`}>
                    {props.children}
                </main>
                {!props.hideFooter && <Footer />}
            </div>
        </div>
    )
}