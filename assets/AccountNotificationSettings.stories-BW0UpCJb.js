import{r as g,j as t}from"./iframe-DolAyTrH.js";import{A as S}from"./AccountNotificationSettings-OKUBInYj.js";import{B as u}from"./Button-BnKV4VN-.js";import{M as f}from"./ModalBase-Biclu8IY.js";import{M as x,a as X}from"./ModalBody-BDCdjJbS.js";import{L as C}from"./List-4xKYlKr8.js";import{S as j}from"./SettingsItem-CKn0Ys3c.js";import{B as v}from"./ButtonGroup-D7dkSlZP.js";import"./preload-helper-PPVm8Dsz.js";import"./Fieldset-VDMCFkLM.js";import"./lite-DaUVFjkg.js";import"./index-Bcer_oBx.js";import"./use-merge-refs-D0JupAUo.js";import"./Switch-D5tSqIJ9.js";import"./index-BGgdxP5s.js";import"./Label-B4hULeup.js";import"./Input-CbO5ihcQ.js";import"./input-BNW4iEHl.js";import"./TextField-BlEMz5sX.js";import"./FieldBase-Cd7L_EtW.js";import"./Typography-BxahTxrH.js";import"./useHighlightedText-DjzGplEp.js";import"./Skeleton-CgJZAB6S.js";import"./button-DvTcN5eG.js";import"./Section-B969stp2.js";import"./Flex-DJLVkQLj.js";import"./XMark-DTdVjjyM.js";import"./useId-CHjpN4lF.js";import"./Icon-DyTdluPS.js";import"./Avatar-koXMFN1u.js";import"./AvatarGroup-B7A0z_e3.js";import"./Heading-ytdfVfHq.js";import"./ListItem-mIgAbn_b.js";import"./Badge-XZ4zcUXX.js";import"./ChevronUp-DUU9T22i.js";import"./ChevronDown-BVkX7yzQ.js";import"./ChevronRight-Duke-dAu.js";import"./SettingsItemBase-Bu0lXv33.js";import"./ItemLink-BGVSEM8D.js";import"./ItemMedia-feu0z7mp.js";import"./ItemControls-B_Hdv8nx.js";import"./SettingsModal-Dq6hA2Z9.js";import"./ButtonIcon-BQckLi1i.js";import"./ButtonLabel-DHuLovfa.js";const St={title:"Account/AccountNotificationSettings",component:S,tags:["autodocs"],parameters:{}},s={args:{}},r=n=>{const[p,a]=g.useState({...n}),e=c=>{const{type:A,checked:B,name:d,value:h}=c.target;a(A==="checkbox"?l=>({...l,[d]:B}):l=>({...l,[d]:h}))};return t.jsx(S,{...n,...p,onChange:e})},i=()=>t.jsx(r,{smsAlerts:!0,phone:"99005566"}),o=()=>t.jsx(r,{smsAlerts:!0,phone:"99005566",emailAlerts:!0,email:"mathias@brann.no"}),m=({title:n="Aktør"})=>{const[p,a]=g.useState(!1),e=()=>{a(c=>!c)};return t.jsxs(t.Fragment,{children:[t.jsx(u,{onClick:e,children:"Åpne modal"}),t.jsxs(f,{open:p,onClose:e,children:[t.jsx(x,{title:n,children:t.jsx(C,{children:t.jsx(j,{id:"bb",icon:{name:"Bergen Bar",type:"company"},title:"Bergen Bar",description:"Org. nr. XXX XXX XXX"})})}),t.jsxs(X,{children:[t.jsx(o,{}),t.jsxs(v,{children:[t.jsx(u,{onClick:e,children:"Lagre og avslutt"}),t.jsx(u,{onClick:e,variant:"outline",children:"Avbryt"})]})]})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
