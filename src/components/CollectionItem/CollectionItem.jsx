import React from 'react';
import './CollectionItem.scss';
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';
import CustomButton from '../CustomButton/CustomButton';

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;

  return (
    <section className='collection-item'>
      <figure
        className='image'
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <footer className='collection-footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </footer>
      <CustomButton onClick={() => addItem(item)} inverted>Add to cart</CustomButton>
    </section>
  )
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
})

export default connect(
  null,
  mapDispatchToProps
)(CollectionItem);