import { useEffect, useState } from "react";
import styled from "styled-components";
import { Artwork } from "../types";
import { Link } from "react-router-dom";

const ArtworkPreviewDiv = styled.div`
  margin: 3rem;
  padding: 1rem;
  width: 20rem;
  background-color: lightpink;
`;

const ArtworkPreview = ({ artwork }: { artwork: Artwork }) => {
  return (
    <Link to={`/artwork/${artwork.id}`} >
      <ArtworkPreviewDiv>
        <h3>{artwork.title}</h3>
        <p>{artwork.place_of_origin}</p>
        <p>{artwork.medium_display}</p>
      </ArtworkPreviewDiv>
    </Link>
  );
};

export default function ArtworksListContent() {
  const [numArtworks, setNumArtworks] = useState(5);
  const [artworks, setArtworks] = useState<Artwork[]>([]);

  useEffect(() => {
    async function getArtworks() {
      const res = await fetch(
        `https://api.artic.edu/api/v1/artworks?limit=${numArtworks}`,
      );
      const data = await res.json();
      setArtworks(data.data);
    }
    getArtworks();
  }, [numArtworks]);

  return (
    <div>
        <h2>Number of Artworks</h2>
      <input
        type="number"
        placeholder="Number of artworks"
        value={numArtworks}
        onChange={(e) => setNumArtworks(Number(e.target.value))}
      />
      <div>
        {artworks.map((artwork) => (
          <ArtworkPreview artwork={artwork} />
        ))}
      </div>
    </div>
  );
}
