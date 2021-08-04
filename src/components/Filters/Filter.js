import { useState, useEffect } from 'react';
import Input from '../../UI/Input/Input';
import CategoryFilter from './CategoryFilter';
import classes from './Filter.module.css';

const FilterForm = (props) => {
    const [categories, setCategories] = useState([]);
    const [sortBy, setSortBy] = useState('');
    const [priceRange, setPriceRange] = useState({
        min: 0,
        max: 200
    });

    const priceHandler = (event) => {
        setPriceRange(prevPrice => ({ ...prevPrice, [event.target.id]: event.target.value }));
    }

    const sortHandler = (event) => {
        setSortBy(event.target.value);
    }

    useEffect(() => {
        props.setFilters({
            min: priceRange.min,
            max: priceRange.max,
            categories,
            sortBy
        });
    }, [categories, sortBy, priceRange, props])

    return (
        <div className={classes.filters}>
            <div className={classes.form}>
                <CategoryFilter categories={categories} onSelect={setCategories} />
                <div className={classes.prices}>
                    <p>Price</p>
                    <Input
                        label='Min'
                        input={{
                            id: 'min',
                            type: 'number',
                            min: '0',
                            max: '200',
                            step: '1',
                            defaultValue: '0',
                            onChange: priceHandler
                        }} />
                    <Input
                        label='Max'
                        input={{
                            id: 'max',
                            type: 'number',
                            min: '0',
                            max: '200',
                            step: '1',
                            defaultValue: '200',
                            onChange: priceHandler
                        }} />
                </div>
                <div className={classes.sortForm}>
                    <label htmlFor="sort-by">Sort By</label>
                    <select
                        native
                        value={sortBy}
                        onChange={sortHandler}
                        inputProps={{
                            name: 'Sort By',
                            id: 'sort-by',
                        }}
                    >
                        <option aria-label='None' value='' />
                        <optgroup label='Name'>
                            <option value='A-Z'>A-Z</option>
                            <option value='Z-A'>Z-A</option>
                        </optgroup>
                        <optgroup label='Price'>
                        <option value='Low'>Low</option>
                        <option value='High'>High</option>
                        </optgroup>
                    </select>
                </div>
            </div>
        </div>
    );
}

export default FilterForm;