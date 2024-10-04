import {useState} from "react";

export default function ArtworksListContent() {
    const [numArtworks, setNumArtworks] = useState(5);

    return(
        <div>
            <h2>Beautiful Arts</h2>
            <label htmlFor="art-num">Enter number of artworks</label>
            <br/>
            <input type="number" placeholder="0" id="art-num" value={numArtworks}
            onChange={(e)=> setNumArtworks(Number(e.target.value))}/>
            <p>Number of Artworks: {numArtworks}</p>
        </div>

    )
}