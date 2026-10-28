var c=Object.defineProperty;var e=(a,p)=>c(a,"name",{value:p,configurable:!0});import{a5 as n,a8 as d}from"./iframe-BfD7syly.js";import{t}from"./transmissions-CoYxfNoj.js";import{T as o}from"./Transmission-DgLoev6f.js";import{L as i}from"./List-ED_XuXRq.js";const m=t,u={title:"Inbox/Transmission",component:o,tags:["beta"],parameters:{},args:{...m[0]}},s=e(()=>n.jsx(i,{spacing:2,children:n.jsx(o,{...t[0]})}),"Default"),r=e(()=>n.jsx(i,{spacing:2,children:m.map(a=>d.createElement(o,{...a,key:a.id}))}),"UsingBadges"),g=["Default","UsingBadges"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
  return <List spacing={2}>
      <Transmission {...transmissions[0] as TransmissionProps} />
    </List>;
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
  return <List spacing={2}>
      {transmissionProps.map(props => <Transmission {...props} key={props.id} />)}
    </List>;
}`,...r.parameters?.docs?.source}}};const L=Object.freeze(Object.defineProperty({__proto__:null,Default:s,UsingBadges:r,__namedExportsOrder:g,default:u},Symbol.toStringTag,{value:"Module"}));export{s as D,L as T,r as U};
