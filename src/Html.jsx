const style = `
  html {
    font-family: Inter,system-ui,Avenir,Helvetica,Arial,sans-serif;
    line-height: 1;
    font-weight: 400;
    color-scheme: light dark;
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    height: 100vh;
    overflow: hidden;
    margin: 0;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    padding: 0;
    list-style: none;
  }

  li a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80px;
    height: 80px;
    border-radius: 100px;
    font-family: monospace;
    font-size: 18px;
    cursor: pointer;
    text-decoration: none;
  }
`;

export default function Html({ color, children, ...props }) {
  return (
    <html {...props}>
      <head>
        <meta charset="utf-8" />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#000000" />
        <link rel="icon" type="image/png" href="/logo.png" />
        <title>Plain Color{color ? " - " + color : ""}</title>

        <meta name="keywords" content="Color, Plain, Flat, Colors, Colour" />
        <meta name="description" content="A website to display a plain color" />

        <meta property="og:site_name" content="Plain Color Website" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://plain-color.com/" />
        <meta
          property="og:image"
          content="https://plain-color.com/splash.jpg"
        />
        <meta
          property="og:title"
          content="Plain Color - Display a color on the screen"
        />
        <meta
          property="og:description"
          content="A simple website to display a single color on your screen. Click to make it fullscreen."
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:image"
          content="https://plain-color.com/splash.jpg"
        />
        <meta name="twitter:image:alt" content="A pink color" />
        <meta name="twitter:creator" content="@fpresencia" />
        <meta
          name="twitter:title"
          content="Plain Color - Display a color on the screen"
        />
        <meta
          name="twitter:description"
          content="A simple website to display a single color on your screen. Click to make it fullscreen."
        />
        <link rel="manifest" href="/manifest.webmanifest" />

        <style>{style}</style>
      </head>
      <body style={`background: #${color}; background: ${color};`}>
        {children}
      </body>
    </html>
  );
}
