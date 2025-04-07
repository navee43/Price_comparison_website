import { config } from 'dotenv';
import express from 'express'
import cors from 'cors'
import axios from 'axios';
const app = express();
config({
  path: "./.env",
});


app.use(cors());

app.get('/api/search', async (req, res) => {
  try {
    const query = req.query.q;
    if (!query) {
      return res.status(400).json({ error: 'Query parameter is missing' });
    }

   const apiKey = process.env.apiKey;
  //  console.log(apiKey)
    const url = `https://serpapi.com/search.json?engine=google&q=${query}&tbm=shop&gl=in&hl=en&google_domain=google.co.in&key=${apiKey}`;

   
    const response = await axios.get(url);

    const limitedProducts = response.data.shopping_results || [];

   
    console.log('Fetched products:', limitedProducts);

    
    res.json(limitedProducts);
  } catch (error) {
   
    console.error('Error fetching data from SerpAPI:', error);

    
    res.status(500).json({
      error: 'Internal Server Error',
      message: error.message,
    });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
