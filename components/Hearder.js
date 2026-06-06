import { ButtonLogin } from "./ButttonLogin";

export const Header = () => {
    return (
        <section className="bg-base-300">
            <div className="max-w-5xl mx-auto px-8 py-4 flex justify-between items-center">
                <div className="font-bold text-lg">Insighto.</div>
                <div className="space-x-4 max-md:hidden">
                    <a className="link link-hover" href="#pricing">Pricing</a>
                    <a className="link link-hover" href="#faq">FAQ</a>
                </div>
                <ButtonLogin/>
            </div>
        </section>
    );
}