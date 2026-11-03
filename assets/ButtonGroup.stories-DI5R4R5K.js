var B=Object.defineProperty;var r=(p,c)=>B(p,"name",{value:c,configurable:!0});import{a5 as t,b as n,Q as d}from"./iframe-CQ8LzMHp.js";import{S as m}from"./SearchField-0g3sCasv.js";import{B as o}from"./ButtonGroup-CwiMzic7.js";import{B as a}from"./ButtonGroupDivider-DMMhIRDu.js";import{S as l}from"./ChevronUpDown-7ntYmY5l.js";import{S as x}from"./Plus-DLJWKiOB.js";import{S as h}from"./Bookmark-34xC8uML.js";import"./preload-helper-Cc2_yIPf.js";import"./MagnifyingGlass-cYMoIKgd.js";import"./MenuListItem-BuDRebVM.js";import"./MenuListHeading-CsWBJhah.js";import"./MenuItem-DNZJHOTT.js";import"./CheckboxUncheckedIcon-DodbdVRp.js";import"./RadioUncheckedIcon-QGnejBkB.js";import"./ItemMedia-BTxysFbk.js";import"./Avatar-cvm5lBsk.js";import"./AvatarGroup-DeE95cBJ.js";import"./ItemLabel-CgsktDzP.js";import"./Heading-Bqh3Rpnn.js";import"./useHighlightedText-X_Pa7Sct.js";import"./ItemControls--xlpWt8t.js";import"./Badge-DUcHOS9Y.js";import"./Tooltip-Eed-mcd2.js";import"./ChevronRight-ywpt7Pxk.js";import"./FieldBase-wKpsF2Qr.js";import"./Typography-C0hb-rov.js";import"./Field-I35AXfO5.js";import"./Label-BS-vPhzZ.js";import"./Input-BKSTqttN.js";import"./useMenu-CDI-E8wX.js";import"./MenuListDivider-n9hRAznf.js";import"./InformationSquare-BtVNFzkX.js";const V={title:"Button/ButtonGroup",component:o,parameters:{},args:{children:"Button"}},e=r(()=>t.jsxs(o,{children:[t.jsx(n,{children:"Button"}),t.jsx(n,{children:"Button"}),t.jsx(n,{children:"Button"})]}),"Default"),u=r(()=>t.jsxs(o,{connected:!0,children:[t.jsx(n,{children:"Button 1"}),t.jsx(n,{children:"Button 2"}),t.jsx(n,{children:"Button 3"})]}),"Connected"),s=r(()=>t.jsxs(o,{connected:!0,children:[t.jsx(n,{children:"Button 1"}),t.jsx(a,{}),t.jsx(n,{children:"Button 2"}),t.jsx(a,{}),t.jsx(n,{children:"Button 3"})]}),"WithDivider"),i=r(()=>t.jsxs(o,{size:"xs",children:[t.jsxs(n,{children:[t.jsx("span",{children:"Menu"}),t.jsx(l,{})]}),t.jsx(m,{placeholder:"Search"}),t.jsxs(o,{connected:!0,variant:"tinted",children:[t.jsx(n,{variant:"tinted",children:"Filter"}),t.jsx(a,{variant:"tinted"}),t.jsx(n,{variant:"tinted",children:t.jsx(d,{})})]}),t.jsxs(n,{variant:"outline",children:[t.jsx(x,{}),t.jsx("span",{children:"Add"})]}),t.jsxs(n,{variant:"ghost",children:[t.jsx(h,{}),t.jsx("span",{children:"Save"})]})]}),"Toolbar"),Y=["Default","Connected","WithDivider","Toolbar"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
}`,...i.parameters?.docs?.source}}};export{u as Connected,e as Default,i as Toolbar,s as WithDivider,Y as __namedExportsOrder,V as default};
