import validator from "email-validator"

export default async function handler(req: any, res: any) {
  // We only want to handle POST requests, everything else gets a 404
  if (req.method === 'POST') {
    await postHandler(req, res);
  } else {
    res.status(404).send("Failed to POST");
  }
}

async function postHandler(req: any, res: any) {
  const body = JSON.parse(req.body);
  const email = parseAndValidateEmail(body, res);
  if(!email)
    return;
  await saveEmail(email, res);
  res.status(200).send("Success");
}

async function saveEmail(email: any, res: any) {
  const airtable = require("airtable");

  airtable.configure({
    endpointUrl: "https://api.airtable.com",
    apiKey: process.env.AIRTABLE_API_KEY
  });
  
  const base = airtable.base(process.env.AIRTABLE_BASE_KEY);
  
  base('Table 1').create([
    {
      "fields": {
        "Email": JSON.stringify(email)
      }
    }
  ], function(err: any, records: any) {
    if (err) {
      res.status(400).send(err);
      return;
    }
  });
  
}

function parseAndValidateEmail(body: any, res: any) {
  if (!body) {
    res.status(400).send("Malformed request");
    return;
  }

  const email = body["email"]
  if (!email) {
    res.status(400).send("Missing email");
    return;
  } else if (email.length > 300) {
    res.status(400).send("Email is too long");
    return;
  } else if (!validator.validate(email)) {
    res.status(400).send("Invalid email");
    return;
  }

  return email;
}