import React from 'react'
import { connect } from 'react-redux'

import './collection-item.styles.scss'

import CustomButton from '../custom-button/custom-button.component';
import { addItem } from '../../redux/cart/cart.actions'

const CollectionItem = ({ item, addItemProps}) => {
    const {name, price, imageUrl} = item
    return(
    <div className="collection-item">
        <div className="image" style={{ backgroundImage: `url(${imageUrl})`}}></div>
        <div className="collection-footer">
            <span className="name">{name}</span>
            <span className="price">{price}</span>
        </div>
        <CustomButton onClick={() => addItemProps(item)}>Add to Cart</CustomButton>
    </div>
)}

const mapDispatchToProps = (dispatch) => ({
    addItemProps: (item) => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem)

// import React from 'react'

// import './collection-item.styles.scss'

// import CustomButton from '../custom-button/custom-button.component';

// const CollectionItem = ({ id, name, price, imageUrl}) => (
//     <div className="collection-item">
//         <div className="image" style={{ backgroundImage: `url(${imageUrl})`}}></div>
//         <div className="collection-footer">
//             <span className="name">{name}</span>
//             <span className="price">{price}</span>
//         </div>
//         <CustomButton >Add to Cart</CustomButton>
//     </div>
// )

// export default CollectionItem