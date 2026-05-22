import{r as g,j as t}from"./iframe-D-ID03Ik.js";import{A as S}from"./AccountNotificationSettings-D_nlv1lo.js";import{B as u}from"./Button-CO1zFGa4.js";import{M as f,a as x,b as X}from"./ModalBody-CNB4VnH4.js";import{L as C}from"./List-C-la8QZt.js";import{S as j}from"./SettingsItem-BayFQnvs.js";import{B as v}from"./ButtonGroup-vd8KP0y5.js";import"./preload-helper-PPVm8Dsz.js";import"./Fieldset-CPq1hID8.js";import"./tooltip-CH7-mov_.js";import"./Switch-BD5e0ry_.js";import"./index-DpFyEq-2.js";import"./Label-DsF9mxAr.js";import"./Input-BflTpPuJ.js";import"./TextField-Xdm4FrUx.js";import"./FieldBase-DmpPz6xV.js";import"./Typography-COzCTzPW.js";import"./useHighlightedText-Db1ksA0v.js";import"./Skeleton--3bwKnDN.js";import"./Section-Df_v2ciX.js";import"./Flex-pOoXofWS.js";import"./XMark-DAr8sgUQ.js";import"./useId-DxZoCrQU.js";import"./Icon-CER3YkDn.js";import"./Avatar-CUF81_T9.js";import"./AvatarGroup-ZBmyex5T.js";import"./Heading-BD0s_Obx.js";import"./ListItem-x7s3DQfA.js";import"./Badge-BH60Kfyy.js";import"./Tooltip-DuVvkEGb.js";import"./ChevronUp-BM7sC8IQ.js";import"./ChevronDown-_u2ch-6C.js";import"./ChevronRight-CxM-6AgC.js";import"./SettingsItemBase-RyTWVWwB.js";import"./ItemLink-CKC9Zcw7.js";import"./ItemMedia-BTzF80jS.js";import"./ItemControls-Bpd8WrWV.js";import"./SettingsModal-Be5AEnKf.js";import"./ButtonIcon-BTj5a5hg.js";import"./ButtonLabel-D9Z2FXBW.js";const lt={title:"Account/AccountNotificationSettings",component:S,tags:["autodocs"],parameters:{}},s={args:{}},r=n=>{const[c,a]=g.useState({...n}),e=p=>{const{type:A,checked:B,name:d,value:h}=p.target;a(A==="checkbox"?l=>({...l,[d]:B}):l=>({...l,[d]:h}))};return t.jsx(S,{...n,...c,onChange:e})},i=()=>t.jsx(r,{smsAlerts:!0,phone:"99005566"}),o=()=>t.jsx(r,{smsAlerts:!0,phone:"99005566",emailAlerts:!0,email:"mathias@brann.no"}),m=({title:n="Aktør"})=>{const[c,a]=g.useState(!1),e=()=>{a(p=>!p)};return t.jsxs(t.Fragment,{children:[t.jsx(u,{onClick:e,children:"Åpne modal"}),t.jsxs(f,{open:c,onClose:e,children:[t.jsx(x,{title:n,children:t.jsx(C,{children:t.jsx(j,{id:"bb",icon:{name:"Bergen Bar",type:"company"},title:"Bergen Bar",description:"Org. nr. XXX XXX XXX"})})}),t.jsxs(X,{children:[t.jsx(o,{}),t.jsxs(v,{children:[t.jsx(u,{onClick:e,children:"Lagre og avslutt"}),t.jsx(u,{onClick:e,variant:"outline",children:"Avbryt"})]})]})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
            <SettingsItem id="bb" icon={{
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
}`,...m.parameters?.docs?.source}}};const ut=["Default","Controlled","SmsAlerts","SmsAndEmailAlerts","AccountNotificationsModal"];export{m as AccountNotificationsModal,r as Controlled,s as Default,i as SmsAlerts,o as SmsAndEmailAlerts,ut as __namedExportsOrder,lt as default};
