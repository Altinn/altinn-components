import{r as g,j as t}from"./iframe-DxKlu2kD.js";import{A as S}from"./AccountNotificationSettings-BVAlBiZZ.js";import{B as u}from"./Button-D78I7hWM.js";import{M as h}from"./ModalBase-DpPU055p.js";import{M as x,a as v}from"./ModalBody-DiTxFtGR.js";import{L as X}from"./List-C5g4_qse.js";import{S as C}from"./SettingsItem-fJzZ0YfP.js";import{B as j}from"./ButtonGroup-CKoZVXux.js";import"./preload-helper-PPVm8Dsz.js";import"./Fieldset-D7CglCuV.js";import"./lite-DaUVFjkg.js";import"./index-sO6KcVLH.js";import"./use-merge-refs-CvQTDNhp.js";import"./Switch-BzdDuGzs.js";import"./index-BWCSYHeO.js";import"./Label-DPRrgAAI.js";import"./Input-3npG3_R_.js";import"./input-BTAyJhby.js";import"./TextField-sxh8TgHs.js";import"./FieldBase-DR6_g4FH.js";import"./Typography-iC77LYkz.js";import"./useHighlightedText-DHBtHLKn.js";import"./Skeleton-niSIm0IT.js";import"./button-B-2CHja_.js";import"./Section-5cGBq3ET.js";import"./Flex-CFZAXqgp.js";import"./XMark-C1fx_pyo.js";import"./useId-_YfdAmsW.js";import"./Icon-CrZKj0Yv.js";import"./Avatar-BwF2spoI.js";import"./AvatarGroup-D_QmYd99.js";import"./Heading-m7XVygop.js";import"./ListItem-BFQ5Iogs.js";import"./Badge-4TJDD2P9.js";import"./ChevronUp-CoEIha6w.js";import"./ChevronDown-C5m-qI-T.js";import"./ChevronRight-DCeYx28-.js";import"./SettingsItemBase-DrhskNnl.js";import"./SettingsModal-D2YwlUzk.js";import"./ButtonIcon-Cd03PLYe.js";import"./ButtonLabel-DyfUioWj.js";const ut={title:"Account/AccountNotificationSettings",component:S,tags:["autodocs"],parameters:{}},s={args:{}},r=n=>{const[c,a]=g.useState({...n}),e=p=>{const{type:f,checked:A,name:d,value:B}=p.target;a(f==="checkbox"?l=>({...l,[d]:A}):l=>({...l,[d]:B}))};return t.jsx(S,{...n,...c,onChange:e})},i=()=>t.jsx(r,{smsAlerts:!0,phone:"99005566"}),o=()=>t.jsx(r,{smsAlerts:!0,phone:"99005566",emailAlerts:!0,email:"mathias@brann.no"}),m=({title:n="Aktør"})=>{const[c,a]=g.useState(!1),e=()=>{a(p=>!p)};return t.jsxs(t.Fragment,{children:[t.jsx(u,{onClick:e,children:"Åpne modal"}),t.jsxs(h,{open:c,onClose:e,children:[t.jsx(x,{title:n,children:t.jsx(X,{children:t.jsx(C,{id:"bb",interactive:!1,icon:{name:"Bergen Bar",type:"company"},title:"Bergen Bar",description:"Org. nr. XXX XXX XXX"})})}),t.jsxs(v,{children:[t.jsx(o,{}),t.jsxs(j,{children:[t.jsx(u,{onClick:e,children:"Lagre og avslutt"}),t.jsx(u,{onClick:e,variant:"outline",children:"Avbryt"})]})]})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
