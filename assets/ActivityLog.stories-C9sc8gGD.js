import{j as t,r as d}from"./iframe-DUgQHy5z.js";import{u as p}from"./useActivityLogToolbar-DbzbusI9.js";import{A as c}from"./ActivityLogItem-DcJ6nOcu.js";import{S as M}from"./Section-BJevJr8H.js";import{T as u}from"./Toolbar-p94Aw-gr.js";import{B as g}from"./Button-DAj4Vb1f.js";import{M as v}from"./ModalBase-BV94wsIh.js";import{M as y,a as x}from"./ModalBody-D3QXhoSO.js";import"./preload-helper-PPVm8Dsz.js";import"./TimelineSegment-38nHtduc.js";import"./TimelineBase-Ce8saE76.js";import"./TimelineIcon-CaztrNCC.js";import"./XMark-CIC6hSAY.js";import"./useId-BEmmm-9F.js";import"./Icon-D31Usj2D.js";import"./index-CHKdKrFD.js";import"./Skeleton-BWHbMU5J.js";import"./Avatar-CQy8D3NB.js";import"./AvatarGroup-DAp73R1d.js";import"./Flex-CL-SSZvT.js";import"./CircleFill-fmkTuX_m.js";import"./Byline-NEG0Ssd-.js";import"./Typography-CInfIHKg.js";import"./useHighlightedText-BXy_Fo0F.js";import"./Timeline-BQy7qZzC.js";import"./TimelineActivity-DzNF3wEQ.js";import"./useDropdownMenuController-DoVSojsp.js";import"./Plus-DMuAFtu8.js";import"./Dropdown-VwXyzPyy.js";import"./SearchField-DrvAfAqD.js";import"./MagnifyingGlass-Bvm8HrPp.js";import"./FieldBase-B3m8Pe0B.js";import"./Label-B-nIzD7x.js";import"./index-DtFuKRqq.js";import"./use-merge-refs-tN_UguZ4.js";import"./lite-DaUVFjkg.js";import"./Input-DxofbABb.js";import"./input-BKf2w74T.js";import"./MenuListItem-Cobo65pu.js";import"./MenuListHeading-USeQ6WLV.js";import"./MenuItem-rAhK0ZP8.js";import"./ItemMedia-CtpZg4yw.js";import"./Checkmark-CEKDqcfc.js";import"./Heading-CGuufgH4.js";import"./ItemControls-eEEzDso3.js";import"./ChevronRight-DcPr7c69.js";import"./Badge-Tkc8PhNy.js";import"./Tooltip-svLS9stx.js";import"./floating-ui.dom-DCpi3RTt.js";import"./useMenu-DKqXZTHj.js";import"./InformationSquare-C5uyE4ek.js";import"./ChevronUpDown-qDB1OsEf.js";import"./ButtonGroup-Co0foBbC.js";import"./ButtonGroupDivider-DHIj-T3D.js";import"./ToolbarMenu-BzCt4Lt_.js";import"./ToolbarSearch-B9Ja8uVL.js";import"./button-D0axoqj3.js";const Ct={title:"Timeline/ActivityLog",tags:["beta"],parameters:{},args:{}},i=()=>{const{items:o}=p();return t.jsx(c,{items:o})},n=()=>{const{toolbar:o,items:e}=p();return t.jsxs(M,{spacing:6,children:[t.jsx(u,{...o}),t.jsx(c,{items:e})]})},a=()=>{const{items:o}=p(),[e,s]=d.useState(!0),r=()=>{s(!1)};return t.jsxs(t.Fragment,{children:[t.jsx(g,{onClick:()=>s(!0),children:"Open Modal"}),t.jsxs(v,{open:e,onClose:r,variant:"content",children:[t.jsx(y,{title:"Aktivitetslogg for dialog",onClose:r}),t.jsx(x,{children:t.jsx(c,{items:o})})]})]})},m=()=>{const{toolbar:o,items:e}=p(),[s,r]=d.useState(!0),l=()=>{r(!1)};return t.jsxs(t.Fragment,{children:[t.jsx(g,{onClick:()=>r(!0),children:"Open Modal"}),t.jsxs(v,{open:s,onClose:l,variant:"content",children:[t.jsx(y,{title:"Aktivitetslogg for dialog",onClose:l,sticky:!1}),t.jsxs(x,{children:[t.jsx("div",{style:{position:"sticky",top:"1.5em",zIndex:2},children:t.jsx(u,{...o})}),t.jsx(c,{items:e})]})]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
