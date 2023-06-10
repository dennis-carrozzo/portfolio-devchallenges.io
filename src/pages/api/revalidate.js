import crypto from 'node:crypto'

export default async function handler (req, res) {
  try {
    verifySignature(req.body, req.headers['webhook-signature'])
    const pathToRevalidate =
      req.body.full_slug === 'home' ? '/' : `/${req.body.full_slug}`
    res.revalidate(pathToRevalidate)
    return res.status(200).json({ revalidated: true })
  } catch (err) {
    console.log(err)
    return res.status(500).json({ message: 'Error revalidating' })
  }
}

function verifySignature (body, signature) {
  const webhookSecret = process.env.CACHE_INVALIDATION_TOKEN
  let bodyHmac = crypto
    .createHmac('sha1', webhookSecret)
    .update(JSON.stringify(body))
    .digest('hex')

  if (bodyHmac !== signature) {
    throw new Error('Signature mismatch!')
  }
}
