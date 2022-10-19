import React from "react";
import Card from "react-bootstrap/Card";
const Photos = ({ photos, loading }) => {
  if (loading) {
    return <h1>Loading...</h1>;
  }
  return (
    <Card style={{ width: "18rem" }}>
      {photos.map((item) => (
        <>
          <Card.Img variant="top" src={item.thumbnailUrl} key={item.id} />
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>
          </Card.Body>
        </>
      ))}
    </Card>
  );
};

export default Photos;
