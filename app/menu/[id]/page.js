import Link from "next/link";
import { notFound } from "next/navigation";

const dishes = [
  {
    id: "1",
    name: "Doro Wot",
    category: "Main Dish",
    description: "Spicy Ethiopian chicken stew served with injera.",
    price: 280,
  },
  {
    id: "2",
    name: "Tibs",
    category: "Main Dish",
    description: "Tender pieces of beef sautéed with onions and peppers.",
    price: 320,
  },
  {
    id: "3",
    name: "Kitfo",
    category: "Main Dish",
    description: "Traditional minced beef dish seasoned with Ethiopian spices.",
    price: 350,
  },
  {
    id: "4",
    name: "Firfir",
    category: "Breakfast",
    description: "Shredded injera mixed with berbere and seasoned butter.",
    price: 180,
  },
  {
    id: "5",
    name: "Buna",
    category: "Drinks",
    description: "Traditional Ethiopian coffee.",
    price: 80,
  },
];

export default async function DishPage({ params }) {
  const { id } = await params;

  const dish = dishes.find((dish) => dish.id === id);

  if (!dish) {
    notFound();
  }

  return (
    <main>
      <h1>{dish.name}</h1>

      <p>{dish.description}</p>

      <p>Category: {dish.category}</p>

      <p>Price: {dish.price} ETB</p>

      <nav>
        <Link href="/menu">← Back to Menu</Link>{" | "}
        <Link href="/cart">Cart</Link>{" | "}
        <Link href="/checkout">Checkout</Link>
      </nav>
    </main>
  );
}