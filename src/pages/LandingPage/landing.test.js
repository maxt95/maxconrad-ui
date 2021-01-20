import React from 'react'
import Landing from './landing'
import { render, screen } from '@testing-library/react'

describe('Landing', () => {
  it('should render the landing page correctly', () => {
    render(<Landing />)
    
    expect(screen.getByText('Max Conrad')).toBeInTheDocument()
    expect(screen.getByText('Software Engineer')).toBeInTheDocument()
    expect(screen.getAllByRole('img')[0]).toBeInTheDocument()
    expect(screen.getByText('LinkedIn')).toBeInTheDocument()
    expect(screen.getByText('Github')).toBeInTheDocument()
    expect(screen.getByText('Resume')).toBeInTheDocument()
    expect(screen.getByText('Portfolio')).toBeInTheDocument()

  })
  
})
