import { Button } from "./ui/button";
import { Truck, ShieldCheck, Leaf, CreditCard } from "lucide-react";
import Product from "./Product";
import { Link } from "react-router";

function Hero() {
  const features = [
    {
      icon: <Truck className="h-6 w-6 text-primary" />,
      title: "Free Shipping",
      description: "Enjoy free delivery on all orders over $50.",
    },
    {
      icon: <ShieldCheck className="h-6 w-6 text-primary" />,
      title: "Secure Checkout",
      description: "Your payments are safe with industry-standard encryption.",
    },
    {
      icon: <Leaf className="h-6 w-6 text-primary" />,
      title: "Eco-Friendly Fashion",
      description: "Sustainable materials and ethical production.",
    },
    {
      icon: <CreditCard className="h-6 w-6 text-primary" />,
      title: "Easy Returns",
      description: "Not satisfied? Get hassle-free 7-day returns.",
    },
  ];
  return (
    <>
      <section className="md:max-w-[1500px] min-w-[450px] h-[680px] m-auto my-5 bg-[url(https://images.pexels.com/photos/432059/pexels-photo-432059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)] rounded-3xl bg-cover">
        <div className="p-10 selection:bg-bg-green-300 selection:text-bg-green-700">
          <h1 className="text-white text-6xl poppins-bold tracking-tight ">
            Elevate Your Style This Season
          </h1>
          <p className="text-white text-2xl font-semibold my-10">
            Discover trending fashion and exclusive collections — crafted just
            for you.
          </p>
          <div className="flex gap-10 my-30">
            <Button
              size={"lg"}
              className="hover:bg-gray-200 hover:text-black transition duration-300 ease-out cursor-pointer"
            >
              <Link to="/shop">Shop now</Link>
            </Button>
            <Button size={"lg"} variant={"outline"} className="cursor-pointer">
              Explore collections
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
            Why Shop With Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center bg-white p-6 rounded-2xl shadow hover:shadow-md transition"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Product />
    </>
  );
}

export default Hero;
