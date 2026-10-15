var x=Object.defineProperty;var r=(d,S)=>x(d,"name",{value:S,configurable:!0});import{a7 as a}from"./iframe-BaqLtPTs.js";import{S as v}from"./size-dYc9b3N-.js";import{A as z}from"./Avatar-DvYNusc4.js";import{F as f}from"./Flex-DAfEpjHq.js";const A={title:"Components/Avatar",component:z,tags:["stable"],parameters:{layout:"centered"},args:{name:"Jane Doe",type:"person",size:"md",style:{fontSize:"2.25rem",width:"2.25rem",height:"2.25rem"}},argTypes:{size:{control:{type:"select"},options:Object.keys(v)},type:{control:{type:"select"},options:["person","company","custom"]}}},s={args:{type:"person",name:"Jane Doe"}},t={args:{type:"company",name:"Boligeksperten"}},n={args:{type:"company",name:"Juletreeksperten",variant:"outline"}},o={args:{type:"company",name:"Boligeksperten",isDeleted:!0}},p={args:{type:"company",name:"Boligeksperten",isParent:!1}},m={args:{type:"company",name:"Boligeksperten",isParent:!1,isDeleted:!0}},c={args:{type:"company",imageUrl:"https://avatars.githubusercontent.com/u/1536293?s=200&v=4",size:"xl"}},i={args:{loading:!0}},e=r(({type:d="person",name:S="Alfa",imageUrl:b})=>a.jsx(f,{spacing:2,align:"end",children:Object.keys(v).map(k=>a.jsx(z,{type:d,name:S,size:k,imageUrl:b},k))}),"Sizes"),u=r(()=>a.jsx(e,{name:"Person",type:"person"}),"People"),l=r(()=>a.jsx(e,{name:"Regnskap AS",type:"system"}),"SystemUsers"),g=r(()=>a.jsx(e,{name:"Company",type:"company"}),"Companies"),y=r(()=>a.jsx(e,{type:"company",name:"Skatteetaten",imageUrl:"https://avatars.githubusercontent.com/u/1536293?s=200&v=4"}),"Logos");s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'person',
    name: 'Jane Doe'
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'company',
    name: 'Boligeksperten'
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'company',
    name: 'Juletreeksperten',
    variant: 'outline'
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'company',
    name: 'Boligeksperten',
    isDeleted: true
  }
}`,...o.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'company',
    name: 'Boligeksperten',
    isParent: false
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'company',
    name: 'Boligeksperten',
    isParent: false,
    isDeleted: true
  }
}`,...m.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'company',
    imageUrl: 'https://avatars.githubusercontent.com/u/1536293?s=200&v=4',
    size: 'xl'
  }
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    loading: true
  }
}`,...i.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`({
  type = 'person',
  name = 'Alfa',
  imageUrl
}: AvatarProps) => {
  return <Flex spacing={2} align="end">
      {Object.keys(SizeEnum).map(size => {
      return <Avatar type={type as AvatarType} name={name} size={size as AvatarSize} imageUrl={imageUrl} key={size} />;
    })}
    </Flex>;
}`,...e.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
  return <Sizes name="Person" type="person" />;
}`,...u.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
  return <Sizes name="Regnskap AS" type="system" />;
}`,...l.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => {
  return <Sizes name="Company" type="company" />;
}`,...g.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`() => {
  return <Sizes type="company" name="Skatteetaten" imageUrl="https://avatars.githubusercontent.com/u/1536293?s=200&v=4" />;
}`,...y.parameters?.docs?.source}}};const P=["Person","Company","CompanyOutline","DeletedCompany","Subunit","DeletedSubunit","Logo","Loading","Sizes","People","SystemUsers","Companies","Logos"],B=Object.freeze(Object.defineProperty({__proto__:null,Companies:g,Company:t,CompanyOutline:n,DeletedCompany:o,DeletedSubunit:m,Loading:i,Logo:c,Logos:y,People:u,Person:s,Sizes:e,Subunit:p,SystemUsers:l,__namedExportsOrder:P,default:A},Symbol.toStringTag,{value:"Module"}));export{B as A,t as C,c as L,s as P};
