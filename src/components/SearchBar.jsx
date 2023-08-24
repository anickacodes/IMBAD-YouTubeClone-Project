import { useState } from "react";


const SearchBar = ({onSearch}) => {
  // console.log({onSearch})
const [searchQuery, setSearchQuery] = useState('')

    function handleSubmit(searchInput){
      searchInput.preventDefault()
      onSearch(searchQuery)
    }
  // what you type in the input has to match the fecth result's .title name 
  //if on submiit/search result is valid, give it w first 8 videos 
  //if its not valid, "no search results found"

    return (
      <>
      <form onSubmit={handleSubmit}>
       
          <input
            type="text"
            name="search-query"
            id="search-query"
            onChange={(se) => setSearchQuery(se.target.value)}
            value={searchQuery}
          />
          <button type="submit">
            🔎🔍
          </button>
      
      </form>
      <hr />
      </>
    );
  };
  
  export default SearchBar
  