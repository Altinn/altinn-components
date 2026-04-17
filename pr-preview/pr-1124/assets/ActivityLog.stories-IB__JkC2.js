import{j as t,r as d}from"./iframe-C30XMp4u.js";import{u as p}from"./useActivityLogToolbar-CWyd6NcD.js";import{A as c}from"./ActivityLogItem-Du8CNoEW.js";import{S as M}from"./Section-DJhGIaQb.js";import{T as u}from"./Toolbar-qbT0YoZ4.js";import{B as g}from"./Button-DDYo0e3Y.js";import{M as v}from"./ModalBase-8GeXxfmc.js";import{M as y,a as x}from"./ModalBody-BvZW9nvD.js";import"./preload-helper-PPVm8Dsz.js";import"./TimelineSegment-Cd7QRFcQ.js";import"./TimelineBase-8_pdxX_h.js";import"./TimelineIcon-Ct6mPXcn.js";import"./XMark-ZCF0kQw6.js";import"./useId-k4Xjw1TB.js";import"./Icon-BW7eZq3t.js";import"./index-Dfjgmy9H.js";import"./Skeleton-DYu3bsVd.js";import"./Avatar-md5Lcy6_.js";import"./AvatarGroup-BxUIiam6.js";import"./Flex-Olz8YtsP.js";import"./CircleFill-BzPsWTOI.js";import"./Byline-_lZvj3fQ.js";import"./Typography-C7Aiwmst.js";import"./useHighlightedText-BcdufPkD.js";import"./Timeline-DQR4CPnH.js";import"./TimelineActivity-B9wJDDA6.js";import"./useDropdownMenuController-BEzXPzCy.js";import"./Plus-zIuJSXr8.js";import"./Dropdown-MMgMxLyt.js";import"./SearchField-GqHOGaRS.js";import"./MagnifyingGlass-BcLoywmE.js";import"./FieldBase-Cg7qaDyY.js";import"./Label-CZ9Sm67x.js";import"./index-MPuYdx8K.js";import"./use-merge-refs-DdAPjJhd.js";import"./lite-DaUVFjkg.js";import"./Input-BZkkYvOZ.js";import"./input-BbRzGenc.js";import"./MenuListItem-Dweo6pop.js";import"./MenuListHeading-0U1jptlM.js";import"./MenuItem-BItckqMb.js";import"./ItemMedia-DZiSht8H.js";import"./Checkmark-BHVaOMRl.js";import"./Heading-r7KrHQRq.js";import"./ItemControls-XLXkfke2.js";import"./ChevronRight-cMtudnfA.js";import"./Badge-BL5WZhsc.js";import"./useMenu-HLwWT2ab.js";import"./InformationSquare-Cu6RA9m9.js";import"./ChevronUpDown-7yy58H4K.js";import"./ButtonGroup-B8wqqWfc.js";import"./ButtonGroupDivider-BoJnk5BU.js";import"./Tooltip-BkHTwdrx.js";import"./floating-ui.dom-DCpi3RTt.js";import"./ToolbarMenu-C0WyX5iw.js";import"./ToolbarSearch-wO_rsMns.js";import"./button-vIDiYGt4.js";const Ct={title:"Timeline/ActivityLog",tags:["beta"],parameters:{},args:{}},i=()=>{const{items:o}=p();return t.jsx(c,{items:o})},n=()=>{const{toolbar:o,items:e}=p();return t.jsxs(M,{spacing:6,children:[t.jsx(u,{...o}),t.jsx(c,{items:e})]})},a=()=>{const{items:o}=p(),[e,s]=d.useState(!0),r=()=>{s(!1)};return t.jsxs(t.Fragment,{children:[t.jsx(g,{onClick:()=>s(!0),children:"Open Modal"}),t.jsxs(v,{open:e,onClose:r,variant:"content",children:[t.jsx(y,{title:"Aktivitetslogg for dialog",onClose:r}),t.jsx(x,{children:t.jsx(c,{items:o})})]})]})},m=()=>{const{toolbar:o,items:e}=p(),[s,r]=d.useState(!0),l=()=>{r(!1)};return t.jsxs(t.Fragment,{children:[t.jsx(g,{onClick:()=>r(!0),children:"Open Modal"}),t.jsxs(v,{open:s,onClose:l,variant:"content",children:[t.jsx(y,{title:"Aktivitetslogg for dialog",onClose:l,sticky:!1}),t.jsxs(x,{children:[t.jsx("div",{style:{position:"sticky",top:"1.5em",zIndex:2},children:t.jsx(u,{...o})}),t.jsx(c,{items:e})]})]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
