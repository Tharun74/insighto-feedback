import { ButtonLogin } from "./ButttonLogin";

export const Hero = () => {
    return (
        <section className="text-center py-32 px-8 max-w-5xl mx-auto">
            <h1 className="text-4xl font-extrabold mb-6 lg:text-5xl">Collect customer feedback to build better products</h1>
            <div className="text-lg opacity-90 mb-10">Create feedback board in minutes, prioritize features, and
                build products your customer will love.
            </div>
            <ButtonLogin />
        </section>
    );
}