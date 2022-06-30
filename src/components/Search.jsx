import * as React from "react";
import { styled, alpha } from "@mui/material/styles";

import AutoComplete from "@mui/material/Autocomplete";
import { InputBase, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = ({ products }) => {
	return (
		<>
			<AutoComplete
				freeSolo
				id='search-bar'
				disableClearable
				placeholder='Search…'
				options={products.map((option) => option.title)}
				renderInput={(params) => (
					<TextField
						sx={{ width: 200 }}
						{...params}
						InputProps={{
							...params.InputProps,
							type: "search",
						}}
					/>
				)}
			/>
		</>
	);
};

export default SearchBar;
