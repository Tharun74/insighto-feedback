import { ListItemFAQ } from "./ListItemFAQ";

export const FAQ = () => {
    return (
        <section className="py-20 px-8 max-w-5xl mx-auto" id="faq">
            <p className="text-primary uppercase font-medium mb-2">FAQ</p>
            <h2 className="text-3xl font-extrabold mb-8 lg:text-4xl">Frequently asked questions</h2>
            {
                [
                    { question : "Why do I need Insighto?", answer : "Create feedback board in minutes, prioritize features, and build products your customer will love." },
                    { question : "Do I have to use Stripe?", answer : "Yes"},
                    { question : "Does it work for one-time purchases?", answer : "Yes! It's made for one-time purchases, to avoid paying 0.4% in Stripe fee (or up to $2 per invoice)."},
                    { question : "Is it secure?", answer : "Yes. We use restricted API keys to access your Stripe account using the minimum required data to generate invoices."}
                ].map((qa) => (
                    <ListItemFAQ key={qa.question} qa={qa}/>
                ))
            }
        </section>
    );
}