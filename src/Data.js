// Our product database.
const sampleProducts = [
	{
		id: 1,
		name: 'Milk',
		category: 'Dairy products',
		price: 6,
		description:
      'MILK',
		imageUrls: [
			'https://www.tnuva.co.il/uploads/f_5e0208d570297_1577191637.jpg'
		]
	},
	{
		id: 2,
		name: 'Cottage',
		category: 'Dairy products',
		price: 6.5,
		description:
      'Cottage',
		imageUrls: [
			'https://www.tnuva.co.il/uploads/f_5d0f283c02962_1561274428.png'
		]
	},
	{
		id: 3,
		name: 'Tomatoes',
		category: 'Fruits and Vegetables',
		price: 2,
		description:
      'Tomatoes',
		imageUrls: [
			'https://befreshcorp.net/wp-content/uploads/2017/07/product-packshot-CherryTtomatoes.jpg'
		]
	},
	{
		id: 4,
		name: 'Bannana',
		category: 'Fruits and Vegetables',
		price: 4,
		description:
      'Bannana',
		imageUrls: [
			'https://pbs.twimg.com/profile_images/820456413407440898/x_r01RLo_400x400.jpg'
		]
	},
	{
		id: 5,
		name: 'Apple',
		category: 'Fruits and Vegetables',
		price: 3,
		description:
      'Apple',
		imageUrls: [
			'https://cashcow-cdn.azureedge.net/images/49193501-588b-4b21-ab08-4ae9a0cecb13.jpg'
		]
	},
	{
		id: 6,
		name: 'Peach',
		category: 'Fruits and Vegetables',
		price: 3,
		description:
      'Peach',
		imageUrls: [
			'https://www.birkat-hashem.co.il/wp-content/uploads/shutterstock_222269095.jpg'
		]
	},
	{
		id: 7,
		name: 'Watermelon',
		category: 'Fruits and Vegetables',
		price: 3,
		description:
      'Watermelon',
		imageUrls: [
			'https://www.jdn.co.il/wp-content/uploads/2015/07/Maximaopen1.jpg'
		]
	},
	{
		id: 8,
		name: 'Onion',
		category: 'Fruits and Vegetables',
		price: 3,
		description:
      'Onion',
		imageUrls: [
			'https://www.ynet.co.il/PicServer5/2018/11/20/8894066/88940290100683640360no.jpg'
		]
	},
	{
		id: 9,
		name: 'Lettuce',
		category: 'Fruits and Vegetables',
		price: 3,
		description:
      'Lettuce',
		imageUrls: [
			'https://batevasheli.co.il/wp-content/uploads/2018/06/%D7%97%D7%A1%D7%94-%D7%A2%D7%A8%D7%91%D7%99%D7%AA-500x500.jpg'
		]
	},
	{
		id: 10,
		name: 'Ice coffe',
		category: 'Dairy products',
		price: 6,
		description:
      'Ice coffe',
		imageUrls: [
			'https://m.pricez.co.il/ProductPictures/7290003029907.jpg'
		]
	},
	{
		id: 11,
		name: 'Master caffe',
		category: 'Dairy products',
		price: 6.5,
		description:
      'Master caffe',
		imageUrls: [
			'https://static.wixstatic.com/media/ebe763_b7084b0206554d8f871bbb6b3fc76603~mv2_d_2000_2000_s_2.png/v1/fill/w_304,h_278,al_c,q_85,usm_0.66_1.00_0.01/ebe763_b7084b0206554d8f871bbb6b3fc76603~mv2_d_2000_2000_s_2.webp'
		]
	},
	{
		id: 12,
		name: 'Euro cheese',
		category: 'Dairy products',
		price: 6,
		description:
      'Euro Cheese',
		imageUrls: [
			'https://www.willi-food.co.il/wp-content/uploads/2018/02/7290108500783-229x229.jpg'
		]
	},
	{
		id: 13,
		name: 'Margarine',
		category: 'Dairy products',
		price: 6.5,
		description:
      'Margarine',
		imageUrls: [
			'https://m.pricez.co.il/ProductPictures/7290000110059.jpg'
		]
	},
	{
		id: 14,
		name: 'Hamburger',
		category: 'Meats and fish',
		price: 25,
		description:
      'Euro Hamburger',
		imageUrls: [
			'https://www.soglowek.co.il/app/uploads/2017/11/hamburger_400.jpg'
		]
	},
	{
		id: 15,
		name: 'Kebab',
		category: 'Meats and fish',
		price: 20,
		description:
      'Kebab',
		imageUrls: [
			'https://m.pricez.co.il/ProductPictures/7290004324858.jpg'
		]
	},
	{
		id: 16,
		name: 'Sausage',
		category: 'Meats and fish',
		price: 25,
		description:
      'Sausage',
		imageUrls: [
			'https://m.pricez.co.il/ProductPictures/7290002612001.jpg'
		]
	},
	{
		id: 17,
		name: 'Steak ',
		category: 'Meats and fish',
		price: 50,
		description:
      'Steak',
		imageUrls: [
			'https://www.hallmarknet.co.il/wp-content/uploads/2019/06/20190603_003225.jpg'
		]
	},
	{
		id: 18,
		name: 'Salmon fish',
		category: 'Meats and fish',
		price: 25,
		description:
      'Salmon fish',
		imageUrls: [
			'https://m.pricez.co.il/ProductPictures/7290002957386.jpg'
		]
	},
	{
		id: 19,
		name: 'Dennis fish',
		category: 'Meats and fish',
		price: 20,
		description:
      'Dennis fish',
		imageUrls: [
			'https://m.pricez.co.il/ProductPictures/7290002957348.jpg'
		]
	},
	{
		id: 20,
		name: 'Bisley',
		category: 'Snacks and Sweets',
		price: 4,
		description:
      'Bisley',
		imageUrls: [
			'https://www.ewines.co.il/wp-content/uploads/2019/04/bisli.jpg'
		]
	},
	{
		id: 21,
		name: 'Bamba',
		category: 'Snacks and Sweets',
		price: 4,
		description:
      'Bamba',
		imageUrls: [
			'https://upload.wikimedia.org/wikipedia/en/thumb/9/91/Bag_of_Bamba.jpeg/200px-Bag_of_Bamba.jpeg'
		]
	},
	{
		id: 22,
		name: 'Chips',
		category: 'Snacks and Sweets',
		price: 5.5,
		description:
      'Chips',
		imageUrls: [
			'https://super-click.co.il/wp-content/uploads/2019/10/51729.jpg'
		]
	},
	{
		id: 23,
		name: 'Brownies cake',
		category: 'Snacks and Sweets',
		price: 16,
		description:
      'Brownies cake',
		imageUrls: [
			'https://www.elite.co.il/areas/uploads/91c22c54-c537-4868-a50f-a1a5d9469621.png'
		]
	},
	{
		id: 24,
		name: 'Butter candy',
		category: 'Snacks and Sweets',
		price: 4,
		description:
      'Butter candy',
		imageUrls: [
			'https://storage.googleapis.com/sp-public/product-images/global/983/874500/large.jpg'
		]
	},
	{
		id: 25,
		name: 'Kinder Bueno',
		category: 'Snacks and Sweets',
		price: 4,
		description:
      'Kinder Bueno',
		imageUrls: [
			'https://d3m9l0v76dty0.cloudfront.net/system/photos/4375445/large/38495f32b492617104041d0f2ce5cf1f.jpg'
		]
	},
]

// List of item categories.
const categories = [
  {
    name: "All categories",
    icon: "list"
  },
  {
    name: "Dairy products",
    icon: "🥛"
  },
  {
    name: "Fruits and Vegetables",
    icon: "🍅 "
  },
  {
    name: "Meats and fish",
    icon: "🍔"
  },
  {
    name: "Snacks and Sweets",
    icon: "🍫"
  }
];

// Data for rendering menu.
const dataForTheMenu = [
  { name: "Home page", url: "/", icon: "home", id: 0 },
  {
    name: "Product Categories",
    id: 1,
    children: categories.map((x, i) => {
      return {
        name: x.name,
        id: i,
        url: "/?category=" + x.name,
        icon: x.icon
      };
    })
  },

];


export { sampleProducts, categories, dataForTheMenu }
