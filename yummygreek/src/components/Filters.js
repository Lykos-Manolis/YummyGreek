import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/esm/Button';

function Filters(props) {

    const dietFilter = (diet) => {
        const newDishes = props.filteredDishes.filter(dishes => (dishes.tags.dietaryPreferences!==undefined) && (dishes.tags.dietaryPreferences.includes(diet)));
        props.setFilteredDishes(newDishes);
    };
    
      const priceFilter = (minValue, maxValue) => {
        const newDishes = props.filteredDishes.filter(dishes => (dishes.price>=minValue) && (maxValue ? dishes.price <= maxValue : true));
        props.setFilteredDishes(newDishes);
    };
    
    const allergenFilter = (allergy) => {
        let newDishes;
    
        if(allergy==='none'){
            newDishes = props.filteredDishes.filter(dishes => (dishes.tags.allergens==undefined));
        }
        else{
            newDishes = props.filteredDishes.filter(dishes => (dishes.tags.allergens!=undefined) && (dishes.tags.allergens.includes(allergy)));
        }
        props.setFilteredDishes(newDishes);
    };
    
    const removeFilter = () => {
        props.setFilteredDishes(props.dishes);
    };

    return (
    <div className='filter-container'>
        <Dropdown style={{display: 'inline-block', margin: '1rem'}}>
            <Dropdown.Toggle variant="primary" id="dropdown-basic">
                Dietary Preferences
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item onClick={()=>dietFilter('vegan')}>Vegan</Dropdown.Item>
                <Dropdown.Item onClick={()=>dietFilter('gluten-free')}>Gluten-Free</Dropdown.Item>
                <Dropdown.Item onClick={()=>dietFilter('lactose-free')}>Lactose-Free</Dropdown.Item>
                <Dropdown.Item onClick={()=>dietFilter('nut-free')}>Nut-Free</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
        <Dropdown style={{display: 'inline-block', margin: '1rem'}}>
            <Dropdown.Toggle variant="primary" id="dropdown-basic">
                Price Range
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item onClick={()=>priceFilter(0,10)}>Under 10</Dropdown.Item>
                <Dropdown.Item onClick={()=>priceFilter(10,20)}>10-20</Dropdown.Item>
                <Dropdown.Item onClick={()=>priceFilter(20,30)}>20-30</Dropdown.Item>
                <Dropdown.Item onClick={()=>priceFilter(30,40)}>30-40</Dropdown.Item>
                <Dropdown.Item onClick={()=>priceFilter(40)}>Over 40</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
        <Dropdown style={{display: 'inline-block', margin: '1rem'}}>
            <Dropdown.Toggle variant="primary" id="dropdown-basic">
                Allergens
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item onClick={()=>allergenFilter('contains-nuts')}>Contains Nuts</Dropdown.Item>
                <Dropdown.Item onClick={()=>allergenFilter('contains-gluten')}>Contains Gluten</Dropdown.Item>
                <Dropdown.Item onClick={()=>allergenFilter('contains-lactose')}>Contains Lactose</Dropdown.Item>
                <Dropdown.Item>Other Allergens</Dropdown.Item>
                <Dropdown.Item onClick={()=>allergenFilter('none')}>Allergen-Free</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
        <Button 
            style={{margin:'1rem'}} 
            onClick={removeFilter} 
            variant="danger"
        >
            Remove Filters
        </Button>
    </div>
    )
}

export default Filters