import { Helmet } from "react-helmet-async";

const SEO = ({ title, description, keywords, canonical }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta
        name="description"
        content={
          description ||
          "MHV Education offers top stock market courses in Dehradun. Learn trading, technical analysis, and investing from industry experts."
        }
      />
      <meta
        name="keywords"
        content={
          keywords ||
          "stock, market, course, Dehradun, mhv, mhv education, stock market, stock market course, stock market course in Dehradun, stock market course in India, stock market course in Uttarakhand, stock market course in Delhi, stock market course in Mumbai, stock market course in Bangalore, stock market course in Chennai, stock market course in Kolkata, stock market course in Hyderabad, stock market course in Pune"
        }
      />
      {/* <meta name="robots" content="index, follow" /> */}
      {canonical && <link rel="canonical" href={canonical} />}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      />
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//fonts.gstatic.com" />
    </Helmet>
  );
};

export default SEO;
