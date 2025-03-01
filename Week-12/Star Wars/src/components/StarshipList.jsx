// src/components/StarshipList.js
import React, { useState, useEffect } from "react";
import { fetchStarships } from "./api";
import StarshipDetails from "./StarshipDetails";
import LoadMoreButton from "./LoadMoreButton";

const StarshipList = () => {
  const [starships, setStarships] = useState([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [selectedStarship, setSelectedStarship] = useState(null);

  useEffect(() => {
    const loadStarships = async () => {
      const data = await fetchStarships(page, search);
      setStarships((prev) => [...prev, ...data.results]);
    };
    loadStarships();
  }, [page, search]);

  const handleStarshipClick = (starship) => {
    setSelectedStarship(starship);
  };

  if (selectedStarship) {
    return <StarshipDetails starship={selectedStarship} />;
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Search by name or model"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div>
        {starships.map((starship) => (
          <div
            key={starship.name}
            onClick={() => handleStarshipClick(starship)}
          >
            <h3>{starship.name}</h3>
            <p>Model: {starship.model}</p>
            <p>Max Speed: {starship.max_atmosphering_speed}</p>
          </div>
        ))}
      </div>
      <LoadMoreButton onClick={() => setPage(page + 1)} />
    </div>
  );
};

export default StarshipList;
