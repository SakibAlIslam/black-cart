import React from 'react'
import styled from 'styled-components'
import { popularProducts } from '../../fakeData/data';
import ProductItem from './ProductItem';

const Container = styled.div`
    display:flex;
    padding:20px;
    justify-content:space-between;
`;

const Products = () => {
    return (
        <Container>
            {popularProducts?.map(item => (
                <ProductItem item={item} key={item?.id} />
            ))}
        </Container>
    )
}

export default Products