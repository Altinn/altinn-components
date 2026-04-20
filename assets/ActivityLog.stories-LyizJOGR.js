import{j as t,r as d}from"./iframe-Dj7Cj6th.js";import{u as p}from"./useActivityLogToolbar-D90TiD8U.js";import{A as c}from"./ActivityLogItem-D8BwIcJT.js";import{S as M}from"./Section-H920sslu.js";import{T as u}from"./Toolbar-PeLOXVy6.js";import{B as g}from"./Button-CSjIyK1w.js";import{M as v}from"./ModalBase-D6AxN5ds.js";import{M as y,a as x}from"./ModalBody-pkjmwJOi.js";import"./preload-helper-PPVm8Dsz.js";import"./TimelineSegment-ez69zOLv.js";import"./TimelineBase-DdSTwM1e.js";import"./TimelineIcon-BO-KOV2g.js";import"./XMark-CFOHUWx0.js";import"./useId-ByPI58ip.js";import"./Icon-ClXNgiA2.js";import"./index-CddsnUaU.js";import"./Skeleton-D2EJPpRT.js";import"./Avatar-BthLZDba.js";import"./AvatarGroup-CKpZaMLG.js";import"./Flex-BFoeedqd.js";import"./CircleFill-Bxi0w5nl.js";import"./Byline-B6rBn3yX.js";import"./Typography-NJpqcBZB.js";import"./useHighlightedText-BEM-o_8x.js";import"./Timeline-CcwbU5Kt.js";import"./TimelineActivity-OkMXfvgy.js";import"./useDropdownMenuController-BLxYI4kb.js";import"./Plus-CoZtisp_.js";import"./Dropdown-DRhtJuEv.js";import"./SearchField-IAcAy2TF.js";import"./MagnifyingGlass-CkAWdXLw.js";import"./FieldBase-1wPahpAR.js";import"./Label-knK18nOg.js";import"./index-DyfHnAhP.js";import"./use-merge-refs-YImFlbky.js";import"./lite-DaUVFjkg.js";import"./Input-xlo_b8Ui.js";import"./input-Dg3xXmgC.js";import"./MenuListItem-DHv3z0ag.js";import"./MenuListHeading-BcZUdaLF.js";import"./MenuItem-jJDtIeVN.js";import"./ItemMedia-ClCn_Pwn.js";import"./Checkmark-BGb3abOV.js";import"./Heading-CYqNNVt0.js";import"./ItemControls-Dm3s3qCz.js";import"./ChevronRight-DoyD_DMf.js";import"./Badge-CSrzMhOz.js";import"./Tooltip-DHRUZs7M.js";import"./floating-ui.dom-DCpi3RTt.js";import"./useMenu-CZ8hjrPb.js";import"./InformationSquare-BF5i3vGC.js";import"./ChevronUpDown-B9vT5o0M.js";import"./ButtonGroup-FtWKGzEG.js";import"./ButtonGroupDivider-BXtv9C3u.js";import"./ToolbarMenu-DolwSrkD.js";import"./ToolbarSearch-wYmwOicS.js";import"./button-BKLxmUvr.js";const Ct={title:"Timeline/ActivityLog",tags:["beta"],parameters:{},args:{}},i=()=>{const{items:o}=p();return t.jsx(c,{items:o})},n=()=>{const{toolbar:o,items:e}=p();return t.jsxs(M,{spacing:6,children:[t.jsx(u,{...o}),t.jsx(c,{items:e})]})},a=()=>{const{items:o}=p(),[e,s]=d.useState(!0),r=()=>{s(!1)};return t.jsxs(t.Fragment,{children:[t.jsx(g,{onClick:()=>s(!0),children:"Open Modal"}),t.jsxs(v,{open:e,onClose:r,variant:"content",children:[t.jsx(y,{title:"Aktivitetslogg for dialog",onClose:r}),t.jsx(x,{children:t.jsx(c,{items:o})})]})]})},m=()=>{const{toolbar:o,items:e}=p(),[s,r]=d.useState(!0),l=()=>{r(!1)};return t.jsxs(t.Fragment,{children:[t.jsx(g,{onClick:()=>r(!0),children:"Open Modal"}),t.jsxs(v,{open:s,onClose:l,variant:"content",children:[t.jsx(y,{title:"Aktivitetslogg for dialog",onClose:l,sticky:!1}),t.jsxs(x,{children:[t.jsx("div",{style:{position:"sticky",top:"1.5em",zIndex:2},children:t.jsx(u,{...o})}),t.jsx(c,{items:e})]})]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
