import{w as s,p as e,c as r,C as a}from"./iframe-HmDeAVAp.js";import{Colors as i}from"./Banner.stories-qi1MBG_X.js";import"./preload-helper-PPVm8Dsz.js";import"./Banner-DXjLYb3h.js";import"./index-CDtevUxF.js";import"./Heading-CYuK0FXt.js";import"./useHighlightedText-CVbcsWEJ.js";import"./Skeleton-C_Dxe6ID.js";import"./Icon-DE5JaAj2.js";import"./useId-BNhfXdUV.js";import"./InformationSquare-C8JPrkni.js";import"./Typography-C3y2BBzr.js";import"./Button-SB9AH0kY.js";import"./tooltip-DaXe8rKK.js";import"./XMark-DFSmJjac.js";import"./Flex-CKAWkLAd.js";function t(o){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...s(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Banner"}),`
`,e.jsx(n.h1,{id:"the-banner",children:"The Banner"}),`
`,e.jsxs(n.p,{children:["A ",e.jsx(n.code,{children:"Banner"})," is a component designed to display important information or announcements to users. It’s commonly used to highlight updates, promotions, or specific notices, such as a Beta Banner to inform users about ongoing changes or testing phases."]}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"Banner"}),` can be used to convey various types of messages, but the component itself is confined to presenting the message.
Any parent component or consumer of the `,e.jsx(n.code,{children:"Banner"})," should handle the logic for when and how to display it, e.g. text and color, depending on the context."]}),`
`,e.jsx(a,{of:i}),`
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
`})})]})}function E(o={}){const{wrapper:n}={...s(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(t,{...o})}):t(o)}export{E as default};
