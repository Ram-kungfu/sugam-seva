const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// सभी HTML फाइलों को सर्व करने के लिए
app.use(express.static(__dirname));

// होम पेज को डिफॉल्ट रूप से लोड करने के लिए
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// सर्वर शुरू करें
app.listen(PORT, () => {
    console.log(`सर्वर चल रहा है पोर्ट ${PORT} पर`);
});
