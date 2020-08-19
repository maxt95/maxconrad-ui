import React from 'react'
import Header from './Header'
import { render, screen } from '@testing-library/react'

describe('Header', () => {
  it('should render the header correctly', () => {
    render(<Header />)

    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Resume')).toBeInTheDocument()
    expect(screen.getByText('Portfolio')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })
  
})
