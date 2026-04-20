import{j as r,r as u}from"./iframe-yBEatwQ0.js";import{c as g}from"./index-B7J_eA84.js";import{S as x}from"./InformationSquare-CID74XMT.js";import{S as f}from"./XMark-DRdfunCf.js";import{B as k}from"./Button-Du_F5DdO.js";import{F as l}from"./Flex-Co0GST2J.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-DyCIbqyR.js";import"./button-DDduZyu8.js";import"./use-merge-refs-BCyRe6aJ.js";import"./lite-DaUVFjkg.js";const j="_banner_1of7r_1",y="_sticky_1of7r_12",_="_title_1of7r_18",h="_infoIcon_1of7r_25",s={banner:j,sticky:y,title:_,infoIcon:h};var m=(e=>(e.company="company",e.success="success",e.warning="warning",e.danger="danger",e.info="info",e))(m||{});const i=({closeTitle:e="close",onClose:t,text:o,color:p,sticky:d=!0})=>r.jsxs("section",{className:g(s.banner,{[s.sticky]:d}),role:"status","aria-live":"polite","data-color":p,children:[r.jsxs("div",{className:s.title,children:[r.jsx(x,{className:s.infoIcon,"aria-hidden":!0}),r.jsx("span",{children:o})]}),!!t&&r.jsx(k,{variant:"solid",onClick:t,className:s.dismiss,"aria-label":e,children:r.jsx(f,{style:{fontSize:"1.5em"}})})]}),A={title:"Banner/Banner",component:i,tags:["autodocs"],parameters:{},args:{sticky:!0,closeTitle:"Lukk",onClose:()=>console.log("Banner closed"),text:`Du ser nå på en beta-versjon av nye Altinn Innboks i et testmiljø. Alt innhold du ser her er basert på
          testdata og kun ment for demonstrasjon.`}},n={args:{}},a=()=>r.jsx(l,{direction:"col",spacing:3,children:r.jsx(i,{text:"Dette banneret har ingen lukke-knapp"})}),c=e=>{const t=Object.keys(m);return r.jsx(l,{direction:"col",spacing:3,children:t.map(o=>u.createElement(i,{...e,color:o,key:o}))})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
  return <Flex direction="col" spacing={3}>
      <Banner text="Dette banneret har ingen lukke-knapp" />
    </Flex>;
}`,...a.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`(args: BannerProps) => {
  const colors = Object.keys(BannerColorEnum) as BannerColor[];
  return <Flex direction="col" spacing={3}>
      {colors.map(color => <Banner {...args} color={color} key={color} />)}
    </Flex>;
}`,...c.parameters?.docs?.source}}};const W=["Default","WithoutCloseButton","Colors"];export{c as Colors,n as Default,a as WithoutCloseButton,W as __namedExportsOrder,A as default};
