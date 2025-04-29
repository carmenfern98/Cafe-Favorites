/** @jsxImportSource @emotion/react */
import React from 'react';
import { useSelector } from 'react-redux';
import CafeCard from './CafeCard';
import styled from '@emotion/styled';

const Container= styled.div`
display: flex;
flex-wrap: wrap;
gap: 20px;
justify-content: center;
padding: 20px;
`

const FavoritesList = () =>{
    const favorites = useSelector(state => state.cafe.favorites);
    
    return(
        <div>
            <h2>お気に入りのカフェ</h2>
            <Container>
                {favorites.map(fav =>(
                    <CafeCard key={fav.id} cafe={fav} isFavorite/>

                ))}
        </Container>
        </div>
    )
}
export default FavoritesList;