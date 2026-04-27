import{j as t,r as d}from"./iframe-BJEbXdzo.js";import{u as p}from"./useActivityLogToolbar-Bvr72UUN.js";import{A as c}from"./ActivityLogItem-fT3wdAsA.js";import{S as M}from"./Section-BfJWddEs.js";import{T as u}from"./Toolbar-CMrzLOzQ.js";import{B as g}from"./Button-DNsjk1zC.js";import{M as v}from"./ModalBase-BbF017-v.js";import{M as y,a as x}from"./ModalBody-Ef2KdMhz.js";import"./preload-helper-PPVm8Dsz.js";import"./TimelineSegment-pqDVH3bd.js";import"./TimelineBase-D1OZnV7Y.js";import"./TimelineIcon-Bci-pk5F.js";import"./XMark-sTHnj54s.js";import"./useId-DgrNWXh_.js";import"./Icon-msEkDcFf.js";import"./index-ChGHkNNv.js";import"./Skeleton-DWcIZ1wH.js";import"./Avatar-CcIuhVy2.js";import"./AvatarGroup-Cpo75nCB.js";import"./Flex-DRE_amb0.js";import"./CircleFill-DONxm4eF.js";import"./Byline-DmkRO0cx.js";import"./Typography-D85R78i7.js";import"./useHighlightedText-Chj_Mw3b.js";import"./Timeline-I5TWNVqk.js";import"./TimelineActivity-DltBiDxA.js";import"./useDropdownMenuController-DuWgBdSv.js";import"./Plus-DGG8hdRK.js";import"./Dropdown-BWrGCxZb.js";import"./SearchField-C43D0Bvg.js";import"./MagnifyingGlass-Dp61EhHj.js";import"./FieldBase-s2kWEUm7.js";import"./Label-DQQXrne0.js";import"./index-THETCITG.js";import"./use-merge-refs-BwmZcoLX.js";import"./lite-DaUVFjkg.js";import"./Input-BI0TJMod.js";import"./input-CnbiDkgl.js";import"./MenuListItem-U3U1VVBg.js";import"./MenuListHeading-BxpAf7GB.js";import"./MenuItem-CIe0tXLI.js";import"./ItemMedia-CiNZWpX-.js";import"./Checkmark-DLPFtMmB.js";import"./Heading-1LBL0JVO.js";import"./ItemControls-CAq51EMf.js";import"./ChevronRight-CoSPx3Kv.js";import"./Badge-CNae3IUV.js";import"./Tooltip-Ct0E88k_.js";import"./floating-ui.dom-DCpi3RTt.js";import"./useMenu-9_PPaP-8.js";import"./InformationSquare-e9K9-Rpn.js";import"./ChevronUpDown-PFO21Y4O.js";import"./ButtonGroup-CbGBNNFa.js";import"./ButtonGroupDivider-CFce6icy.js";import"./ToolbarMenu-PoMokTMQ.js";import"./ToolbarSearch-DMcOXt6s.js";import"./button-3a31VMtF.js";const Ct={title:"Timeline/ActivityLog",tags:["beta"],parameters:{},args:{}},i=()=>{const{items:o}=p();return t.jsx(c,{items:o})},n=()=>{const{toolbar:o,items:e}=p();return t.jsxs(M,{spacing:6,children:[t.jsx(u,{...o}),t.jsx(c,{items:e})]})},a=()=>{const{items:o}=p(),[e,s]=d.useState(!0),r=()=>{s(!1)};return t.jsxs(t.Fragment,{children:[t.jsx(g,{onClick:()=>s(!0),children:"Open Modal"}),t.jsxs(v,{open:e,onClose:r,variant:"content",children:[t.jsx(y,{title:"Aktivitetslogg for dialog",onClose:r}),t.jsx(x,{children:t.jsx(c,{items:o})})]})]})},m=()=>{const{toolbar:o,items:e}=p(),[s,r]=d.useState(!0),l=()=>{r(!1)};return t.jsxs(t.Fragment,{children:[t.jsx(g,{onClick:()=>r(!0),children:"Open Modal"}),t.jsxs(v,{open:s,onClose:l,variant:"content",children:[t.jsx(y,{title:"Aktivitetslogg for dialog",onClose:l,sticky:!1}),t.jsxs(x,{children:[t.jsx("div",{style:{position:"sticky",top:"1.5em",zIndex:2},children:t.jsx(u,{...o})}),t.jsx(c,{items:e})]})]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
