import{j as t,r as d}from"./iframe-CK12xbO6.js";import{u as p}from"./useActivityLogToolbar-BYDpAcP4.js";import{A as c}from"./ActivityLogItem-DMu78zry.js";import{S as M}from"./Section-BZGNeHVH.js";import{T as u}from"./Toolbar-DDYBFFby.js";import{B as g}from"./Button-DTrhNbku.js";import{M as v}from"./ModalBase-CWztHKgS.js";import{M as y,a as x}from"./ModalBody-dRl9W8-E.js";import"./preload-helper-PPVm8Dsz.js";import"./TimelineSegment-DJO-CRGz.js";import"./TimelineBase-BepMF925.js";import"./TimelineIcon-DhrTlOuA.js";import"./XMark-MadrIoK8.js";import"./useId-CIOYGEMY.js";import"./Icon-BHUPQGzt.js";import"./index-DS2SSX1f.js";import"./Skeleton-CLQkeaUO.js";import"./Avatar-CjYl4qzD.js";import"./AvatarGroup-DIAmYFyU.js";import"./Flex-DQqIzFyb.js";import"./CircleFill-D3H_yP5_.js";import"./Byline-B4sW0HRf.js";import"./Typography-PIwVlbiP.js";import"./useHighlightedText-DdOMnBlO.js";import"./Timeline-Colyna1-.js";import"./TimelineActivity-DuXO5lPK.js";import"./useDropdownMenuController--WYsFZ5d.js";import"./Plus-LAYoRaA7.js";import"./Dropdown-CtQW7C8x.js";import"./SearchField-CfLtnFna.js";import"./MagnifyingGlass-qxU1ofSJ.js";import"./FieldBase-NrhOHdDA.js";import"./Label-CQOYgwqz.js";import"./index-BCgvi17I.js";import"./use-merge-refs-D5gu3XYQ.js";import"./lite-DaUVFjkg.js";import"./Input-CN33OjmR.js";import"./input-CdhXBgWK.js";import"./MenuListItem-B_ethkwV.js";import"./MenuListHeading-CCkIOc1e.js";import"./MenuItem-DjmA2GJO.js";import"./ItemMedia-XHYq4GSc.js";import"./Checkmark-DQBecNO6.js";import"./Heading-Drr-of_9.js";import"./ItemControls-B1M2j2tm.js";import"./ChevronRight-DxL2oOG5.js";import"./Badge-BBKRgbs4.js";import"./Tooltip-BdqmcG89.js";import"./floating-ui.dom-DCpi3RTt.js";import"./useMenu-BM6Zh5Qq.js";import"./InformationSquare-C5QsI1Pb.js";import"./ChevronUpDown-CGM66yE3.js";import"./ButtonGroup-BcyGdCwQ.js";import"./ButtonGroupDivider-Bk-HCSfX.js";import"./ToolbarMenu-mxw-7SZ4.js";import"./ToolbarSearch-CfeOST9x.js";import"./button-D6lkouap.js";const Ct={title:"Timeline/ActivityLog",tags:["beta"],parameters:{},args:{}},i=()=>{const{items:o}=p();return t.jsx(c,{items:o})},n=()=>{const{toolbar:o,items:e}=p();return t.jsxs(M,{spacing:6,children:[t.jsx(u,{...o}),t.jsx(c,{items:e})]})},a=()=>{const{items:o}=p(),[e,s]=d.useState(!0),r=()=>{s(!1)};return t.jsxs(t.Fragment,{children:[t.jsx(g,{onClick:()=>s(!0),children:"Open Modal"}),t.jsxs(v,{open:e,onClose:r,variant:"content",children:[t.jsx(y,{title:"Aktivitetslogg for dialog",onClose:r}),t.jsx(x,{children:t.jsx(c,{items:o})})]})]})},m=()=>{const{toolbar:o,items:e}=p(),[s,r]=d.useState(!0),l=()=>{r(!1)};return t.jsxs(t.Fragment,{children:[t.jsx(g,{onClick:()=>r(!0),children:"Open Modal"}),t.jsxs(v,{open:s,onClose:l,variant:"content",children:[t.jsx(y,{title:"Aktivitetslogg for dialog",onClose:l,sticky:!1}),t.jsxs(x,{children:[t.jsx("div",{style:{position:"sticky",top:"1.5em",zIndex:2},children:t.jsx(u,{...o})}),t.jsx(c,{items:e})]})]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
