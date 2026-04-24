import{r as g,j as t}from"./iframe-Dip44woq.js";import{A as S}from"./AccountNotificationSettings-DYZvg1-w.js";import{B as u}from"./Button-afp2Zwog.js";import{M as f}from"./ModalBase-DLErh85x.js";import{M as x,a as X}from"./ModalBody-CSIMme3q.js";import{L as C}from"./List-oCmeNZU4.js";import{S as j}from"./SettingsItem-XU3Rqpkc.js";import{B as v}from"./ButtonGroup-BAe3FIfN.js";import"./preload-helper-PPVm8Dsz.js";import"./Fieldset-JHw30Nxr.js";import"./lite-DaUVFjkg.js";import"./index-kI5T7Faz.js";import"./use-merge-refs-BdW2KKDT.js";import"./Switch-CqTFD8P8.js";import"./index-B24kaf2B.js";import"./Label-BJSes-CJ.js";import"./Input-BEs0_VSa.js";import"./input-BsOq1nZd.js";import"./TextField-PVRs0zYl.js";import"./FieldBase-BLO6-Mjz.js";import"./Typography-9n0VU0yu.js";import"./useHighlightedText-DVvgBsxZ.js";import"./Skeleton-CxN7sZWy.js";import"./button-CZ5tfceY.js";import"./Section-DCVufQoJ.js";import"./Flex-DHvZRHuw.js";import"./XMark-CynTM0oO.js";import"./useId-CMLjH0Fx.js";import"./Icon-B7B4bUSp.js";import"./Avatar-kiiFl4Mz.js";import"./AvatarGroup-sgYryoRH.js";import"./Heading-BGLknJpX.js";import"./ListItem-BNxxo84x.js";import"./Badge-Bm1FFy1R.js";import"./Tooltip-D3ALbI7V.js";import"./floating-ui.dom-DCpi3RTt.js";import"./ChevronUp-DojBOeEB.js";import"./ChevronDown-DtUCUzdZ.js";import"./ChevronRight-DRGzZC3s.js";import"./SettingsItemBase-DHRJnpHs.js";import"./ItemLink-bytzRO3r.js";import"./ItemMedia-5XSAaYKs.js";import"./ItemControls-CIGgXmTN.js";import"./SettingsModal-ClZXCBdG.js";import"./ButtonIcon-CsjjU3Og.js";import"./ButtonLabel-CTEP1jnZ.js";const Bt={title:"Account/AccountNotificationSettings",component:S,tags:["autodocs"],parameters:{}},s={args:{}},r=n=>{const[p,a]=g.useState({...n}),e=c=>{const{type:A,checked:B,name:d,value:h}=c.target;a(A==="checkbox"?l=>({...l,[d]:B}):l=>({...l,[d]:h}))};return t.jsx(S,{...n,...p,onChange:e})},i=()=>t.jsx(r,{smsAlerts:!0,phone:"99005566"}),o=()=>t.jsx(r,{smsAlerts:!0,phone:"99005566",emailAlerts:!0,email:"mathias@brann.no"}),m=({title:n="Aktør"})=>{const[p,a]=g.useState(!1),e=()=>{a(c=>!c)};return t.jsxs(t.Fragment,{children:[t.jsx(u,{onClick:e,children:"Åpne modal"}),t.jsxs(f,{open:p,onClose:e,children:[t.jsx(x,{title:n,children:t.jsx(C,{children:t.jsx(j,{id:"bb",icon:{name:"Bergen Bar",type:"company"},title:"Bergen Bar",description:"Org. nr. XXX XXX XXX"})})}),t.jsxs(X,{children:[t.jsx(o,{}),t.jsxs(v,{children:[t.jsx(u,{onClick:e,children:"Lagre og avslutt"}),t.jsx(u,{onClick:e,variant:"outline",children:"Avbryt"})]})]})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
