import React, { useEffect, useState } from 'react';
import Autocomplete from "react-google-autocomplete";
import envConsts from '../../consts/envConsts';
import './SearchingInput.css';
import './SearchingInput.css';
// https://www.npmjs.com/package/react-google-autocomplete

function SearchingInput() {
    return (
        // <Autocomplete
        //   apiKey={envConsts.GMAPS_API_KEY}
        //   onPlaceSelected={(place) => {
        //     console.log(place);
        //   }}
        // />
        <div className="SearchingInput-container">
            <h1 className="SearchingInput-title">Simple Weather App </h1>
            <form className="SearchingInput-form">
                <input
                    data-testid="searching-input"
                    className="SearchingInput-input"
                    placeholder="Search for a city" />
                <button className="SearchingInput-button">SUBMIT</button>
            </form>
        </div>
    );
}

export default SearchingInput;