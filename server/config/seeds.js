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
      image: 'cookie-tin.jpg',
      category: categories[0]._id,
      price: 6.50,
      quantity: 500
    },
    {
      name: 'Nachos',
      description:
        'Praesent sed lacinia mauris. Nulla congue nibh magna, at feugiat nunc scelerisque quis. Donec iaculis rutrum vulputate. Suspendisse lectus sem, vulputate ac lectus sed, placerat consequat dui.',
      image: 'canned-coffee.jpg',
      category: categories[0]._id,
      price: 7.99,
      quantity: 500
    },
    {
      name: 'Pizza',
      description:
        'Praesent sed lacinia mauris. Nulla congue nibh magna, at feugiat nunc scelerisque quis. Donec iaculis rutrum vulputate. Suspendisse lectus sem, vulputate ac lectus sed, placerat consequat dui.',
      image: 'canned-coffee.jpg',
      category: categories[0]._id,
      price: 6.99,
      quantity: 500
    },
    {
      name: 'Burger',
      description:
        'Praesent sed lacinia mauris. Nulla congue nibh magna, at feugiat nunc scelerisque quis. Donec iaculis rutrum vulputate. Suspendisse lectus sem, vulputate ac lectus sed, placerat consequat dui.',
      image: 'canned-coffee.jpg',
      category: categories[0]._id,
      price: 5.50,
      quantity: 500
    },
    {
      name: 'Fries',
      description:
        'Praesent sed lacinia mauris. Nulla congue nibh magna, at feugiat nunc scelerisque quis. Donec iaculis rutrum vulputate. Suspendisse lectus sem, vulputate ac lectus sed, placerat consequat dui.',
      image: 'canned-coffee.jpg',
      category: categories[0]._id,
      price: 3.99,
      quantity: 500
    },
    {
      name: 'Coke',
      category: categories[1]._id,
      description:
        'The ultimate refreshing carbonated soft drink manufactured by the Coca-Cola Company with only 140 calories per can.',
      image: 'toilet-paper.jpg',
      price: 4.50,
      quantity: 20
    },
    {
      name: 'Diet Coke',
      category: categories[1]._id,
      description:
        'The perfect go to drink that offers the same great refreshing taste of Coca Cola with no sugar and no calories.',
      image: 'soap.jpg',
      price: 4.50,
      quantity: 50
    },
    {
      name: 'Sprite',
      category: categories[1]._id,
      description:
        'Lemon-lime carbonated drink with a crisp taste making it the ultimate refreshment with only 192 calories per can.',
      image: 'wooden-spoons.jpg',
      price: 4.50,
      quantity: 100
    },
    {
    name: 'Bottle Water',
    category: categories[1]._id,
    description:
      'Plain old fashion refreshing H20. Same great taste with no calories!',
    image: 'wooden-spoons.jpg',
    price: 4.00,
    quantity: 100
  },
    {
      name: 'Coors Light',
      category: categories[2]._id,
      description:
        'Crisp, clean and refreshing, Coors Light is an American-style light lager beer. This light beer has 4.2% ABV, 102 calories and 5 grams of carbs per 12-ounce serving. Full of Rocky Mountain refreshment, this light-calorie beer provides a light body with clean malt notes and low bitterness.',
      image: 'camera.jpg',
      price: 7.25,
      quantity: 100
    },
    {
      name: 'Bud Light',
      category: categories[2]._id,
      description:
        'Introduced in 1982, Bud Light is a premium light lager with a superior drinkability that has made it the best-selling and most popular beer in the United States. ... The light-bodied beer features a fresh, clean and subtle hop aroma, delicate malt sweetness and a crisp finish that delivers the ultimate refreshment.',
      image: 'tablet.jpg',
      price: 7.25,
      quantity: 100
    },
    {
      name: 'Popcorn',
      category: categories[3]._id,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare diam quis eleifend rutrum. Aliquam nulla est, volutpat non enim nec, pharetra gravida augue. Donec vitae dictum neque. Pellentesque arcu lorem, fringilla non ligula ac, tristique bibendum erat. Ut a semper nibh. Quisque a mi et mi tempor ultricies. Maecenas eu ipsum eu enim hendrerit accumsan at euismod urna.',
      image: 'bedtime-book.jpg',
      price: 8.00,
      quantity: 100
    },
    {
      name: 'Cotton Candy',
      category: categories[3]._id,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare diam quis eleifend rutrum. Aliquam nulla est, volutpat non enim nec, pharetra gravida augue. Donec vitae dictum neque. Pellentesque arcu lorem, fringilla non ligula ac, tristique bibendum erat. Ut a semper nibh. Quisque a mi et mi tempor ultricies. Maecenas eu ipsum eu enim hendrerit accumsan at euismod urna.',
      image: 'bedtime-book.jpg',
      price: 4.50,
      quantity: 100
    },
    {
      name: 'Ice Cream',
      category: categories[3]._id,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare diam quis eleifend rutrum. Aliquam nulla est, volutpat non enim nec, pharetra gravida augue. Donec vitae dictum neque. Pellentesque arcu lorem, fringilla non ligula ac, tristique bibendum erat. Ut a semper nibh. Quisque a mi et mi tempor ultricies. Maecenas eu ipsum eu enim hendrerit accumsan at euismod urna.',
      image: 'bedtime-book.jpg',
      price: 4.50,
      quantity: 100
    },
    {
      name: 'Baseball Hat',
      category: categories[4]._id,
      description: 'Ut vulputate hendrerit nibh, a placerat elit cursus interdum.',
      image: 'spinning-top.jpg',
      price: 29.99,
      quantity: 1000
    },
    {
      name: 'Foam-Finger',
      category: categories[4]._id,
      description:
        'Sed a mauris condimentum, elementum enim in, rhoncus dui. Phasellus lobortis leo odio, sit amet pharetra turpis porta quis.',
      image: 'plastic-horses.jpg',
      price: 15.00,
      quantity: 1000
    },
    {
      name: 'Little-Bat',
      category: categories[4]._id,
      description:
        'Vestibulum et erat finibus erat suscipit vulputate sed vitae dui. Ut laoreet tellus sit amet justo bibendum ultrices. Donec vitae felis vestibulum, congue augue eu, finibus turpis.',
      image: 'teddy-bear.jpg',
      price: 17.99,
      quantity: 100
    },
    {
      name: 'Baseball',
      category: categories[4]._id,
      description:
        'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
      image: 'alphabet-blocks.jpg',
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
