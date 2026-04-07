import{j as t,r as d}from"./iframe-BTgHnb1V.js";import{u as p}from"./useActivityLogToolbar-DSYFOTGC.js";import{A as c}from"./ActivityLogItem-C7kc0_Av.js";import{S as M}from"./Section-B92QpPhv.js";import{T as u}from"./Toolbar-DcawbsEg.js";import{B as g}from"./Button-Ccau3b8T.js";import{M as v}from"./ModalBase-BVMwxguh.js";import{M as y,a as x}from"./ModalBody-QLR0FUOK.js";import"./preload-helper-PPVm8Dsz.js";import"./TimelineSegment-DXu1tsQI.js";import"./TimelineBase-3QOzXgE7.js";import"./TimelineIcon-C5F92MK-.js";import"./XMark-DMQzhoj3.js";import"./useId-DWidDjIe.js";import"./Icon-PY6OftAR.js";import"./index-t_Anj6Qz.js";import"./Skeleton-B3M39f3D.js";import"./Avatar-DpDT0aNa.js";import"./AvatarGroup-4I2zgroj.js";import"./Flex-ujxLNWuk.js";import"./CircleFill-CKRBPMYJ.js";import"./Byline-DW7l22NR.js";import"./Typography-CR3zr5Vv.js";import"./useHighlightedText-DrZCsmQU.js";import"./Timeline-DEICRyBX.js";import"./TimelineActivity-BJSUISty.js";import"./useDropdownMenuController-DQ81-Fhy.js";import"./Plus-D5thgfNG.js";import"./Dropdown-Dca6GJ-b.js";import"./SearchField-Dea1MzEn.js";import"./MagnifyingGlass-DQ3ccb4H.js";import"./FieldBase-B5jTEalp.js";import"./Label-DOnz6ye3.js";import"./index-3lpPu1ww.js";import"./use-merge-refs-8A0H_t2p.js";import"./lite-DaUVFjkg.js";import"./Input-CFaRcvTR.js";import"./input-z_rArVKU.js";import"./MenuListItem-DKnhIWL6.js";import"./MenuListHeading-CfRWVBZN.js";import"./MenuItem-DLwUzMv1.js";import"./ItemMedia-BOGO8xTn.js";import"./Checkmark-jKAH024b.js";import"./Heading-Ca71xFkp.js";import"./ChevronRight-DEDRS1St.js";import"./Badge-sZl2g-is.js";import"./useMenu-DSfKnhCX.js";import"./InformationSquare-BM_VTFR-.js";import"./ChevronUpDown-Btx-mwnL.js";import"./ButtonGroup-CI4RwwaJ.js";import"./ButtonGroupDivider-DWFV_Mpd.js";import"./Tooltip-CnMb4V-4.js";import"./floating-ui.dom-DCpi3RTt.js";import"./ToolbarMenu-CT8pNf2_.js";import"./ToolbarSearch-CMIi4eaQ.js";import"./button-DAOqBeHz.js";const jt={title:"Timeline/ActivityLog",tags:["beta"],parameters:{},args:{}},i=()=>{const{items:o}=p();return t.jsx(c,{items:o})},n=()=>{const{toolbar:o,items:e}=p();return t.jsxs(M,{spacing:6,children:[t.jsx(u,{...o}),t.jsx(c,{items:e})]})},a=()=>{const{items:o}=p(),[e,s]=d.useState(!0),r=()=>{s(!1)};return t.jsxs(t.Fragment,{children:[t.jsx(g,{onClick:()=>s(!0),children:"Open Modal"}),t.jsxs(v,{open:e,onClose:r,variant:"content",children:[t.jsx(y,{title:"Aktivitetslogg for dialog",onClose:r}),t.jsx(x,{children:t.jsx(c,{items:o})})]})]})},m=()=>{const{toolbar:o,items:e}=p(),[s,r]=d.useState(!0),l=()=>{r(!1)};return t.jsxs(t.Fragment,{children:[t.jsx(g,{onClick:()=>r(!0),children:"Open Modal"}),t.jsxs(v,{open:s,onClose:l,variant:"content",children:[t.jsx(y,{title:"Aktivitetslogg for dialog",onClose:l,sticky:!1}),t.jsxs(x,{children:[t.jsx("div",{style:{position:"sticky",top:"1.5em",zIndex:2},children:t.jsx(u,{...o})}),t.jsx(c,{items:e})]})]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
