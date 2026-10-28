var B=Object.defineProperty;var r=(p,c)=>B(p,"name",{value:c,configurable:!0});import{a5 as t,b as n,Q as d}from"./iframe-BfD7syly.js";import{S as m}from"./SearchField-CWWZLGm9.js";import{B as o}from"./ButtonGroup-DFsWLoyK.js";import{B as a}from"./ButtonGroupDivider-CfD_ruqK.js";import{S as l}from"./ChevronUpDown-CjLJ_1zh.js";import{S as x}from"./Plus-Oie_r0eR.js";import{S as h}from"./Bookmark-B2RW4bmm.js";import"./preload-helper-Cc2_yIPf.js";import"./MagnifyingGlass-ClZGDDqe.js";import"./MenuListItem-DkdyT6s3.js";import"./MenuListHeading-BsDHC7at.js";import"./MenuItem-yk1xWr1C.js";import"./ItemMedia-DHigLupS.js";import"./Avatar-DzXDYKXO.js";import"./AvatarGroup-x9OrqdJM.js";import"./Checkmark-DS2-cyTF.js";import"./ItemLabel-C4QOzGgW.js";import"./Heading-M_gD0nhY.js";import"./useHighlightedText-BiU1Xaf8.js";import"./ItemControls-CvMksNjC.js";import"./Badge-tM6hClJt.js";import"./Tooltip-BbiC_D-U.js";import"./ChevronRight-DeJMnotn.js";import"./FieldBase-fk0uyKjd.js";import"./Typography-EJ3Vxj-4.js";import"./Field-DGIr44pk.js";import"./Label-KYDdO5cS.js";import"./Input-BppbGARe.js";import"./useMenu-o9JsDoVb.js";import"./MenuListDivider-VNatTLoD.js";import"./InformationSquare-CmhaWIAD.js";const N={title:"Button/ButtonGroup",component:o,parameters:{},args:{children:"Button"}},e=r(()=>t.jsxs(o,{children:[t.jsx(n,{children:"Button"}),t.jsx(n,{children:"Button"}),t.jsx(n,{children:"Button"})]}),"Default"),u=r(()=>t.jsxs(o,{connected:!0,children:[t.jsx(n,{children:"Button 1"}),t.jsx(n,{children:"Button 2"}),t.jsx(n,{children:"Button 3"})]}),"Connected"),s=r(()=>t.jsxs(o,{connected:!0,children:[t.jsx(n,{children:"Button 1"}),t.jsx(a,{}),t.jsx(n,{children:"Button 2"}),t.jsx(a,{}),t.jsx(n,{children:"Button 3"})]}),"WithDivider"),i=r(()=>t.jsxs(o,{size:"xs",children:[t.jsxs(n,{children:[t.jsx("span",{children:"Menu"}),t.jsx(l,{})]}),t.jsx(m,{placeholder:"Search"}),t.jsxs(o,{connected:!0,variant:"tinted",children:[t.jsx(n,{variant:"tinted",children:"Filter"}),t.jsx(a,{variant:"tinted"}),t.jsx(n,{variant:"tinted",children:t.jsx(d,{})})]}),t.jsxs(n,{variant:"outline",children:[t.jsx(x,{}),t.jsx("span",{children:"Add"})]}),t.jsxs(n,{variant:"ghost",children:[t.jsx(h,{}),t.jsx("span",{children:"Save"})]})]}),"Toolbar"),V=["Default","Connected","WithDivider","Toolbar"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
  return <ButtonGroup>
      <Button>Button</Button>
      <Button>Button</Button>
      <Button>Button</Button>
    </ButtonGroup>;
}`,...e.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
  return <ButtonGroup connected>
      <Button>Button 1</Button>
      <Button>Button 2</Button>
      <Button>Button 3</Button>
    </ButtonGroup>;
}`,...u.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
  return <ButtonGroup connected>
      <Button>Button 1</Button>
      <ButtonGroupDivider />
      <Button>Button 2</Button>
      <ButtonGroupDivider />
      <Button>Button 3</Button>
    </ButtonGroup>;
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
}`,...i.parameters?.docs?.source}}};export{u as Connected,e as Default,i as Toolbar,s as WithDivider,V as __namedExportsOrder,N as default};
