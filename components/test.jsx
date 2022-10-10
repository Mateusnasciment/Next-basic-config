import { render , screen } from '@testing-library/react'

import Main from '.'

describe('<Main />',() => {
  it('should render the component', () => {
    render(<Main />)

    expect(
      screen.getByRole('heading', { name: /react avançado/i })
    ).toBeInTheDocument()
    })
})
