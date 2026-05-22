import{j as t}from"./iframe-BM6RZuQM.js";import{S as p}from"./SearchField-BgkLBjBi.js";import{B as n}from"./Button-DhtPu9_Y.js";import{B as o}from"./ButtonGroup-DLPKqiPP.js";import{B as a}from"./ButtonGroupDivider-BOAkNbb9.js";import{S as c}from"./XMark-EbOSJv8a.js";import{S as B}from"./ChevronUpDown-DfgLRSTr.js";import{S as d}from"./Plus-DESzxFez.js";import{S as m}from"./Bookmark-BjY-XLx0.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DAnedVDn.js";import"./MagnifyingGlass-D8QlnKcL.js";import"./useId-BYt_OYJh.js";import"./FieldBase-lFVyN1xh.js";import"./Typography-CXaseqiH.js";import"./useHighlightedText-Ctq_ta7p.js";import"./Skeleton-DWzjK3h6.js";import"./Label-C7IFl0uM.js";import"./tooltip-DKLQ4JCb.js";import"./Input-DsxiHlOc.js";import"./MenuListItem-CFW9Qx09.js";import"./MenuListHeading-DdL3Lhhp.js";import"./MenuItem-CZgTJUho.js";import"./ItemMedia-qdtGx-k7.js";import"./Avatar-P_Ikblul.js";import"./AvatarGroup-pynF50Va.js";import"./Icon-m3ZEAfHU.js";import"./Checkmark-CVccove_.js";import"./Heading-aHWaPGZz.js";import"./ItemControls-DdRx042_.js";import"./ChevronRight-B7KHdEb3.js";import"./Badge-QT5oZygk.js";import"./Tooltip-BxiimWqz.js";import"./useMenu-DmjwUxq0.js";import"./index-CvxbdxgD.js";import"./InformationSquare-sR-zXHjU.js";const V={title:"Button/ButtonGroup",component:o,parameters:{},args:{children:"Button"}},r=()=>t.jsxs(o,{children:[t.jsx(n,{children:"Button"}),t.jsx(n,{children:"Button"}),t.jsx(n,{children:"Button"})]}),e=()=>t.jsxs(o,{connected:!0,children:[t.jsx(n,{children:"Button 1"}),t.jsx(n,{children:"Button 2"}),t.jsx(n,{children:"Button 3"})]}),u=()=>t.jsxs(o,{connected:!0,children:[t.jsx(n,{children:"Button 1"}),t.jsx(a,{}),t.jsx(n,{children:"Button 2"}),t.jsx(a,{}),t.jsx(n,{children:"Button 3"})]}),s=()=>t.jsxs(o,{connected:!0,children:[t.jsx(n,{children:"Button 1"}),t.jsx(a,{}),t.jsx(n,{children:t.jsx(c,{})})]}),i=()=>t.jsxs(o,{size:"xs",children:[t.jsxs(n,{children:[t.jsx("span",{children:"Menu"}),t.jsx(B,{})]}),t.jsx(p,{placeholder:"Search"}),t.jsxs(o,{connected:!0,variant:"tinted",children:[t.jsx(n,{variant:"tinted",children:"Filter"}),t.jsx(a,{variant:"tinted"}),t.jsx(n,{variant:"tinted",children:t.jsx(c,{})})]}),t.jsxs(n,{variant:"outline",children:[t.jsx(d,{}),t.jsx("span",{children:"Add"})]}),t.jsxs(n,{variant:"ghost",children:[t.jsx(m,{}),t.jsx("span",{children:"Save"})]})]});r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
  return <ButtonGroup>
      <Button>Button</Button>
      <Button>Button</Button>
      <Button>Button</Button>
    </ButtonGroup>;
}`,...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
  return <ButtonGroup connected>
      <Button>Button 1</Button>
      <Button>Button 2</Button>
      <Button>Button 3</Button>
    </ButtonGroup>;
}`,...e.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
  return <ButtonGroup connected>
      <Button>Button 1</Button>
      <ButtonGroupDivider />
      <Button>Button 2</Button>
      <ButtonGroupDivider />
      <Button>Button 3</Button>
    </ButtonGroup>;
}`,...u.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
  return <ButtonGroup connected>
      <Button>Button 1</Button>
      <ButtonGroupDivider />
      <Button>
        <XMarkIcon />
      </Button>
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
}`,...i.parameters?.docs?.source}}};const Y=["Default","Connected","WithDivider","ComboButton","Toolbar"];export{s as ComboButton,e as Connected,r as Default,i as Toolbar,u as WithDivider,Y as __namedExportsOrder,V as default};
