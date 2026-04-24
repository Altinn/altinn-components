import{j as t,r as d}from"./iframe-Dip44woq.js";import{u as p}from"./useActivityLogToolbar-DhnUZ7Ih.js";import{A as c}from"./ActivityLogItem-CWuqFrpp.js";import{S as M}from"./Section-DCVufQoJ.js";import{T as u}from"./Toolbar-DHuCBxNe.js";import{B as g}from"./Button-afp2Zwog.js";import{M as v}from"./ModalBase-DLErh85x.js";import{M as y,a as x}from"./ModalBody-CSIMme3q.js";import"./preload-helper-PPVm8Dsz.js";import"./TimelineSegment-B5VU4Fk_.js";import"./TimelineBase-BZ-JW2IG.js";import"./TimelineIcon-D_V4UM7R.js";import"./XMark-CynTM0oO.js";import"./useId-CMLjH0Fx.js";import"./Icon-B7B4bUSp.js";import"./index-B24kaf2B.js";import"./Skeleton-CxN7sZWy.js";import"./Avatar-kiiFl4Mz.js";import"./AvatarGroup-sgYryoRH.js";import"./Flex-DHvZRHuw.js";import"./CircleFill-DQbeqRwv.js";import"./Byline-uYDAyWrl.js";import"./Typography-9n0VU0yu.js";import"./useHighlightedText-DVvgBsxZ.js";import"./Timeline-BWkr6tkh.js";import"./TimelineActivity-BEKTNJKl.js";import"./useDropdownMenuController-NZ0hfOf3.js";import"./Plus-C3AvEGJ3.js";import"./Dropdown-CRmvDx32.js";import"./SearchField-B2BM1-WP.js";import"./MagnifyingGlass-B4ceu0rd.js";import"./FieldBase-BLO6-Mjz.js";import"./Label-BJSes-CJ.js";import"./index-kI5T7Faz.js";import"./use-merge-refs-BdW2KKDT.js";import"./lite-DaUVFjkg.js";import"./Input-BEs0_VSa.js";import"./input-BsOq1nZd.js";import"./MenuListItem-miXGiz4v.js";import"./MenuListHeading-BQZIqP1w.js";import"./MenuItem-BJUggRUL.js";import"./ItemMedia-5XSAaYKs.js";import"./Checkmark-DnUC-Av1.js";import"./Heading-BGLknJpX.js";import"./ItemControls-CIGgXmTN.js";import"./ChevronRight-DRGzZC3s.js";import"./Badge-Bm1FFy1R.js";import"./Tooltip-D3ALbI7V.js";import"./floating-ui.dom-DCpi3RTt.js";import"./useMenu-BX85xV5m.js";import"./InformationSquare-Cyt3NFHk.js";import"./ChevronUpDown-DLZkoK61.js";import"./ButtonGroup-BAe3FIfN.js";import"./ButtonGroupDivider-hf3rR7Nz.js";import"./ToolbarMenu-DpL5aYJ9.js";import"./ToolbarSearch-a70kL4eJ.js";import"./button-CZ5tfceY.js";const Ct={title:"Timeline/ActivityLog",tags:["beta"],parameters:{},args:{}},i=()=>{const{items:o}=p();return t.jsx(c,{items:o})},n=()=>{const{toolbar:o,items:e}=p();return t.jsxs(M,{spacing:6,children:[t.jsx(u,{...o}),t.jsx(c,{items:e})]})},a=()=>{const{items:o}=p(),[e,s]=d.useState(!0),r=()=>{s(!1)};return t.jsxs(t.Fragment,{children:[t.jsx(g,{onClick:()=>s(!0),children:"Open Modal"}),t.jsxs(v,{open:e,onClose:r,variant:"content",children:[t.jsx(y,{title:"Aktivitetslogg for dialog",onClose:r}),t.jsx(x,{children:t.jsx(c,{items:o})})]})]})},m=()=>{const{toolbar:o,items:e}=p(),[s,r]=d.useState(!0),l=()=>{r(!1)};return t.jsxs(t.Fragment,{children:[t.jsx(g,{onClick:()=>r(!0),children:"Open Modal"}),t.jsxs(v,{open:s,onClose:l,variant:"content",children:[t.jsx(y,{title:"Aktivitetslogg for dialog",onClose:l,sticky:!1}),t.jsxs(x,{children:[t.jsx("div",{style:{position:"sticky",top:"1.5em",zIndex:2},children:t.jsx(u,{...o})}),t.jsx(c,{items:e})]})]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
  const {
    items
  } = useActivityLog();
  return <ActivityLog items={items} />;
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
  const {
    toolbar,
    items
  } = useActivityLog();
  return <Section spacing={6}>
      <Toolbar {...toolbar} />
      <ActivityLog items={items} />
    </Section>;
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
  const {
    items
  } = useActivityLog();
  const [open, setOpen] = useState<boolean>(true);
  const onClose = () => {
    setOpen(false);
  };
  return <>
      <Button onClick={() => setOpen(true)}>Open Modal</Button>
      <ModalBase open={open} onClose={onClose} variant="content">
        <ModalHeader title="Aktivitetslogg for dialog" onClose={onClose} />
        <ModalBody>
          <ActivityLog items={items} />
        </ModalBody>
      </ModalBase>
    </>;
}`,...a.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
  const {
    toolbar,
    items
  } = useActivityLog();
  const [open, setOpen] = useState<boolean>(true);
  const onClose = () => {
    setOpen(false);
  };
  return <>
      <Button onClick={() => setOpen(true)}>Open Modal</Button>
      <ModalBase open={open} onClose={onClose} variant="content">
        <ModalHeader title="Aktivitetslogg for dialog" onClose={onClose} sticky={false} />
        <ModalBody>
          <div style={{
          position: 'sticky',
          top: '1.5em',
          zIndex: 2
        }}>
            <Toolbar {...toolbar} />
          </div>
          <ActivityLog items={items} />
        </ModalBody>
      </ModalBase>
    </>;
}`,...m.parameters?.docs?.source}}};const Bt=["Default","Controlled","ActivityLogModal","ActivityLogModalAdvanced"];export{a as ActivityLogModal,m as ActivityLogModalAdvanced,n as Controlled,i as Default,Bt as __namedExportsOrder,Ct as default};
