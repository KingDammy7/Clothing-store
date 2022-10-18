import React, { useState } from "react";
import MenuItem from "../menu-item/menu-item";
import "./directory.styles.scss";

function Directory() {
  const [items, setItems] = useState([ {
		title: "Hats",
		images: "https://i.ibb.co/cvpntL1/hats.png",
		ids: "1",
  }, {
		title: "Jackets",
		images: "https://i.ibb.co/px2tCc3/jackets.png",
		ids: "2",
	}, {
		title: "Sneakers",
		images: "https://i.ibb.co/0jqHpnp/sneakers.png",
		ids: "3",
	}, {
		title: "Women",
		images: "https://i.ibb.co/GCCdy8t/womens.png",
		ids: "4",
	}, {
		title: "Men",
		images: "https://i.ibb.co/R70vBrQ/men.png",
		ids: "5",
	} ])

	

	return (
		<div className='directory-menu'>
			{items.map(({ title, images, ids, size }) => (
				<MenuItem key={ids} title={title} images={images} size={size} />
			))}
    
		</div>
	);
}

export default Directory;
