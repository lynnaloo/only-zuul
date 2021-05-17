module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');
    context.log('Request:\n' + JSON.stringify(req, null, 2));

    const html = `<html><body>
    <iframe src="https://giphy.com/embed/3o72FiKtrMAjIb0Rhu" width="480" height="201" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/ghostbustersmovies-ghostbusters-original-3o72FiKtrMAjIb0Rhu">via GIPHY</a></p>
      </body></html>`;

    context.res = {
        status: 200,
        body: html,
        headers: {
            'Content-Type': 'text/html'
        }
    };
};
