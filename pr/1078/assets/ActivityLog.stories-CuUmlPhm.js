import{j as t,r as d}from"./iframe-CFpZEpOT.js";import{u as p}from"./useActivityLogToolbar-CJJMpqwP.js";import{A as c}from"./ActivityLogItem-Bl0ekLRk.js";import{S as M}from"./Section-0tWdfaTG.js";import{T as u}from"./Toolbar-B8d2PW4V.js";import{B as g}from"./Button-C0rUC1sb.js";import{M as v}from"./ModalBase-CZDPyOsV.js";import{M as y,a as x}from"./ModalBody-BZzL8uF4.js";import"./preload-helper-PPVm8Dsz.js";import"./TimelineSegment-C00YI059.js";import"./TimelineBase-CuqstZnc.js";import"./TimelineIcon-CrRkehA9.js";import"./XMark-DsxdrTa7.js";import"./useId-Bpa1--zZ.js";import"./Icon-CcpuJg5J.js";import"./index-CMCH-iYZ.js";import"./Skeleton-BxeTCVQ2.js";import"./Avatar-BgJ1eR8E.js";import"./AvatarGroup-CCJxayqM.js";import"./Flex-LzaqVov5.js";import"./CircleFill-cF14_KcX.js";import"./Byline-BdIMXO9i.js";import"./Typography-CFFVnqbI.js";import"./useHighlightedText-DHCy4ZgC.js";import"./Timeline-Bf8Aiqav.js";import"./TimelineActivity-Q2kuZ2u6.js";import"./useDropdownMenuController-e-RIKU4l.js";import"./Plus-BvInV0-S.js";import"./Dropdown-CxnqCSsD.js";import"./SearchField-7ltHAmFU.js";import"./MagnifyingGlass-C_OdGmS9.js";import"./FieldBase-BKE2EVCO.js";import"./Label-CTb5NEuA.js";import"./index-CBNpaYnn.js";import"./use-merge-refs-DZRIBNsE.js";import"./lite-DaUVFjkg.js";import"./Input-D08OnHI6.js";import"./input-BOf7pxRD.js";import"./MenuListItem-DCTPpMWv.js";import"./MenuListHeading-BZULpIAa.js";import"./MenuItem-BNeTh361.js";import"./ItemMedia-DMrQkYiw.js";import"./Checkmark-DLdUb-vP.js";import"./Heading-Biv3WsI7.js";import"./ChevronRight-Ca_cSWgJ.js";import"./Badge-CiO-ESqG.js";import"./useMenu-BHNp1hvr.js";import"./InformationSquare-DvM0m3_a.js";import"./ChevronUpDown-B9L9cM3W.js";import"./ButtonGroup-ix1R0MqJ.js";import"./ButtonGroupDivider-BWSKwXfh.js";import"./Tooltip-D1tApwsv.js";import"./floating-ui.dom-DCpi3RTt.js";import"./ToolbarMenu-XSpB5bAa.js";import"./ToolbarSearch-Dq1H2eUj.js";import"./button-DcOM5j_b.js";const jt={title:"Timeline/ActivityLog",tags:["beta"],parameters:{},args:{}},i=()=>{const{items:o}=p();return t.jsx(c,{items:o})},n=()=>{const{toolbar:o,items:e}=p();return t.jsxs(M,{spacing:6,children:[t.jsx(u,{...o}),t.jsx(c,{items:e})]})},a=()=>{const{items:o}=p(),[e,s]=d.useState(!0),r=()=>{s(!1)};return t.jsxs(t.Fragment,{children:[t.jsx(g,{onClick:()=>s(!0),children:"Open Modal"}),t.jsxs(v,{open:e,onClose:r,variant:"content",children:[t.jsx(y,{title:"Aktivitetslogg for dialog",onClose:r}),t.jsx(x,{children:t.jsx(c,{items:o})})]})]})},m=()=>{const{toolbar:o,items:e}=p(),[s,r]=d.useState(!0),l=()=>{r(!1)};return t.jsxs(t.Fragment,{children:[t.jsx(g,{onClick:()=>r(!0),children:"Open Modal"}),t.jsxs(v,{open:s,onClose:l,variant:"content",children:[t.jsx(y,{title:"Aktivitetslogg for dialog",onClose:l,sticky:!1}),t.jsxs(x,{children:[t.jsx("div",{style:{position:"sticky",top:"1.5em",zIndex:2},children:t.jsx(u,{...o})}),t.jsx(c,{items:e})]})]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
