import{j as t,r as d}from"./iframe-BWWyepKi.js";import{u as p}from"./useActivityLogToolbar-B5mZBcKT.js";import{A as c}from"./ActivityLogItem-DHdNkAkY.js";import{S as M}from"./Section-B8U8libR.js";import{T as u}from"./Toolbar-C6C-MWA0.js";import{B as g}from"./Button-DaLP9UzX.js";import{M as v}from"./ModalBase-6CWkGVU3.js";import{M as y,a as x}from"./ModalBody-Bam-amgL.js";import"./preload-helper-PPVm8Dsz.js";import"./TimelineSegment-Debl4_N_.js";import"./TimelineBase-CGBMUZ_i.js";import"./TimelineIcon-Di8Tc-pZ.js";import"./XMark-DJOirLMA.js";import"./useId-CMCVT55W.js";import"./Icon-w9oNx8pI.js";import"./index-fkRlyifr.js";import"./Skeleton-CYDyiFkf.js";import"./Avatar-CiKCHN1S.js";import"./AvatarGroup-DPHuhQ41.js";import"./Flex-C8xEqik7.js";import"./CircleFill-Bc3_okzM.js";import"./Byline-B2BqakG-.js";import"./Typography-C9vgo_J4.js";import"./useHighlightedText-BYfI8EMJ.js";import"./Timeline-DiyYxc3G.js";import"./TimelineActivity-DH8v1xEt.js";import"./useDropdownMenuController-Dc9W55Rj.js";import"./Plus-i5lFDX1a.js";import"./Dropdown-BWKRG_29.js";import"./SearchField-BuZQEnM8.js";import"./MagnifyingGlass-B591vdqr.js";import"./FieldBase-DnRTsvox.js";import"./Label-DYc4A36I.js";import"./index-2Prco8uk.js";import"./use-merge-refs-CbLzoZkL.js";import"./lite-DaUVFjkg.js";import"./Input-BcqR7Mo_.js";import"./input-CuS4pR7j.js";import"./MenuListItem-uASMHa_1.js";import"./MenuListHeading-CgclVl9k.js";import"./MenuItem-Dk1uy6my.js";import"./ItemMedia-h4TQiEvV.js";import"./Checkmark-C84HjHaR.js";import"./Heading-DQYelGqr.js";import"./ItemControls-jVI2cRmn.js";import"./ChevronRight-I2Pyvoyr.js";import"./Badge-CiufGa4u.js";import"./Tooltip-C4xENPhK.js";import"./floating-ui.dom-DCpi3RTt.js";import"./useMenu-BnIxk9FT.js";import"./InformationSquare-WPPzSpdY.js";import"./ChevronUpDown-DN9w9Cg8.js";import"./ButtonGroup-Bf6ZmgRN.js";import"./ButtonGroupDivider-DK_N-BQv.js";import"./ToolbarMenu-CvLeKUcU.js";import"./ToolbarSearch-DZekGqJO.js";import"./button-dq33hCwG.js";const Ct={title:"Timeline/ActivityLog",tags:["beta"],parameters:{},args:{}},i=()=>{const{items:o}=p();return t.jsx(c,{items:o})},n=()=>{const{toolbar:o,items:e}=p();return t.jsxs(M,{spacing:6,children:[t.jsx(u,{...o}),t.jsx(c,{items:e})]})},a=()=>{const{items:o}=p(),[e,s]=d.useState(!0),r=()=>{s(!1)};return t.jsxs(t.Fragment,{children:[t.jsx(g,{onClick:()=>s(!0),children:"Open Modal"}),t.jsxs(v,{open:e,onClose:r,variant:"content",children:[t.jsx(y,{title:"Aktivitetslogg for dialog",onClose:r}),t.jsx(x,{children:t.jsx(c,{items:o})})]})]})},m=()=>{const{toolbar:o,items:e}=p(),[s,r]=d.useState(!0),l=()=>{r(!1)};return t.jsxs(t.Fragment,{children:[t.jsx(g,{onClick:()=>r(!0),children:"Open Modal"}),t.jsxs(v,{open:s,onClose:l,variant:"content",children:[t.jsx(y,{title:"Aktivitetslogg for dialog",onClose:l,sticky:!1}),t.jsxs(x,{children:[t.jsx("div",{style:{position:"sticky",top:"1.5em",zIndex:2},children:t.jsx(u,{...o})}),t.jsx(c,{items:e})]})]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
