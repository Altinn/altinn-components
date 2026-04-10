import{j as t,r as d}from"./iframe-COdTICiz.js";import{u as p}from"./useActivityLogToolbar-BzCgbPwp.js";import{A as c}from"./ActivityLogItem-Dl0hAgvA.js";import{S as M}from"./Section-Cld6nU2J.js";import{T as u}from"./Toolbar-Cg4ziSof.js";import{B as g}from"./Button-Dqoqvefk.js";import{M as v}from"./ModalBase-D_HQkA4J.js";import{M as y,a as x}from"./ModalBody-IM9JDPu9.js";import"./preload-helper-PPVm8Dsz.js";import"./TimelineSegment-BBxvpO81.js";import"./TimelineBase-D9S4CK-7.js";import"./TimelineIcon-uBjuAMoC.js";import"./XMark-CpgXVK2Q.js";import"./useId-lT615UMD.js";import"./Icon-CpwjhC7D.js";import"./index-eHSiAaoN.js";import"./Skeleton-DCT9M7tY.js";import"./Avatar-30_b1gUS.js";import"./AvatarGroup-DMJoFLAP.js";import"./Flex-BH1BXZbH.js";import"./CircleFill-DjsXF5ml.js";import"./Byline-Tw37sWdf.js";import"./Typography-CRI9HVXo.js";import"./useHighlightedText-FFYshbql.js";import"./Timeline-nsQBwWck.js";import"./TimelineActivity-nCvYV0kp.js";import"./useDropdownMenuController-BmS2V_T_.js";import"./Plus-D6hG0ghA.js";import"./Dropdown-riK9lB0y.js";import"./SearchField-DQWZ98wb.js";import"./MagnifyingGlass-BjGJbcBP.js";import"./FieldBase-CQukmgiw.js";import"./Label-Bw83ICjW.js";import"./index-zPL8uGVu.js";import"./use-merge-refs-DMOZr-G2.js";import"./lite-DaUVFjkg.js";import"./Input-Dmsj72wJ.js";import"./input-DYzXaufk.js";import"./MenuListItem-BVxiRmRE.js";import"./MenuListHeading-C74FO8PH.js";import"./MenuItem-Pij9KqE-.js";import"./ItemMedia-BN92MYHv.js";import"./Checkmark-D_NJmpQs.js";import"./Heading-BXn08xBV.js";import"./ItemControls-DRloD8XX.js";import"./ChevronRight-tPPKpYH4.js";import"./Badge-CTG2EWNm.js";import"./useMenu-C9hrnnrl.js";import"./InformationSquare-BF6iEl5i.js";import"./ChevronUpDown-B9jBdQ1p.js";import"./ButtonGroup-BKCkWJMA.js";import"./ButtonGroupDivider-BGHFJh1m.js";import"./Tooltip-CFVYTWjg.js";import"./floating-ui.dom-DCpi3RTt.js";import"./ToolbarMenu-D_qwmHta.js";import"./ToolbarSearch-BjQxAllS.js";import"./button-BvBLLivB.js";const Ct={title:"Timeline/ActivityLog",tags:["beta"],parameters:{},args:{}},i=()=>{const{items:o}=p();return t.jsx(c,{items:o})},n=()=>{const{toolbar:o,items:e}=p();return t.jsxs(M,{spacing:6,children:[t.jsx(u,{...o}),t.jsx(c,{items:e})]})},a=()=>{const{items:o}=p(),[e,s]=d.useState(!0),r=()=>{s(!1)};return t.jsxs(t.Fragment,{children:[t.jsx(g,{onClick:()=>s(!0),children:"Open Modal"}),t.jsxs(v,{open:e,onClose:r,variant:"content",children:[t.jsx(y,{title:"Aktivitetslogg for dialog",onClose:r}),t.jsx(x,{children:t.jsx(c,{items:o})})]})]})},m=()=>{const{toolbar:o,items:e}=p(),[s,r]=d.useState(!0),l=()=>{r(!1)};return t.jsxs(t.Fragment,{children:[t.jsx(g,{onClick:()=>r(!0),children:"Open Modal"}),t.jsxs(v,{open:s,onClose:l,variant:"content",children:[t.jsx(y,{title:"Aktivitetslogg for dialog",onClose:l,sticky:!1}),t.jsxs(x,{children:[t.jsx("div",{style:{position:"sticky",top:"1.5em",zIndex:2},children:t.jsx(u,{...o})}),t.jsx(c,{items:e})]})]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
