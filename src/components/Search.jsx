import React, { useState } from 'react';
import { Form, InputGroup,  } from "react-bootstrap";
import { FiSearch } from "react-icons/fi";
import Avatar from "./Avatar";
import twitterColors from './twitterColors';

function Search() {
    const [searchValue, setSearchValue] = useState("");
    const [searchIconColor, setSearchIconColor] = useState(twitterColors.gray);
    const [searchBorder, setSearchBorder] = useState("gray");

    const handleSearchChange = (e) => {
        return setSearchValue(e.target.value);
    }

    const handleSearchFocus = (e) => {
        setSearchIconColor(twitterColors.blue);
        setSearchBorder("blue");
    }

    const handleSearchBlur = (e) => {
        setSearchBorder("gray");
        setSearchIconColor(twitterColors.gray);
    }

    const handleSearchSubmit = (e) =>{
        e.preventDefault();
        console.log(searchValue);

        setSearchValue("");
    }

  return (
    <Form onSubmit={ handleSearchSubmit } className="px-0">
      <InputGroup id="search-input" className={ `p-0 border border-1 border-twitter-${ searchBorder } rounded-pill` }>
        <InputGroup.Text as="label" htmlFor="search" className="ps-2 py-1 border-0 bg-twitter-gray rounded-start-pill" style={ { cursor: 'text' } }>
          <Avatar icon={ FiSearch } size="24" color={ searchIconColor } className="text-secondary bg-transparent" />
        </InputGroup.Text>
        <Form.Control
          id="search"
          type="text"
          value={ searchValue }
          name="searchValue"
          onChange={ handleSearchChange }
          onFocus={ handleSearchFocus }
          onBlur={ handleSearchBlur }
          placeholder="Search"
          className="p-1 rounded-end-pill border-0 text-bg-twitter-gray"
        />
      </InputGroup>
    </Form>
  );
}

export default Search;
