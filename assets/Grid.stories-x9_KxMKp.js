import{a7 as t,aa as a}from"./iframe-3eub8g81.js";import{G as m}from"./Grid-D6QmTvpi.js";import{c as i}from"./categoryItems-_L-fKsxG.js";import{L as o}from"./ListItem-Y8YYbtC7.js";import"./preload-helper-PPVm8Dsz.js";import"./HardHat-I3Xo9_GJ.js";import"./Truck-C2bukgRz.js";import"./TeddyBear-lpVUgyBd.js";import"./Buildings2-CcrzKN1f.js";import"./Input-C_lNMvAW.js";import"./Avatar-CwYCtPFD.js";import"./AvatarGroup-5atDHYqT.js";import"./Badge-CMPSGpEc.js";import"./Tooltip-egZN2oaV.js";import"./Heading-Cn9WCavo.js";import"./useHighlightedText-D_KrHTcm.js";import"./ChevronUp-B-pU4SPo.js";import"./ChevronDown-ByzAyPe6.js";import"./ChevronRight-BS_VcXFa.js";const S={title:"Page/Grid",component:m,tags:["autodocs","beta"],parameters:{},args:{as:"ul",children:t.jsx(t.Fragment,{children:i?.map(e=>a.createElement(o,{...e,key:e?.href,linkIcon:!0}))})}},r={args:{cols:3,size:"lg",children:t.jsx(t.Fragment,{children:i?.map(e=>a.createElement(o,{...e,title:{children:e.title,size:"md",weight:"bold"},variant:"subtle",key:e?.href,linkIcon:!0}))})}},s={args:{cols:4,size:"sm",children:t.jsx(t.Fragment,{children:i?.map(e=>a.createElement(o,{...e,title:e.title,variant:"subtle",key:e?.href,linkIcon:!0}))})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    cols: 3,
    size: 'lg',
    children: <>
        {categoryItems?.map(item => <ListItem {...item as ListItemProps} title={{
        children: item.title as string,
        size: 'md',
        weight: 'bold'
      }} variant="subtle" key={item?.href} linkIcon={true} />)}
      </>
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    cols: 4,
    size: 'sm',
    children: <>
        {categoryItems?.map(item => <ListItem {...item as ListItemProps} title={item.title} variant="subtle" key={item?.href} linkIcon={true} />)}
      </>
  }
}`,...s.parameters?.docs?.source}}};const F=["Large","Small"];export{r as Large,s as Small,F as __namedExportsOrder,S as default};
