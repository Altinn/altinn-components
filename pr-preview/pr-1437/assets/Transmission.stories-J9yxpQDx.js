var c=Object.defineProperty;var e=(a,p)=>c(a,"name",{value:p,configurable:!0});import{a7 as n,aa as d}from"./iframe-BXiLaIo1.js";import{t}from"./transmissions-Dsz7iqmk.js";import{T as o}from"./Transmission-BC06aJLv.js";import{L as i}from"./List-BNBV8ThU.js";const m=t,u={title:"Inbox/Transmission",component:o,tags:["beta"],parameters:{},args:{...m[0]}},s=e(()=>n.jsx(i,{spacing:2,children:n.jsx(o,{...t[0]})}),"Default"),r=e(()=>n.jsx(i,{spacing:2,children:m.map(a=>d.createElement(o,{...a,key:a.id}))}),"UsingBadges");s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
  return <List spacing={2}>
      <Transmission {...transmissions[0] as TransmissionProps} />
    </List>;
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
  return <List spacing={2}>
      {transmissionProps.map(props => <Transmission {...props} key={props.id} />)}
    </List>;
}`,...r.parameters?.docs?.source}}};const g=["Default","UsingBadges"],L=Object.freeze(Object.defineProperty({__proto__:null,Default:s,UsingBadges:r,__namedExportsOrder:g,default:u},Symbol.toStringTag,{value:"Module"}));export{s as D,L as T,r as U};
