export const daysLeft = date => {
  const chosenDate = Date.parse(date)
  const today = new Date()
  const diffTime = Math.abs(today - chosenDate)
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

  let daysLeft
  diffDays > 1 || 0
    ? (daysLeft = `${diffDays} days left`)
    : (daysLeft = `${diffDays} day left`)
  return daysLeft
}
