import{r as g,j as t}from"./iframe-BJEbXdzo.js";import{A as S}from"./AccountNotificationSettings-BpvikCRA.js";import{B as u}from"./Button-DNsjk1zC.js";import{M as f}from"./ModalBase-BbF017-v.js";import{M as x,a as X}from"./ModalBody-Ef2KdMhz.js";import{L as C}from"./List-DutQ8fVG.js";import{S as j}from"./SettingsItem-2TFwdVjO.js";import{B as v}from"./ButtonGroup-CbGBNNFa.js";import"./preload-helper-PPVm8Dsz.js";import"./Fieldset-Ber4vH34.js";import"./lite-DaUVFjkg.js";import"./index-THETCITG.js";import"./use-merge-refs-BwmZcoLX.js";import"./Switch-ClunuO0T.js";import"./index-ChGHkNNv.js";import"./Label-DQQXrne0.js";import"./Input-BI0TJMod.js";import"./input-CnbiDkgl.js";import"./TextField-CKotFn3f.js";import"./FieldBase-s2kWEUm7.js";import"./Typography-D85R78i7.js";import"./useHighlightedText-Chj_Mw3b.js";import"./Skeleton-DWcIZ1wH.js";import"./button-3a31VMtF.js";import"./Section-BfJWddEs.js";import"./Flex-DRE_amb0.js";import"./XMark-sTHnj54s.js";import"./useId-DgrNWXh_.js";import"./Icon-msEkDcFf.js";import"./Avatar-CcIuhVy2.js";import"./AvatarGroup-Cpo75nCB.js";import"./Heading-1LBL0JVO.js";import"./ListItem-lGtwNmac.js";import"./Badge-CNae3IUV.js";import"./Tooltip-Ct0E88k_.js";import"./floating-ui.dom-DCpi3RTt.js";import"./ChevronUp-D3W-us6_.js";import"./ChevronDown-BptX0rEl.js";import"./ChevronRight-CoSPx3Kv.js";import"./SettingsItemBase-OhCuHqzh.js";import"./ItemLink-DuiVdY3z.js";import"./ItemMedia-CiNZWpX-.js";import"./ItemControls-CAq51EMf.js";import"./SettingsModal-OUGoSOPu.js";import"./ButtonIcon-HUw-G-oR.js";import"./ButtonLabel-BDM26i0_.js";const Bt={title:"Account/AccountNotificationSettings",component:S,tags:["autodocs"],parameters:{}},s={args:{}},r=n=>{const[p,a]=g.useState({...n}),e=c=>{const{type:A,checked:B,name:d,value:h}=c.target;a(A==="checkbox"?l=>({...l,[d]:B}):l=>({...l,[d]:h}))};return t.jsx(S,{...n,...p,onChange:e})},i=()=>t.jsx(r,{smsAlerts:!0,phone:"99005566"}),o=()=>t.jsx(r,{smsAlerts:!0,phone:"99005566",emailAlerts:!0,email:"mathias@brann.no"}),m=({title:n="Aktør"})=>{const[p,a]=g.useState(!1),e=()=>{a(c=>!c)};return t.jsxs(t.Fragment,{children:[t.jsx(u,{onClick:e,children:"Åpne modal"}),t.jsxs(f,{open:p,onClose:e,children:[t.jsx(x,{title:n,children:t.jsx(C,{children:t.jsx(j,{id:"bb",icon:{name:"Bergen Bar",type:"company"},title:"Bergen Bar",description:"Org. nr. XXX XXX XXX"})})}),t.jsxs(X,{children:[t.jsx(o,{}),t.jsxs(v,{children:[t.jsx(u,{onClick:e,children:"Lagre og avslutt"}),t.jsx(u,{onClick:e,variant:"outline",children:"Avbryt"})]})]})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
