import Link from "next/link";

export default function Blogs() {
    const blogs = [
        {
            id: 1,
            title: "Blog 1",
            description: "Blog 1 description",
        },
        {
            id: 2,
            title: "Blog 2",
            description: "Blog 2 description",
        },
    ];

    return (
        <main className="mt-10">
            <ul>
                {blogs.map((blog) => (
                    <li className="mb-5" key={blog.id}>
                        <Link href={`/blogs/${blog.id}`}>{blog.title}</Link>
                    </li>
                ))}
            </ul>
        </main>
    );
}
