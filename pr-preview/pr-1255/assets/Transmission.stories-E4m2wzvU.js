import{a7 as a,aa as m}from"./iframe-Dm8TtyEm.js";import{t as o}from"./transmissions-eV-c4j2_.js";import{T as e}from"./Transmission-BQk--jd_.js";import{L as t}from"./List-Ci6hifXv.js";const i=o,p={title:"Inbox/Transmission",component:e,tags:["beta"],parameters:{},args:{...i[0]}},s=()=>a.jsx(t,{spacing:2,children:a.jsx(e,{...o[0]})}),r=()=>a.jsx(t,{spacing:2,children:i.map(n=>m.createElement(e,{...n,key:n.id}))});s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
  return <List spacing={2}>
      <Transmission {...transmissions[0] as TransmissionProps} />
    </List>;
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
  return <List spacing={2}>
      {transmissionProps.map(props => <Transmission {...props} key={props.id} />)}
    </List>;
}`,...r.parameters?.docs?.source}}};const c=["Default","UsingBadges"],f=Object.freeze(Object.defineProperty({__proto__:null,Default:s,UsingBadges:r,__namedExportsOrder:c,default:p},Symbol.toStringTag,{value:"Module"}));export{s as D,f as T,r as U};
