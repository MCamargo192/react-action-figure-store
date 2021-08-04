import { useState, useEffect } from 'react';
import classes from './CategoryFilter.module.css';

const CategoryFilter = (props) => {
    const initialState = {
        all: true,
        animes: false,
        games: false,
        movies: false
    }
    const [categories, setCategories] = useState(initialState);
    const labels = ['all', 'animes', 'games', 'movies'];

    const checkboxChangeHandler = (event) => {
        const key = (event.target.innerText);
        let newState;
        if (key === 'all')
            newState = { ...initialState };
        else
            newState = { ...categories, [key]: !categories[key], all: false };

        if (newState.animes && newState.games && newState.movies)
            newState = { ...initialState };

        setCategories(newState);
    }

     useEffect(() => {
        let selectedCategories = [];
        for (const key in categories) {
            if(key === 'all' && categories[key]) {
                selectedCategories = ['animes', 'games', 'movies'];
                break;
            }
            if (categories[key])
                selectedCategories.push(key);
        }
        props.onSelect(selectedCategories);
    }, [categories, props]);

    return (
        <div className={classes.categories}>
            <p>Category</p>
            <ul className={classes.chips}>
                {labels.map((label, index) => {
                    return (
                        <ol key={index}>
                            <button
                                className={`${classes.button} ${!categories[label] && classes.invalid}`}
                                onClick={checkboxChangeHandler}
                            >
                                {label}
                            </button>
                        </ol>
                    );
                })}
            </ul>
        </div>
    )
}

export default CategoryFilter;