import{aa as g,a7 as t,c as u}from"./iframe-3eub8g81.js";import{A as S}from"./AccountNotificationSettings-CfPLMMbq.js";import{M as f,b as x,a as X}from"./ModalBody-BLJZdTz1.js";import{L as C}from"./List-Bd4lewsS.js";import{S as v}from"./SettingsItem-Vm78-Zan.js";import{B as j}from"./ButtonGroup-D2aDB7np.js";import"./preload-helper-PPVm8Dsz.js";import"./Fieldset-BrkALp6v.js";import"./Switch-CuP7DJRF.js";import"./Field-BEYcEfWR.js";import"./Input-C_lNMvAW.js";import"./Label-Dn1DYcv0.js";import"./TextField-CaFL3_rZ.js";import"./FieldBase-C1gDTj8R.js";import"./Typography-BfGFMo_X.js";import"./useHighlightedText-D_KrHTcm.js";import"./Section-B8LCASv-.js";import"./Flex-DeWs0m9L.js";import"./Avatar-CwYCtPFD.js";import"./AvatarGroup-5atDHYqT.js";import"./Heading-Cn9WCavo.js";import"./ListItem-Y8YYbtC7.js";import"./Badge-CMPSGpEc.js";import"./Tooltip-egZN2oaV.js";import"./ChevronUp-B-pU4SPo.js";import"./ChevronDown-ByzAyPe6.js";import"./ChevronRight-BS_VcXFa.js";import"./SettingsItemBase-B1tn_cXi.js";import"./ItemMedia-BB_XOZ97.js";import"./ItemBase-Dkp179g5.js";import"./ItemLink-BMVyW3FY.js";import"./ItemControls-DXPiBYKt.js";import"./SettingsModal-DHKl9XyW.js";import"./ButtonIcon-CTN-ygEI.js";import"./ButtonLabel-DAR0S7-w.js";const st={title:"Account/AccountNotificationSettings",component:S,tags:["autodocs"],parameters:{}},s={args:{}},o=n=>{const[c,a]=g.useState({...n}),e=p=>{const{type:A,checked:h,name:d,value:B}=p.target;a(A==="checkbox"?l=>({...l,[d]:h}):l=>({...l,[d]:B}))};return t.jsx(S,{...n,...c,onChange:e})},i=()=>t.jsx(o,{smsAlerts:!0,phone:"99005566"}),r=()=>t.jsx(o,{smsAlerts:!0,phone:"99005566",emailAlerts:!0,email:"mathias@brann.no"}),m=({title:n="Aktør"})=>{const[c,a]=g.useState(!1),e=()=>{a(p=>!p)};return t.jsxs(t.Fragment,{children:[t.jsx(u,{onClick:e,children:"Åpne modal"}),t.jsxs(f,{open:c,onClose:e,children:[t.jsx(x,{title:n,children:t.jsx(C,{children:t.jsx(v,{id:"bb",icon:{name:"Bergen Bar",type:"company"},title:"Bergen Bar",description:"Org. nr. XXX XXX XXX"})})}),t.jsxs(X,{children:[t.jsx(r,{}),t.jsxs(j,{children:[t.jsx(u,{onClick:e,children:"Lagre og avslutt"}),t.jsx(u,{onClick:e,variant:"outline",children:"Avbryt"})]})]})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
