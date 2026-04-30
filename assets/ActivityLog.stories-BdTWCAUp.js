import{j as t,r as d}from"./iframe-CHILL5tZ.js";import{u as p}from"./useActivityLogToolbar-DR3LvURN.js";import{A as c}from"./ActivityLogItem-C0IobGqA.js";import{S as A}from"./Section-DgehUQNo.js";import{T as u}from"./Toolbar-wTmE4DS7.js";import{B as g}from"./Button-BhP7fHb4.js";import{M as v,a as y,b as x}from"./ModalBody-D4FH2jV5.js";import"./preload-helper-PPVm8Dsz.js";import"./TimelineSegment-DBpmBzqo.js";import"./TimelineBase-QHgZgGqz.js";import"./TimelineIcon-B_pk3HFs.js";import"./XMark-DQxCv5Yn.js";import"./useId-CxjMVxT3.js";import"./Icon-DK0uLDnk.js";import"./index-D0JdUEkn.js";import"./Skeleton-BX9QnUCy.js";import"./Avatar-BEHn6hs3.js";import"./AvatarGroup-9Hd8MZfa.js";import"./Flex-A7S1F2F0.js";import"./CircleFill-CHqPdS2M.js";import"./Byline-Dcj1C1qm.js";import"./Typography-BDbDV84g.js";import"./useHighlightedText-sycLCu80.js";import"./Timeline-BFkUXqqF.js";import"./TimelineActivity-B5_aUQL5.js";import"./useDropdownMenuController-BYzUrJMj.js";import"./Plus-V3d-3j45.js";import"./Dropdown-riFJwjzV.js";import"./SearchField-DpxDm5xW.js";import"./MagnifyingGlass-Z3jVe5X3.js";import"./FieldBase-DGrlYpX7.js";import"./Label-BmNpXiOX.js";import"./index-ASxRsC3U.js";import"./use-merge-refs-BXZnV1dm.js";import"./lite-DaUVFjkg.js";import"./Input-F-jc7mgY.js";import"./input-BiYbaGgt.js";import"./MenuListItem-D8HsXFkE.js";import"./MenuListHeading-D8Av5awU.js";import"./MenuItem-DaU4SSfC.js";import"./ItemMedia-BDXURQdO.js";import"./Checkmark-nA2yaQnq.js";import"./Heading-B80Wap_u.js";import"./ItemControls-Okligr0R.js";import"./ChevronRight-C2HiJ5JV.js";import"./Badge-DHaboY8X.js";import"./Tooltip-gqkYQCXG.js";import"./floating-ui.dom-DCpi3RTt.js";import"./useMenu-CBS-gOUF.js";import"./InformationSquare-qW6C7jKR.js";import"./ChevronUpDown-D1AR4jxs.js";import"./ButtonGroup-85VHWPxh.js";import"./ButtonGroupDivider-BzY6J6Jz.js";import"./ToolbarMenu-CiEtpkyk.js";import"./ToolbarSearch-Ce8v13vg.js";import"./button-BIgBCVIC.js";const jt={title:"Timeline/ActivityLog",tags:["beta"],parameters:{},args:{}},i=()=>{const{items:o}=p();return t.jsx(c,{items:o})},n=()=>{const{toolbar:o,items:e}=p();return t.jsxs(A,{spacing:6,children:[t.jsx(u,{...o}),t.jsx(c,{items:e})]})},a=()=>{const{items:o}=p(),[e,s]=d.useState(!0),r=()=>{s(!1)};return t.jsxs(t.Fragment,{children:[t.jsx(g,{onClick:()=>s(!0),children:"Open Modal"}),t.jsxs(v,{open:e,onClose:r,variant:"content",children:[t.jsx(y,{title:"Aktivitetslogg for dialog",onClose:r}),t.jsx(x,{children:t.jsx(c,{items:o})})]})]})},m=()=>{const{toolbar:o,items:e}=p(),[s,r]=d.useState(!0),l=()=>{r(!1)};return t.jsxs(t.Fragment,{children:[t.jsx(g,{onClick:()=>r(!0),children:"Open Modal"}),t.jsxs(v,{open:s,onClose:l,variant:"content",children:[t.jsx(y,{title:"Aktivitetslogg for dialog",onClose:l,sticky:!1}),t.jsxs(x,{children:[t.jsx("div",{style:{position:"sticky",top:"1.5em",zIndex:2},children:t.jsx(u,{...o})}),t.jsx(c,{items:e})]})]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
