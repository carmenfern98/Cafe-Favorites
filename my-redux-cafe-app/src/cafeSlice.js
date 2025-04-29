import { createSlice } from "@reduxjs/toolkit";
import VourkeIMG from '../src/img/Vourke_1.PNG'
import OSAIMG from '../src/img/osa.PNG'
import FarbenIMG from '../src/img/cafefarben.PNG'
import PiIMG from '../src/img/Pi_spectacle_1.PNG'
import dodamIMG from '../src/img/dodam.PNG'
import mhIMG from '../src/img/mh.PNG'
import coucouIMG from '../src/img/coucou.PNG'
import spiaIMG from '../src/img/cafespia.PNG'
import noIMG from '../src/img/no.PNG'
import butterIMG from '../src/img/butter.PNG'
import ddayIMG from '../src/img/dday.PNG'
import mazeIMG from '../src/img/maze.PNG'

const initialState = {
    cafes: [
        {id: 1, name: "Vourke", image: VourkeIMG},
        {id: 2, name: "OSA Coffee", image: OSAIMG},
        {id: 3, name: "Cafe Farben", image: FarbenIMG},
        {id: 4, name: "Pi Spectacle", image: PiIMG},
        {id: 5, name: "dodam", image: dodamIMG},
        {id: 6, name: "M&H Coffee", image: mhIMG},
        {id: 7, name: "coucou amande", image: coucouIMG},
        {id: 8, name: "Cafe Spia", image: spiaIMG},
        {id: 9, name: "Cafe No.", image: noIMG},
        {id: 10, name: "Butter Museum Osaka", image: butterIMG},
        {id: 11, name: "Dday1", image: ddayIMG},
        {id: 12, name: "Maze", image: mazeIMG}
    ],
    favorites: []
};

export const cafeSlice = createSlice({
    name:'cafe',
    initialState,
    reducers:{
        addToFavorites: (state, action) => {
        const cafe = state.cafes.find(cafe => cafe.id === action.payload.id);
        if (cafe && !state.favorites.some(fav => fav.id === cafe.id))
        {state.favorites.push(cafe);
        state.cafes = state.cafes.filter(cafe => cafe.id !== action.payload.id)
        }
        },
       removeFromFavorites: (state, action) => {
        const cafe = state.favorites.find(fav => fav.id === action.payload.id)
        if (cafe) {state.favorites = state.favorites.filter(fav => fav.id !== action.payload.id);
        state.cafes.push(cafe);
       }
    }
    }
})

export const { addToFavorites, removeFromFavorites } = cafeSlice.actions;
export default cafeSlice.reducer;