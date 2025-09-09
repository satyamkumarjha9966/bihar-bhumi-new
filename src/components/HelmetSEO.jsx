import React from "react";
import { Helmet } from "react-helmet";

function HelmetSEO(props) {
  const { title, description, keywords } = props;
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Bihar Bhumi" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta
        property="og:image"
        content={"https://www.biharbhumijankari.co.in/assets/bl-eiD12-P4.png"}
      />
      {/* // Update This With Your Live Web URL  */}
      <meta property="og:url" content="https://www.biharbhumijankari.co.in/" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta
        name="twitter:image"
        content={"https://www.biharbhumijankari.co.in/assets/bl-eiD12-P4.png"}
      />
      <meta
        name="twitter:card"
        content={"https://www.biharbhumijankari.co.in/assets/bl-eiD12-P4.png"}
      />
    </Helmet>
  );
}

export default HelmetSEO;
