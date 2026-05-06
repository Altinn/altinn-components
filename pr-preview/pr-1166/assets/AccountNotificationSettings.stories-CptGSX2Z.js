import{r as g,j as t}from"./iframe-0B_Yudin.js";import{A as S}from"./AccountNotificationSettings-YOCTrVAK.js";import{B as u}from"./Button-CFVlP8iN.js";import{M as f,a as x,b as X}from"./ModalBody-lU1YKfiD.js";import{L as C}from"./List-BxubJ1l7.js";import{S as j}from"./SettingsItem-B8uJVMUB.js";import{B as v}from"./ButtonGroup-CSUZvsoD.js";import"./preload-helper-PPVm8Dsz.js";import"./Fieldset-CcucJBMR.js";import"./lite-DaUVFjkg.js";import"./index-DeiwrdtL.js";import"./use-merge-refs-ymJsCjoB.js";import"./Switch-6FvXDRQ8.js";import"./index-bzqtFzN_.js";import"./Label-BawrqgTw.js";import"./Input-B4vKKvBG.js";import"./input-P8iU2s3c.js";import"./TextField-DZRDAZ9k.js";import"./FieldBase-BRRzaSEH.js";import"./Typography-WSorE15D.js";import"./useHighlightedText-1P3axs8E.js";import"./Skeleton-CCW5QxrE.js";import"./button-B4QTcVhB.js";import"./Section-byNAOZ7t.js";import"./Flex-CcsVAtXA.js";import"./XMark-4vnuAWTz.js";import"./useId-BUxMg0Ir.js";import"./Icon-CbCRlB_g.js";import"./Avatar-BGwRUT15.js";import"./AvatarGroup-VvayKp3V.js";import"./Heading-iCNnL7gN.js";import"./ListItem-DnHiZFTT.js";import"./Badge-BFzKrsnu.js";import"./Tooltip-BPVsTrTk.js";import"./floating-ui.dom-DCpi3RTt.js";import"./ChevronUp-CRY6Xdys.js";import"./ChevronDown-DyrNm3cx.js";import"./ChevronRight-D1gjYegd.js";import"./SettingsItemBase-CPL8qCc4.js";import"./ItemLink-BmeT6DsA.js";import"./ItemMedia-DPzqoyVf.js";import"./ItemControls-DGPFdAX4.js";import"./SettingsModal-D9Bwsf9R.js";import"./ButtonIcon-C8wYqRVe.js";import"./ButtonLabel-DvXULbxc.js";const At={title:"Account/AccountNotificationSettings",component:S,tags:["autodocs"],parameters:{}},s={args:{}},r=n=>{const[p,a]=g.useState({...n}),e=c=>{const{type:A,checked:B,name:d,value:h}=c.target;a(A==="checkbox"?l=>({...l,[d]:B}):l=>({...l,[d]:h}))};return t.jsx(S,{...n,...p,onChange:e})},i=()=>t.jsx(r,{smsAlerts:!0,phone:"99005566"}),o=()=>t.jsx(r,{smsAlerts:!0,phone:"99005566",emailAlerts:!0,email:"mathias@brann.no"}),m=({title:n="Aktør"})=>{const[p,a]=g.useState(!1),e=()=>{a(c=>!c)};return t.jsxs(t.Fragment,{children:[t.jsx(u,{onClick:e,children:"Åpne modal"}),t.jsxs(f,{open:p,onClose:e,children:[t.jsx(x,{title:n,children:t.jsx(C,{children:t.jsx(j,{id:"bb",icon:{name:"Bergen Bar",type:"company"},title:"Bergen Bar",description:"Org. nr. XXX XXX XXX"})})}),t.jsxs(X,{children:[t.jsx(o,{}),t.jsxs(v,{children:[t.jsx(u,{onClick:e,children:"Lagre og avslutt"}),t.jsx(u,{onClick:e,variant:"outline",children:"Avbryt"})]})]})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const Bt=["Default","Controlled","SmsAlerts","SmsAndEmailAlerts","AccountNotificationsModal"];export{m as AccountNotificationsModal,r as Controlled,s as Default,i as SmsAlerts,o as SmsAndEmailAlerts,Bt as __namedExportsOrder,At as default};
