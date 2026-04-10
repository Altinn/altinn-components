import{j as t,r as d}from"./iframe-CEV_bE_y.js";import{u as p}from"./useActivityLogToolbar-B-6KCxY0.js";import{A as c}from"./ActivityLogItem-D0D2jO4R.js";import{S as M}from"./Section-BaBnzd0n.js";import{T as u}from"./Toolbar-ptKb3HCx.js";import{B as g}from"./Button-Camg-mBZ.js";import{M as v}from"./ModalBase-CwOzpdoZ.js";import{M as y,a as x}from"./ModalBody-Dd72ulEZ.js";import"./preload-helper-PPVm8Dsz.js";import"./TimelineSegment-CSZfPNfu.js";import"./TimelineBase-DlgearVZ.js";import"./TimelineIcon-BsQArfin.js";import"./XMark-ByuttVGc.js";import"./useId-BHfJgDBc.js";import"./Icon-BwPDmLy2.js";import"./index-CGpVDQnA.js";import"./Skeleton-cNOPtI7P.js";import"./Avatar-Cf5aI0ZG.js";import"./AvatarGroup-DHx4XjXe.js";import"./Flex-BZtJmJL5.js";import"./CircleFill-CPNIlM8O.js";import"./Byline-BOLAP6vM.js";import"./Typography-BMVOyH8m.js";import"./useHighlightedText-DdOlAfmT.js";import"./Timeline-CmHp1KYm.js";import"./TimelineActivity-BZ2oz212.js";import"./useDropdownMenuController-COGXRvNW.js";import"./Plus-D1UdPMNR.js";import"./Dropdown--G_NTa0P.js";import"./SearchField-C9XAkfHX.js";import"./MagnifyingGlass-D6I6hP_d.js";import"./FieldBase-D397wWlI.js";import"./Label-Cb-tqHHM.js";import"./index-Cr9j_S5O.js";import"./use-merge-refs-Dqc3iuE1.js";import"./lite-DaUVFjkg.js";import"./Input-DQ-BJxC0.js";import"./input-CUhDKlWL.js";import"./MenuListItem-DvZVWiZY.js";import"./MenuListHeading-BxT-phiC.js";import"./MenuItem-D6Egs8SC.js";import"./ItemMedia-DIGN_0r9.js";import"./Checkmark-D-WBqViW.js";import"./Heading-CjHEKkoD.js";import"./ItemControls-Dsxd0fj6.js";import"./ChevronRight-Dck0Zh1j.js";import"./Badge-BVMw9Rw0.js";import"./useMenu-EIG5MfCS.js";import"./InformationSquare-C-romZo4.js";import"./ChevronUpDown-H9bThSVZ.js";import"./ButtonGroup-D8NAEtXB.js";import"./ButtonGroupDivider-BOlJgfYF.js";import"./Tooltip-CRnr2OHK.js";import"./floating-ui.dom-DCpi3RTt.js";import"./ToolbarMenu-BUbt3wjZ.js";import"./ToolbarSearch-lvv6sAqk.js";import"./button-B-6jfb5R.js";const Ct={title:"Timeline/ActivityLog",tags:["beta"],parameters:{},args:{}},i=()=>{const{items:o}=p();return t.jsx(c,{items:o})},n=()=>{const{toolbar:o,items:e}=p();return t.jsxs(M,{spacing:6,children:[t.jsx(u,{...o}),t.jsx(c,{items:e})]})},a=()=>{const{items:o}=p(),[e,s]=d.useState(!0),r=()=>{s(!1)};return t.jsxs(t.Fragment,{children:[t.jsx(g,{onClick:()=>s(!0),children:"Open Modal"}),t.jsxs(v,{open:e,onClose:r,variant:"content",children:[t.jsx(y,{title:"Aktivitetslogg for dialog",onClose:r}),t.jsx(x,{children:t.jsx(c,{items:o})})]})]})},m=()=>{const{toolbar:o,items:e}=p(),[s,r]=d.useState(!0),l=()=>{r(!1)};return t.jsxs(t.Fragment,{children:[t.jsx(g,{onClick:()=>r(!0),children:"Open Modal"}),t.jsxs(v,{open:s,onClose:l,variant:"content",children:[t.jsx(y,{title:"Aktivitetslogg for dialog",onClose:l,sticky:!1}),t.jsxs(x,{children:[t.jsx("div",{style:{position:"sticky",top:"1.5em",zIndex:2},children:t.jsx(u,{...o})}),t.jsx(c,{items:e})]})]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
