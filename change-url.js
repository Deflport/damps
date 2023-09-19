const { updateRoute } = require('@vercel/routes');

exports.handler = async function() {
  // Get the current URL of your Vercel app.
  const currentUrl = await updateRoute.get();

  // Generate a new URL for your Vercel app.
  const newUrl = `https://${currentUrl.domain}/new-url-${Math.floor(Math.random() * 100000)}`;

  // Update the URL of your Vercel app.
  await updateRoute.update({
    domain: newUrl
  });

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'URL successfully updated.'
    })
  };
};
