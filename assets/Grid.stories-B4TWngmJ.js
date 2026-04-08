import{i as e}from"./chunk-DseTPa7n.js";import{t}from"./react-CpyhhMkF.js";import{t as n}from"./jsx-runtime-DwqL_Y-t.js";import{t as r}from"./categoryItems-Cwhajgr8.js";import{t as i}from"./ListItem-DAJg57C2.js";import{t as a}from"./Grid-DmCi2t9R.js";var o=e(t(),1),s=n(),c={title:`Page/Grid`,component:a,tags:[`autodocs`,`beta`],parameters:{},args:{as:`ul`,children:(0,s.jsx)(s.Fragment,{children:r?.map(e=>(0,o.createElement)(i,{...e,key:e?.href,linkIcon:!0}))})}},l={args:{cols:3,size:`lg`,children:(0,s.jsx)(s.Fragment,{children:r?.map(e=>(0,o.createElement)(i,{...e,title:{children:e.title,size:`md`,weight:`bold`},variant:`subtle`,key:e?.href,linkIcon:!0}))})}},u={args:{cols:4,size:`sm`,children:(0,s.jsx)(s.Fragment,{children:r?.map(e=>(0,o.createElement)(i,{...e,title:e.title,variant:`subtle`,key:e?.href,linkIcon:!0}))})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    cols: 4,
    size: 'sm',
    children: <>
        {categoryItems?.map(item => <ListItem {...item as ListItemProps} title={item.title} variant="subtle" key={item?.href} linkIcon={true} />)}
      </>
  }
}`,...u.parameters?.docs?.source}}};var d=[`Large`,`Small`];export{l as Large,u as Small,d as __namedExportsOrder,c as default};