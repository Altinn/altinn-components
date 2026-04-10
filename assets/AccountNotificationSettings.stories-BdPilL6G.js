import{r as g,j as t}from"./iframe-DRbAvM8B.js";import{A as S}from"./AccountNotificationSettings-B3AD8iYf.js";import{B as u}from"./Button-DXRH0CtL.js";import{M as h}from"./ModalBase-OEJeuyA3.js";import{M as x,a as v}from"./ModalBody-DFMk_yAO.js";import{L as X}from"./List-DqiN2axT.js";import{S as C}from"./SettingsItem-CenHAcE6.js";import{B as j}from"./ButtonGroup-r6m6YA7P.js";import"./preload-helper-PPVm8Dsz.js";import"./Fieldset-DWXEpDF1.js";import"./lite-DaUVFjkg.js";import"./index-Vs8aUpKw.js";import"./use-merge-refs-BRHMCtFk.js";import"./Switch-Wk8JvxKk.js";import"./index-Dpt5RUeZ.js";import"./Label-Zr8dB_9-.js";import"./Input-Cez8McI8.js";import"./input-DR5YebMy.js";import"./TextField-CJk_az0l.js";import"./FieldBase-_93TCpK5.js";import"./Typography-Da6zx1kt.js";import"./useHighlightedText-DaUYVTi5.js";import"./Skeleton-C6w0Fovi.js";import"./button-DB6SpB_q.js";import"./Section-eG7NPuGp.js";import"./Flex-DfEZbiAr.js";import"./XMark-BeNK6Eym.js";import"./useId-p3Uu13R2.js";import"./Icon-BB196-C1.js";import"./Avatar-DHw0Umd5.js";import"./AvatarGroup-BZTkgKpW.js";import"./Heading-aiLobBhZ.js";import"./ListItem-B48A-xDW.js";import"./Badge-B0bOgxTq.js";import"./ChevronUp-DFhYQLlv.js";import"./ChevronDown-D8-ttEmo.js";import"./ChevronRight-BIwAZUpi.js";import"./SettingsItemBase-CIv-jZJU.js";import"./SettingsModal-sRXVYMRo.js";import"./ButtonIcon-rceAdK8H.js";import"./ButtonLabel-DCtnGfPd.js";const ut={title:"Account/AccountNotificationSettings",component:S,tags:["autodocs"],parameters:{}},s={args:{}},r=n=>{const[c,a]=g.useState({...n}),e=p=>{const{type:f,checked:A,name:d,value:B}=p.target;a(f==="checkbox"?l=>({...l,[d]:A}):l=>({...l,[d]:B}))};return t.jsx(S,{...n,...c,onChange:e})},i=()=>t.jsx(r,{smsAlerts:!0,phone:"99005566"}),o=()=>t.jsx(r,{smsAlerts:!0,phone:"99005566",emailAlerts:!0,email:"mathias@brann.no"}),m=({title:n="Aktør"})=>{const[c,a]=g.useState(!1),e=()=>{a(p=>!p)};return t.jsxs(t.Fragment,{children:[t.jsx(u,{onClick:e,children:"Åpne modal"}),t.jsxs(h,{open:c,onClose:e,children:[t.jsx(x,{title:n,children:t.jsx(X,{children:t.jsx(C,{id:"bb",interactive:!1,icon:{name:"Bergen Bar",type:"company"},title:"Bergen Bar",description:"Org. nr. XXX XXX XXX"})})}),t.jsxs(v,{children:[t.jsx(o,{}),t.jsxs(j,{children:[t.jsx(u,{onClick:e,children:"Lagre og avslutt"}),t.jsx(u,{onClick:e,variant:"outline",children:"Avbryt"})]})]})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`(args: AccountNotificationSettingsProps) => {
  const [formData, setFormData] = useState({
    ...args
  });
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {
      type,
      checked,
      name,
      value
    } = e.target;
    if (type === 'checkbox') {
      setFormData(prevState => {
        return {
          ...prevState,
          [name]: checked
        };
      });
    } else {
      setFormData(prevState => {
        return {
          ...prevState,
          [name]: value
        };
      });
    }
  };
  return <AccountNotificationSettings {...args} {...formData} onChange={onChange} />;
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
  return <Controlled smsAlerts={true} phone="99005566" />;
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
  return <Controlled smsAlerts={true} phone="99005566" emailAlerts={true} email="mathias@brann.no" />;
}`,...o.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`({
  title = 'Aktør'
}) => {
  const [open, setOpen] = useState<boolean>(false);
  const onToggle = () => {
    setOpen(prevState => !prevState);
  };
  return <>
      <Button onClick={onToggle}>Åpne modal</Button>
      <ModalBase open={open} onClose={onToggle}>
        <ModalHeader title={title}>
          <List>
            <SettingsItem id="bb" interactive={false} icon={{
            name: 'Bergen Bar',
            type: 'company'
          }} title="Bergen Bar" description="Org. nr. XXX XXX XXX" />
          </List>
        </ModalHeader>
        <ModalBody>
          <SmsAndEmailAlerts />
          <ButtonGroup>
            <Button onClick={onToggle}>Lagre og avslutt</Button>
            <Button onClick={onToggle} variant="outline">
              Avbryt
            </Button>
          </ButtonGroup>
        </ModalBody>
      </ModalBase>
    </>;
}`,...m.parameters?.docs?.source}}};const dt=["Default","Controlled","SmsAlerts","SmsAndEmailAlerts","AccountNotificationsModal"];export{m as AccountNotificationsModal,r as Controlled,s as Default,i as SmsAlerts,o as SmsAndEmailAlerts,dt as __namedExportsOrder,ut as default};
