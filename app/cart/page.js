import Link from "next/link";

export default function CartPage() {
  const cartItems = [
    {
      id: "1",
      name: "Doro Wot",
      price: 280,
      quantity: 1,
    },
    {
      id: "5",
      name: "Buna",
      price: 80,
      quantity: 2,
    },
  ];

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <main>
      <h1>Your Cart</h1>

      <nav>
        <Link href="/">Home</Link>{" | "}
        <Link href="/menu">Menu</Link>{" | "}
        <Link href="/checkout">Checkout</Link>
      </nav>

      <hr />

      {cartItems.map((item) => (
        <article key={item.id}>
          <h2>{item.name}</h2>

          <p>Price: {item.price} ETB</p>

          <p>Quantity: {item.quantity}</p>

          <p>
            Subtotal: {item.price * item.quantity} ETB
          </p>
        </article>
      ))}

      <hr />

      <h2>Total: {total} ETB</h2>

      <Link href="/checkout">Proceed to Checkout</Link>
    </main>
  );
}