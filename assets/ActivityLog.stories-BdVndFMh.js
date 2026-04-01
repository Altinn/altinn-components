import{j as t,r as d}from"./iframe-DxxW_Hah.js";import{u as p}from"./useActivityLogToolbar-BADAk4L9.js";import{A as c}from"./ActivityLogItem-CloVZ--n.js";import{S as M}from"./Section-DDQuxuHV.js";import{T as u}from"./Toolbar-D_GIfmV4.js";import{B as g}from"./Button-CcwbSiKg.js";import{M as v}from"./ModalBase-CtAbLl_j.js";import{M as y,a as x}from"./ModalBody-Beg9EMdn.js";import"./preload-helper-PPVm8Dsz.js";import"./TimelineSegment-hZykHmkR.js";import"./TimelineBase-D5Sk2XaP.js";import"./TimelineIcon-BksuaAz3.js";import"./XMark-ChXBbXGN.js";import"./useId-CckRU7I8.js";import"./Icon-Cf03fdWw.js";import"./index-pOAXHZ6n.js";import"./Skeleton-DiRARuJ9.js";import"./Avatar--rA6gsID.js";import"./AvatarGroup-C6j_8VXQ.js";import"./Flex-CRmH3H-L.js";import"./CircleFill-Df4egTvM.js";import"./Byline-DMQrC7vU.js";import"./Typography-CfTPPq_a.js";import"./useHighlightedText-C9OLcmcP.js";import"./Timeline-DMrk-aho.js";import"./TimelineActivity-B0k7yhQL.js";import"./useDropdownMenuController-BAV-gCcK.js";import"./Plus-CScsMow9.js";import"./Dropdown-_zFGDkyY.js";import"./SearchField-ptc2QeHn.js";import"./MagnifyingGlass-B8dYO_M2.js";import"./FieldBase-ttSv04zw.js";import"./Label-YFmv6AXl.js";import"./index-D2WP85Bl.js";import"./use-merge-refs-BbTz5JXs.js";import"./lite-DaUVFjkg.js";import"./Input-Cs8lujA3.js";import"./input-B30SugQD.js";import"./MenuListItem-BWh93a_i.js";import"./MenuListHeading-CIz6aOLR.js";import"./MenuItem-SOEG9Ke8.js";import"./ItemMedia-DDT4_MLi.js";import"./Checkmark-pZi8btQa.js";import"./Heading-Bejow2zA.js";import"./ChevronRight-CqOTbusb.js";import"./Badge-CQ9EBUDZ.js";import"./useMenu-DMxEdeKU.js";import"./InformationSquare-CuO8i3VE.js";import"./ChevronUpDown-CXtDHS57.js";import"./ButtonGroup-wgVYayc9.js";import"./ButtonGroupDivider-i0Wffh1Y.js";import"./Tooltip-DIHoftUf.js";import"./floating-ui.dom-DCpi3RTt.js";import"./ToolbarMenu-I3DkE7Ax.js";import"./ToolbarSearch-C2CyTcgn.js";import"./button-BBYE_PPH.js";const jt={title:"Timeline/ActivityLog",tags:["beta"],parameters:{},args:{}},i=()=>{const{items:o}=p();return t.jsx(c,{items:o})},n=()=>{const{toolbar:o,items:e}=p();return t.jsxs(M,{spacing:6,children:[t.jsx(u,{...o}),t.jsx(c,{items:e})]})},a=()=>{const{items:o}=p(),[e,s]=d.useState(!0),r=()=>{s(!1)};return t.jsxs(t.Fragment,{children:[t.jsx(g,{onClick:()=>s(!0),children:"Open Modal"}),t.jsxs(v,{open:e,onClose:r,variant:"content",children:[t.jsx(y,{title:"Aktivitetslogg for dialog",onClose:r}),t.jsx(x,{children:t.jsx(c,{items:o})})]})]})},m=()=>{const{toolbar:o,items:e}=p(),[s,r]=d.useState(!0),l=()=>{r(!1)};return t.jsxs(t.Fragment,{children:[t.jsx(g,{onClick:()=>r(!0),children:"Open Modal"}),t.jsxs(v,{open:s,onClose:l,variant:"content",children:[t.jsx(y,{title:"Aktivitetslogg for dialog",onClose:l,sticky:!1}),t.jsxs(x,{children:[t.jsx("div",{style:{position:"sticky",top:"1.5em",zIndex:2},children:t.jsx(u,{...o})}),t.jsx(c,{items:e})]})]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
