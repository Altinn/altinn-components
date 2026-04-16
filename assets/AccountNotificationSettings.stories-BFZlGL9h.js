import{r as g,j as t}from"./iframe-qDHSBZ_X.js";import{A as S}from"./AccountNotificationSettings-B66p-tkf.js";import{B as u}from"./Button-DJMfIG2l.js";import{M as f}from"./ModalBase-D5nrnpeg.js";import{M as x,a as X}from"./ModalBody-CPf3RSij.js";import{L as C}from"./List-CWWxrTyE.js";import{S as j}from"./SettingsItem-C9plBkWE.js";import{B as v}from"./ButtonGroup-D3OFsAa4.js";import"./preload-helper-PPVm8Dsz.js";import"./Fieldset-fceRu4C4.js";import"./lite-DaUVFjkg.js";import"./index-C32uHHVZ.js";import"./use-merge-refs-BMfrfQuo.js";import"./Switch-De1PckpN.js";import"./index-DTh2bawh.js";import"./Label-UpgatIiv.js";import"./Input-ChlNPyEa.js";import"./input-CNv7eEBO.js";import"./TextField-CJ_tnBEX.js";import"./FieldBase-36tTBvzs.js";import"./Typography-DhQz7tKb.js";import"./useHighlightedText-D75SWcvd.js";import"./Skeleton-CJ3n2_6V.js";import"./button-CfQ7EAt1.js";import"./Section-BGNwMxU-.js";import"./Flex-BTOiCOb2.js";import"./XMark-D8iHP3Cp.js";import"./useId-DLE_nI5l.js";import"./Icon-BDVkMuHy.js";import"./Avatar-BNcU10On.js";import"./AvatarGroup-CDcb8Qnp.js";import"./Heading-D2BacHeJ.js";import"./ListItem-CtT8THVd.js";import"./Badge-CmtcZ1do.js";import"./ChevronUp-BCgkquKN.js";import"./ChevronDown-By4Pb8IL.js";import"./ChevronRight-Dusr5JiS.js";import"./SettingsItemBase-1siPsKad.js";import"./ItemLink-BI9Xo5Q5.js";import"./ItemMedia-p3tZByS2.js";import"./ItemControls-Bd_Ry2Op.js";import"./SettingsModal-ClCYiVlq.js";import"./ButtonIcon-RpuQ8rbs.js";import"./ButtonLabel-By2Cfxp9.js";const St={title:"Account/AccountNotificationSettings",component:S,tags:["autodocs"],parameters:{}},s={args:{}},r=n=>{const[p,a]=g.useState({...n}),e=c=>{const{type:A,checked:B,name:d,value:h}=c.target;a(A==="checkbox"?l=>({...l,[d]:B}):l=>({...l,[d]:h}))};return t.jsx(S,{...n,...p,onChange:e})},i=()=>t.jsx(r,{smsAlerts:!0,phone:"99005566"}),o=()=>t.jsx(r,{smsAlerts:!0,phone:"99005566",emailAlerts:!0,email:"mathias@brann.no"}),m=({title:n="Aktør"})=>{const[p,a]=g.useState(!1),e=()=>{a(c=>!c)};return t.jsxs(t.Fragment,{children:[t.jsx(u,{onClick:e,children:"Åpne modal"}),t.jsxs(f,{open:p,onClose:e,children:[t.jsx(x,{title:n,children:t.jsx(C,{children:t.jsx(j,{id:"bb",icon:{name:"Bergen Bar",type:"company"},title:"Bergen Bar",description:"Org. nr. XXX XXX XXX"})})}),t.jsxs(X,{children:[t.jsx(o,{}),t.jsxs(v,{children:[t.jsx(u,{onClick:e,children:"Lagre og avslutt"}),t.jsx(u,{onClick:e,variant:"outline",children:"Avbryt"})]})]})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const At=["Default","Controlled","SmsAlerts","SmsAndEmailAlerts","AccountNotificationsModal"];export{m as AccountNotificationsModal,r as Controlled,s as Default,i as SmsAlerts,o as SmsAndEmailAlerts,At as __namedExportsOrder,St as default};
