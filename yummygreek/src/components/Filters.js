// Hooks
import React from 'react'

// Bootstrap Components
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/esm/Button';

// Render filter bar
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
		{/* Dietary preferance filter */}
    <Dropdown style={{display: 'inline-block', margin: '1rem'}}>
      <Dropdown.Toggle variant="primary" id="dropdown-basic">
        Dietary Preferences
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item className='dropdown-item' onClick={()=>dietFilter('vegan')}>Vegan</Dropdown.Item>
        <hr/>
        <Dropdown.Item className='dropdown-item' onClick={()=>dietFilter('gluten-free')}>Gluten-Free</Dropdown.Item>
        <hr/>
        <Dropdown.Item className='dropdown-item' onClick={()=>dietFilter('lactose-free')}>Lactose-Free</Dropdown.Item>
        <hr/>
        <Dropdown.Item className='dropdown-item' onClick={()=>dietFilter('nut-free')}>Nut-Free</Dropdown.Item>
    	</Dropdown.Menu>
    </Dropdown>

		{/* Price range filter */}
    <Dropdown style={{display: 'inline-block', margin: '1rem'}}>
      <Dropdown.Toggle variant="primary" id="dropdown-basic">
        Price Range
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item className='dropdown-item' onClick={()=>priceFilter(0,10)}>Under 10</Dropdown.Item>
        <hr/>
        <Dropdown.Item className='dropdown-item' onClick={()=>priceFilter(10,20)}>10-20</Dropdown.Item>
        <hr/>
        <Dropdown.Item className='dropdown-item' onClick={()=>priceFilter(20,30)}>20-30</Dropdown.Item>
        <hr/>
        <Dropdown.Item className='dropdown-item' onClick={()=>priceFilter(30,40)}>30-40</Dropdown.Item>
        <hr/>
        <Dropdown.Item className='dropdown-item' onClick={()=>priceFilter(40)}>Over 40</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

		{/* Allergen filter */}
    <Dropdown style={{display: 'inline-block', margin: '1rem'}}>
      <Dropdown.Toggle variant="primary" id="dropdown-basic">
        Allergens
      </Dropdown.Toggle>
      <Dropdown.Menu>
      	<Dropdown.Item className='dropdown-item' onClick={()=>allergenFilter('contains-nuts')}>Contains Nuts</Dropdown.Item>
        <hr/>
        <Dropdown.Item className='dropdown-item' onClick={()=>allergenFilter('contains-gluten')}>Contains Gluten</Dropdown.Item>
        <hr/>
        <Dropdown.Item className='dropdown-item' onClick={()=>allergenFilter('contains-lactose')}>Contains Lactose</Dropdown.Item>
        <hr/>
        <Dropdown.Item className='dropdown-item'>Other Allergens</Dropdown.Item>
        <hr/>
        <Dropdown.Item className='dropdown-item' onClick={()=>allergenFilter('none')}>Allergen-Free</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
		
		{/* Reset filters button */}
    <Button 
      style={{margin:'1rem'}} 
      onClick={removeFilter} 
      variant="danger"
    >
      Remove Filters
    </Button>
  </div>
)}

export default Filters