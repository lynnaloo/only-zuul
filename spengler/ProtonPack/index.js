module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');
    context.log('Request:\n' + JSON.stringify(req, null, 2));

    const bestGhostbuster = 'Spengler';
    const html = `
    <html>
    <body>
      <center>
        <h2> The Best Ghostbuster is:</h2>
        <br>
        <p><iframe src="https://giphy.com/embed/3o72FiKtrMAjIb0Rhu" width="480" height="201" frameBorder="0" class="giphy-embed" allowFullScreen>
        </iframe>
      </center>
      <br>
      <p><marquee direction="right" width="40%" hspace="30%" scrollamount="14">
      <h1>${bestGhostbuster}</h1>
      </marquee>
    </body>
    </html>`;

    context.res = {
        status: 200,
        body: html,
        headers: {
            'Content-Type': 'text/html'
        }
    };
};
