"use client"
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPropertiesCityWise } from '@/features/properties/propertyslice';


const GlobalFilter = ({ className = "" }) => {
  const dispatch = useDispatch();


  // State hooks for keyword and city
  const [keyword, setKeyword] = useState('');
  const [city, setCity] = useState('');
  const [error, setError] = useState('');

  // Submit handler
  const submitHandler = async () => {
    if (!keyword || !city) {
      alert('Please enter both keyword and city.');
      return;
    }

    setError('');

    try {
      const response = await fetch(`/api/search?city=${city}&keyword=${keyword}`,
        {
          "method": 'GET', // GET is the default method, so this line can be omitted if you prefer
          'Content-Type': 'application/json',
        }
      );
      const data = await response.json();
      dispatch(addPropertiesCityWise({ data: data.data, city: city }))

    } catch (error) {
      console.error('Failed to fetch:', error);
      setError('Failed to perform search');
    } finally {

    }
  };

  return (
    <div className={`home1-advnc-search ${className}`}>

      {error && <p>Error: {error}</p>}
      <ul className="h1ads_1st_list mb0">
        <li className="list-inline-item">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter keyword..."
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
            />
          </div>
        </li>

        <li className="list-inline-item">
          <div className="search_option_two">
            <div className="candidate_revew_select">
              <select
                className="selectpicker w100 form-select show-tick"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              >
                <option value="">Select City</option>
                <option value="Gurugram">Gurugram</option>
                <option value="Noida">Noida</option>
                <option value="Gr. Noida">Gr. Noida</option>
              </select>
            </div>
          </div>
        </li>

        <li className="list-inline-item">
          <div className="search_option_button">
            <button
              onClick={submitHandler}
              type="submit"
              className="btn btn-thm"
            >
              Search
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default GlobalFilter;
