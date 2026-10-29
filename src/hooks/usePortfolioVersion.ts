import { versions, resolvePortfolioVersion } from '../data/versions'

export function usePortfolioVersion() {
  return versions[resolvePortfolioVersion()]
}
