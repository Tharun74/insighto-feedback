
export const Pricing = () => {
    return (
        <section className="bg-base-200">
            <div className="py-32 px-8 max-w-5xl mx-auto">
                <p className="text-primary uppercase font-medium text-center mb-2">Pricing</p>
                <h2 className="text-center text-3xl font-extrabold mb-8 lg:text-4xl">A Pricing that adopts to your needs</h2>
                <div className="bg-base-100 p-8 rounded-3xl max-w-96 mx-auto">
                    <div className="flex gap-1 items-baseline mb-8">
                        <p className="text-4xl font-black">$19</p>
                        <p className="text-lg opacity-60">/month</p>
                    </div>
                    <ul className="space-y-2">
                        {
                            [
                                "Collect customer feedbacks", "Unlimited boards", "Admin dashboard", "24/7 support"
                            ].map((listItem) => (
                                <li key={listItem} className="flex gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-green-500">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                    </svg>
                                    {listItem}</li>
                            ))
                        }
                    </ul>
                    <button className="btn btn-secondary w-full mt-8">Purchase</button>
                </div>
            </div>
        </section>
    );
}