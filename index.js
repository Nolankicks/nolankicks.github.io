const express = require('express');
const app = express();
const Port = 3000;
const path = require('path');
app.use(express.json());

function GetKey()
{
    let keySectionOne = Math.floor(Math.random() * 8);
    let keySectionTwo = Math.floor(Math.random() * 4);
    let keySectionThree = Math.floor(Math.random() * 4);
    let keySectionFour = Math.floor(Math.random() * 4);
    let keySectionFive = Math.floor(Math.random() * 8);
    let key = keySectionOne + '-' + keySectionTwo + '-' + keySectionThree + '-' + keySectionFour + '-' + keySectionFive;
    return key;
}
async function fetchYoutubeData() {
    try {
      const params = new URLSearchParams({
        part: 'snippet',
        key: 'AIzaSyC_NR07SQ3ozftxhb32BdjXxBQ9JZjyOUQ',
      });
  
      const response = await fetch(`https://www.googleapis.com/youtube/v3/search?${params}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
      return null;
    }
  }
app.post('/message', async (req, res) => {
    const array = ['Hello', 'Hi', 'Hey', 'Hola', 'Bonjour', 'Ciao', 'Namaste', 'Salaam', 'Konnichiwa', 'Ni Hao', 'Guten Tag', 'Shalom', 'Merhaba', 'Olá', 'Kamusta', 'Hej', 'Hei', 'Aloha', 'Zdravstvuyte', 'Ahoj', 'Halo', 'Szia', 'Salut', 'Hallo', 'Hoi', 'Hej', 'Tere', 'Sveiki', 'Salve'];
    const clientdta = req.body;
    console.log(clientdta); 
    let message = clientdta.message;
    const returnMessage = await fetchYoutubeData();
    res.send(returnMessage);
});
app.use(express.static(path.join(__dirname, 'public')));
app.listen(Port, () =>
{
console.log(`Server is running on http://localhost:${Port}`);
});
