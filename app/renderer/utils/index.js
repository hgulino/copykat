export function formattedTimestamp() {
  const timeStamp = new Date()
  const y = timeStamp.getFullYear()
  const m = timeStamp.getMonth() + 1
  const d = timeStamp.getDate()
  const h = timeStamp.getHours()
  const mi = timeStamp.getMinutes()
  const s = timeStamp.getSeconds()
  return y + '-' + m + '-' + d + '-' + h + mi + s
}

export function formattedFileName(fileName) {
  if (fileName === null) {
    throw new Error('No file name provided')
  }
  return fileName.replace(/[^a-z0-9]/gi, '-').toLowerCase()
}
