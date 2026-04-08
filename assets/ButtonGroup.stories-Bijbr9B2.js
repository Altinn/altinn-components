import{t as e}from"./jsx-runtime-DwqL_Y-t.js";import{t}from"./Bookmark-C2zitF8r.js";import{t as n}from"./ChevronUpDown-4B2e5dV5.js";import{t as r}from"./Plus-Cfutkgtq.js";import{t as i}from"./XMark-CDYpubJK.js";import{t as a}from"./SearchField-Bjd6cmAs.js";import{t as o}from"./Button-L6T5IVdq.js";import{t as s}from"./ButtonGroup-qEf-oFo1.js";import{t as c}from"./ButtonGroupDivider-BSuvdKnd.js";var l=e(),u={title:`Button/ButtonGroup`,component:s,parameters:{},args:{children:`Button`}},d=()=>(0,l.jsxs)(s,{children:[(0,l.jsx)(o,{children:`Button`}),(0,l.jsx)(o,{children:`Button`}),(0,l.jsx)(o,{children:`Button`})]}),f=()=>(0,l.jsxs)(s,{connected:!0,children:[(0,l.jsx)(o,{children:`Button 1`}),(0,l.jsx)(o,{children:`Button 2`}),(0,l.jsx)(o,{children:`Button 3`})]}),p=()=>(0,l.jsxs)(s,{connected:!0,children:[(0,l.jsx)(o,{children:`Button 1`}),(0,l.jsx)(c,{}),(0,l.jsx)(o,{children:`Button 2`}),(0,l.jsx)(c,{}),(0,l.jsx)(o,{children:`Button 3`})]}),m=()=>(0,l.jsxs)(s,{connected:!0,children:[(0,l.jsx)(o,{children:`Button 1`}),(0,l.jsx)(c,{}),(0,l.jsx)(o,{children:(0,l.jsx)(i,{})})]}),h=()=>(0,l.jsxs)(s,{size:`xs`,children:[(0,l.jsxs)(o,{children:[(0,l.jsx)(`span`,{children:`Menu`}),(0,l.jsx)(n,{})]}),(0,l.jsx)(a,{placeholder:`Search`}),(0,l.jsxs)(s,{connected:!0,variant:`tinted`,children:[(0,l.jsx)(o,{variant:`tinted`,children:`Filter`}),(0,l.jsx)(c,{variant:`tinted`}),(0,l.jsx)(o,{variant:`tinted`,children:(0,l.jsx)(i,{})})]}),(0,l.jsxs)(o,{variant:`outline`,children:[(0,l.jsx)(r,{}),(0,l.jsx)(`span`,{children:`Add`})]}),(0,l.jsxs)(o,{variant:`ghost`,children:[(0,l.jsx)(t,{}),(0,l.jsx)(`span`,{children:`Save`})]})]});d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
  return <ButtonGroup>
      <Button>Button</Button>
      <Button>Button</Button>
      <Button>Button</Button>
    </ButtonGroup>;
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => {
  return <ButtonGroup connected>
      <Button>Button 1</Button>
      <Button>Button 2</Button>
      <Button>Button 3</Button>
    </ButtonGroup>;
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
  return <ButtonGroup connected>
      <Button>Button 1</Button>
      <ButtonGroupDivider />
      <Button>Button 2</Button>
      <ButtonGroupDivider />
      <Button>Button 3</Button>
    </ButtonGroup>;
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
  return <ButtonGroup connected>
      <Button>Button 1</Button>
      <ButtonGroupDivider />
      <Button>
        <XMarkIcon />
      </Button>
    </ButtonGroup>;
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`() => {
  return <ButtonGroup size="xs">
      <Button>
        <span>Menu</span>
        <ChevronUpDownIcon />
      </Button>
      <SearchField placeholder="Search" />
      <ButtonGroup connected variant="tinted">
        <Button variant="tinted">Filter</Button>
        <ButtonGroupDivider variant="tinted" />
        <Button variant="tinted">
          <XMarkIcon />
        </Button>
      </ButtonGroup>
      <Button variant="outline">
        <PlusIcon />
        <span>Add</span>
      </Button>
      <Button variant="ghost">
        <BookmarkIcon />
        <span>Save</span>
      </Button>
    </ButtonGroup>;
}`,...h.parameters?.docs?.source}}};var g=[`Default`,`Connected`,`WithDivider`,`ComboButton`,`Toolbar`];export{m as ComboButton,f as Connected,d as Default,h as Toolbar,p as WithDivider,g as __namedExportsOrder,u as default};