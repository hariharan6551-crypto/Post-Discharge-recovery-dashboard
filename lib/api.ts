export async function getStats() {
  const res = await fetch("/api/stats")
  return res.json()
}

export async function uploadDataset(file: File) {

  const form = new FormData()
  form.append("file", file)

  const res = await fetch("/api/upload", {
    method: "POST",
    body: form
  })

  return res.json()
}