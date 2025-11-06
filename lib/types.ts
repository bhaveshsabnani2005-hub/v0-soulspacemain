export interface StatusCheck {
  id: string
  client_name: string
  timestamp: string
}

export interface Therapist {
  id: number
  name: string
  specialty: string
  experience: string
  rating: number
  availability: string
  image: string
}

export interface Workshop {
  id: number
  title: string
  date: string
  time: string
  instructor: string
  spots: number
  totalSpots: number
}

export interface Resource {
  id: number
  title: string
  category: string
  readTime: string
  image: string
  excerpt: string
}
