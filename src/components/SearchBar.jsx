import { useState } from "react";


const SearchBar = ({onSearch}) => {
const [searchQuery, setSearchQuery] = useState('')

  
    function handleSubmit(searchInput){
      searchInput.preventDefault()
      onSearch(searchQuery)
    }
  
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
  