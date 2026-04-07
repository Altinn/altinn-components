import{j as t,r as d}from"./iframe-B1AqnzaQ.js";import{u as p}from"./useActivityLogToolbar-BnCYxc2L.js";import{A as c}from"./ActivityLogItem-D6r5c6zb.js";import{S as M}from"./Section-BiNpoqqK.js";import{T as u}from"./Toolbar-Dx8Mk40W.js";import{B as g}from"./Button-7DVHhPF2.js";import{M as v}from"./ModalBase-D8Fgbk92.js";import{M as y,a as x}from"./ModalBody-CFyARQ-s.js";import"./preload-helper-PPVm8Dsz.js";import"./TimelineSegment-B1CKvONc.js";import"./TimelineBase-ip_o9QaV.js";import"./TimelineIcon-BF-pfJAe.js";import"./XMark-COJVLPGF.js";import"./useId-D3sFZbtB.js";import"./Icon-68Gi_xA8.js";import"./index-Ddi2Dmvi.js";import"./Skeleton-6Posg2tf.js";import"./Avatar-Dhw0Atsj.js";import"./AvatarGroup-CFlzbLYZ.js";import"./Flex-DsTgjl9e.js";import"./CircleFill-ChhOxAOE.js";import"./Byline-KR-JBYsj.js";import"./Typography-lvuy6SF3.js";import"./useHighlightedText-D6JE0bc4.js";import"./Timeline-BK9jVHsp.js";import"./TimelineActivity-BNZFZZor.js";import"./useDropdownMenuController-BCLdmaKN.js";import"./Plus-DnGMnLWk.js";import"./Dropdown-CFvQqfeA.js";import"./SearchField-BEy1JMqM.js";import"./MagnifyingGlass-CXhi_3qD.js";import"./FieldBase-BfQZNQHG.js";import"./Label-CufZoml2.js";import"./index-DvbpjXY1.js";import"./use-merge-refs-BdRYIeb-.js";import"./lite-DaUVFjkg.js";import"./Input-DvVIUV_H.js";import"./input-CzzL8SnL.js";import"./MenuListItem-D8LYIepd.js";import"./MenuListHeading-DjQ5LdsQ.js";import"./MenuItem-DJwKVNs9.js";import"./ItemMedia-D13Mes1V.js";import"./Checkmark-Ci7lq5dQ.js";import"./Heading-Rbp_06UC.js";import"./ChevronRight-BOPTtlba.js";import"./Badge-DUhzLQsC.js";import"./useMenu-5Lc1jfY6.js";import"./InformationSquare-DK3EJIq8.js";import"./ChevronUpDown-By7A9_Yz.js";import"./ButtonGroup-Kwyl4wzf.js";import"./ButtonGroupDivider-DeeJoG6r.js";import"./Tooltip-CmJVhKqX.js";import"./floating-ui.dom-DCpi3RTt.js";import"./ToolbarMenu-E66ZXYok.js";import"./ToolbarSearch-BAP8C2qn.js";import"./button-HgPz3r79.js";const jt={title:"Timeline/ActivityLog",tags:["beta"],parameters:{},args:{}},i=()=>{const{items:o}=p();return t.jsx(c,{items:o})},n=()=>{const{toolbar:o,items:e}=p();return t.jsxs(M,{spacing:6,children:[t.jsx(u,{...o}),t.jsx(c,{items:e})]})},a=()=>{const{items:o}=p(),[e,s]=d.useState(!0),r=()=>{s(!1)};return t.jsxs(t.Fragment,{children:[t.jsx(g,{onClick:()=>s(!0),children:"Open Modal"}),t.jsxs(v,{open:e,onClose:r,variant:"content",children:[t.jsx(y,{title:"Aktivitetslogg for dialog",onClose:r}),t.jsx(x,{children:t.jsx(c,{items:o})})]})]})},m=()=>{const{toolbar:o,items:e}=p(),[s,r]=d.useState(!0),l=()=>{r(!1)};return t.jsxs(t.Fragment,{children:[t.jsx(g,{onClick:()=>r(!0),children:"Open Modal"}),t.jsxs(v,{open:s,onClose:l,variant:"content",children:[t.jsx(y,{title:"Aktivitetslogg for dialog",onClose:l,sticky:!1}),t.jsxs(x,{children:[t.jsx("div",{style:{position:"sticky",top:"1.5em",zIndex:2},children:t.jsx(u,{...o})}),t.jsx(c,{items:e})]})]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
