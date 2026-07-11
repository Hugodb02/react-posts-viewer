import React from 'react'

interface SearchBoxProps {
  searchTerm: string
  onSearchChange: (value: string) => void
}

const SearchBox = ({ searchTerm, onSearchChange }: SearchBoxProps) => {
  return (
      <input
        type="text"
        placeholder="Search posts..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
      />
  )
}

export default SearchBox