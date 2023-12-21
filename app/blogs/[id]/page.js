import { notFound } from "next/navigation";

export default function BlogPage({ params }) {
    const { id } = params;

    if (id === "3") {
        notFound();
    }

    return <div className="mt-6">The blog id is: {id}</div>;
}
