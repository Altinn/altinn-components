import{a6 as t,a9 as i}from"./iframe-qf9-WDF6.js";import{G as m}from"./Grid-klMFj-A0.js";import{c as a}from"./categoryItems-DDe-_go8.js";import{L as o}from"./ListItem-B1-OkTGq.js";import"./preload-helper-Cc2_yIPf.js";import"./HardHat-kNL4VjYb.js";import"./Truck-CRjvYaB2.js";import"./TeddyBear-CqoZhk8_.js";import"./Buildings2-BeNd78fo.js";import"./Input-tPq75GZ4.js";import"./Avatar--Y6TPEGR.js";import"./AvatarGroup-DIzE-PAU.js";import"./Badge-DOvVfylv.js";import"./Tooltip-DFjSrT0M.js";import"./Heading-BHDuq3TV.js";import"./useHighlightedText-CpVNHUyQ.js";import"./ChevronUp-eh4muoQm.js";import"./ChevronDown-DGrlTQ0v.js";import"./ChevronRight-NAoaHsS_.js";const S={title:"Page/Grid",component:m,tags:["autodocs"],parameters:{},args:{as:"ul",children:t.jsx(t.Fragment,{children:a?.map(e=>i.createElement(o,{...e,key:e?.href,linkIcon:!0}))})}},r={args:{cols:3,size:"lg",children:t.jsx(t.Fragment,{children:a?.map(e=>i.createElement(o,{...e,title:{children:e.title,size:"md",weight:"bold"},variant:"subtle",key:e?.href,linkIcon:!0}))})}},s={args:{cols:4,size:"sm",children:t.jsx(t.Fragment,{children:a?.map(e=>i.createElement(o,{...e,title:e.title,variant:"subtle",key:e?.href,linkIcon:!0}))})}},F=["Large","Small"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};export{r as Large,s as Small,F as __namedExportsOrder,S as default};
