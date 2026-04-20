import{j as t,r as d}from"./iframe-CULgtZWU.js";import{u as p}from"./useActivityLogToolbar-DAcM6BBU.js";import{A as c}from"./ActivityLogItem-BU6i4hnn.js";import{S as M}from"./Section-CJ2BqCln.js";import{T as u}from"./Toolbar-BtiZHTnq.js";import{B as g}from"./Button-EDUaKVqz.js";import{M as v}from"./ModalBase-Cbwlfwj5.js";import{M as y,a as x}from"./ModalBody-Boi5XIYD.js";import"./preload-helper-PPVm8Dsz.js";import"./TimelineSegment-jXHVcO5d.js";import"./TimelineBase-BGmhF3-7.js";import"./TimelineIcon-0YZI04d1.js";import"./XMark-BCb0_aBA.js";import"./useId-COk2q28h.js";import"./Icon-G4wS9E1h.js";import"./index-BvBdYXxj.js";import"./Skeleton-B_F13Udl.js";import"./Avatar-DIXtsktU.js";import"./AvatarGroup-C5aSOTjU.js";import"./Flex-CmyJ6DZP.js";import"./CircleFill-Jlmw0H3W.js";import"./Byline-DmLFgqaT.js";import"./Typography-BrN0KsEX.js";import"./useHighlightedText-BLw72BO7.js";import"./Timeline-BKNdDGL5.js";import"./TimelineActivity-BJsDLOBs.js";import"./useDropdownMenuController-BqzfaV4g.js";import"./Plus-Bkcc1EK1.js";import"./Dropdown-CNyPz2U1.js";import"./SearchField-D5aR-gNH.js";import"./MagnifyingGlass-B-SEPcNi.js";import"./FieldBase-DGffeSDz.js";import"./Label-TPhVVF1y.js";import"./index-DY3DIpTU.js";import"./use-merge-refs-BFFvRczq.js";import"./lite-DaUVFjkg.js";import"./Input-C5uL5M8v.js";import"./input-CIkisq6p.js";import"./MenuListItem-bQ_fc2Ge.js";import"./MenuListHeading-gj1aWH_N.js";import"./MenuItem-ByRPat9U.js";import"./ItemMedia-CstP66eQ.js";import"./Checkmark-DEc7m9Qo.js";import"./Heading-QgrsV_VA.js";import"./ItemControls-RibfoZmh.js";import"./ChevronRight-Q1coQceW.js";import"./Badge-CMQ7i3tF.js";import"./useMenu-Do_nneWd.js";import"./InformationSquare-C8Qq6I-D.js";import"./ChevronUpDown-zmPMeN0t.js";import"./ButtonGroup-CUeGctwp.js";import"./ButtonGroupDivider-CHK1_K1s.js";import"./Tooltip-Bn52Dko6.js";import"./floating-ui.dom-DCpi3RTt.js";import"./ToolbarMenu-DyZjnBfk.js";import"./ToolbarSearch-xJqadeFi.js";import"./button-DZmMky1p.js";const Ct={title:"Timeline/ActivityLog",tags:["beta"],parameters:{},args:{}},i=()=>{const{items:o}=p();return t.jsx(c,{items:o})},n=()=>{const{toolbar:o,items:e}=p();return t.jsxs(M,{spacing:6,children:[t.jsx(u,{...o}),t.jsx(c,{items:e})]})},a=()=>{const{items:o}=p(),[e,s]=d.useState(!0),r=()=>{s(!1)};return t.jsxs(t.Fragment,{children:[t.jsx(g,{onClick:()=>s(!0),children:"Open Modal"}),t.jsxs(v,{open:e,onClose:r,variant:"content",children:[t.jsx(y,{title:"Aktivitetslogg for dialog",onClose:r}),t.jsx(x,{children:t.jsx(c,{items:o})})]})]})},m=()=>{const{toolbar:o,items:e}=p(),[s,r]=d.useState(!0),l=()=>{r(!1)};return t.jsxs(t.Fragment,{children:[t.jsx(g,{onClick:()=>r(!0),children:"Open Modal"}),t.jsxs(v,{open:s,onClose:l,variant:"content",children:[t.jsx(y,{title:"Aktivitetslogg for dialog",onClose:l,sticky:!1}),t.jsxs(x,{children:[t.jsx("div",{style:{position:"sticky",top:"1.5em",zIndex:2},children:t.jsx(u,{...o})}),t.jsx(c,{items:e})]})]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
