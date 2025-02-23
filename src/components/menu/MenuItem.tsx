import Image from "next/image";
import { formatCurrency } from "@/lib/formatCurrency";
import CartDetails from "./CartDetails";

interface Product {
  img: string;
  title: string;
  description: string;
  price: number;
}

interface MenuItemProps {
  item: Product;
}

const MenuItem = ({ item }: MenuItemProps) => {
  return (
    <li className="flex flex-col bg-card p-10 rounded-xl">
      {/* Image container with relative positioning */}
      <div className="relative w-48 h-48 mx-auto mb-5">
        <Image
          src={item.img}
          alt={item.title}
          fill
          className="object-cover rounded-lg"
        />
      </div>
      <div className="flex justify-between items-center w-full">
        <h1 className="text-2xl font-bold">{item.title}</h1>
        <span className="text-gray-500 font-bold text-base">
          {formatCurrency(item.price)}
        </span>
      </div>
      <p className="pt-8 text-center font-bold text-primary">
        {item.description}
      </p>
      <CartDetails items={item} />
    </li>
  );
};

export default MenuItem;