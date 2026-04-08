import{n as e}from"./chunk-DseTPa7n.js";import{t}from"./jsx-runtime-DwqL_Y-t.js";import{t as n}from"./size-DhJRG3rT.js";import{t as r}from"./Avatar-C6_Byw56.js";import{t as i}from"./Flex-SBjIXoOg.js";var a=e({Companies:()=>y,Company:()=>l,CompanyOutline:()=>u,DeletedCompany:()=>d,DeletedSubunit:()=>p,Loading:()=>h,Logo:()=>m,Logos:()=>b,People:()=>_,Person:()=>c,Sizes:()=>g,Subunit:()=>f,SystemUsers:()=>v,__namedExportsOrder:()=>x,default:()=>s}),o=t(),s={title:`Components/Avatar`,component:r,tags:[`stable`],parameters:{layout:`centered`},args:{name:`Jane Doe`,type:`person`,size:`md`,style:{fontSize:`2.25rem`,width:`2.25rem`,height:`2.25rem`}},argTypes:{size:{control:{type:`select`},options:Object.keys(n)},type:{control:{type:`select`},options:[`person`,`company`,`custom`]}}},c={args:{type:`person`,name:`Jane Doe`}},l={args:{type:`company`,name:`Boligeksperten`}},u={args:{type:`company`,name:`Juletreeksperten`,variant:`outline`}},d={args:{type:`company`,name:`Boligeksperten`,isDeleted:!0}},f={args:{type:`company`,name:`Boligeksperten`,isParent:!1}},p={args:{type:`company`,name:`Boligeksperten`,isParent:!1,isDeleted:!0}},m={args:{type:`company`,imageUrl:`https://avatars.githubusercontent.com/u/1536293?s=200&v=4`,size:`xl`}},h={args:{loading:!0}},g=({type:e=`person`,name:t=`Alfa`,imageUrl:a})=>(0,o.jsx)(i,{spacing:2,align:`end`,children:Object.keys(n).map(n=>(0,o.jsx)(r,{type:e,name:t,size:n,imageUrl:a},n))}),_=()=>(0,o.jsx)(g,{name:`Person`,type:`person`}),v=()=>(0,o.jsx)(g,{name:`Regnskap AS`,type:`system`}),y=()=>(0,o.jsx)(g,{name:`Company`,type:`company`}),b=()=>(0,o.jsx)(g,{type:`company`,name:`Skatteetaten`,imageUrl:`https://avatars.githubusercontent.com/u/1536293?s=200&v=4`});c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'person',
    name: 'Jane Doe'
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'company',
    name: 'Boligeksperten'
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'company',
    name: 'Juletreeksperten',
    variant: 'outline'
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'company',
    name: 'Boligeksperten',
    isDeleted: true
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'company',
    name: 'Boligeksperten',
    isParent: false
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'company',
    name: 'Boligeksperten',
    isParent: false,
    isDeleted: true
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'company',
    imageUrl: 'https://avatars.githubusercontent.com/u/1536293?s=200&v=4',
    size: 'xl'
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    loading: true
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`({
  type = 'person',
  name = 'Alfa',
  imageUrl
}: AvatarProps) => {
  return <Flex spacing={2} align="end">
      {Object.keys(SizeEnum).map(size => {
      return <Avatar type={type as AvatarType} name={name} size={size as AvatarSize} imageUrl={imageUrl} key={size} />;
    })}
    </Flex>;
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`() => {
  return <Sizes name="Person" type="person" />;
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => {
  return <Sizes name="Regnskap AS" type="system" />;
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`() => {
  return <Sizes name="Company" type="company" />;
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`() => {
  return <Sizes type="company" name="Skatteetaten" imageUrl="https://avatars.githubusercontent.com/u/1536293?s=200&v=4" />;
}`,...b.parameters?.docs?.source}}};var x=[`Person`,`Company`,`CompanyOutline`,`DeletedCompany`,`Subunit`,`DeletedSubunit`,`Logo`,`Loading`,`Sizes`,`People`,`SystemUsers`,`Companies`,`Logos`];export{y as Companies,l as Company,u as CompanyOutline,d as DeletedCompany,p as DeletedSubunit,h as Loading,m as Logo,b as Logos,_ as People,c as Person,g as Sizes,f as Subunit,v as SystemUsers,x as __namedExportsOrder,s as default,a as t};