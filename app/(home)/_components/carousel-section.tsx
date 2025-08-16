import CarouselImage from "@/app/(home)/_components/carousel-image";

const carouselData = [
  [
    {
      image:
        "https://images.unsplash.com/photo-1517502884422-41eaead166d4?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0",
      title: "MOST CLICKED",
      subtitle: "Urban Prime Plaza Premiere"
    },
    {
      image:
        "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0",
      title: "TRENDING",
      subtitle: "The Pinnacle of Luxury"
    }
  ],
  [
    {
      image:
        "https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.1.0",
      title: "POPULAR",
      subtitle: "City Lights Collection"
    },
    {
      image:
        "https://images.unsplash.com/photo-1554232456-8727aae0cfa4?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0",
      title: "NEW",
      subtitle: "Modern Living Spaces"
    }
  ],
  [
    {
      image:
        "https://images.unsplash.com/photo-1505691723518-36a0b33848d0?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.1.0",
      title: "FEATURE",
      subtitle: "Mountain Retreat"
    },
    {
      image:
        "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.1.0",
      title: "LIMITED",
      subtitle: "Coastal Escapes"
    }
  ]
];

const CarouselSection = () => {
  return (
    <section className="grid gap-4 lg:grid-cols-3">
      {carouselData.map((items, i) => (
        <CarouselImage key={i} items={items} />
      ))}
    </section>
  );
};

export default CarouselSection;
