import { WatchIDs } from './watch-ids'

export type QueuePosition = {
  watch: string
  position: string
}

export const HelmApiClient = () => {
  return {
    getPositions: async (email: string) => {
      const positions: QueuePosition[] = []
      for (const [watch, id] of Object.entries(WatchIDs)) {
        const response = await fetch(
          `https://helmwatches.com/api.php?sheet=${id}&email=${email}`
        )
        const position = await response.text()
        const regex = /^#(?<position>[\d]+)$/g
        const matches = regex.exec(position)
        if (matches && matches.groups)
          positions.push({
            watch,
            position: matches.groups['position'],
          })
      }
      return positions
    },
  }
}
