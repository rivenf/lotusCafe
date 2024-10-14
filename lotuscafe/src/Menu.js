const appetizers = [
  {
    id: 1,
    item: "Roasted Vegetable Bruschetta",
    description:
      "Sliced baguette topped with roasted bell peppers, cherry tomatoes, and basil, drizzled with balsamic glaze.",
    price: "$8.99",
  },
  {
    id: 2,
    item: "Crispy Zucchini Fritters",
    description:
      "Lightly battered zucchini slices served with a side of tangy yogurt dipping sauce.",
    price: "$7.99",
  },
  {
    id: 3,
    item: "Stuffed Avocado Rolls",
    description:
      "Fresh avocado halves filled with quinoa, black beans, corn, and diced tomatoes, served with a cilantro lime dipping sauce.",
    price: "$9.99",
  },
  {
    id: 4,
    item: "Hummus and Pita",
    description:
      "Creamy hummus made with roasted garlic and served with fresh sliced pita bread.",
    price: "$6.99",
  },
];

const entrees = [
  {
    id: 1,
    item: "Mushroom Lentil Burger",
    description:
      "House-made lentil and mushroom patty topped with caramelized onions, avocado, lettuce, and tomato, served on a whole wheat bun",
    price: "$12.99",
  },
  {
    id: 2,
    item: "Butternut Squash Ravioli",
    description:
      "Homemade ravioli stuffed with roasted butternut squash and sage-infused cashew cream sauce.",
    price: "$11.99",
  },
  {
    id: 3,
    item: "Vegetable Stir-Fry",
    description:
      "A colorful medley of seasonal vegetables stir-fried in a ginger garlic sauce, served over noodles.",
    price: "$13.99",
  },
  {
    id: 4,
    item: "Spinach and Ricotta Stuffed Portobello",
    description:
      "Grilled portobello mushroom cap filled with a savory blend of spinach, ricotta cheese, and herbs, topped with marinara sauce and melted mozzarella.",
    price: "$14.99",
  },
];

const desserts = [
  {
    id: 1,
    item: "Vegan Chocolate Avocado Mousse",
    description:
      "Creamy avocado-based chocolate mousse sweetened with agave nectar, garnished with fresh berries.",
    price: "$6.99",
  },
  {
    id: 2,
    item: "Coconut Chia Pudding",
    description:
      "Chia seeds soaked in coconut milk, sweetened with maple syrup, and topped with toasted coconut flakes.",
    price: "$7.99",
  },
  {
    id: 3,
    item: "Cheesecake",
    description:
      "Our fan-favorite cheesecake, topped with a mango puree and seasonal fresh fruit.",
    price: "$7.99",
  },
  {
    id: 4,
    item: "Mixed Berry Crisp",
    description:
      "A delightful blend of mixed berries baked with a crumbly oat topping, served with a scoop of vanilla bean ice cream (vegan option available).",
    price: "$6.99",
  },
];

function MenuSection(props) {
  const menuItems = props.section.map((item) => {
    return (
      <li key={item.id}>
        <h4>
          {item.item} ..... <span className="menuPrice">{item.price}</span>
        </h4>
        <p>{item.description}</p>
      </li>
    );
  });

  return (
    <div className="menuSection">
      <h2>{props.title}</h2>
      <ul>{menuItems}</ul>
      <img src={props.imgUrl} alt={props.title} className="menuImg" />
    </div>
  );
}

export default function Menu() {
  return (
    <section className="container">
      <h1>Menu</h1>
      <MenuSection
        title="Appetizers"
        section={appetizers}
        imgUrl="images/hummus.jpg"
      />
      <MenuSection
        title="Entrees"
        section={entrees}
        imgUrl="images/noodles.jpeg"
      />
      <MenuSection
        title="Deserts"
        section={desserts}
        imgUrl="images/cheesecake.jpg"
      />
    </section>
  );
}
