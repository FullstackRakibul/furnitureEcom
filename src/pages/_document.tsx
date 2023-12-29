import { Html, Head, Main, NextScript } from "next/document";

if (true) {
  process.on("SIGTERM", () => {
    console.log("Received SIGTERM: ", "cleaning up");
    process.exit(0);
  });

  process.on("SIGINT", () => {
    console.log("Received SIGINT: ", "cleaning up");
    process.exit(0);
  });
}

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
