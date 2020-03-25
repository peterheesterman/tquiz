
interface Error {
  message: string,
  errno: number,
}

const fileNotFoundMessage = "ENOENT: no such file or directory"

function isNoFileError(error: Error) {
  const { errno, message } = error
  return errno === -2 && message.includes(fileNotFoundMessage)
}

export { isNoFileError }
