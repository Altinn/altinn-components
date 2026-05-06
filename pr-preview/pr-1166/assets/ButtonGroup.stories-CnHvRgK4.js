import{j as t}from"./iframe-0B_Yudin.js";import{S as c}from"./SearchField-aP7iZ-N9.js";import{B as n}from"./Button-CFVlP8iN.js";import{B as o}from"./ButtonGroup-CSUZvsoD.js";import{B as a}from"./ButtonGroupDivider-BIa7C9rx.js";import{S as p}from"./XMark-4vnuAWTz.js";import{S as B}from"./ChevronUpDown-oD2FsggY.js";import{S as m}from"./Plus-BmqtHu8-.js";import{S as d}from"./Bookmark-xUjEkd69.js";import"./preload-helper-PPVm8Dsz.js";import"./index-bzqtFzN_.js";import"./MagnifyingGlass-D-_dPVyR.js";import"./useId-BUxMg0Ir.js";import"./FieldBase-BRRzaSEH.js";import"./Typography-WSorE15D.js";import"./useHighlightedText-1P3axs8E.js";import"./Skeleton-CCW5QxrE.js";import"./Label-BawrqgTw.js";import"./index-DeiwrdtL.js";import"./use-merge-refs-ymJsCjoB.js";import"./lite-DaUVFjkg.js";import"./Input-B4vKKvBG.js";import"./input-P8iU2s3c.js";import"./MenuListItem-Dr-AzL0Y.js";import"./MenuListHeading-BRJCvMdb.js";import"./MenuItem-ByHw8468.js";import"./ItemMedia-DPzqoyVf.js";import"./Avatar-BGwRUT15.js";import"./AvatarGroup-VvayKp3V.js";import"./Icon-CbCRlB_g.js";import"./Checkmark-BmAdxrUQ.js";import"./Heading-iCNnL7gN.js";import"./ItemControls-DGPFdAX4.js";import"./ChevronRight-D1gjYegd.js";import"./Badge-BFzKrsnu.js";import"./Tooltip-BPVsTrTk.js";import"./floating-ui.dom-DCpi3RTt.js";import"./useMenu-G8FOBFFN.js";import"./InformationSquare-C3Az81Rf.js";import"./button-B4QTcVhB.js";const tt={title:"Button/ButtonGroup",component:o,parameters:{},args:{children:"Button"}},r=()=>t.jsxs(o,{children:[t.jsx(n,{children:"Button"}),t.jsx(n,{children:"Button"}),t.jsx(n,{children:"Button"})]}),e=()=>t.jsxs(o,{connected:!0,children:[t.jsx(n,{children:"Button 1"}),t.jsx(n,{children:"Button 2"}),t.jsx(n,{children:"Button 3"})]}),u=()=>t.jsxs(o,{connected:!0,children:[t.jsx(n,{children:"Button 1"}),t.jsx(a,{}),t.jsx(n,{children:"Button 2"}),t.jsx(a,{}),t.jsx(n,{children:"Button 3"})]}),s=()=>t.jsxs(o,{connected:!0,children:[t.jsx(n,{children:"Button 1"}),t.jsx(a,{}),t.jsx(n,{children:t.jsx(p,{})})]}),i=()=>t.jsxs(o,{size:"xs",children:[t.jsxs(n,{children:[t.jsx("span",{children:"Menu"}),t.jsx(B,{})]}),t.jsx(c,{placeholder:"Search"}),t.jsxs(o,{connected:!0,variant:"tinted",children:[t.jsx(n,{variant:"tinted",children:"Filter"}),t.jsx(a,{variant:"tinted"}),t.jsx(n,{variant:"tinted",children:t.jsx(p,{})})]}),t.jsxs(n,{variant:"outline",children:[t.jsx(m,{}),t.jsx("span",{children:"Add"})]}),t.jsxs(n,{variant:"ghost",children:[t.jsx(d,{}),t.jsx("span",{children:"Save"})]})]});r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
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
}`,...i.parameters?.docs?.source}}};const nt=["Default","Connected","WithDivider","ComboButton","Toolbar"];export{s as ComboButton,e as Connected,r as Default,i as Toolbar,u as WithDivider,nt as __namedExportsOrder,tt as default};
