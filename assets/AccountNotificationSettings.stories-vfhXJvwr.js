import{r as g,j as t}from"./iframe-BNDruhPA.js";import{A as S}from"./AccountNotificationSettings-BYm-h0UC.js";import{B as u}from"./Button-CaDKAluY.js";import{M as f}from"./ModalBase-Csr9qX6t.js";import{M as x,a as X}from"./ModalBody-BfZsUu8q.js";import{L as C}from"./List-Ckq5YGm7.js";import{S as j}from"./SettingsItem-h0OCGsu8.js";import{B as v}from"./ButtonGroup-Cj9A7v4t.js";import"./preload-helper-PPVm8Dsz.js";import"./Fieldset-DP0tXg_B.js";import"./lite-DaUVFjkg.js";import"./index-BuvBvGLs.js";import"./use-merge-refs-DHcrFN31.js";import"./Switch-CRz5pM3y.js";import"./index-JM42q3xD.js";import"./Label-DEPud0Ho.js";import"./Input-Bq2zza5V.js";import"./input-CeK3s4nJ.js";import"./TextField-sZteiMxb.js";import"./FieldBase-CqddQ4KB.js";import"./Typography-0VzQ_bGw.js";import"./useHighlightedText-Bss46XCz.js";import"./Skeleton-3vFplc_z.js";import"./button-Bu4lXR2T.js";import"./Section-CcOIv3Qj.js";import"./Flex-DdLGZodm.js";import"./XMark-vbUnhqfT.js";import"./useId-28rL4Hsl.js";import"./Icon-Ch0vKaKK.js";import"./Avatar-Bc7K3VQ6.js";import"./AvatarGroup-CBYJn5rG.js";import"./Heading-C1Pb_LrU.js";import"./ListItem-CLrzKGmW.js";import"./Badge-e7-dfLSt.js";import"./Tooltip-BwDwCRyx.js";import"./floating-ui.dom-DCpi3RTt.js";import"./ChevronUp-dNDMwZOi.js";import"./ChevronDown-1m-leHy9.js";import"./ChevronRight-Bcu8s-U3.js";import"./SettingsItemBase-DfTHf9Q5.js";import"./ItemLink-B_kfJLa3.js";import"./ItemMedia-C5U6F78e.js";import"./ItemControls-nx23Lp4C.js";import"./SettingsModal-BEnwQwYs.js";import"./ButtonIcon-DlPFQqJE.js";import"./ButtonLabel-B0odgBfB.js";const Bt={title:"Account/AccountNotificationSettings",component:S,tags:["autodocs"],parameters:{}},s={args:{}},r=n=>{const[p,a]=g.useState({...n}),e=c=>{const{type:A,checked:B,name:d,value:h}=c.target;a(A==="checkbox"?l=>({...l,[d]:B}):l=>({...l,[d]:h}))};return t.jsx(S,{...n,...p,onChange:e})},i=()=>t.jsx(r,{smsAlerts:!0,phone:"99005566"}),o=()=>t.jsx(r,{smsAlerts:!0,phone:"99005566",emailAlerts:!0,email:"mathias@brann.no"}),m=({title:n="Aktør"})=>{const[p,a]=g.useState(!1),e=()=>{a(c=>!c)};return t.jsxs(t.Fragment,{children:[t.jsx(u,{onClick:e,children:"Åpne modal"}),t.jsxs(f,{open:p,onClose:e,children:[t.jsx(x,{title:n,children:t.jsx(C,{children:t.jsx(j,{id:"bb",icon:{name:"Bergen Bar",type:"company"},title:"Bergen Bar",description:"Org. nr. XXX XXX XXX"})})}),t.jsxs(X,{children:[t.jsx(o,{}),t.jsxs(v,{children:[t.jsx(u,{onClick:e,children:"Lagre og avslutt"}),t.jsx(u,{onClick:e,variant:"outline",children:"Avbryt"})]})]})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
