import{aa as g,a7 as t,c as u}from"./iframe-D-JzFSbn.js";import{A as S}from"./AccountNotificationSettings-B9fK3RIR.js";import{M as f,b as x,a as X}from"./ModalBody-C_e5HAx8.js";import{L as C}from"./List-BMqsgT4e.js";import{S as v}from"./SettingsItem-DodWHV-N.js";import{B as j}from"./ButtonGroup-DM3FeQWD.js";import"./preload-helper-PPVm8Dsz.js";import"./Fieldset-BTeG8zGc.js";import"./Switch-7NaDBReq.js";import"./Field-DohC7fWs.js";import"./Input--gXn6N4P.js";import"./Label-CCpB5jSj.js";import"./TextField-3RnNCSAg.js";import"./FieldBase-BAxlQmDt.js";import"./Typography-B37rH5fJ.js";import"./useHighlightedText-kVudreWZ.js";import"./Section-C7pnuU7Y.js";import"./Flex-LyiOw0eI.js";import"./Avatar-CPNNDSUm.js";import"./AvatarGroup-DlAxwCWG.js";import"./Heading-BuD5A-91.js";import"./ListItem-fagiPH4A.js";import"./Badge-DZcjaRxr.js";import"./Tooltip-CY73UMt9.js";import"./ChevronUp-CRCnff2F.js";import"./ChevronDown-CDDvyffK.js";import"./ChevronRight-CnTD3zzq.js";import"./SettingsItemBase-CJ5K594X.js";import"./ItemMedia-CHlzWEIP.js";import"./ItemBase-M7V_iwXR.js";import"./ItemLink-B5PMO6Sl.js";import"./ItemControls-B8a9YN0L.js";import"./SettingsModal-BCGiznCY.js";import"./ButtonIcon-BlmrgHJU.js";import"./ButtonLabel-D-OBonPW.js";const st={title:"Account/AccountNotificationSettings",component:S,tags:["autodocs"],parameters:{}},s={args:{}},o=n=>{const[c,a]=g.useState({...n}),e=p=>{const{type:A,checked:h,name:d,value:B}=p.target;a(A==="checkbox"?l=>({...l,[d]:h}):l=>({...l,[d]:B}))};return t.jsx(S,{...n,...c,onChange:e})},i=()=>t.jsx(o,{smsAlerts:!0,phone:"99005566"}),r=()=>t.jsx(o,{smsAlerts:!0,phone:"99005566",emailAlerts:!0,email:"mathias@brann.no"}),m=({title:n="Aktør"})=>{const[c,a]=g.useState(!1),e=()=>{a(p=>!p)};return t.jsxs(t.Fragment,{children:[t.jsx(u,{onClick:e,children:"Åpne modal"}),t.jsxs(f,{open:c,onClose:e,children:[t.jsx(x,{title:n,children:t.jsx(C,{children:t.jsx(v,{id:"bb",icon:{name:"Bergen Bar",type:"company"},title:"Bergen Bar",description:"Org. nr. XXX XXX XXX"})})}),t.jsxs(X,{children:[t.jsx(r,{}),t.jsxs(j,{children:[t.jsx(u,{onClick:e,children:"Lagre og avslutt"}),t.jsx(u,{onClick:e,variant:"outline",children:"Avbryt"})]})]})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
