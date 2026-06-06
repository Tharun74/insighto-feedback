import { ButtonLogin } from "./ButttonLogin";

export const Header = () => {
    return (
        <section className="bg-base-300">
            <div className="max-w-3xl mx-auto px-8 py-4 flex justify-between items-center">
                <div className="font-bold text-lg">Insighto.</div>
                <div className="space-x-4">
                    <a className="link link-hover">Pricing</a>
                    <a className="link link-hover">FAQ</a>
                </div>
                <ButtonLogin/>
            </div>
        </section>
    );
}