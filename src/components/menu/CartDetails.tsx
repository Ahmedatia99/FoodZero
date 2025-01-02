import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { formatCurrency } from "@/lib/formatCurrency.ts";
import { Checkbox } from "@/components/ui/checkbox";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const CartDetails = ({ items , open }) => {


  const sizes = [
    {
      id: crypto.randomUUID(),
      name: "small",
      price: 2,
    },
    {
      id: crypto.randomUUID(),
      name: "medium",
      price: 4,
    },
    {
      id: crypto.randomUUID(),
      name: "large",
      price: 6,
    },
  ];

  const extra = [
    {
      id: crypto.randomUUID(),
      name: "tomato",
      price: 2,
    },
    {
      id: crypto.randomUUID(),
      name: "onion",
      price: 4,
    },
    {
      id: crypto.randomUUID(),
      name: "cheese",
      price: 6,
    },
  ];
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          type="button"
          size="lg"
          className="mt-4 text-white rounded-full !px-8"
        >
          Add to Cart
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] max-h-[100vh] overflow-y-auto">
        <DialogHeader className="flex items-center">
          <DialogTitle className="mb-5 text-primary">Order Now</DialogTitle>
          <Image src={items.img} alt={items.title} width={200} height={200} />
          <DialogDescription>{items.title}</DialogDescription>
          <DialogDescription>{items.description}</DialogDescription>
        </DialogHeader>
        <div className="flex gap-2 items-center justify-center">
          <PickSize sizes={sizes} items={items} />
          <AnyExtra extra={extra} items={items} />
        </div>
        <DialogFooter>
          <Button> save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CartDetails;

const PickSize = ({ sizes, items }) => {
  return (
    <RadioGroup defaultValue="small">
      <Label htmlFor="pick-size" className="text-lg text-primary font-bold">
        Pick your size
      </Label>
      {sizes.map((size) => (
        <div
          key={size.id}
          className="flex items-center space-x-2 border border-gray-100 rounded-md p-[18px]"
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value={size.id} id={size.id} />
            <Label htmlFor={size.name} className="uppercase font-semibold">
              {size.name}
              <span className="p-1 bg-primary text-white rounded-md font-bold text-xs ml-3">
                {formatCurrency(size.price + items.price)}
              </span>
            </Label>
          </div>
        </div>
      ))}
    </RadioGroup>
  );
};
const AnyExtra = ({ extra, items }) => {
  return (
    <div className="grid gap-2">
      <Label htmlFor="pick-size" className="text-lg text-primary font-bold">
        Add Extras
      </Label>
      {extra.map((taste) => (
        <div
          key={taste.id}
          className="flex items-center space-x-2 border border-gray-100 rounded-md p-4"
        >
          <Checkbox id={taste.id} />
          <label htmlFor={taste.id} className="uppercase font-semibold text-sm">
            {taste.name}{" "}
            <span className="p-1 bg-primary text-white rounded-md font-bold text-xs ml-3 ">
              {formatCurrency(taste.price + items.price)}
            </span>
          </label>
        </div>
      ))}
    </div>
  );
};
