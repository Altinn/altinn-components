import{j as t,r as d}from"./iframe-Bs6hWG43.js";import{u as p}from"./useActivityLogToolbar-jAwTIcSO.js";import{A as c}from"./ActivityLogItem-BASOT5bH.js";import{S as M}from"./Section-W4Lgx5KJ.js";import{T as u}from"./Toolbar-BoXZ-EZk.js";import{B as g}from"./Button-eHvnmE12.js";import{M as v}from"./ModalBase-DV93AE3m.js";import{M as y,a as x}from"./ModalBody-CrrxtmpE.js";import"./preload-helper-PPVm8Dsz.js";import"./TimelineSegment-BRDfXVCg.js";import"./TimelineBase-DOn1f9U4.js";import"./TimelineIcon-DL8ZmiVp.js";import"./XMark-Cx14Anho.js";import"./useId-eW1Sa_eP.js";import"./Icon-DjH00Hl5.js";import"./index-DbNSDn3W.js";import"./Skeleton-7NyHq6Da.js";import"./Avatar-BN7VNN79.js";import"./AvatarGroup-DiHJ7hxR.js";import"./Flex-DYzITT_K.js";import"./CircleFill-DIDYhxIO.js";import"./Byline-_MWix_tH.js";import"./Typography-4Wb6MR64.js";import"./useHighlightedText-ByR3-iok.js";import"./Timeline-wgDB-WUu.js";import"./TimelineActivity-D6C0EN8k.js";import"./useDropdownMenuController-D42biJGY.js";import"./Plus-D6ext0KH.js";import"./Dropdown-z94Rg748.js";import"./SearchField-CTJqYruH.js";import"./MagnifyingGlass-ByFYxaCQ.js";import"./FieldBase-BwWmF8XK.js";import"./Label-CqwIAbNx.js";import"./index--1NR6hdE.js";import"./use-merge-refs-CXrn4uAk.js";import"./lite-DaUVFjkg.js";import"./Input-eDTGHBrL.js";import"./input-DdjwQdrU.js";import"./MenuListItem-CaCKNFL_.js";import"./MenuListHeading-DBtCNSz-.js";import"./MenuItem-BL3nnmC3.js";import"./ItemMedia-B6-8h9P0.js";import"./Checkmark-YSQh9b-J.js";import"./Heading-C3DAZ3La.js";import"./ItemControls-CsoavSOP.js";import"./ChevronRight-Xe9lB9nu.js";import"./Badge-XV6ITEub.js";import"./Tooltip-8ajV2_Od.js";import"./floating-ui.dom-DCpi3RTt.js";import"./useMenu-Be0b91uO.js";import"./InformationSquare-C3jahF3t.js";import"./ChevronUpDown-CVBqxrpS.js";import"./ButtonGroup-eeakMgVk.js";import"./ButtonGroupDivider-FKdNiVfP.js";import"./ToolbarMenu-CQxaskWs.js";import"./ToolbarSearch-BUhR0QTI.js";import"./button-BtRKSTW7.js";const Ct={title:"Timeline/ActivityLog",tags:["beta"],parameters:{},args:{}},i=()=>{const{items:o}=p();return t.jsx(c,{items:o})},n=()=>{const{toolbar:o,items:e}=p();return t.jsxs(M,{spacing:6,children:[t.jsx(u,{...o}),t.jsx(c,{items:e})]})},a=()=>{const{items:o}=p(),[e,s]=d.useState(!0),r=()=>{s(!1)};return t.jsxs(t.Fragment,{children:[t.jsx(g,{onClick:()=>s(!0),children:"Open Modal"}),t.jsxs(v,{open:e,onClose:r,variant:"content",children:[t.jsx(y,{title:"Aktivitetslogg for dialog",onClose:r}),t.jsx(x,{children:t.jsx(c,{items:o})})]})]})},m=()=>{const{toolbar:o,items:e}=p(),[s,r]=d.useState(!0),l=()=>{r(!1)};return t.jsxs(t.Fragment,{children:[t.jsx(g,{onClick:()=>r(!0),children:"Open Modal"}),t.jsxs(v,{open:s,onClose:l,variant:"content",children:[t.jsx(y,{title:"Aktivitetslogg for dialog",onClose:l,sticky:!1}),t.jsxs(x,{children:[t.jsx("div",{style:{position:"sticky",top:"1.5em",zIndex:2},children:t.jsx(u,{...o})}),t.jsx(c,{items:e})]})]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
