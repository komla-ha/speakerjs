import { useState } from "react";
import React from "react";

export default function SearchSpeaker() {
  const [searchText, setSearchText] = useState("");

  return (
    <div>
      <label htmlFor="search">Search speaker: </label>
      <input
        id=" search"
        type="text"
        onChange={(e) => setSearchText(e.target.value)}
      />
      <p>
        Searching for <strong>{searchText}</strong>
      </p>
    </div>
  );
}
