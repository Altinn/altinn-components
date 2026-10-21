var r=Object.defineProperty;var t=(o,n)=>r(o,"name",{value:n,configurable:!0});import{ag as a,a7 as e,r as i,C as c}from"./iframe-CHdTRX1S.js";import{Colors as l}from"./Banner.stories-C8xudLWy.js";import"./preload-helper-Cc2_yIPf.js";import"./Banner-bPhDqDex.js";import"./Heading-CWEvYxPf.js";import"./useHighlightedText-HQpCSNf5.js";import"./InformationSquare-B7p_A_2X.js";import"./Typography-6g7ttECm.js";import"./Flex-BzRwEaeD.js";function s(o){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...a(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Banner"}),`
`,e.jsx(n.h1,{id:"the-banner",children:"The Banner"}),`
`,e.jsxs(n.p,{children:["A ",e.jsx(n.code,{children:"Banner"})," is a component designed to display important information or announcements to users. It’s commonly used to highlight updates, promotions, or specific notices, such as a Beta Banner to inform users about ongoing changes or testing phases."]}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"Banner"}),` can be used to convey various types of messages, but the component itself is confined to presenting the message.
Any parent component or consumer of the `,e.jsx(n.code,{children:"Banner"})," should handle the logic for when and how to display it, e.g. text and color, depending on the context."]}),`
`,e.jsx(c,{of:l}),`
`,e.jsx(n.h3,{id:"real-usage-example-of-a-beta-banner-in-arbeidsflate",children:"Real usage example of a Beta Banner in Arbeidsflate:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import { useState } from "react";
import { Banner } from "./Banner";

const BETA_BANNER_KEY = "arbeidsflate:show_beta_banner";

export const BetaBanner = () => {
  const isPreviouslyDismissed =
    localStorage.getItem(BETA_BANNER_KEY) === "true";
  const [showBetaBanner, setShowBetaBanner] = useState(!isPreviouslyDismissed);

  const handleClose = () => {
    setShowBetaBanner(false);
    localStorage.setItem(BETA_BANNER_KEY, "true");
  };

  if (!showBetaBanner) return null;

  return (
    <Banner
      onClose={handleClose}
      closeTitle="close"
      title="This is a beta version of Arbeidsflate. We are continuously working on improvements and new features. Please report any issues you encounter."
      color="warning"
    />
  );
};
`})})]})}t(s,"_createMdxContent");function b(o={}){const{wrapper:n}={...a(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(s,{...o})}):s(o)}t(b,"MDXContent");export{b as default};
