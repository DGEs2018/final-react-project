import React from 'react';

const SearchBox = () => {
	return (
		<form className="search-form">
			<label htmlFor="search-bar" />
			<input id="search-input" type="text" placeholder="Search" name="topic-search" />
			<button className="search-button" type="submit">
				Search
			</button>
		</form>
	);
};

export default SearchBox;
