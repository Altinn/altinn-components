import{r as g,j as t}from"./iframe-BWWyepKi.js";import{A as S}from"./AccountNotificationSettings-CfVgBCdK.js";import{B as u}from"./Button-DaLP9UzX.js";import{M as f}from"./ModalBase-6CWkGVU3.js";import{M as x,a as X}from"./ModalBody-Bam-amgL.js";import{L as C}from"./List-QdfDgzch.js";import{S as j}from"./SettingsItem-CBOJpwGZ.js";import{B as v}from"./ButtonGroup-Bf6ZmgRN.js";import"./preload-helper-PPVm8Dsz.js";import"./Fieldset-B2fp5dSJ.js";import"./lite-DaUVFjkg.js";import"./index-2Prco8uk.js";import"./use-merge-refs-CbLzoZkL.js";import"./Switch-Cap1vkPZ.js";import"./index-fkRlyifr.js";import"./Label-DYc4A36I.js";import"./Input-BcqR7Mo_.js";import"./input-CuS4pR7j.js";import"./TextField-RXQ8ysQd.js";import"./FieldBase-DnRTsvox.js";import"./Typography-C9vgo_J4.js";import"./useHighlightedText-BYfI8EMJ.js";import"./Skeleton-CYDyiFkf.js";import"./button-dq33hCwG.js";import"./Section-B8U8libR.js";import"./Flex-C8xEqik7.js";import"./XMark-DJOirLMA.js";import"./useId-CMCVT55W.js";import"./Icon-w9oNx8pI.js";import"./Avatar-CiKCHN1S.js";import"./AvatarGroup-DPHuhQ41.js";import"./Heading-DQYelGqr.js";import"./ListItem-EuoB6Qe0.js";import"./Badge-CiufGa4u.js";import"./Tooltip-C4xENPhK.js";import"./floating-ui.dom-DCpi3RTt.js";import"./ChevronUp-BJ9TGsTi.js";import"./ChevronDown-DWRTbX5l.js";import"./ChevronRight-I2Pyvoyr.js";import"./SettingsItemBase-uMe3DJCi.js";import"./ItemLink-BmfX1JZV.js";import"./ItemMedia-h4TQiEvV.js";import"./ItemControls-jVI2cRmn.js";import"./SettingsModal-Cb4D0vgb.js";import"./ButtonIcon-CknArlPu.js";import"./ButtonLabel-C9m85BPo.js";const Bt={title:"Account/AccountNotificationSettings",component:S,tags:["autodocs"],parameters:{}},s={args:{}},r=n=>{const[p,a]=g.useState({...n}),e=c=>{const{type:A,checked:B,name:d,value:h}=c.target;a(A==="checkbox"?l=>({...l,[d]:B}):l=>({...l,[d]:h}))};return t.jsx(S,{...n,...p,onChange:e})},i=()=>t.jsx(r,{smsAlerts:!0,phone:"99005566"}),o=()=>t.jsx(r,{smsAlerts:!0,phone:"99005566",emailAlerts:!0,email:"mathias@brann.no"}),m=({title:n="Aktør"})=>{const[p,a]=g.useState(!1),e=()=>{a(c=>!c)};return t.jsxs(t.Fragment,{children:[t.jsx(u,{onClick:e,children:"Åpne modal"}),t.jsxs(f,{open:p,onClose:e,children:[t.jsx(x,{title:n,children:t.jsx(C,{children:t.jsx(j,{id:"bb",icon:{name:"Bergen Bar",type:"company"},title:"Bergen Bar",description:"Org. nr. XXX XXX XXX"})})}),t.jsxs(X,{children:[t.jsx(o,{}),t.jsxs(v,{children:[t.jsx(u,{onClick:e,children:"Lagre og avslutt"}),t.jsx(u,{onClick:e,variant:"outline",children:"Avbryt"})]})]})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const ht=["Default","Controlled","SmsAlerts","SmsAndEmailAlerts","AccountNotificationsModal"];export{m as AccountNotificationsModal,r as Controlled,s as Default,i as SmsAlerts,o as SmsAndEmailAlerts,ht as __namedExportsOrder,Bt as default};
