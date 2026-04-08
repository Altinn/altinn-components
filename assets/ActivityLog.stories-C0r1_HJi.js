import{j as t,r as d}from"./iframe-BaUVsogD.js";import{u as p}from"./useActivityLogToolbar-CX0syaQa.js";import{A as c}from"./ActivityLogItem-B290V2Gc.js";import{S as M}from"./Section-HLTaZdun.js";import{T as u}from"./Toolbar-DZAY8lvc.js";import{B as g}from"./Button-mtd2C5dd.js";import{M as v}from"./ModalBase-AGLO-MzB.js";import{M as y,a as x}from"./ModalBody-DSVV4dpo.js";import"./preload-helper-PPVm8Dsz.js";import"./TimelineSegment-BNPq7vCJ.js";import"./TimelineBase-cZPcUJyk.js";import"./TimelineIcon-Dl-dedu1.js";import"./XMark-vPSUBj6u.js";import"./useId-D8i_et7Z.js";import"./Icon-7hKeNARf.js";import"./index-lARy5TPT.js";import"./Skeleton-yH6qNAEo.js";import"./Avatar-u9iGVwtH.js";import"./AvatarGroup-DFVM-aUE.js";import"./Flex-CpmusUMb.js";import"./CircleFill-DbvbL3h4.js";import"./Byline-q-C2aAbr.js";import"./Typography-BHJ2EAGl.js";import"./useHighlightedText-C23yE0pM.js";import"./Timeline-2PIK8dCn.js";import"./TimelineActivity-BV9pfn9g.js";import"./useDropdownMenuController-u6nv9687.js";import"./Plus-CnR__6G5.js";import"./Dropdown-5b9N8l_a.js";import"./SearchField-BG-HK4fX.js";import"./MagnifyingGlass-DyxA-WAG.js";import"./FieldBase-CZ-07bnd.js";import"./Label-Cge6OnF8.js";import"./index-D4SJX6je.js";import"./use-merge-refs-BV0MipOU.js";import"./lite-DaUVFjkg.js";import"./Input-BHiIXP8Y.js";import"./input-C1CvvkMg.js";import"./MenuListItem-Bh_jPdY2.js";import"./MenuListHeading-B40v5QW5.js";import"./MenuItem-6c1J0YV3.js";import"./ItemMedia-BVGZtNsE.js";import"./Checkmark-DTahSgDV.js";import"./Heading-Cdi1sqyd.js";import"./ChevronRight-sVn034m6.js";import"./Badge-DkZxiFUy.js";import"./useMenu-DnkwvAkg.js";import"./InformationSquare-CDbyjiK5.js";import"./ChevronUpDown-C7TW0s4Z.js";import"./ButtonGroup-1O4V6IzI.js";import"./ButtonGroupDivider-BMhj8zcC.js";import"./Tooltip-WJW_Z0af.js";import"./floating-ui.dom-DCpi3RTt.js";import"./ToolbarMenu-CtiiUfz3.js";import"./ToolbarSearch-DmgkuUXI.js";import"./button-BfXez8v8.js";const jt={title:"Timeline/ActivityLog",tags:["beta"],parameters:{},args:{}},i=()=>{const{items:o}=p();return t.jsx(c,{items:o})},n=()=>{const{toolbar:o,items:e}=p();return t.jsxs(M,{spacing:6,children:[t.jsx(u,{...o}),t.jsx(c,{items:e})]})},a=()=>{const{items:o}=p(),[e,s]=d.useState(!0),r=()=>{s(!1)};return t.jsxs(t.Fragment,{children:[t.jsx(g,{onClick:()=>s(!0),children:"Open Modal"}),t.jsxs(v,{open:e,onClose:r,variant:"content",children:[t.jsx(y,{title:"Aktivitetslogg for dialog",onClose:r}),t.jsx(x,{children:t.jsx(c,{items:o})})]})]})},m=()=>{const{toolbar:o,items:e}=p(),[s,r]=d.useState(!0),l=()=>{r(!1)};return t.jsxs(t.Fragment,{children:[t.jsx(g,{onClick:()=>r(!0),children:"Open Modal"}),t.jsxs(v,{open:s,onClose:l,variant:"content",children:[t.jsx(y,{title:"Aktivitetslogg for dialog",onClose:l,sticky:!1}),t.jsxs(x,{children:[t.jsx("div",{style:{position:"sticky",top:"1.5em",zIndex:2},children:t.jsx(u,{...o})}),t.jsx(c,{items:e})]})]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
