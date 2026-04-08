import{i as e}from"./chunk-DseTPa7n.js";import{t}from"./react-CpyhhMkF.js";import{t as n}from"./jsx-runtime-DwqL_Y-t.js";import{t as r}from"./Button-L6T5IVdq.js";import{t as i}from"./Toolbar-CmziBAS7.js";import{t as a}from"./Section-DYB-4Xyp.js";import{t as o}from"./ActivityLogItem-Bm30MUym.js";import{t as s}from"./ModalBase-BCoKaUL8.js";import{n as c,t as l}from"./ModalBody-CcVlYYQR.js";import{t as u}from"./useActivityLogToolbar-CMDk3zdD.js";var d=e(t(),1),f=n(),p={title:`Timeline/ActivityLog`,tags:[`beta`],parameters:{},args:{}},m=()=>{let{items:e}=u();return(0,f.jsx)(o,{items:e})},h=()=>{let{toolbar:e,items:t}=u();return(0,f.jsxs)(a,{spacing:6,children:[(0,f.jsx)(i,{...e}),(0,f.jsx)(o,{items:t})]})},g=()=>{let{items:e}=u(),[t,n]=(0,d.useState)(!0),i=()=>{n(!1)};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(r,{onClick:()=>n(!0),children:`Open Modal`}),(0,f.jsxs)(s,{open:t,onClose:i,variant:`content`,children:[(0,f.jsx)(c,{title:`Aktivitetslogg for dialog`,onClose:i}),(0,f.jsx)(l,{children:(0,f.jsx)(o,{items:e})})]})]})},_=()=>{let{toolbar:e,items:t}=u(),[n,a]=(0,d.useState)(!0),p=()=>{a(!1)};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(r,{onClick:()=>a(!0),children:`Open Modal`}),(0,f.jsxs)(s,{open:n,onClose:p,variant:`content`,children:[(0,f.jsx)(c,{title:`Aktivitetslogg for dialog`,onClose:p,sticky:!1}),(0,f.jsxs)(l,{children:[(0,f.jsx)(`div`,{style:{position:`sticky`,top:`1.5em`,zIndex:2},children:(0,f.jsx)(i,{...e})}),(0,f.jsx)(o,{items:t})]})]})]})};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
  const {
    items
  } = useActivityLog();
  return <ActivityLog items={items} />;
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`() => {
  const {
    toolbar,
    items
  } = useActivityLog();
  return <Section spacing={6}>
      <Toolbar {...toolbar} />
      <ActivityLog items={items} />
    </Section>;
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => {
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
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`() => {
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
}`,..._.parameters?.docs?.source}}};var v=[`Default`,`Controlled`,`ActivityLogModal`,`ActivityLogModalAdvanced`];export{v as a,m as i,_ as n,p as o,h as r,g as t};