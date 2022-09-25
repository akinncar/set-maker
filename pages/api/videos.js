// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import youtubedl from 'youtube-dl-exec'

export default async function handler(req, res) {
  const { urlList } = req.query;
  const trimedUrlList = urlList.split(/\s+/).join(' ')
  const urlListArray = trimedUrlList.split(' ')

  let response = await Promise.all(urlListArray.map(async (url) => {
    return youtubedl(url, {
      dumpSingleJson: true,
      noCheckCertificates: true,
      noWarnings: true,
      preferFreeFormats: true,
      addHeader: ["referer:youtube.com", "user-agent:googlebot"],
    })
  }));

  res.status(200).json(response)
}
