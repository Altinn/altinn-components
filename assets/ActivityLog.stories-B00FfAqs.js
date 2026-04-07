import{j as t,r as d}from"./iframe-D8UVhXtj.js";import{u as p}from"./useActivityLogToolbar-B7qdgzh-.js";import{A as c}from"./ActivityLogItem-B40vLyCV.js";import{S as M}from"./Section-CECOJo4z.js";import{T as u}from"./Toolbar-BFKVtVdg.js";import{B as g}from"./Button-C1dDhU4f.js";import{M as v}from"./ModalBase-Tr-DRHUm.js";import{M as y,a as x}from"./ModalBody-B3VA1SE5.js";import"./preload-helper-PPVm8Dsz.js";import"./TimelineSegment-BW1pkaln.js";import"./TimelineBase-DHwSUUGE.js";import"./TimelineIcon-K553jMGM.js";import"./XMark-RzwOtF1Q.js";import"./useId-B_5z_sER.js";import"./Icon-DPTwfvyC.js";import"./index-DZ6CWLt4.js";import"./Skeleton-DuOqXwDT.js";import"./Avatar-DcRqiXhT.js";import"./AvatarGroup-DAqs7ZMl.js";import"./Flex-C6te8drU.js";import"./CircleFill-aqyieTKN.js";import"./Byline-BDjC19uQ.js";import"./Typography-n-xWt5s-.js";import"./useHighlightedText-CniNcpSk.js";import"./Timeline-D-97tzv5.js";import"./TimelineActivity-Cgv4kYPk.js";import"./useDropdownMenuController-DzAqcIMc.js";import"./Plus-DWBglMau.js";import"./Dropdown-DCJfu5rP.js";import"./SearchField-DrqRDMva.js";import"./MagnifyingGlass-Dwu8NLc_.js";import"./FieldBase-DzrGcQVO.js";import"./Label-b2Pkfnmh.js";import"./index-B_UnVtHx.js";import"./use-merge-refs-PJHuZtY5.js";import"./lite-DaUVFjkg.js";import"./Input-CeOaqFsx.js";import"./input-Dh6CJXOW.js";import"./MenuListItem-D2rOlDhJ.js";import"./MenuListHeading-BCjwSnwp.js";import"./MenuItem-D_QGB2bx.js";import"./ItemMedia-D1B_6Nv6.js";import"./Checkmark-DOivg6Pe.js";import"./Heading-BAduz1Vr.js";import"./ChevronRight-BBMrC_JJ.js";import"./Badge-FbSzRhwU.js";import"./useMenu-Bi-E8KDv.js";import"./InformationSquare-BUh6v1hF.js";import"./ChevronUpDown-DLYhoYYJ.js";import"./ButtonGroup-o1ngc8Xw.js";import"./ButtonGroupDivider-D-j9u71T.js";import"./Tooltip-Z_wNKmlw.js";import"./floating-ui.dom-DCpi3RTt.js";import"./ToolbarMenu-DHhsFI4W.js";import"./ToolbarSearch--8LKLWyf.js";import"./button-BAeX-ygn.js";const jt={title:"Timeline/ActivityLog",tags:["beta"],parameters:{},args:{}},i=()=>{const{items:o}=p();return t.jsx(c,{items:o})},n=()=>{const{toolbar:o,items:e}=p();return t.jsxs(M,{spacing:6,children:[t.jsx(u,{...o}),t.jsx(c,{items:e})]})},a=()=>{const{items:o}=p(),[e,s]=d.useState(!0),r=()=>{s(!1)};return t.jsxs(t.Fragment,{children:[t.jsx(g,{onClick:()=>s(!0),children:"Open Modal"}),t.jsxs(v,{open:e,onClose:r,variant:"content",children:[t.jsx(y,{title:"Aktivitetslogg for dialog",onClose:r}),t.jsx(x,{children:t.jsx(c,{items:o})})]})]})},m=()=>{const{toolbar:o,items:e}=p(),[s,r]=d.useState(!0),l=()=>{r(!1)};return t.jsxs(t.Fragment,{children:[t.jsx(g,{onClick:()=>r(!0),children:"Open Modal"}),t.jsxs(v,{open:s,onClose:l,variant:"content",children:[t.jsx(y,{title:"Aktivitetslogg for dialog",onClose:l,sticky:!1}),t.jsxs(x,{children:[t.jsx("div",{style:{position:"sticky",top:"1.5em",zIndex:2},children:t.jsx(u,{...o})}),t.jsx(c,{items:e})]})]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
