import React from 'react';
import ShopPageData from './ShopPageData.json';
import './ShopPage.scss';
import CollectionPreview from '../../components/CollectionPreview/CollectionPreview';

class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: ShopPageData
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div className='shop-page'> {
        collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    )
  }
}

export default ShopPage;