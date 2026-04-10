import{j as t,r as d}from"./iframe-DpqvNfuX.js";import{u as p}from"./useActivityLogToolbar-_QKILp7g.js";import{A as c}from"./ActivityLogItem-CvIqbKJt.js";import{S as M}from"./Section-CtbhQhiL.js";import{T as u}from"./Toolbar-Bv75vAlz.js";import{B as g}from"./Button-2gJDIHFD.js";import{M as v}from"./ModalBase-BKOXa_eC.js";import{M as y,a as x}from"./ModalBody-I1OMRX6C.js";import"./preload-helper-PPVm8Dsz.js";import"./TimelineSegment-CK1EJEp7.js";import"./TimelineBase-B1PaNgw-.js";import"./TimelineIcon-BPU2Du2H.js";import"./XMark-D5GqdRxj.js";import"./useId-BXmkKvJa.js";import"./Icon-DaddCVMS.js";import"./index-Ct2h27FF.js";import"./Skeleton-CUXlhXSK.js";import"./Avatar-BnDDwZQL.js";import"./AvatarGroup-fDT9dP8b.js";import"./Flex-BVIzbH2w.js";import"./CircleFill-DsUyVY6s.js";import"./Byline-D3lAONhk.js";import"./Typography-7MtHaiXa.js";import"./useHighlightedText-CsoqNVCh.js";import"./Timeline-G85tNkOW.js";import"./TimelineActivity-DoYP0F4b.js";import"./useDropdownMenuController-BsIinftt.js";import"./Plus-i3IwH-31.js";import"./Dropdown-g5xLWPPm.js";import"./SearchField-B4PsSxTf.js";import"./MagnifyingGlass-oMKY7BYp.js";import"./FieldBase-CwbZRzDX.js";import"./Label-DGyVWTo1.js";import"./index-C4Ss_iIN.js";import"./use-merge-refs-C3UJEavz.js";import"./lite-DaUVFjkg.js";import"./Input-CtghcgQm.js";import"./input-AC6H3fN5.js";import"./MenuListItem-ydSncMmo.js";import"./MenuListHeading-C8YiegkQ.js";import"./MenuItem-DsVjpCyh.js";import"./ItemMedia-UuJJBLbY.js";import"./Checkmark-B0EPfKD4.js";import"./Heading-CsYSWfhV.js";import"./ChevronRight-l4sUB0S3.js";import"./Badge-DH_aKElc.js";import"./useMenu-CL8JxMzd.js";import"./InformationSquare-x_nyg8Lo.js";import"./ChevronUpDown-C9vO7jrH.js";import"./ButtonGroup-DLg5nJZL.js";import"./ButtonGroupDivider-DJwUN8yr.js";import"./Tooltip-BWGqnLO5.js";import"./floating-ui.dom-DCpi3RTt.js";import"./ToolbarMenu-CKcLoAWM.js";import"./ToolbarSearch-BKrHqiRC.js";import"./button-B0qBlS1p.js";const jt={title:"Timeline/ActivityLog",tags:["beta"],parameters:{},args:{}},i=()=>{const{items:o}=p();return t.jsx(c,{items:o})},n=()=>{const{toolbar:o,items:e}=p();return t.jsxs(M,{spacing:6,children:[t.jsx(u,{...o}),t.jsx(c,{items:e})]})},a=()=>{const{items:o}=p(),[e,s]=d.useState(!0),r=()=>{s(!1)};return t.jsxs(t.Fragment,{children:[t.jsx(g,{onClick:()=>s(!0),children:"Open Modal"}),t.jsxs(v,{open:e,onClose:r,variant:"content",children:[t.jsx(y,{title:"Aktivitetslogg for dialog",onClose:r}),t.jsx(x,{children:t.jsx(c,{items:o})})]})]})},m=()=>{const{toolbar:o,items:e}=p(),[s,r]=d.useState(!0),l=()=>{r(!1)};return t.jsxs(t.Fragment,{children:[t.jsx(g,{onClick:()=>r(!0),children:"Open Modal"}),t.jsxs(v,{open:s,onClose:l,variant:"content",children:[t.jsx(y,{title:"Aktivitetslogg for dialog",onClose:l,sticky:!1}),t.jsxs(x,{children:[t.jsx("div",{style:{position:"sticky",top:"1.5em",zIndex:2},children:t.jsx(u,{...o})}),t.jsx(c,{items:e})]})]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
