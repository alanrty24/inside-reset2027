import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "INSIDE: RESET 2027",
    short_name: "INSIDE",
    description: "Yoga inmersiva, hábitos sostenibles y bienestar integral.",
    start_url: "/",
    display: "standalone",
    background_color: "#fcfaed",
    theme_color: "#5e6132",
    orientation: "portrait-primary",
    lang: "es",
    icons: [
      {
        src: "/icon0.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
      {
        src: "/images/logo.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
