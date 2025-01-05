import React from "react";
import Image from "next/image";

const Comments = () => {
  const clients = [
    {
      id: crypto.randomUUID(),
      href: "/assets/images/client-1.png",
      title: "clients",
      z: 0,
    },
    {
      id: crypto.randomUUID(),
      href: "/assets/images/client-3.png",
      title: "clients",
      z: 10,
    },
    {
      id: crypto.randomUUID(),
      href: "/assets/images/client-2.png",
      title: "clients",
      z: 20,
    },
    {
      id: crypto.randomUUID(),
      href: "/assets/images/client-2.png",
      title: "clients",
      z: 20,
    },
  ];
  return (
    <main className="grid grid-cols-2 max-sm:grid-cols-1 gap-5 items-center py-20 relative">
      <div className="w-3 h-3 bg-yellow-300 absolute rounded-sm top-40 right-20 -rotate-12"></div>
      <div className="relative">
        <div className="flex justify-center ">
          <Image
            src="/assets/images/cheif.png"
            alt="chief"
            width={550}
            height={550}
            loading="eager"
            priority
            className="aspect-auto"
          />
        </div>
        <div className="flex flex-col justify-center items-center absolute -bottom-20 right-0 bg-white p-5 rounded-xl shadow-xl">
          <article>
            <span className="text-xl font-semibold uppercase">
              Our reviewers
            </span>
          </article>
          <div className="flex mt-3 relative">
            {clients.map((client, index) => {
              return index === clients.length - 1 ? (
                <div
                  key={client.id}
                  className="rounded-full bg-primary text-white font-semibold flex justify-center items-center w-16 h-16 z-40"
                >
                  +12K
                </div>
              ) : (
                <Image
                  key={client.id}
                  src={client.href}
                  alt={client.title}
                  width={64}
                  height={64}
                  className={`object-contain relative z-${client.z}`}
                />
              );
            })}
          </div>
        </div>
      </div>

      <div className="flex flex-col items-start p-10">
        <span className="text-primary uppercase font-semibold tracking-wider">
          WHAT THEY SAY
        </span>
        <h2 className="text-black font-extrabold capitalize text-6xl max-sm:text-2xl my-3">
          What Our Customers Say About Us
        </h2>
        <p className="font-semibold text-muted-foreground">
          “Food Zero is the best. Besides the many and delicious meals, the
          service is also very good, especially in the very fast delivery. I
          highly recommend Food Zero to you”.
        </p>
        <div className="flex justify-center gap-3 my-8">
          <Image
            src="/assets/images/client-3.png"
            width={64}
            height={64}
            alt="client"
            className="shadow-2xl rounded-full"
          />
          <article>
            <h4 className="text-xl font-semibold capitalize">Theresa Jordan</h4>
            <span className="text-base font-semibold capitalize text-muted-foreground">
              Theresa Jordan
            </span>
          </article>
        </div>
      </div>
    </main>
  );
};

export default Comments;
