import{j as t,r as d}from"./iframe-BqnZkKPi.js";import{u as p}from"./useActivityLogToolbar-Cmj6fW22.js";import{A as c}from"./ActivityLogItem-Cf_ur4uu.js";import{S as M}from"./Section-CvCvg2MJ.js";import{T as u}from"./Toolbar-BMYgF2JI.js";import{B as g}from"./Button-BhHmd_Fm.js";import{M as v}from"./ModalBase-CxE9fIF-.js";import{M as y,a as x}from"./ModalBody-B72hH_Lv.js";import"./preload-helper-PPVm8Dsz.js";import"./TimelineSegment-BZsKbrqG.js";import"./TimelineBase-BZbXAQmr.js";import"./TimelineIcon-DrpTJ94g.js";import"./XMark-Y2_85_oc.js";import"./useId-9kVvsXig.js";import"./Icon-CnWjusVH.js";import"./index-DAuAfjpD.js";import"./Skeleton-1qnYSSLw.js";import"./Avatar-DNgE8Mou.js";import"./AvatarGroup-CjT1qNUB.js";import"./Flex-Dfcm_wdC.js";import"./CircleFill-DwnN9oUt.js";import"./Byline-BgerGoMP.js";import"./Typography-DM76If-Q.js";import"./useHighlightedText-Clj8nPui.js";import"./Timeline-DPRn1JEg.js";import"./TimelineActivity-DhZrZZSk.js";import"./useDropdownMenuController-C-uznlxU.js";import"./Plus-7ff66Hwu.js";import"./Dropdown-hZuchDzz.js";import"./SearchField-ufWryraF.js";import"./MagnifyingGlass-BqeXJqhd.js";import"./FieldBase-BELBUfOz.js";import"./Label-CWCdrO7p.js";import"./index-wnzGLxld.js";import"./use-merge-refs-Dh9pzmOc.js";import"./lite-DaUVFjkg.js";import"./Input-C33ZQCyq.js";import"./input-xJWBoVha.js";import"./MenuListItem-AlO17G_F.js";import"./MenuListHeading-CYx60jB_.js";import"./MenuItem-kT58Bpcm.js";import"./ItemMedia-BIsU1ixF.js";import"./Checkmark-BnBY066L.js";import"./Heading-BxNd6ZSD.js";import"./ItemControls-CZQ275uO.js";import"./ChevronRight-DE1wtPln.js";import"./Badge-wAZ__xuM.js";import"./useMenu-b_BS_LFk.js";import"./InformationSquare-BrOKqXok.js";import"./ChevronUpDown-5tAc1KRM.js";import"./ButtonGroup-DF4p7rG3.js";import"./ButtonGroupDivider-CAMhuJv0.js";import"./Tooltip-DKFSfnhf.js";import"./floating-ui.dom-DCpi3RTt.js";import"./ToolbarMenu-DmfDcC0J.js";import"./ToolbarSearch-osdkSdWZ.js";import"./button-CeqU6--G.js";const Ct={title:"Timeline/ActivityLog",tags:["beta"],parameters:{},args:{}},i=()=>{const{items:o}=p();return t.jsx(c,{items:o})},n=()=>{const{toolbar:o,items:e}=p();return t.jsxs(M,{spacing:6,children:[t.jsx(u,{...o}),t.jsx(c,{items:e})]})},a=()=>{const{items:o}=p(),[e,s]=d.useState(!0),r=()=>{s(!1)};return t.jsxs(t.Fragment,{children:[t.jsx(g,{onClick:()=>s(!0),children:"Open Modal"}),t.jsxs(v,{open:e,onClose:r,variant:"content",children:[t.jsx(y,{title:"Aktivitetslogg for dialog",onClose:r}),t.jsx(x,{children:t.jsx(c,{items:o})})]})]})},m=()=>{const{toolbar:o,items:e}=p(),[s,r]=d.useState(!0),l=()=>{r(!1)};return t.jsxs(t.Fragment,{children:[t.jsx(g,{onClick:()=>r(!0),children:"Open Modal"}),t.jsxs(v,{open:s,onClose:l,variant:"content",children:[t.jsx(y,{title:"Aktivitetslogg for dialog",onClose:l,sticky:!1}),t.jsxs(x,{children:[t.jsx("div",{style:{position:"sticky",top:"1.5em",zIndex:2},children:t.jsx(u,{...o})}),t.jsx(c,{items:e})]})]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
