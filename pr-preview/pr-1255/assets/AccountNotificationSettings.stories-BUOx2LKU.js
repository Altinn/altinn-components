import{aa as g,a7 as t,c as u}from"./iframe-CdYVD6SD.js";import{A as S}from"./AccountNotificationSettings-BvgtdvUB.js";import{M as f,b as x,a as X}from"./ModalBody-BPE_VM4S.js";import{L as C}from"./List-BOSoX1au.js";import{S as v}from"./SettingsItem-kivhW477.js";import{B as j}from"./ButtonGroup-B-NgaNCB.js";import"./preload-helper-PPVm8Dsz.js";import"./Fieldset-C2HFQRF0.js";import"./Switch-1ygURg1t.js";import"./Field-DkF-iZgl.js";import"./Input-CF984aoc.js";import"./Label-lXTSTWmW.js";import"./TextField-DOJrkQe9.js";import"./FieldBase-NvZtAXfB.js";import"./Typography-Dba7VpUA.js";import"./useHighlightedText-DItA3cBY.js";import"./Section-Dk-Ohevy.js";import"./Flex-Cyvp2qjC.js";import"./Avatar-fMwGn-3G.js";import"./AvatarGroup-BXTj0nvd.js";import"./Heading-Kaqd1h94.js";import"./ListItem-18oaQRPM.js";import"./Badge-DuyiKzKp.js";import"./Tooltip-Vr6xk2hm.js";import"./ChevronUp-BrRMdaLP.js";import"./ChevronDown-C8P1GjsS.js";import"./ChevronRight-Dr5zJkhS.js";import"./SettingsItemBase-CEWoePN9.js";import"./ItemMedia-BIl5Wxj2.js";import"./ItemBase-KuqrX7JT.js";import"./ItemLink-CU-HlXOq.js";import"./ItemControls-vidWw2G8.js";import"./SettingsModal-oeTO1HA_.js";import"./ButtonIcon-Cf34fIGP.js";import"./ButtonLabel-D6MSJXz4.js";const st={title:"Account/AccountNotificationSettings",component:S,tags:["autodocs"],parameters:{}},s={args:{}},o=n=>{const[c,a]=g.useState({...n}),e=p=>{const{type:A,checked:h,name:d,value:B}=p.target;a(A==="checkbox"?l=>({...l,[d]:h}):l=>({...l,[d]:B}))};return t.jsx(S,{...n,...c,onChange:e})},i=()=>t.jsx(o,{smsAlerts:!0,phone:"99005566"}),r=()=>t.jsx(o,{smsAlerts:!0,phone:"99005566",emailAlerts:!0,email:"mathias@brann.no"}),m=({title:n="Aktør"})=>{const[c,a]=g.useState(!1),e=()=>{a(p=>!p)};return t.jsxs(t.Fragment,{children:[t.jsx(u,{onClick:e,children:"Åpne modal"}),t.jsxs(f,{open:c,onClose:e,children:[t.jsx(x,{title:n,children:t.jsx(C,{children:t.jsx(v,{id:"bb",icon:{name:"Bergen Bar",type:"company"},title:"Bergen Bar",description:"Org. nr. XXX XXX XXX"})})}),t.jsxs(X,{children:[t.jsx(r,{}),t.jsxs(j,{children:[t.jsx(u,{onClick:e,children:"Lagre og avslutt"}),t.jsx(u,{onClick:e,variant:"outline",children:"Avbryt"})]})]})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`(args: AccountNotificationSettingsProps) => {
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
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
  return <Controlled smsAlerts={true} phone="99005566" />;
}`,...i.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
  return <Controlled smsAlerts={true} phone="99005566" emailAlerts={true} email="mathias@brann.no" />;
}`,...r.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`({
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
}`,...m.parameters?.docs?.source}}};const it=["Default","Controlled","SmsAlerts","SmsAndEmailAlerts","AccountNotificationsModal"];export{m as AccountNotificationsModal,o as Controlled,s as Default,i as SmsAlerts,r as SmsAndEmailAlerts,it as __namedExportsOrder,st as default};
