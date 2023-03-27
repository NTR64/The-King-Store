import React from 'react';
import CategoryItem from '../category-item/CategoryItem';
import './directory-menu.scss';

const categories = [
  {
    id: 1,
    title: 'Crowns',
    imageUrl: 'https://effortlessgent.com/wp-content/uploads/2022/01/feat-best-bucket-hats.jpg',
    route: 'shop/hats',
  },
  {
    id: 2,
    title: 'Robes',
    imageUrl: 'https://store.juventus.com/data/store/product/5/57451/product.jpg',
    route: 'shop/jackets',
  },
  {
    id: 3,
    title: 'Shoes',
    imageUrl: 'https://staticg.sportskeeda.com/editor/2022/10/772e5-16663415642262-1920.jpg',
    route: 'shop/sneakers',
  },
  {
    id: 4,
    title: 'Queens',
    imageUrl: 'https://images.squarespace-cdn.com/content/v1/598cd442ebbd1a6da1112f81/1562561607134-O5N1WR6LHYYZH3FURJI6/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/Canva+-+Surprised+Woman+In+Striped+Wide+Legs+Trousers+And+Sunglasses+Is+Looking+Away.jpg',
    route: 'shop/womens',
  },
  {
    id: 5,
    title: 'Kings',
    imageUrl: 'https://www.realmenrealstyle.com/wp-content/uploads/2021/11/pink-catches-women-attention.jpg',
    route: 'shop/mens',
  },
];

const DirectoryMenu = () => {
  return (
    <div className="directory-container">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default DirectoryMenu;
