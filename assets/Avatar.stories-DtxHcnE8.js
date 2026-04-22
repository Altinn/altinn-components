import{j as r}from"./iframe-C5YDQF8t.js";import{S as d}from"./size-dYc9b3N-.js";import{A as S}from"./Avatar-BGjXXmrj.js";import{F as b}from"./Flex-6suuLzFU.js";const x={title:"Components/Avatar",component:S,tags:["stable"],parameters:{layout:"centered"},args:{name:"Jane Doe",type:"person",size:"md",style:{fontSize:"2.25rem",width:"2.25rem",height:"2.25rem"}},argTypes:{size:{control:{type:"select"},options:Object.keys(d)},type:{control:{type:"select"},options:["person","company","custom"]}}},a={args:{type:"person",name:"Jane Doe"}},s={args:{type:"company",name:"Boligeksperten"}},t={args:{type:"company",name:"Juletreeksperten",variant:"outline"}},n={args:{type:"company",name:"Boligeksperten",isDeleted:!0}},o={args:{type:"company",name:"Boligeksperten",isParent:!1}},p={args:{type:"company",name:"Boligeksperten",isParent:!1,isDeleted:!0}},m={args:{type:"company",imageUrl:"https://avatars.githubusercontent.com/u/1536293?s=200&v=4",size:"xl"}},c={args:{loading:!0}},e=({type:k="person",name:v="Alfa",imageUrl:z})=>r.jsx(b,{spacing:2,align:"end",children:Object.keys(d).map(y=>r.jsx(S,{type:k,name:v,size:y,imageUrl:z},y))}),i=()=>r.jsx(e,{name:"Person",type:"person"}),u=()=>r.jsx(e,{name:"Regnskap AS",type:"system"}),l=()=>r.jsx(e,{name:"Company",type:"company"}),g=()=>r.jsx(e,{type:"company",name:"Skatteetaten",imageUrl:"https://avatars.githubusercontent.com/u/1536293?s=200&v=4"});a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'person',
    name: 'Jane Doe'
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'company',
    name: 'Boligeksperten'
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'company',
    name: 'Juletreeksperten',
    variant: 'outline'
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'company',
    name: 'Boligeksperten',
    isDeleted: true
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'company',
    name: 'Boligeksperten',
    isParent: false
  }
}`,...o.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'company',
    name: 'Boligeksperten',
    isParent: false,
    isDeleted: true
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'company',
    imageUrl: 'https://avatars.githubusercontent.com/u/1536293?s=200&v=4',
    size: 'xl'
  }
}`,...m.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    loading: true
  }
}`,...c.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`({
  type = 'person',
  name = 'Alfa',
  imageUrl
}: AvatarProps) => {
  return <Flex spacing={2} align="end">
      {Object.keys(SizeEnum).map(size => {
      return <Avatar type={type as AvatarType} name={name} size={size as AvatarSize} imageUrl={imageUrl} key={size} />;
    })}
    </Flex>;
}`,...e.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
  return <Sizes name="Person" type="person" />;
}`,...i.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
  return <Sizes name="Regnskap AS" type="system" />;
}`,...u.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
  return <Sizes name="Company" type="company" />;
}`,...l.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => {
  return <Sizes type="company" name="Skatteetaten" imageUrl="https://avatars.githubusercontent.com/u/1536293?s=200&v=4" />;
}`,...g.parameters?.docs?.source}}};const f=["Person","Company","CompanyOutline","DeletedCompany","Subunit","DeletedSubunit","Logo","Loading","Sizes","People","SystemUsers","Companies","Logos"],C=Object.freeze(Object.defineProperty({__proto__:null,Companies:l,Company:s,CompanyOutline:t,DeletedCompany:n,DeletedSubunit:p,Loading:c,Logo:m,Logos:g,People:i,Person:a,Sizes:e,Subunit:o,SystemUsers:u,__namedExportsOrder:f,default:x},Symbol.toStringTag,{value:"Module"}));export{C as A,s as C,m as L,a as P};
