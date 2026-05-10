export type Service = {
  id: string
  title: string
  blurb: string
  icon: 'ac' | 'furnace' | 'duct' | 'water' | 'iaq' | 'maintenance'
}

export const services: Service[] = [
  {
    id: 'install',
    title: 'System installation',
    blurb: 'Right-sized equipment, clean workmanship, and code-compliant installs backed by warranty.',
    icon: 'ac',
  },
  {
    id: 'repair',
    title: 'Repairs & diagnostics',
    blurb: 'Fast, accurate troubleshooting for heat pumps, furnaces, AC, and smart thermostats.',
    icon: 'furnace',
  },
  {
    id: 'maintenance',
    title: 'Tune-ups & memberships',
    blurb: 'Seasonal maintenance that protects efficiency, extends equipment life, and prevents surprises.',
    icon: 'maintenance',
  },
  {
    id: 'duct',
    title: 'Ductwork & airflow',
    blurb: 'Sealing, balancing, and upgrades for quieter, more even comfort room-to-room.',
    icon: 'duct',
  },
  {
    id: 'water',
    title: 'Water heaters',
    blurb: 'Tank and tankless options with energy-smart recommendations for your household.',
    icon: 'water',
  },
  {
    id: 'iaq',
    title: 'Indoor air quality',
    blurb: 'Filtration, humidity control, and ventilation solutions for healthier indoor air.',
    icon: 'iaq',
  },
]
