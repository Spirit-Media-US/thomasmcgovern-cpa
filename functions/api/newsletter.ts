export const onRequestPost: PagesFunction = async (context) => {
  try {
    const formData = await context.request.formData();
    const email = formData.get('email') || '';

    if (!email) {
      return new Response(JSON.stringify({ error: 'Email is required.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Notify site owner of new subscriber via MailChannels
    const mailResponse = await fetch('https://api.mailchannels.net/tx/v1/send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        personalizations: [
          {
            to: [{ email: 'tmcgovern@thomasmcgovern.cpa', name: 'Thomas McGovern' }],
          },
        ],
        from: { email: 'noreply@thomasmcgovern.cpa', name: 'Website Newsletter' },
        subject: `New Newsletter Subscriber: ${email}`,
        content: [
          {
            type: 'text/plain',
            value: `New newsletter signup:\n\nEmail: ${email}\n\nThis subscriber signed up via the website footer newsletter form.`,
          },
        ],
      }),
    });

    if (mailResponse.ok || mailResponse.status === 202) {
      return Response.redirect(new URL('/?subscribed=true', context.request.url).toString(), 303);
    }

    return new Response(JSON.stringify({ error: 'Failed to subscribe. Please try again.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch {
    return new Response(JSON.stringify({ error: 'Server error. Please try again.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
