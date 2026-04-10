import{j as t,r as d}from"./iframe-bdb8MxAl.js";import{u as p}from"./useActivityLogToolbar-1SMMEnL9.js";import{A as c}from"./ActivityLogItem-D7Xrr_F9.js";import{S as M}from"./Section-CT0nm1G-.js";import{T as u}from"./Toolbar-axYd7Hfl.js";import{B as g}from"./Button-CmmCg_X2.js";import{M as v}from"./ModalBase-Bp5S3I6D.js";import{M as y,a as x}from"./ModalBody-BsZkJKis.js";import"./preload-helper-PPVm8Dsz.js";import"./TimelineSegment-C4CHxf1B.js";import"./TimelineBase-VcOukt83.js";import"./TimelineIcon-DDT-xkzg.js";import"./XMark-ml8n1JcF.js";import"./useId-m2lwd_Ct.js";import"./Icon-DDIx0qrc.js";import"./index-p3wA3m8m.js";import"./Skeleton-BMmeChMq.js";import"./Avatar-Di5f2hN1.js";import"./AvatarGroup-DeyVKu-1.js";import"./Flex-7ZoZ5Zdr.js";import"./CircleFill-C9TpqB7v.js";import"./Byline-BRx9wIzR.js";import"./Typography-BHyeW1q-.js";import"./useHighlightedText-BZip2xbp.js";import"./Timeline-CBjyCjRR.js";import"./TimelineActivity-CmCf4sl0.js";import"./useDropdownMenuController-CBF1KoVv.js";import"./Plus-B7BchYDv.js";import"./Dropdown-B41Ltmad.js";import"./SearchField-Q9bTEqZH.js";import"./MagnifyingGlass-CUUYZIQ1.js";import"./FieldBase-DvRhg6xr.js";import"./Label-DBSC-MMD.js";import"./index-Bm_5QTlm.js";import"./use-merge-refs-Xyc_Uo3E.js";import"./lite-DaUVFjkg.js";import"./Input-ClF74fUz.js";import"./input-ATX54hdE.js";import"./MenuListItem-CqjGn-MF.js";import"./MenuListHeading-DgV7uPAe.js";import"./MenuItem-CkSmk6Ko.js";import"./ItemMedia-Bzsndyr0.js";import"./Checkmark-YAJv3o3m.js";import"./Heading-BV-bgYII.js";import"./ItemControls-CoqYqtfq.js";import"./ChevronRight-Cnln8IKV.js";import"./Badge-CZZ-T3gy.js";import"./useMenu-Dc6Nz6rI.js";import"./InformationSquare-nixk64HR.js";import"./ChevronUpDown-DUHc-x24.js";import"./ButtonGroup-BdDqNtW_.js";import"./ButtonGroupDivider-CZhGnBHU.js";import"./Tooltip-C9AV6ve2.js";import"./floating-ui.dom-DCpi3RTt.js";import"./ToolbarMenu-BPcwkdao.js";import"./ToolbarSearch-BeZpFf7j.js";import"./button-riuqcLff.js";const Ct={title:"Timeline/ActivityLog",tags:["beta"],parameters:{},args:{}},i=()=>{const{items:o}=p();return t.jsx(c,{items:o})},n=()=>{const{toolbar:o,items:e}=p();return t.jsxs(M,{spacing:6,children:[t.jsx(u,{...o}),t.jsx(c,{items:e})]})},a=()=>{const{items:o}=p(),[e,s]=d.useState(!0),r=()=>{s(!1)};return t.jsxs(t.Fragment,{children:[t.jsx(g,{onClick:()=>s(!0),children:"Open Modal"}),t.jsxs(v,{open:e,onClose:r,variant:"content",children:[t.jsx(y,{title:"Aktivitetslogg for dialog",onClose:r}),t.jsx(x,{children:t.jsx(c,{items:o})})]})]})},m=()=>{const{toolbar:o,items:e}=p(),[s,r]=d.useState(!0),l=()=>{r(!1)};return t.jsxs(t.Fragment,{children:[t.jsx(g,{onClick:()=>r(!0),children:"Open Modal"}),t.jsxs(v,{open:s,onClose:l,variant:"content",children:[t.jsx(y,{title:"Aktivitetslogg for dialog",onClose:l,sticky:!1}),t.jsxs(x,{children:[t.jsx("div",{style:{position:"sticky",top:"1.5em",zIndex:2},children:t.jsx(u,{...o})}),t.jsx(c,{items:e})]})]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
