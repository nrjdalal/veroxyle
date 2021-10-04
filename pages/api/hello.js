import axios from 'axios'

export default async function handler(req, res) {
  const info1 = {
    apikey: process.env.APIKEY,
    deviceId: process.env.DEVICEID,
    smsnumber: '9891366155',
    smstext: `Name: ${req.body.name}\nEmail: ${req.body.email}\nMessage: ${req.body.message}`,
  }

  const info2 = {
    apikey: process.env.APIKEY,
    deviceId: process.env.DEVICEID,
    smsnumber: '8383901110',
    smstext: `Name: ${req.body.name}\nEmail: ${req.body.email}\nMessage: ${req.body.message}`,
  }

  try {
    const axr1 = await axios.post(
      'https://joinjoaomgcd.appspot.com/_ah/api/messaging/v1/sendPush',
      info1
    )
    console.log(axr1.data)

    const axr2 = await axios.post(
      'https://joinjoaomgcd.appspot.com/_ah/api/messaging/v1/sendPush',
      info2
    )
    console.log(axr2.data)

    res.status(200).end('OK')
  } catch (e) {
    console.log(e.message)
    res.status(404).end('ERROR')
  }
}
