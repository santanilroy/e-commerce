import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

import { Button } from "./ui/button";

function Product() {
  const categories = {
    male: [
      {
        id: 1,
        name: "T-shirt Halfsleeve",
        price: "₹400",
        image:
          "https://imgs.search.brave.com/1Wdq99otTGzGjPdntFpcigSBmWwDdHtnv6blIQi8oKg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuYXNrZXQuY29t/L3BpbS1pbWFnZXMv/YXNrZXRfdGVlLW1h/LWJ1cl90aHVtYm5h/aWwuanBn",
      },
      {
        id: 2,
        name: "Hoodie",
        price: "₹860",
        image:
          "https://imgs.search.brave.com/AUMJtnlHPEZYgaf9Clob0M2AglHtPKf5Nt9V3Kep2Rk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cGFjc3VuLmNvbS9k/dy9pbWFnZS92Mi9B/QUpFX1BSRC9vbi9k/ZW1hbmR3YXJlLnN0/YXRpYy8tL1NpdGVz/LXBhY3N1bl9zdG9y/ZWZyb250X2NhdGFs/b2cvZGVmYXVsdC9k/dzQyNzdkZWMwL3By/b2R1Y3RfaW1hZ2Vz/LzAxOTA2MDMyNjAw/NDlORVdfMDBfMDIw/LmpwZz9zdz0zMDA",
      },
      {
        id: 3,
        name: "Blck-Hoddie",
        price: "₹999",
        image:
          "https://media.istockphoto.com/id/1181269692/photo/portrait-of-a-young-bearded-man-with-a-black-hat-ain-black-hoodie-in-the-city.jpg?s=612x612&w=0&k=20&c=uqJy74darM6gCceWNezfE3H4F_oKce9KFhA5SNTLhgQ=",
      },
      {
        id: 4,
        name: "Mens-Shirt",
        price: "₹599",
        image:
          "https://imgs.search.brave.com/Z-WpjBt3GQl8VaEko5Q_UR7mgxBgFU2aAg8zAkuk5H0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvYTAw/MjItMDAwMTAzYS9w/aG90by93aGl0ZS1z/aGlydC1vbi1jbG9z/ZXQtZG9vci5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9N1JT/LS1SeU9oTm1Qc2hz/bzBTdzJtRjBUMFIy/N1B4eElSaE5Oam1p/VTZiOD0",
      },
    ],

    female: [
      {
        id: 5,
        name: "Outdoor-T-Shirt",
        price: "₹469",
        image:
          "https://imgs.search.brave.com/xjA5wkIIPOnjGyLmDWO6xIBLrg_rC-uS-xJOyJ8PQGQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzEzLzA5LzU3Lzkw/LzM2MF9GXzEzMDk1/NzkwMzBfaGdreW5s/TllEbms5VXhaWWxs/TTlVZ0IzdzJuSGYw/VkIuanBn",
      },
      {
        id: 6,
        name: "Terry Relaxed Hoodie",
        price: "₹1290",
        image:
          "https://imgs.search.brave.com/nuja_IouOFsTQ3501uMSEFYehYwWpWhfPqAffo90xB0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMudGhlbm9ydGhm/YWNlLmNvbS9pbWFn/ZXMvdF9pbWcvZl9h/dXRvLGhfNDAwLHdf/MzQ0LGVfdW5zaGFy/cF9tYXNrOjE1MC9k/cHJfMi4wL3YxNzMz/NDQyNzczL05GMEE4/QzJEM1g0LUhFUk8v/V29tZW5zLVRlcnJ5/LVJlbGF4ZWQtSG9v/ZGllLnBuZw",
      },
      {
        id: 7,
        name: "Bell Sleeve",
        price: "₹1699",
        image:
          "https://imgs.search.brave.com/ipwCvzNRXxfKri17S1hAlYluc-YpEbL_Dls6wJY65X8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9kcmVz/c2Jhcm4uY29tL2Nk/bi9zaG9wL2ZpbGVz/L3NhcmEtbWljaGVs/bGUtMzQtYmVsbC1z/bGVldmUtMi1mZXIt/ZHJlc3MtYW5kLW5l/Y2tsYWNlLTIwNTA1/OS5qcGc_Y3JvcD1j/ZW50ZXImaGVpZ2h0/PTE5MTEmdj0xNzQx/Mjc1NDMzJndpZHRo/PTEzNjU",
      },
      {
        id: 8,
        name: "Summer Dress",
        price: "₹699",
        image:
          "https://imgs.search.brave.com/dl46MKvHYdcquQ5Xw5W-zN-7-RBP46gnvnBIZZY4I8U/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NTF1S0dnV215dkwu/anBn",
      },
    ],
  };

  return (
    <>
      <section className="max-w-[1500px] m-auto my-10">
        <div className="p-5 border-b-1 border-zinc-200 w-full my-5">
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select a Categories" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Categories</SelectLabel>
                <SelectItem value="male">Male</SelectItem>
                <SelectItem value="female">Female</SelectItem>
                <SelectItem value="new">New</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div className="py-5 bg-white">
          {Object.entries(categories).map(([key, product]) => (
            <div className="max-w-6xl mx-auto px-4" key={key}>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {product.map((product) => (
                  <div
                    key={product.id}
                    className="bg-gray-50 rounded-xl overflow-hidden my-5 shadow-sm hover:shadow-md transition hover:scale-110 duration-200 cursor-pointer"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-64 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="text-lg font-semibold mb-1">
                        {product.name}
                      </h3>
                      <p className="text-gray-700 mb-2">{product.price}</p>
                      <Button variant="outline" className="w-full">
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Product;
