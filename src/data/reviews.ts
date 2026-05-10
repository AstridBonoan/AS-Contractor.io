export type Review = {
  quote: string
  name: string
  location: string
  rating: number
}

export const reviews: Review[] = [
  {
    quote:
      'They replaced our heat pump in one day, explained every option, and the house has never been this comfortable.',
    name: 'Maria L.',
    location: 'Homeowner',
    rating: 5,
  },
  {
    quote:
      'Honest pricing, on-time crew, and they actually cleaned up. That is rare. We already booked our spring tune-up.',
    name: 'James R.',
    location: 'Homeowner',
    rating: 5,
  },
  {
    quote:
      'Emergency call on a Friday night — tech arrived quickly, fixed the issue, and walked us through what to watch for.',
    name: 'Priya S.',
    location: 'Homeowner',
    rating: 5,
  },
]
