import{j as t,r as d}from"./iframe-BNDruhPA.js";import{u as p}from"./useActivityLogToolbar-Bt_SsC4e.js";import{A as c}from"./ActivityLogItem-B1Em6G85.js";import{S as M}from"./Section-CcOIv3Qj.js";import{T as u}from"./Toolbar-BZloikbE.js";import{B as g}from"./Button-CaDKAluY.js";import{M as v}from"./ModalBase-Csr9qX6t.js";import{M as y,a as x}from"./ModalBody-BfZsUu8q.js";import"./preload-helper-PPVm8Dsz.js";import"./TimelineSegment-C_hyFmDt.js";import"./TimelineBase-DyCUOArI.js";import"./TimelineIcon-ClWOE1Ej.js";import"./XMark-vbUnhqfT.js";import"./useId-28rL4Hsl.js";import"./Icon-Ch0vKaKK.js";import"./index-JM42q3xD.js";import"./Skeleton-3vFplc_z.js";import"./Avatar-Bc7K3VQ6.js";import"./AvatarGroup-CBYJn5rG.js";import"./Flex-DdLGZodm.js";import"./CircleFill-DpphX4y0.js";import"./Byline-DEqke9rA.js";import"./Typography-0VzQ_bGw.js";import"./useHighlightedText-Bss46XCz.js";import"./Timeline-rdbsAkg9.js";import"./TimelineActivity-B45gLcd2.js";import"./useDropdownMenuController-C1OwOjFZ.js";import"./Plus-BN_WRMVc.js";import"./Dropdown-nm23L0U7.js";import"./SearchField-BS2BtTJs.js";import"./MagnifyingGlass-BEj5aS_0.js";import"./FieldBase-CqddQ4KB.js";import"./Label-DEPud0Ho.js";import"./index-BuvBvGLs.js";import"./use-merge-refs-DHcrFN31.js";import"./lite-DaUVFjkg.js";import"./Input-Bq2zza5V.js";import"./input-CeK3s4nJ.js";import"./MenuListItem-DJZ7kLfZ.js";import"./MenuListHeading-CJCU8c8j.js";import"./MenuItem-Zvnz-i4w.js";import"./ItemMedia-C5U6F78e.js";import"./Checkmark-BnLjHgWq.js";import"./Heading-C1Pb_LrU.js";import"./ItemControls-nx23Lp4C.js";import"./ChevronRight-Bcu8s-U3.js";import"./Badge-e7-dfLSt.js";import"./Tooltip-BwDwCRyx.js";import"./floating-ui.dom-DCpi3RTt.js";import"./useMenu-BrVLonhI.js";import"./InformationSquare-BrTKrkbD.js";import"./ChevronUpDown-Biv7c8Vz.js";import"./ButtonGroup-Cj9A7v4t.js";import"./ButtonGroupDivider-B-Z71K8b.js";import"./ToolbarMenu-DOZLhIwW.js";import"./ToolbarSearch-CEz8Ql-T.js";import"./button-Bu4lXR2T.js";const Ct={title:"Timeline/ActivityLog",tags:["beta"],parameters:{},args:{}},i=()=>{const{items:o}=p();return t.jsx(c,{items:o})},n=()=>{const{toolbar:o,items:e}=p();return t.jsxs(M,{spacing:6,children:[t.jsx(u,{...o}),t.jsx(c,{items:e})]})},a=()=>{const{items:o}=p(),[e,s]=d.useState(!0),r=()=>{s(!1)};return t.jsxs(t.Fragment,{children:[t.jsx(g,{onClick:()=>s(!0),children:"Open Modal"}),t.jsxs(v,{open:e,onClose:r,variant:"content",children:[t.jsx(y,{title:"Aktivitetslogg for dialog",onClose:r}),t.jsx(x,{children:t.jsx(c,{items:o})})]})]})},m=()=>{const{toolbar:o,items:e}=p(),[s,r]=d.useState(!0),l=()=>{r(!1)};return t.jsxs(t.Fragment,{children:[t.jsx(g,{onClick:()=>r(!0),children:"Open Modal"}),t.jsxs(v,{open:s,onClose:l,variant:"content",children:[t.jsx(y,{title:"Aktivitetslogg for dialog",onClose:l,sticky:!1}),t.jsxs(x,{children:[t.jsx("div",{style:{position:"sticky",top:"1.5em",zIndex:2},children:t.jsx(u,{...o})}),t.jsx(c,{items:e})]})]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
