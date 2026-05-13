import{r as g,j as t}from"./iframe-aW2Ivac6.js";import{A as S}from"./AccountNotificationSettings-BI4fgl2p.js";import{B as u}from"./Button-RX-ew4zS.js";import{M as f,a as x,b as X}from"./ModalBody-_o4wF_hP.js";import{L as C}from"./List-CzhnQ1IJ.js";import{S as j}from"./SettingsItem-BGcsPcQg.js";import{B as v}from"./ButtonGroup-BjSwpoTC.js";import"./preload-helper-PPVm8Dsz.js";import"./Fieldset-BjrKN_8t.js";import"./lite-DaUVFjkg.js";import"./index-BzK4-cKk.js";import"./use-merge-refs-CB7-Iow2.js";import"./Switch-T1wAkZbR.js";import"./index-DWa6FdCb.js";import"./Label-UVt4ZlNT.js";import"./Input-S7hdVfLT.js";import"./input-DBhNK3CK.js";import"./TextField-D-EqANfy.js";import"./FieldBase-CdSvcvFX.js";import"./Typography-JHHWywcS.js";import"./useHighlightedText-ZQImmj57.js";import"./Skeleton-it7stJ0Q.js";import"./button-CCQIf2kf.js";import"./Section-BsfLh2yG.js";import"./Flex-CJSQwJ4K.js";import"./XMark-DUdkEKb2.js";import"./useId-DH4aqM3h.js";import"./Icon-CD7MnEv7.js";import"./Avatar-C-j1g9mt.js";import"./AvatarGroup-Btn-kZJL.js";import"./Heading-D9dg30ti.js";import"./ListItem-Jon2HuNq.js";import"./Badge-WunB0MzM.js";import"./Tooltip-DYC812UO.js";import"./floating-ui.dom-DCpi3RTt.js";import"./ChevronUp-Cb22o5aT.js";import"./ChevronDown-B1Tnrqm5.js";import"./ChevronRight-Bcq_DMzy.js";import"./SettingsItemBase-CJB5-OJo.js";import"./ItemLink-BWqCuyi6.js";import"./ItemMedia-D2IPLDQS.js";import"./ItemControls-BfAmDR5q.js";import"./SettingsModal-Dm03By8e.js";import"./ButtonIcon-CYRzucye.js";import"./ButtonLabel-DF873RLr.js";const At={title:"Account/AccountNotificationSettings",component:S,tags:["autodocs"],parameters:{}},s={args:{}},r=n=>{const[p,a]=g.useState({...n}),e=c=>{const{type:A,checked:B,name:d,value:h}=c.target;a(A==="checkbox"?l=>({...l,[d]:B}):l=>({...l,[d]:h}))};return t.jsx(S,{...n,...p,onChange:e})},i=()=>t.jsx(r,{smsAlerts:!0,phone:"99005566"}),o=()=>t.jsx(r,{smsAlerts:!0,phone:"99005566",emailAlerts:!0,email:"mathias@brann.no"}),m=({title:n="Aktør"})=>{const[p,a]=g.useState(!1),e=()=>{a(c=>!c)};return t.jsxs(t.Fragment,{children:[t.jsx(u,{onClick:e,children:"Åpne modal"}),t.jsxs(f,{open:p,onClose:e,children:[t.jsx(x,{title:n,children:t.jsx(C,{children:t.jsx(j,{id:"bb",icon:{name:"Bergen Bar",type:"company"},title:"Bergen Bar",description:"Org. nr. XXX XXX XXX"})})}),t.jsxs(X,{children:[t.jsx(o,{}),t.jsxs(v,{children:[t.jsx(u,{onClick:e,children:"Lagre og avslutt"}),t.jsx(u,{onClick:e,variant:"outline",children:"Avbryt"})]})]})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
