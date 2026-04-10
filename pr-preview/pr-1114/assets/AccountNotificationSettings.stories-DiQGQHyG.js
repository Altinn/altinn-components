import{r as g,j as t}from"./iframe-bdb8MxAl.js";import{A as S}from"./AccountNotificationSettings-D28SrWPz.js";import{B as u}from"./Button-CmmCg_X2.js";import{M as f}from"./ModalBase-Bp5S3I6D.js";import{M as x,a as X}from"./ModalBody-BsZkJKis.js";import{L as C}from"./List-Dq0MjOQZ.js";import{S as j}from"./SettingsItem-DIAE-8uH.js";import{B as v}from"./ButtonGroup-BdDqNtW_.js";import"./preload-helper-PPVm8Dsz.js";import"./Fieldset-2cmOdguu.js";import"./lite-DaUVFjkg.js";import"./index-Bm_5QTlm.js";import"./use-merge-refs-Xyc_Uo3E.js";import"./Switch-CdWboNxd.js";import"./index-p3wA3m8m.js";import"./Label-DBSC-MMD.js";import"./Input-ClF74fUz.js";import"./input-ATX54hdE.js";import"./TextField-BdRzS3zi.js";import"./FieldBase-DvRhg6xr.js";import"./Typography-BHyeW1q-.js";import"./useHighlightedText-BZip2xbp.js";import"./Skeleton-BMmeChMq.js";import"./button-riuqcLff.js";import"./Section-CT0nm1G-.js";import"./Flex-7ZoZ5Zdr.js";import"./XMark-ml8n1JcF.js";import"./useId-m2lwd_Ct.js";import"./Icon-DDIx0qrc.js";import"./Avatar-Di5f2hN1.js";import"./AvatarGroup-DeyVKu-1.js";import"./Heading-BV-bgYII.js";import"./ListItem-Hms5tlXl.js";import"./Badge-CZZ-T3gy.js";import"./ChevronUp-CsyoBPJv.js";import"./ChevronDown-De8akAeb.js";import"./ChevronRight-Cnln8IKV.js";import"./SettingsItemBase-DhUjUk5N.js";import"./ItemLink-CZYTlEil.js";import"./ItemMedia-Bzsndyr0.js";import"./ItemControls-CoqYqtfq.js";import"./SettingsModal-enhi0fRg.js";import"./ButtonIcon-DpQ6wq1u.js";import"./ButtonLabel-CEDslqSZ.js";const St={title:"Account/AccountNotificationSettings",component:S,tags:["autodocs"],parameters:{}},s={args:{}},r=n=>{const[p,a]=g.useState({...n}),e=c=>{const{type:A,checked:B,name:d,value:h}=c.target;a(A==="checkbox"?l=>({...l,[d]:B}):l=>({...l,[d]:h}))};return t.jsx(S,{...n,...p,onChange:e})},i=()=>t.jsx(r,{smsAlerts:!0,phone:"99005566"}),o=()=>t.jsx(r,{smsAlerts:!0,phone:"99005566",emailAlerts:!0,email:"mathias@brann.no"}),m=({title:n="Aktør"})=>{const[p,a]=g.useState(!1),e=()=>{a(c=>!c)};return t.jsxs(t.Fragment,{children:[t.jsx(u,{onClick:e,children:"Åpne modal"}),t.jsxs(f,{open:p,onClose:e,children:[t.jsx(x,{title:n,children:t.jsx(C,{children:t.jsx(j,{id:"bb",icon:{name:"Bergen Bar",type:"company"},title:"Bergen Bar",description:"Org. nr. XXX XXX XXX"})})}),t.jsxs(X,{children:[t.jsx(o,{}),t.jsxs(v,{children:[t.jsx(u,{onClick:e,children:"Lagre og avslutt"}),t.jsx(u,{onClick:e,variant:"outline",children:"Avbryt"})]})]})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
