import{r as g,j as t}from"./iframe-CU9tIbvZ.js";import{A as S}from"./AccountNotificationSettings-D13sVf-i.js";import{B as u}from"./Button-DwluG-LJ.js";import{M as f,a as x,b as X}from"./ModalBody-c-JjnOdb.js";import{L as C}from"./List-CmEHIyyJ.js";import{S as j}from"./SettingsItem-DCTzcNFp.js";import{B as v}from"./ButtonGroup-Bc7spR1E.js";import"./preload-helper-PPVm8Dsz.js";import"./Fieldset-DDJhEhLX.js";import"./lite-DaUVFjkg.js";import"./index-ByNurdCO.js";import"./use-merge-refs-BZYQG8M3.js";import"./Switch-BFjqI2KQ.js";import"./index-Bd_n44R2.js";import"./Label-BURQuXSo.js";import"./Input-C4CEDonn.js";import"./input-BB0Zu-vu.js";import"./TextField-UzGxD5QZ.js";import"./FieldBase-Bc5lvX-i.js";import"./Typography-w6SEqUo0.js";import"./useHighlightedText-okRrJvjD.js";import"./Skeleton-WB8_C3gk.js";import"./button-DfPuT9nv.js";import"./Section-BozmV6Om.js";import"./Flex-Aa4xg00u.js";import"./XMark-DTYd927G.js";import"./useId-BEikXtHv.js";import"./Icon-BBvHNxu7.js";import"./Avatar-CPYUWVLR.js";import"./AvatarGroup-D82OEK4D.js";import"./Heading-DKJvmFhb.js";import"./ListItem-CfMUAyha.js";import"./Badge-C-yjP1nL.js";import"./Tooltip-Gn5m6ZxQ.js";import"./floating-ui.dom-DCpi3RTt.js";import"./ChevronUp-C9A9ysE-.js";import"./ChevronDown-D1kreZKO.js";import"./ChevronRight-XlyxhDjC.js";import"./SettingsItemBase-Doj18tTe.js";import"./ItemLink-FRejQ3nm.js";import"./ItemMedia-DuuCC0AM.js";import"./ItemControls-BgF8Asgd.js";import"./SettingsModal-KtnV1Bjh.js";import"./ButtonIcon-DRnipxiZ.js";import"./ButtonLabel-ChcktKem.js";const At={title:"Account/AccountNotificationSettings",component:S,tags:["autodocs"],parameters:{}},s={args:{}},r=n=>{const[p,a]=g.useState({...n}),e=c=>{const{type:A,checked:B,name:d,value:h}=c.target;a(A==="checkbox"?l=>({...l,[d]:B}):l=>({...l,[d]:h}))};return t.jsx(S,{...n,...p,onChange:e})},i=()=>t.jsx(r,{smsAlerts:!0,phone:"99005566"}),o=()=>t.jsx(r,{smsAlerts:!0,phone:"99005566",emailAlerts:!0,email:"mathias@brann.no"}),m=({title:n="Aktør"})=>{const[p,a]=g.useState(!1),e=()=>{a(c=>!c)};return t.jsxs(t.Fragment,{children:[t.jsx(u,{onClick:e,children:"Åpne modal"}),t.jsxs(f,{open:p,onClose:e,children:[t.jsx(x,{title:n,children:t.jsx(C,{children:t.jsx(j,{id:"bb",icon:{name:"Bergen Bar",type:"company"},title:"Bergen Bar",description:"Org. nr. XXX XXX XXX"})})}),t.jsxs(X,{children:[t.jsx(o,{}),t.jsxs(v,{children:[t.jsx(u,{onClick:e,children:"Lagre og avslutt"}),t.jsx(u,{onClick:e,variant:"outline",children:"Avbryt"})]})]})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
