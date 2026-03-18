export async function submitNetlifyForm(formName: string, fields: Record<string, string>) {
  const params = new URLSearchParams({ 'form-name': formName, ...fields })
  const res = await fetch('/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: params.toString(),
  })
  if (!res.ok) {
    const text = await res.text().catch(() => '')
    throw new Error(text || `Form submission failed (${res.status})`)
  }
}

