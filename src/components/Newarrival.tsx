const products = [
  {
    id: 1,
    name: "Classic Denim Jacket",
    category: "Men",
    image:
      "https://imgs.search.brave.com/AgX8INDP_0bBPQflplZj7VSV42LMhOdEn4BD44RC78s/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi95b3Vu/Zy1tYWxlLWRlbmlt/LWphY2tldC0xNTMx/NjMxLmpwZw",
    price: "₹2,499",
  },
  {
    id: 2,
    name: "Floral Summer Dress",
    category: "Women",
    image:
      "https://imgs.search.brave.com/lDSqIg8O4EGosQz4KVDgLVQhU_nQk8IJfx_MFsmjf0Y/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/c2hvcGlmeS5jb20v/cy9maWxlcy8xLzA0/MDgvNDU4My82NDUz/L2ZpbGVzL0hvd190/b19zdHlsZV9mbG9y/YWxfZHJlc3NfZm9y/X3N1bW1lcnMuanBn/P3Y9MTc0NTI5ODk0/Nw",
    price: "₹1,899",
  },
  {
    id: 3,
    name: "Cool Kid Hoodie",
    category: "Kids",
    image:
      "https://imgs.search.brave.com/VVx5wimG8nbsPkMf0CTSuIxG_TZ1SjBUse7jPFuPk78/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLmV0/c3lzdGF0aWMuY29t/LzQ2OTk2ODQ2L2Mv/MTE5MC8xMTkwLzEy/MC8xODkvaWwvYWJk/ZGM0LzU1MTYyMjYy/MjMvaWxfNjAweDYw/MC41NTE2MjI2MjIz/X2ppam4uanBn",
    price: "₹1,299",
  },
  {
    id: 4,
    name: "Unisex Cotton Tee",
    category: "Unisex",
    image:
      "https://imgs.search.brave.com/AjQHa671Tq_0IguRrRB8KkvYJJbMc7yvkzy55UgAi8A/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9hbGxt/YWRlLmNvbS9jZG4v/c2hvcC9maWxlcy91/bmlzZXgtaGVhdnl3/ZWlnaHQtcmVjeWNs/ZWQtY290dG9uLXRl/ZS0yNjgyNDVfOTAw/eC5qcGc_dj0xNzE0/NDExMDU1",
    price: "₹799",
  },
];

export default function Newarrival() {
  return (
    <div className="min-h-screen bg-white px-6 py-12 md:px-12">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">New Arrivals</h1>
        <p className="text-gray-500 mb-8">
          Check out the latest trends, just dropped!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="rounded-2xl shadow-md hover:shadow-lg transition duration-300"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover rounded-t-2xl"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-700">
                  {product.name}
                </h2>
                <p className="text-sm text-gray-500">{product.category}</p>
                <p className="text-green-600 font-bold mt-2">{product.price}</p>
                <button className="mt-4 w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
