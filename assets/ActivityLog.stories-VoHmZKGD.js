import{j as t,r as d}from"./iframe-DgiLb7Jh.js";import{u as p}from"./useActivityLogToolbar-CUj-z5a0.js";import{A as c}from"./ActivityLogItem-D1EseBHZ.js";import{S as M}from"./Section-BoeinIOl.js";import{T as u}from"./Toolbar-CEcHWW0U.js";import{B as g}from"./Button-D7CoEZHH.js";import{M as v}from"./ModalBase-BLc5GE5E.js";import{M as y,a as x}from"./ModalBody-CYaAfA_z.js";import"./preload-helper-PPVm8Dsz.js";import"./TimelineSegment-tzHIvTQF.js";import"./TimelineBase-B-dXUrWs.js";import"./TimelineIcon-C0o1qmSk.js";import"./XMark-DE16CL-6.js";import"./useId-6J1VG5PF.js";import"./Icon-uoDJWBW9.js";import"./index-CzzvqmNv.js";import"./Skeleton-CjXkBVSw.js";import"./Avatar-D2ea3_hU.js";import"./AvatarGroup-BGNg7yRW.js";import"./Flex-BfnRV8tR.js";import"./CircleFill-CvHCUO8J.js";import"./Byline-58BLL4Ck.js";import"./Typography-Bp8CNLT3.js";import"./useHighlightedText-C3KXFHAg.js";import"./Timeline-Dc5FNvEX.js";import"./TimelineActivity-4eqy81Lo.js";import"./useDropdownMenuController-fXPHld1D.js";import"./Plus-gYiwb3vr.js";import"./Dropdown-Bk4mNQmY.js";import"./SearchField-CTb1s1hd.js";import"./MagnifyingGlass-C5v4zKU0.js";import"./FieldBase-B0t89PB6.js";import"./Label-6LQ7LXNA.js";import"./index-Cu0iGtDM.js";import"./use-merge-refs-CpvzIuY-.js";import"./lite-DaUVFjkg.js";import"./Input-Cmck_kaL.js";import"./input-BBC2L6cA.js";import"./MenuListItem-BzaUHJzz.js";import"./MenuListHeading-BHx30WUA.js";import"./MenuItem-CM4esdkj.js";import"./ItemMedia-BvSNOAVc.js";import"./Checkmark-49Lv_3MM.js";import"./Heading-CAIwUoS2.js";import"./ChevronRight-B8GqJ6hU.js";import"./Badge-DFo-bNGw.js";import"./useMenu-7q5OpfBf.js";import"./InformationSquare-CZhEVvng.js";import"./ChevronUpDown-agMv5gvN.js";import"./ButtonGroup-Ds9mrFFQ.js";import"./ButtonGroupDivider-eHUmueO9.js";import"./Tooltip-00zSbMAL.js";import"./floating-ui.dom-DCpi3RTt.js";import"./ToolbarMenu-DJQIA27l.js";import"./ToolbarSearch-OWdwBwH6.js";import"./button-2pQtb28r.js";const jt={title:"Timeline/ActivityLog",tags:["beta"],parameters:{},args:{}},i=()=>{const{items:o}=p();return t.jsx(c,{items:o})},n=()=>{const{toolbar:o,items:e}=p();return t.jsxs(M,{spacing:6,children:[t.jsx(u,{...o}),t.jsx(c,{items:e})]})},a=()=>{const{items:o}=p(),[e,s]=d.useState(!0),r=()=>{s(!1)};return t.jsxs(t.Fragment,{children:[t.jsx(g,{onClick:()=>s(!0),children:"Open Modal"}),t.jsxs(v,{open:e,onClose:r,variant:"content",children:[t.jsx(y,{title:"Aktivitetslogg for dialog",onClose:r}),t.jsx(x,{children:t.jsx(c,{items:o})})]})]})},m=()=>{const{toolbar:o,items:e}=p(),[s,r]=d.useState(!0),l=()=>{r(!1)};return t.jsxs(t.Fragment,{children:[t.jsx(g,{onClick:()=>r(!0),children:"Open Modal"}),t.jsxs(v,{open:s,onClose:l,variant:"content",children:[t.jsx(y,{title:"Aktivitetslogg for dialog",onClose:l,sticky:!1}),t.jsxs(x,{children:[t.jsx("div",{style:{position:"sticky",top:"1.5em",zIndex:2},children:t.jsx(u,{...o})}),t.jsx(c,{items:e})]})]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
