import{r as g,j as t}from"./iframe-CFpZEpOT.js";import{A as S}from"./AccountNotificationSettings-BosyoYDF.js";import{B as u}from"./Button-C0rUC1sb.js";import{M as h}from"./ModalBase-CZDPyOsV.js";import{M as x,a as v}from"./ModalBody-BZzL8uF4.js";import{L as X}from"./List-p1cS4I4-.js";import{S as C}from"./SettingsItem-H0Yo2KmN.js";import{B as j}from"./ButtonGroup-ix1R0MqJ.js";import"./preload-helper-PPVm8Dsz.js";import"./Fieldset-C3KeG6M-.js";import"./lite-DaUVFjkg.js";import"./index-CBNpaYnn.js";import"./use-merge-refs-DZRIBNsE.js";import"./Switch-iqmXxgDm.js";import"./index-CMCH-iYZ.js";import"./Label-CTb5NEuA.js";import"./Input-D08OnHI6.js";import"./input-BOf7pxRD.js";import"./TextField-CUluzzSh.js";import"./FieldBase-BKE2EVCO.js";import"./Typography-CFFVnqbI.js";import"./useHighlightedText-DHCy4ZgC.js";import"./Skeleton-BxeTCVQ2.js";import"./button-DcOM5j_b.js";import"./Section-0tWdfaTG.js";import"./Flex-LzaqVov5.js";import"./XMark-DsxdrTa7.js";import"./useId-Bpa1--zZ.js";import"./Icon-CcpuJg5J.js";import"./Avatar-BgJ1eR8E.js";import"./AvatarGroup-CCJxayqM.js";import"./Heading-Biv3WsI7.js";import"./ListItem-qVW9-kPs.js";import"./Badge-CiO-ESqG.js";import"./ChevronUp-B6qove2P.js";import"./ChevronDown-COoSRgYT.js";import"./ChevronRight-Ca_cSWgJ.js";import"./SettingsItemBase-BsxeBpgI.js";import"./SettingsModal-DDPQc-j7.js";import"./ButtonIcon-BpGEXsWC.js";import"./ButtonLabel-DHLBBQDW.js";const ut={title:"Account/AccountNotificationSettings",component:S,tags:["autodocs"],parameters:{}},s={args:{}},r=n=>{const[c,a]=g.useState({...n}),e=p=>{const{type:f,checked:A,name:d,value:B}=p.target;a(f==="checkbox"?l=>({...l,[d]:A}):l=>({...l,[d]:B}))};return t.jsx(S,{...n,...c,onChange:e})},i=()=>t.jsx(r,{smsAlerts:!0,phone:"99005566"}),o=()=>t.jsx(r,{smsAlerts:!0,phone:"99005566",emailAlerts:!0,email:"mathias@brann.no"}),m=({title:n="Aktør"})=>{const[c,a]=g.useState(!1),e=()=>{a(p=>!p)};return t.jsxs(t.Fragment,{children:[t.jsx(u,{onClick:e,children:"Åpne modal"}),t.jsxs(h,{open:c,onClose:e,children:[t.jsx(x,{title:n,children:t.jsx(X,{children:t.jsx(C,{id:"bb",interactive:!1,icon:{name:"Bergen Bar",type:"company"},title:"Bergen Bar",description:"Org. nr. XXX XXX XXX"})})}),t.jsxs(v,{children:[t.jsx(o,{}),t.jsxs(j,{children:[t.jsx(u,{onClick:e,children:"Lagre og avslutt"}),t.jsx(u,{onClick:e,variant:"outline",children:"Avbryt"})]})]})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
