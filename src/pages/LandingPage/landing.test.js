import React from 'react'
import Landing from './landing'
import { render, screen } from '@testing-library/react'

describe('Landing', () => {
  it('should render the landing page correctly', () => {
    render(<Landing />)
    
  })
  
})
