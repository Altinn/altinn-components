import{j as t,r as d}from"./iframe-B56t8i7v.js";import{u as p}from"./useActivityLogToolbar-DQXJ4lmT.js";import{A as c}from"./ActivityLogItem-B7bPkOk8.js";import{S as M}from"./Section-DXg-mnVx.js";import{T as u}from"./Toolbar-DR_5CA-a.js";import{B as g}from"./Button-x4ugPYkx.js";import{M as v}from"./ModalBase-DAC3P7wf.js";import{M as y,a as x}from"./ModalBody-DZEYNo_5.js";import"./preload-helper-PPVm8Dsz.js";import"./TimelineSegment-CX00THVc.js";import"./TimelineBase-Bh4FZDUn.js";import"./TimelineIcon-ywXyc9iC.js";import"./XMark-CQR84vCO.js";import"./useId-Ce_44NzT.js";import"./Icon-CgN9F-ql.js";import"./index-CHgNdXFp.js";import"./Skeleton-Cer98cLN.js";import"./Avatar-_1995Z8x.js";import"./AvatarGroup-kqIJtB4O.js";import"./Flex-BSViFEWJ.js";import"./CircleFill-nc-5TP0Q.js";import"./Byline-BYqSnbZ1.js";import"./Typography-C36VcWyw.js";import"./useHighlightedText-YMvuFtwb.js";import"./Timeline-DCGolYQ2.js";import"./TimelineActivity-CxDU4itZ.js";import"./useDropdownMenuController-C8fBo27X.js";import"./Plus-DP2GFhc-.js";import"./Dropdown-CjWcilfw.js";import"./SearchField-BtQfQfgA.js";import"./MagnifyingGlass-U17pnqdh.js";import"./FieldBase-BkGCBc8B.js";import"./Label-Bx5THtMF.js";import"./index-pNH6Tvi1.js";import"./use-merge-refs-CJ3sV19d.js";import"./lite-DaUVFjkg.js";import"./Input-DqVNSGAW.js";import"./input-CtI4L4z7.js";import"./MenuListItem-D1jjv5iI.js";import"./MenuListHeading-B46vfCnX.js";import"./MenuItem-CtKw3GMz.js";import"./ItemMedia-DJxakqLL.js";import"./Checkmark-cFLQXWmW.js";import"./Heading-B0k14T1s.js";import"./ItemControls-DurpuKFn.js";import"./ChevronRight-VYKVaZtU.js";import"./Badge-DuKldjFD.js";import"./Tooltip-uv_ZTnws.js";import"./floating-ui.dom-DCpi3RTt.js";import"./useMenu-Bz8Gr0jh.js";import"./InformationSquare-TMwz5OzD.js";import"./ChevronUpDown-txj3YvMU.js";import"./ButtonGroup-DUjF8sgK.js";import"./ButtonGroupDivider-CubiqsGU.js";import"./ToolbarMenu-njzPQ2Ae.js";import"./ToolbarSearch-DgzvuyjV.js";import"./button-BSGP1CSM.js";const Ct={title:"Timeline/ActivityLog",tags:["beta"],parameters:{},args:{}},i=()=>{const{items:o}=p();return t.jsx(c,{items:o})},n=()=>{const{toolbar:o,items:e}=p();return t.jsxs(M,{spacing:6,children:[t.jsx(u,{...o}),t.jsx(c,{items:e})]})},a=()=>{const{items:o}=p(),[e,s]=d.useState(!0),r=()=>{s(!1)};return t.jsxs(t.Fragment,{children:[t.jsx(g,{onClick:()=>s(!0),children:"Open Modal"}),t.jsxs(v,{open:e,onClose:r,variant:"content",children:[t.jsx(y,{title:"Aktivitetslogg for dialog",onClose:r}),t.jsx(x,{children:t.jsx(c,{items:o})})]})]})},m=()=>{const{toolbar:o,items:e}=p(),[s,r]=d.useState(!0),l=()=>{r(!1)};return t.jsxs(t.Fragment,{children:[t.jsx(g,{onClick:()=>r(!0),children:"Open Modal"}),t.jsxs(v,{open:s,onClose:l,variant:"content",children:[t.jsx(y,{title:"Aktivitetslogg for dialog",onClose:l,sticky:!1}),t.jsxs(x,{children:[t.jsx("div",{style:{position:"sticky",top:"1.5em",zIndex:2},children:t.jsx(u,{...o})}),t.jsx(c,{items:e})]})]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
