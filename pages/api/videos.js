// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import youtubedl from 'youtube-dl-exec'

export default function handler(req, res) {
  // const { urlList } = req.query;
  const urlList = 'https://www.youtube.com/watch?v=FIuMahdQEB0'
  youtubedl(urlList, {
    dumpSingleJson: true,
    noCheckCertificates: true,
    noWarnings: true,
    preferFreeFormats: true,
    addHeader: ["referer:youtube.com", "user-agent:googlebot"],
  }).then((output) =>  res.status(200).json(output));
}
