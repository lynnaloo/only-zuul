exports.handler = async (event) => {
  console.info('Event:\n' + JSON.stringify(event, null, 2));

  const html = `<html><body>
      <iframe src="https://giphy.com/embed/l3q2HS9FG81YSdkB2" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/ifc-ghostbusters-l3q2HS9FG81YSdkB2">via GIPHY</a></p>
      </body></html>`;

    const response = {
        statusCode: 200,
        body: html,
        headers: {
          'Content-Type': 'text/html'
      }
    };
    return response;
};
