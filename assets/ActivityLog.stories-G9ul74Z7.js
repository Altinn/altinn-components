import{j as t,r as d}from"./iframe-DxKlu2kD.js";import{u as p}from"./useActivityLogToolbar-B10u4FD8.js";import{A as c}from"./ActivityLogItem-kyfO822o.js";import{S as M}from"./Section-5cGBq3ET.js";import{T as u}from"./Toolbar-DNndWGFg.js";import{B as g}from"./Button-D78I7hWM.js";import{M as v}from"./ModalBase-DpPU055p.js";import{M as y,a as x}from"./ModalBody-DiTxFtGR.js";import"./preload-helper-PPVm8Dsz.js";import"./TimelineSegment-DLSyoAgH.js";import"./TimelineBase-C5yDueFD.js";import"./TimelineIcon-k4pcML3I.js";import"./XMark-C1fx_pyo.js";import"./useId-_YfdAmsW.js";import"./Icon-CrZKj0Yv.js";import"./index-BWCSYHeO.js";import"./Skeleton-niSIm0IT.js";import"./Avatar-BwF2spoI.js";import"./AvatarGroup-D_QmYd99.js";import"./Flex-CFZAXqgp.js";import"./CircleFill-Bkv2Jc7I.js";import"./Byline-CIOZ3BUJ.js";import"./Typography-iC77LYkz.js";import"./useHighlightedText-DHBtHLKn.js";import"./Timeline-B4fe6Ufl.js";import"./TimelineActivity-Bk5XslKl.js";import"./useDropdownMenuController-cNOqav4I.js";import"./Plus-Dz67JQoo.js";import"./Dropdown-BlFnr1UG.js";import"./SearchField-yItf8ktv.js";import"./MagnifyingGlass-BSd0JI5p.js";import"./FieldBase-DR6_g4FH.js";import"./Label-DPRrgAAI.js";import"./index-sO6KcVLH.js";import"./use-merge-refs-CvQTDNhp.js";import"./lite-DaUVFjkg.js";import"./Input-3npG3_R_.js";import"./input-BTAyJhby.js";import"./MenuListItem-BTPFJyFs.js";import"./MenuListHeading-BCVqt4go.js";import"./MenuItem-kNYALtyW.js";import"./ItemMedia-BBqBVaQK.js";import"./Checkmark-C9NR0hmL.js";import"./Heading-m7XVygop.js";import"./ChevronRight-DCeYx28-.js";import"./Badge-4TJDD2P9.js";import"./useMenu-DwMeQcTX.js";import"./InformationSquare-D9H1eLzz.js";import"./ChevronUpDown-C-rEKWde.js";import"./ButtonGroup-CKoZVXux.js";import"./ButtonGroupDivider-Dzf9jdTg.js";import"./Tooltip-DFu8-nHR.js";import"./floating-ui.dom-DCpi3RTt.js";import"./ToolbarMenu-Ccj2V8zi.js";import"./ToolbarSearch-6qQL0Quv.js";import"./button-B-2CHja_.js";const jt={title:"Timeline/ActivityLog",tags:["beta"],parameters:{},args:{}},i=()=>{const{items:o}=p();return t.jsx(c,{items:o})},n=()=>{const{toolbar:o,items:e}=p();return t.jsxs(M,{spacing:6,children:[t.jsx(u,{...o}),t.jsx(c,{items:e})]})},a=()=>{const{items:o}=p(),[e,s]=d.useState(!0),r=()=>{s(!1)};return t.jsxs(t.Fragment,{children:[t.jsx(g,{onClick:()=>s(!0),children:"Open Modal"}),t.jsxs(v,{open:e,onClose:r,variant:"content",children:[t.jsx(y,{title:"Aktivitetslogg for dialog",onClose:r}),t.jsx(x,{children:t.jsx(c,{items:o})})]})]})},m=()=>{const{toolbar:o,items:e}=p(),[s,r]=d.useState(!0),l=()=>{r(!1)};return t.jsxs(t.Fragment,{children:[t.jsx(g,{onClick:()=>r(!0),children:"Open Modal"}),t.jsxs(v,{open:s,onClose:l,variant:"content",children:[t.jsx(y,{title:"Aktivitetslogg for dialog",onClose:l,sticky:!1}),t.jsxs(x,{children:[t.jsx("div",{style:{position:"sticky",top:"1.5em",zIndex:2},children:t.jsx(u,{...o})}),t.jsx(c,{items:e})]})]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
}`,...m.parameters?.docs?.source}}};const Ct=["Default","Controlled","ActivityLogModal","ActivityLogModalAdvanced"];export{a as ActivityLogModal,m as ActivityLogModalAdvanced,n as Controlled,i as Default,Ct as __namedExportsOrder,jt as default};
