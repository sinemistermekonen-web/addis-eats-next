import Link from "next/link";
import CategoryBar from "./categoryBar";
import DishList from "./DishList";

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

export default async function MenuPage({ searchParams }) {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const params = await searchParams;
  const selectedCategory = params?.category || "All";

  const categories = [
    "All",
    ...new Set(dishes.map((dish) => dish.category)),
  ];

  const filteredDishes =
    selectedCategory === "All"
      ? dishes
      : dishes.filter((dish) => dish.category === selectedCategory);

  return (
    <main>
      <h1>Addis Eats Menu</h1>

      <p>Choose from our Ethiopian favorites.</p>

      <nav>
        <Link href="/">Home</Link>{" | "}
        <Link href="/cart">Cart</Link>{" | "}
        <Link href="/checkout">Checkout</Link>
      </nav>

      <hr />

      <CategoryBar
        categories={categories}
        selectedCategory={selectedCategory}
      />

      <hr />

      <DishList dishes={filteredDishes} />
    </main>
  );
}
