const formidable = require('formidable');

export async function POST(req, res) {
  if (req.method === 'POST') {
    try {
      const form = new formidable.IncomingForm();

      form.parse(req, async (err, fields, files) => {
        if (err) {
          console.error('Error parsing the form data:', err);
          return res.status(400).json({ message: 'Error parsing form data' });
        }

        // Reconstruct FormData to forward
        const formData = new FormData();
        Object.keys(fields).forEach(key => {
          formData.append(key, fields[key]);
        });
        Object.keys(files).forEach(key => {
          const file = files[key];
          formData.append(key, fs.createReadStream(file.path), file.name);
        });

        const serverurl = process.env.Backend_URL;
        const createPropertyUrl = "/api/property/create";

        const expressResponse = await fetch(`${serverurl}${createPropertyUrl}`, {
          method: 'POST',
          body: formData,
          headers: {
            ...formData.getHeaders() // This includes the correct multipart boundary
          }
        });

        if (!expressResponse.ok) {
          throw new Error(`Error from backend server: ${expressResponse.statusText}`);
        }

        const data = await expressResponse.json();
        res.status(200).json(data);
      });

    } catch (error) {
      console.error('Failed to forward the request:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  } else {
    res.status(405).json({ message: `Method ${req.method} Not Allowed` });
  }
}