//grabbed from https://nextjs.org/docs/pages/building-your-application/routing/api-routes trying to figure this out

export default function handler(req, res) {
  res.status(200).json({ message: 'Hello from Next.js!' })
}