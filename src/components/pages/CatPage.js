import React, { useState, useEffect } from "react";
import CatCollection from "../CatCollection";
import CatAddForm from "../CatAddForm";
import CatSearch from "../CatSearch";
import { Link } from "react-router-dom";
import { Container, Dimmer, Loader } from "semantic-ui-react";

function CatPage() {
  const [collection, setCollection] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch cat collection data from the server
    fetch("https://cats-json.onrender.com/cats")
      .then((response) => response.json())
      .then((data) => {
        setCollection(data);
        setIsLoading(false); // Set loading state to false once data is fetched
      });
  }, []);

  function addCat(newCat) {
    // Add a new cat to the collection
    setCollection((prevCollection) => [newCat, ...prevCollection]);
  }

  function searchCard(searchedCard) {
    // Filter the collection based on the searched cat name
    const filteredCollection = collection.filter(
      (card) => card.name === searchedCard
    );
    setCollection(filteredCollection);
  }

  const deleteFromScreen = (itemId) => {
    // Remove a cat from the collection based on its ID
    setCollection(collection.filter((item) => itemId !== item.id));
  };

  return (
    <Container style={{ color: "white" }}>
      <br />
      {/* Component for searching cards */}
      <CatSearch searchCard={searchCard} />
      <br />
      {/* Component for adding a new cat */}
      <CatAddForm addCat={addCat} />
      <br />
      <Link style={{ fontWeight: "bold" }} to="/">
        Go to Home Page
      </Link>
      <br />
      <br />
      <br />
      {isLoading ? ( // Show loading message if isLoading is true
        <Dimmer active inverted>
          <Loader content="Loading..." />
        </Dimmer>
      ) : (
        // Show the cat collection if isLoading is false
        <CatCollection
          collection={collection}
          deleteFromScreen={deleteFromScreen}
        />
      )}
    </Container>
  );
}

export default CatPage;
