import { LanguagesProps } from '../src/pages/Details'

export function calculatePercentages(
  languages: LanguagesProps,
): LanguagesProps {
  const total: number = Object.values(languages).reduce(
    (acc, curr) => acc + curr,
    0,
  )

  const percentages: LanguagesProps = {}
  for (const language in languages) {
    const quantity: number = languages[language]
    const percentage: number = (quantity / total) * 100
    percentages[language] = parseFloat(percentage.toFixed(2))
  }

  return percentages
}
