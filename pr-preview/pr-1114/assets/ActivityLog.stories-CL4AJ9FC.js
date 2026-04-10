import{j as t,r as d}from"./iframe-BmFIVBn_.js";import{u as p}from"./useActivityLogToolbar-rpaBffHO.js";import{A as c}from"./ActivityLogItem-DNoBbxI3.js";import{S as M}from"./Section-8wZRyHWu.js";import{T as u}from"./Toolbar-CRRgGZLn.js";import{B as g}from"./Button-qEoy6ct0.js";import{M as v}from"./ModalBase-C8uvGW6d.js";import{M as y,a as x}from"./ModalBody-DgmBWAGP.js";import"./preload-helper-PPVm8Dsz.js";import"./TimelineSegment-Rrfxz5Ai.js";import"./TimelineBase-CLyCFKdG.js";import"./TimelineIcon-BGPXzuZF.js";import"./XMark-DPeWQ31a.js";import"./useId-ClegSKnE.js";import"./Icon-zZDqlwOf.js";import"./index-3BUTcXKg.js";import"./Skeleton-DRn19mA6.js";import"./Avatar-Zvdkk7EN.js";import"./AvatarGroup-DqX7R4kJ.js";import"./Flex-CFezmhlL.js";import"./CircleFill-CdvTX6aC.js";import"./Byline-BGhU5n_P.js";import"./Typography-CMiy0gec.js";import"./useHighlightedText-Dq-XqtYP.js";import"./Timeline-CwKlcku2.js";import"./TimelineActivity-BNR0D8jZ.js";import"./useDropdownMenuController-D8IQ0jaC.js";import"./Plus-DVwzyLY6.js";import"./Dropdown-OBdyljPV.js";import"./SearchField-BQQnPaDG.js";import"./MagnifyingGlass-B0C_9vni.js";import"./FieldBase-Cx6yKeh2.js";import"./Label-D7uBca_a.js";import"./index-32OlLxJ9.js";import"./use-merge-refs-C8jIJdDy.js";import"./lite-DaUVFjkg.js";import"./Input-D2BG68i3.js";import"./input-DVOXybW4.js";import"./MenuListItem-INuSyNfv.js";import"./MenuListHeading-D4ZyNWhk.js";import"./MenuItem-BvPBRlig.js";import"./ItemMedia-CCYQNyqL.js";import"./Checkmark-DWNi5SDl.js";import"./Heading-D2Zb4ZMb.js";import"./ItemControls-B2xjI1HN.js";import"./ChevronRight-DcRWf4tm.js";import"./Badge-DoiHwmxA.js";import"./useMenu-BRAeQdeQ.js";import"./InformationSquare-Ct2wAfNF.js";import"./ChevronUpDown-iLgQoNlh.js";import"./ButtonGroup-DOYzKGQP.js";import"./ButtonGroupDivider-J3W78A7-.js";import"./Tooltip-B1Uxs2J8.js";import"./floating-ui.dom-DCpi3RTt.js";import"./ToolbarMenu-BPgqnzLX.js";import"./ToolbarSearch-CFeP4OJs.js";import"./button-DKdxIprw.js";const Ct={title:"Timeline/ActivityLog",tags:["beta"],parameters:{},args:{}},i=()=>{const{items:o}=p();return t.jsx(c,{items:o})},n=()=>{const{toolbar:o,items:e}=p();return t.jsxs(M,{spacing:6,children:[t.jsx(u,{...o}),t.jsx(c,{items:e})]})},a=()=>{const{items:o}=p(),[e,s]=d.useState(!0),r=()=>{s(!1)};return t.jsxs(t.Fragment,{children:[t.jsx(g,{onClick:()=>s(!0),children:"Open Modal"}),t.jsxs(v,{open:e,onClose:r,variant:"content",children:[t.jsx(y,{title:"Aktivitetslogg for dialog",onClose:r}),t.jsx(x,{children:t.jsx(c,{items:o})})]})]})},m=()=>{const{toolbar:o,items:e}=p(),[s,r]=d.useState(!0),l=()=>{r(!1)};return t.jsxs(t.Fragment,{children:[t.jsx(g,{onClick:()=>r(!0),children:"Open Modal"}),t.jsxs(v,{open:s,onClose:l,variant:"content",children:[t.jsx(y,{title:"Aktivitetslogg for dialog",onClose:l,sticky:!1}),t.jsxs(x,{children:[t.jsx("div",{style:{position:"sticky",top:"1.5em",zIndex:2},children:t.jsx(u,{...o})}),t.jsx(c,{items:e})]})]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
