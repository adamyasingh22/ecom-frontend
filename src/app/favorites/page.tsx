import { getFavorites } from "../../lib/data";


export default async function FavoritesPage() {
const items = await getFavorites();


return (
<div>
<h2 className="text-3xl font-bold mb-6">Your Favorites</h2>


{items.length === 0 ? (
<p className="text-gray-600">No favorites added.</p>
) : (
<div className="grid gap-5">
{items.map((item) => (
<div
key={item._id}
className="bg-grey p-5 rounded-xl shadow border border-gray-200"
>
<h3 className="text-xl font-semibold">{item.productId?.title}</h3>
<p className="text-gray-600">₹{item.productId?.price}</p>
</div>
))}
</div>
)}
</div>
);
}