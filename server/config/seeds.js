const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Food' },
    { name: 'Drinks (non-alcoholic)' },
    { name: 'Beer' },
    { name: 'Sweets' },
    { name: 'Swag' }
  ]);

  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: 'Hot-Dog',
      description:
        'Thick and juicy frank on a bun. Relish, ketchup, and mustard available in packets.',
      image: 'hotdog.jpg',
      category: categories[0]._id,
      price: 6.59,
      quantity: 500
    },
    {
      name: 'Nachos',
      description:
        'Heated tortilla chips served with melted cheese, ground beef, and jalapeños.',
      image: 'nachos.jpg',
      category: categories[0]._id,
      price: 7.99,
      quantity: 500
    },
    {
      name: 'Pizza',
      description:
        'Your favorite cheese pizza, with your choice of crust covered in classic marinara sauce and topped with gooey mozzarella cheese.',
      image: 'pizza.jpg',
      category: categories[0]._id,
      price: 6.99,
      quantity: 500
    },
    {
      name: 'Burger',
      description:
        '100% beef patty on a sesame bun with all the toppings.',
      image: 'burger.jpg',
      category: categories[0]._id,
      price: 5.59,
      quantity: 500
    },
    {
      name: 'Fries',
      description:
        ' An original favorite and the one and only fry you’ll ever need in your life. Fried crisp and golden, each with its own little imperfections so you know they’re fresh, seasonally and locally sourced.',
      image: 'fries.jpg',
      category: categories[0]._id,
      price: 3.99,
      quantity: 500
    },
    {
      name: 'Coke',
      category: categories[1]._id,
      description:
        'The ultimate refreshing carbonated soft drink manufactured by the Coca-Cola Company with only 140 calories per can.',
      image: 'CocaCola.jpg',
      price: 4.59,
      quantity: 20
    },
    {
      name: 'Diet Coke',
      category: categories[1]._id,
      description:
        'The perfect go to drink that offers the same great refreshing taste of Coca Cola with no sugar and no calories.',
      image: 'dietcoke.jpg',
      price: 4.59,
      quantity: 50
    },
    {
      name: 'Sprite',
      category: categories[1]._id,
      description:
        'Lemon-lime carbonated drink with a crisp taste making it the ultimate refreshment with only 192 calories per can.',
      image: 'sprite.jpg',
      price: 4.59,
      quantity: 100
    },
    {
      name: 'Bottle Water',
      category: categories[1]._id,
      description:
        'Plain old fashion refreshing H20. Same great taste with no calories!',
      image: 'bottlewater.jpg',
      price: 4.99,
      quantity: 100
    },
    {
      name: 'Coors Light',
      category: categories[2]._id,
      description:
        'Crisp, clean and refreshing, Coors Light is an American-style light lager beer. This light beer has 4.2% ABV, 102 calories and 5 grams of carbs per 12-ounce serving. Full of Rocky Mountain refreshment, this light-calorie beer provides a light body with clean malt notes and low bitterness.',
      image: 'coorslight.jpg',
      price: 7.25,
      quantity: 100
    },
    {
      name: 'Bud Light',
      category: categories[2]._id,
      description:
        'Introduced in 1982, Bud Light is a premium light lager with a superior drinkability that has made it the best-selling and most popular beer in the United States. ... The light-bodied beer features a fresh, clean and subtle hop aroma, delicate malt sweetness and a crisp finish that delivers the ultimate refreshment.',
      image: 'budlight.jpg',
      price: 7.25,
      quantity: 100
    },
    {
      name: 'Popcorn',
      category: categories[3]._id,
      description:
        'Rich, Buttery Goodness! Popcorn with the traditional butter flavor.',
      image: 'popcorn.png',
      price: 8.99,
      quantity: 100
    },
    {
      name: 'Cotton Candy',
      category: categories[3]._id,
      description:
        'One bite of these puffy clouds of sugar floss, assorted cotton candy, will have your taste buds floating on cloud nine!  Available in pink or blue.',
      image: 'cottoncandy.jpg',
      price: 4.59,
      quantity: 100
    },
    {
      name: 'Ice Cream',
      category: categories[3]._id,
      description:
        'Enjoy a rich, sweet and creamy frozen ice cream.  3 delicious flavors to choose from...Vanilla, Chocolate and Strawberry.  Available in sugar and waffle cones or a 10 ounce bowl.',
      image: 'icecream.jpg',
      price: 4.59,
      quantity: 100
    },
    {
      name: 'Baseball Hat',
      category: categories[4]._id,
      description: 'Colorado Rockies Authentic Hat',
      image: 'hat.png',
      price: 29.99,
      quantity: 1000
    },
    {
      name: 'Foam-Finger',
      category: categories[4]._id,
      description:
        'Show the visiting team who is Number 1 with this Colorado Rockies 16-inch foam hand! Our foam hands are just what you need to get you pumped up and cheering for your team.',
      image: 'foamfinger.jpg',
      price: 15.99,
      quantity: 1000
    },
    {
      name: 'Little-Bat',
      category: categories[4]._id,
      description:
        'Colorado Rockies Team Mini Baseball Bat',
      image: 'minibat.png',
      price: 17.99,
      quantity: 100
    },
    {
      name: 'Baseball',
      category: categories[4]._id,
      description:
        'Colorado Rockies Fanatics Authentic Baseball Cube Logo Display Case.',
      image: 'baseball2.jpeg',
      price: 17.99,
      quantity: 600
    }
  ]);

  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Pamela',
    lastName: 'Washington',
    email: 'pamela@testmail.com',
    password: 'password12345',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
  });

  await User.create({
    firstName: 'Elijah',
    lastName: 'Holt',
    email: 'eholt@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});
