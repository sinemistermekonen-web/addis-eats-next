import Link from "next/link";

export default function CategoryBar({ categories, selectedCategory }) {
  return (
    <div>
      {categories.map((category) => (
        <Link
          key={category}
          href={
            category === "All"
              ? "/menu"
              : `/menu?category=${encodeURIComponent(category)}`
          }
          style={{ marginRight: "10px" }}
        >
          {category}
        </Link>
      ))}
    </div>
  );
}