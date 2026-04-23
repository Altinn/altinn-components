import{r as g,j as t}from"./iframe-DDirkHus.js";import{A as S}from"./AccountNotificationSettings-PkuQBRvx.js";import{B as u}from"./Button-CdMyOsNo.js";import{M as f}from"./ModalBase-DnjQHIZ0.js";import{M as x,a as X}from"./ModalBody-CM30JKF1.js";import{L as C}from"./List-Cjvw0Kzt.js";import{S as j}from"./SettingsItem-0Qag2hvf.js";import{B as v}from"./ButtonGroup-B-c85YOq.js";import"./preload-helper-PPVm8Dsz.js";import"./Fieldset-D58mDId3.js";import"./lite-DaUVFjkg.js";import"./index-F2gU6D0V.js";import"./use-merge-refs-CIAaUVpb.js";import"./Switch-DcTcdqOA.js";import"./index-B2YDfdyU.js";import"./Label-9QWpQ8Bw.js";import"./Input-C9yDHhzX.js";import"./input-CQTkCXgP.js";import"./TextField-D1RIV1wY.js";import"./FieldBase-BNjKJDB0.js";import"./Typography-Do8CAd45.js";import"./useHighlightedText-CWfqHJQe.js";import"./Skeleton-0VOrezcL.js";import"./button-CnVt3gpj.js";import"./Section-CUHbf36A.js";import"./Flex-CKMYHSxr.js";import"./XMark-DldqIUES.js";import"./useId-CVUrh2ea.js";import"./Icon-Cv1R39O2.js";import"./Avatar-DMl0Fglw.js";import"./AvatarGroup-CxNYw_3L.js";import"./Heading-s9P5sHvn.js";import"./ListItem-CNfUb6zi.js";import"./Badge-BMZjltw3.js";import"./Tooltip-Di80zHO_.js";import"./floating-ui.dom-DCpi3RTt.js";import"./ChevronUp-CfXo5p6V.js";import"./ChevronDown-BujCn4TJ.js";import"./ChevronRight-BUOZMhwy.js";import"./SettingsItemBase-DBC9ng52.js";import"./ItemLink-ClwPv_--.js";import"./ItemMedia-ZkVlWcbo.js";import"./ItemControls-CqR56LSR.js";import"./SettingsModal-u_O97U3x.js";import"./ButtonIcon-Cvt6zSue.js";import"./ButtonLabel-D_WD8Z8N.js";const Bt={title:"Account/AccountNotificationSettings",component:S,tags:["autodocs"],parameters:{}},s={args:{}},r=n=>{const[p,a]=g.useState({...n}),e=c=>{const{type:A,checked:B,name:d,value:h}=c.target;a(A==="checkbox"?l=>({...l,[d]:B}):l=>({...l,[d]:h}))};return t.jsx(S,{...n,...p,onChange:e})},i=()=>t.jsx(r,{smsAlerts:!0,phone:"99005566"}),o=()=>t.jsx(r,{smsAlerts:!0,phone:"99005566",emailAlerts:!0,email:"mathias@brann.no"}),m=({title:n="Aktør"})=>{const[p,a]=g.useState(!1),e=()=>{a(c=>!c)};return t.jsxs(t.Fragment,{children:[t.jsx(u,{onClick:e,children:"Åpne modal"}),t.jsxs(f,{open:p,onClose:e,children:[t.jsx(x,{title:n,children:t.jsx(C,{children:t.jsx(j,{id:"bb",icon:{name:"Bergen Bar",type:"company"},title:"Bergen Bar",description:"Org. nr. XXX XXX XXX"})})}),t.jsxs(X,{children:[t.jsx(o,{}),t.jsxs(v,{children:[t.jsx(u,{onClick:e,children:"Lagre og avslutt"}),t.jsx(u,{onClick:e,variant:"outline",children:"Avbryt"})]})]})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
