import{j as t,r as d}from"./iframe-CfpleAaJ.js";import{u as p}from"./useActivityLogToolbar-dqg8kBgQ.js";import{A as c}from"./ActivityLogItem-CqKM3FJg.js";import{S as M}from"./Section-BT3IVwl3.js";import{T as u}from"./Toolbar-CeA2H0SG.js";import{B as g}from"./Button-DKJP6EaO.js";import{M as v}from"./ModalBase-BZf314E6.js";import{M as y,a as x}from"./ModalBody-BFcSEnBf.js";import"./preload-helper-PPVm8Dsz.js";import"./TimelineSegment-CFYB0d9D.js";import"./TimelineBase-6-ZqyYK6.js";import"./TimelineIcon-IbpDB8-L.js";import"./XMark-Mr05NtnF.js";import"./useId-CRfl8v3D.js";import"./Icon-DFklvQ48.js";import"./index-C-ZlSrx2.js";import"./Skeleton-mkQz_xZ6.js";import"./Avatar-BBkC-qEC.js";import"./AvatarGroup-vSwCjNL5.js";import"./Flex-Buw28yn5.js";import"./CircleFill-CIXfD5r5.js";import"./Byline-CZBIzDb7.js";import"./Typography-KZreLO9a.js";import"./useHighlightedText-Cf92T70c.js";import"./Timeline-Gni-z6MX.js";import"./TimelineActivity-DnHFqeoB.js";import"./useDropdownMenuController-D3ykFK6E.js";import"./Plus-Bt3Z18iu.js";import"./Dropdown-C9n-MsJ3.js";import"./SearchField-DaxLmgu-.js";import"./MagnifyingGlass-BxOwsnNq.js";import"./FieldBase-CjTWVBCf.js";import"./Label-BNnaJGt0.js";import"./index-CyGYnAy8.js";import"./use-merge-refs-0CqQhLRb.js";import"./lite-DaUVFjkg.js";import"./Input-B030prVc.js";import"./input-DZJGjPia.js";import"./MenuListItem-Brl922Zx.js";import"./MenuListHeading-BxaazMkW.js";import"./MenuItem-BvkuTBxq.js";import"./ItemMedia-BjhAIHdo.js";import"./Checkmark-CwtLsQnH.js";import"./Heading-SalYmhoh.js";import"./ChevronRight-F6vNJ-SN.js";import"./Badge-BZbseZdr.js";import"./useMenu-DmjfRwxC.js";import"./InformationSquare-H_9f907d.js";import"./ChevronUpDown-Cbzggt2f.js";import"./ButtonGroup-BCc6e8WW.js";import"./ButtonGroupDivider-C4vvU_mH.js";import"./Tooltip-Da4m4fbj.js";import"./floating-ui.dom-DCpi3RTt.js";import"./ToolbarMenu-DWCsc7RF.js";import"./ToolbarSearch-08sXOvBH.js";import"./button-bjClnooE.js";const jt={title:"Timeline/ActivityLog",tags:["beta"],parameters:{},args:{}},i=()=>{const{items:o}=p();return t.jsx(c,{items:o})},n=()=>{const{toolbar:o,items:e}=p();return t.jsxs(M,{spacing:6,children:[t.jsx(u,{...o}),t.jsx(c,{items:e})]})},a=()=>{const{items:o}=p(),[e,s]=d.useState(!0),r=()=>{s(!1)};return t.jsxs(t.Fragment,{children:[t.jsx(g,{onClick:()=>s(!0),children:"Open Modal"}),t.jsxs(v,{open:e,onClose:r,variant:"content",children:[t.jsx(y,{title:"Aktivitetslogg for dialog",onClose:r}),t.jsx(x,{children:t.jsx(c,{items:o})})]})]})},m=()=>{const{toolbar:o,items:e}=p(),[s,r]=d.useState(!0),l=()=>{r(!1)};return t.jsxs(t.Fragment,{children:[t.jsx(g,{onClick:()=>r(!0),children:"Open Modal"}),t.jsxs(v,{open:s,onClose:l,variant:"content",children:[t.jsx(y,{title:"Aktivitetslogg for dialog",onClose:l,sticky:!1}),t.jsxs(x,{children:[t.jsx("div",{style:{position:"sticky",top:"1.5em",zIndex:2},children:t.jsx(u,{...o})}),t.jsx(c,{items:e})]})]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
