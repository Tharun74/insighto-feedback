import { ButtonLogin } from "./ButttonLogin";
import Image from "next/image";
import ProductImage from "@/public/productDemo.png"
export const Hero = () => {
    return (
        <section className="py-20 px-8 max-w-5xl mx-auto text-center md:text-left flex flex-col-reverse gap-12 items-center md:flex-row">
            <Image src={ProductImage} alt="Product Image" className="w-96 rounded-2xl" />
            <div>
                <h1 className="text-3xl font-extrabold mb-6 lg:text-4xl">Collect customer feedback to build better products</h1>
                <div className="text-lg opacity-90 mb-8">Create feedback board in minutes, prioritize features, and
                    build products your customer will love.
                </div>
                <ButtonLogin />
            </div>
        </section>
    );
}