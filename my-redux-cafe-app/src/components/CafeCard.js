/** @jsxImportSource @emotion/react */
import React from "react";
import { useDispatch } from 'react-redux';
import { addToFavorites, removeFromFavorites} from "../cafeSlice";
import styled from '@emotion/styled';
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeartBroken } from "@fortawesome/free-solid-svg-icons";

const Card = styled.div`
border: 1px solid #ddd;
border-radius: 12px; 
text-align: center;
background-color: #fff;
max-width:30vh;
cursor: pointer;

&:hover .overlay{
opacity: .4;}

&:hover .heart{
opacity: 1;
transform: scale(1)
}
`;

const Image = styled.img`
width:100%;
border-radius: 8px;
object-fit: cover;

`;

const Overlay = styled.div`
position: absolute;
top: 0;
left: 0;
height: 100%;
width: 100%;
opacity: 0;
transition: opacity 0.3s ease;
z-index: 1;
pointer-events: none;
background-color: #FFFFFF
`
const Heart = styled(FontAwesomeIcon)`
position: absolute;
top:35%;
left:35%;
color: #e63946;
opacity: 0;
z-index: 2;
transition: opacity 0.3s ease;
pointer-events: none;
font-size: 10vh;
`
const CardContent = styled.div`
position: relative;`;

const CafeCard = ({cafe, isFavorite = false}) => {
    const dispatch = useDispatch();

    const handleClick = () => {
        if(isFavorite){
            dispatch(removeFromFavorites(cafe));
        } else {
            dispatch(addToFavorites(cafe));
        }
    }
    const handleAddToFavorites = () => {
        dispatch(addToFavorites(cafe));
    };
    const handleRemoveFromFavorites = () => {
        dispatch(removeFromFavorites(cafe));
    }
    

return(
    <Card onClick={handleClick}>
        <CardContent>
        <Image src={cafe.image} alt={cafe.name} />
        {!isFavorite && (
            <>
            <Overlay className="overlay"/>
            <Heart className="heart" icon={faHeart}/>
            </>
        )}
        {isFavorite && (
            <>
            <Overlay className="overlay"/>
            <Heart className="heart" icon= {faHeartBroken}/>
            </>
        )}
        </CardContent>
    </Card>
);
}
export default CafeCard