import React from "react"

import {
  ResultContainer,
  ResultImage,
  SongContainer,
  TitleText,
  ArtistText,
} from "./TrackSearchResults.styles"

const SearchResult = ({ track, chooseTrack }) => {
  function handlePlay() {
    chooseTrack(track)
  }

  return (
    <ResultContainer onClick={handlePlay}>
      <ResultImage src={track.albumUrl} />
      <SongContainer>
        <TitleText>{track.title}</TitleText>
        <ArtistText>{track.artist}</ArtistText>
      </SongContainer>
    </ResultContainer>
  )
}

export default SearchResult