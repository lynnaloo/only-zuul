exports.handler = async (event) => {
  console.info('Event:\n' + JSON.stringify(event, null, 2));

  const bestGhostbuster = 'Venkman';
  const html = `
  <html>
  <body>
    <center>
      <h2> The Best Ghostbuster is:</h2>
      <br>
      <p>
        <iframe src="https://giphy.com/embed/l3q2HS9FG81YSdkB2" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen>
        </iframe>
      </p>
    </center>
    <br>
    <p><marquee direction="right" width="40%" hspace="30%" scrollamount="14">
    <h1>${bestGhostbuster}</h1>
    </marquee></p>
  </body>
  </html>
  `;

    const response = {
        statusCode: 200,
        body: html,
        headers: {
          'Content-Type': 'text/html'
      }
    };
    return response;
};
