import{j as t,r as d}from"./iframe-DRbAvM8B.js";import{u as p}from"./useActivityLogToolbar-C5jTPSDb.js";import{A as c}from"./ActivityLogItem-BpzgZ3hT.js";import{S as M}from"./Section-eG7NPuGp.js";import{T as u}from"./Toolbar-C_9YDRG2.js";import{B as g}from"./Button-DXRH0CtL.js";import{M as v}from"./ModalBase-OEJeuyA3.js";import{M as y,a as x}from"./ModalBody-DFMk_yAO.js";import"./preload-helper-PPVm8Dsz.js";import"./TimelineSegment-Dt15zGMg.js";import"./TimelineBase-CX_BBT93.js";import"./TimelineIcon-BB-hRln7.js";import"./XMark-BeNK6Eym.js";import"./useId-p3Uu13R2.js";import"./Icon-BB196-C1.js";import"./index-Dpt5RUeZ.js";import"./Skeleton-C6w0Fovi.js";import"./Avatar-DHw0Umd5.js";import"./AvatarGroup-BZTkgKpW.js";import"./Flex-DfEZbiAr.js";import"./CircleFill-Be44fsrY.js";import"./Byline-DvIPHZak.js";import"./Typography-Da6zx1kt.js";import"./useHighlightedText-DaUYVTi5.js";import"./Timeline-r9shlGgY.js";import"./TimelineActivity-CVw97V2N.js";import"./useDropdownMenuController-OmQMIEvc.js";import"./Plus-frPGag5G.js";import"./Dropdown-VBO2OC6w.js";import"./SearchField-Q4hKdicz.js";import"./MagnifyingGlass-Byb6dLEO.js";import"./FieldBase-_93TCpK5.js";import"./Label-Zr8dB_9-.js";import"./index-Vs8aUpKw.js";import"./use-merge-refs-BRHMCtFk.js";import"./lite-DaUVFjkg.js";import"./Input-Cez8McI8.js";import"./input-DR5YebMy.js";import"./MenuListItem-CLLuPs6D.js";import"./MenuListHeading-DYidFrGe.js";import"./MenuItem-GZbX5NAK.js";import"./ItemMedia-DLqoeXZM.js";import"./Checkmark-BwvmX3W_.js";import"./Heading-aiLobBhZ.js";import"./ChevronRight-BIwAZUpi.js";import"./Badge-B0bOgxTq.js";import"./useMenu-BNYBCPCQ.js";import"./InformationSquare-Lr6VUhuh.js";import"./ChevronUpDown-Zah_l3Hs.js";import"./ButtonGroup-r6m6YA7P.js";import"./ButtonGroupDivider-Bl0yWe10.js";import"./Tooltip-CJtJf-6I.js";import"./floating-ui.dom-DCpi3RTt.js";import"./ToolbarMenu-BYSdvxKQ.js";import"./ToolbarSearch-BG9uhSKV.js";import"./button-DB6SpB_q.js";const jt={title:"Timeline/ActivityLog",tags:["beta"],parameters:{},args:{}},i=()=>{const{items:o}=p();return t.jsx(c,{items:o})},n=()=>{const{toolbar:o,items:e}=p();return t.jsxs(M,{spacing:6,children:[t.jsx(u,{...o}),t.jsx(c,{items:e})]})},a=()=>{const{items:o}=p(),[e,s]=d.useState(!0),r=()=>{s(!1)};return t.jsxs(t.Fragment,{children:[t.jsx(g,{onClick:()=>s(!0),children:"Open Modal"}),t.jsxs(v,{open:e,onClose:r,variant:"content",children:[t.jsx(y,{title:"Aktivitetslogg for dialog",onClose:r}),t.jsx(x,{children:t.jsx(c,{items:o})})]})]})},m=()=>{const{toolbar:o,items:e}=p(),[s,r]=d.useState(!0),l=()=>{r(!1)};return t.jsxs(t.Fragment,{children:[t.jsx(g,{onClick:()=>r(!0),children:"Open Modal"}),t.jsxs(v,{open:s,onClose:l,variant:"content",children:[t.jsx(y,{title:"Aktivitetslogg for dialog",onClose:l,sticky:!1}),t.jsxs(x,{children:[t.jsx("div",{style:{position:"sticky",top:"1.5em",zIndex:2},children:t.jsx(u,{...o})}),t.jsx(c,{items:e})]})]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
