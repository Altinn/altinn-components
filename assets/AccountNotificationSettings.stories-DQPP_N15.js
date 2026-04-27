import{r as g,j as t}from"./iframe-B56t8i7v.js";import{A as S}from"./AccountNotificationSettings-CaRqOwmT.js";import{B as u}from"./Button-x4ugPYkx.js";import{M as f}from"./ModalBase-DAC3P7wf.js";import{M as x,a as X}from"./ModalBody-DZEYNo_5.js";import{L as C}from"./List-Cf0-_oGc.js";import{S as j}from"./SettingsItem-DpkybshB.js";import{B as v}from"./ButtonGroup-DUjF8sgK.js";import"./preload-helper-PPVm8Dsz.js";import"./Fieldset-DqVnc9xR.js";import"./lite-DaUVFjkg.js";import"./index-pNH6Tvi1.js";import"./use-merge-refs-CJ3sV19d.js";import"./Switch-Ch_BWUCO.js";import"./index-CHgNdXFp.js";import"./Label-Bx5THtMF.js";import"./Input-DqVNSGAW.js";import"./input-CtI4L4z7.js";import"./TextField-CxRl2dGO.js";import"./FieldBase-BkGCBc8B.js";import"./Typography-C36VcWyw.js";import"./useHighlightedText-YMvuFtwb.js";import"./Skeleton-Cer98cLN.js";import"./button-BSGP1CSM.js";import"./Section-DXg-mnVx.js";import"./Flex-BSViFEWJ.js";import"./XMark-CQR84vCO.js";import"./useId-Ce_44NzT.js";import"./Icon-CgN9F-ql.js";import"./Avatar-_1995Z8x.js";import"./AvatarGroup-kqIJtB4O.js";import"./Heading-B0k14T1s.js";import"./ListItem-DXm9Ifb4.js";import"./Badge-DuKldjFD.js";import"./Tooltip-uv_ZTnws.js";import"./floating-ui.dom-DCpi3RTt.js";import"./ChevronUp-DZyTk36P.js";import"./ChevronDown-DuvcSheB.js";import"./ChevronRight-VYKVaZtU.js";import"./SettingsItemBase-dnhUSNJ6.js";import"./ItemLink-CR2F4UR3.js";import"./ItemMedia-DJxakqLL.js";import"./ItemControls-DurpuKFn.js";import"./SettingsModal-cif9potf.js";import"./ButtonIcon-RQaEMoLk.js";import"./ButtonLabel-B2zAlRRB.js";const Bt={title:"Account/AccountNotificationSettings",component:S,tags:["autodocs"],parameters:{}},s={args:{}},r=n=>{const[p,a]=g.useState({...n}),e=c=>{const{type:A,checked:B,name:d,value:h}=c.target;a(A==="checkbox"?l=>({...l,[d]:B}):l=>({...l,[d]:h}))};return t.jsx(S,{...n,...p,onChange:e})},i=()=>t.jsx(r,{smsAlerts:!0,phone:"99005566"}),o=()=>t.jsx(r,{smsAlerts:!0,phone:"99005566",emailAlerts:!0,email:"mathias@brann.no"}),m=({title:n="Aktør"})=>{const[p,a]=g.useState(!1),e=()=>{a(c=>!c)};return t.jsxs(t.Fragment,{children:[t.jsx(u,{onClick:e,children:"Åpne modal"}),t.jsxs(f,{open:p,onClose:e,children:[t.jsx(x,{title:n,children:t.jsx(C,{children:t.jsx(j,{id:"bb",icon:{name:"Bergen Bar",type:"company"},title:"Bergen Bar",description:"Org. nr. XXX XXX XXX"})})}),t.jsxs(X,{children:[t.jsx(o,{}),t.jsxs(v,{children:[t.jsx(u,{onClick:e,children:"Lagre og avslutt"}),t.jsx(u,{onClick:e,variant:"outline",children:"Avbryt"})]})]})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
