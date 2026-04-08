import{i as e,n as t}from"./chunk-DseTPa7n.js";import{t as n}from"./react-CpyhhMkF.js";import{t as r}from"./jsx-runtime-DwqL_Y-t.js";import{t as i}from"./List-BNjZuxCc.js";import{t as a}from"./Transmission-DQj1gR_5.js";import{t as o}from"./transmissions-BTYH87Aq.js";var s=t({Default:()=>f,UsingBadges:()=>p,__namedExportsOrder:()=>m,default:()=>d}),c=r(),l=e(n(),1),u=o,d={title:`Inbox/Transmission`,component:a,tags:[`beta`],parameters:{},args:{...u[0]}},f=()=>(0,c.jsx)(i,{spacing:2,children:(0,c.jsx)(a,{...o[0]})}),p=()=>(0,c.jsx)(i,{spacing:2,children:u.map(e=>(0,l.createElement)(a,{...e,key:e.id}))});f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => {
  return <List spacing={2}>
      <Transmission {...transmissions[0] as TransmissionProps} />
    </List>;
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
  return <List spacing={2}>
      {transmissionProps.map(props => <Transmission {...props} key={props.id} />)}
    </List>;
}`,...p.parameters?.docs?.source}}};var m=[`Default`,`UsingBadges`];export{f as Default,p as UsingBadges,m as __namedExportsOrder,d as default,s as t};