import fire from './config/FBConfig'
var sampleProducts = [] 
async function asyncCall() {
	const data =await fire.firestore().collection('sampleProducts').doc('dogvrgMGe2rBJkCy7tIw').get()
	sampleProducts =Object.values(data.data())
	console.log(sampleProducts)
}
// List of item categories.
const categories = [
	{
		name: 'All categories',
		icon: 'list'
	},
	{
		name: 'Dairy products',
		icon: '🥛'
	},
	{
		name: 'Fruits and Vegetables',
		icon: '🍅 '
	},
	{
		name: 'Meats and fish',
		icon: '🍔'
	},
	{
		name: 'Snacks and Sweets',
		icon: '🍫'
	}
]
// Data for rendering menu.
// Data for rendering menu.
const dataForTheMenu = [
	{ name: 'Home page', url: '/', icon: 'home', id: 0 },
	{
		name: 'Product Categories',
		id: 1,
		children: categories.map((x, i) => {
			return {
				name: x.name,
				id: i,
				url: '/?category=' + x.name,
				icon: x.icon
			}
		})
	},

]
export default asyncCall
export { sampleProducts, categories, dataForTheMenu }
