import React, { useEffect, useState } from "react";
import {
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Typography,
} from "@mui/material";
import { useStateValue } from "../StateProvider";
import { useNavigate, useSearchParams } from "react-router-dom";

const MobileFilters = ({ handleClose }) => {
  const [{ filters }, dispatch] = useStateValue();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [selectedFilters, setSelectedFilters] = useState({
    price: "none",
    type: "none",
    processor: "none",
    memory: "none",
    os: "none",
  });

  const filterOptions = {
    price: ["LOW to HIGH", "HIGH to LOW", "none"],
    type: ["smartphone", "gaming phone", "camera phone", "none"],
    processor: ["A16", "snapdragon", "qualcomm", "none"],
    memory: ["128 GB", "256 GB", "none"],
    os: ["android", "ios", "none"],
  };

  const handleFilterChange = (filterName, option) => {
    setSelectedFilters({ ...selectedFilters, [filterName]: option });
  };

  const updateFilters = () => {
    dispatch({
      type: "UPDATE_FILTERS",
      item: selectedFilters,
    });
  };

  const fetchNewFilters = () => {
    let x = searchParams.get("q");
    const queryParams = new URLSearchParams();
    queryParams.set("q", x);
    const filtersArr = Object.values(filters);
    queryParams.set("filters", filtersArr.join(","));
    navigate(`/search?${queryParams.toString()}`);
  };

  useEffect(() => {
    updateFilters();
  }, [selectedFilters]);

  return (
    <div className="p-4 w-[250px]">
      <div className="flex justify-between items-center mb-4 font-semibold">
        Choose Filters
      </div>
      <FormGroup>
        {Object.entries(filterOptions).map(([filterName, options]) => (
          <div key={filterName} className="mb-4 text-sm">
            <Typography variant="subtitle1">
              <p className="font-bold">{filterName.toUpperCase()}</p>
            </Typography>
            {options.map((option) => (
              <FormControlLabel
                key={option}
                control={
                  <Checkbox
                    size="small"
                    checked={selectedFilters[filterName] === option}
                    onChange={() => {
                      handleFilterChange(filterName, option);
                    }}
                    name={option}
                  />
                }
                label={option}
              />
            ))}
          </div>
        ))}
      </FormGroup>
      <div className="mt-4 flex justify-end">
        <Button
          variant="contained"
          onClick={() => {
            fetchNewFilters();
            // the handleClose func should run in mobile screen only .i.e to close the filter's dialog box
            if (window.innerWidth <= 850) {
              handleClose();
            }
          }}
        >
          Apply Filters
        </Button>
      </div>
    </div>
  );
};

export default MobileFilters;
