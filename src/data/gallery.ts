export type GalleryProject = {
  title: string
  location: string
  beforeNote: string
  afterNote: string
}

export const galleryProjects: GalleryProject[] = [
  {
    title: 'Heat pump upgrade',
    location: 'Whole-home comfort',
    beforeNote: 'Aging system, uneven temps',
    afterNote: 'High-efficiency heat pump, balanced airflow',
  },
  {
    title: 'Duct sealing project',
    location: 'Two-story home',
    beforeNote: 'Leaky ducts, high bills',
    afterNote: 'Sealed ducts, quieter vents',
  },
  {
    title: 'Furnace replacement',
    location: 'Winter readiness',
    beforeNote: 'Frequent repairs',
    afterNote: 'New furnace, safer operation',
  },
]
