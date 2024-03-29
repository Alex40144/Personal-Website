import { DefaultSeoProps } from 'next-seo';

const config: DefaultSeoProps = {
  canonical: 'https://alexpegg.uk/',
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://alexpegg.uk/',
    siteName: 'Alex Pegg',
    description: "Alex's Blog about Software and Electronics",
    images: [
      {
        url: 'https://alexpegg.uk/images/GraphImage.png',
        width: 1200,
        height: 630,
        alt: 'Alex Pegg text',
      }
    ]
  }
};

export default config;