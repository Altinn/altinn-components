import{j as e,r as m}from"./iframe-DDirkHus.js";import{t as o}from"./transmissions-DGBPOkTW.js";import{T as a}from"./Transmission-BJsCLNcm.js";import{L as t}from"./List-Cjvw0Kzt.js";const i=o,p={title:"Inbox/Transmission",component:a,tags:["beta"],parameters:{},args:{...i[0]}},s=()=>e.jsx(t,{spacing:2,children:e.jsx(a,{...o[0]})}),r=()=>e.jsx(t,{spacing:2,children:i.map(n=>m.createElement(a,{...n,key:n.id}))});s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
  return <List spacing={2}>
      <Transmission {...transmissions[0] as TransmissionProps} />
    </List>;
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
  return <List spacing={2}>
      {transmissionProps.map(props => <Transmission {...props} key={props.id} />)}
    </List>;
}`,...r.parameters?.docs?.source}}};const c=["Default","UsingBadges"],f=Object.freeze(Object.defineProperty({__proto__:null,Default:s,UsingBadges:r,__namedExportsOrder:c,default:p},Symbol.toStringTag,{value:"Module"}));export{s as D,f as T,r as U};
