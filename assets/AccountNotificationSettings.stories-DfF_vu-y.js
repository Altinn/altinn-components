import{r as g,j as t}from"./iframe-CULgtZWU.js";import{A as S}from"./AccountNotificationSettings-PM8Lel5N.js";import{B as u}from"./Button-EDUaKVqz.js";import{M as f}from"./ModalBase-Cbwlfwj5.js";import{M as x,a as X}from"./ModalBody-Boi5XIYD.js";import{L as C}from"./List-BUOr4CZI.js";import{S as j}from"./SettingsItem-B44OcmKg.js";import{B as v}from"./ButtonGroup-CUeGctwp.js";import"./preload-helper-PPVm8Dsz.js";import"./Fieldset-B5rXPjTC.js";import"./lite-DaUVFjkg.js";import"./index-DY3DIpTU.js";import"./use-merge-refs-BFFvRczq.js";import"./Switch-Bdau_C5W.js";import"./index-BvBdYXxj.js";import"./Label-TPhVVF1y.js";import"./Input-C5uL5M8v.js";import"./input-CIkisq6p.js";import"./TextField-Pqc6-CBj.js";import"./FieldBase-DGffeSDz.js";import"./Typography-BrN0KsEX.js";import"./useHighlightedText-BLw72BO7.js";import"./Skeleton-B_F13Udl.js";import"./button-DZmMky1p.js";import"./Section-CJ2BqCln.js";import"./Flex-CmyJ6DZP.js";import"./XMark-BCb0_aBA.js";import"./useId-COk2q28h.js";import"./Icon-G4wS9E1h.js";import"./Avatar-DIXtsktU.js";import"./AvatarGroup-C5aSOTjU.js";import"./Heading-QgrsV_VA.js";import"./ListItem-7-qwfKHS.js";import"./Badge-CMQ7i3tF.js";import"./ChevronUp-D4lquxp4.js";import"./ChevronDown-BFG40PP5.js";import"./ChevronRight-Q1coQceW.js";import"./SettingsItemBase-BnGX8C3g.js";import"./ItemLink-C0_9WLDr.js";import"./ItemMedia-CstP66eQ.js";import"./ItemControls-RibfoZmh.js";import"./SettingsModal-3ZJSqfXg.js";import"./ButtonIcon-B5uSU7rb.js";import"./ButtonLabel-CGNJgIpu.js";const St={title:"Account/AccountNotificationSettings",component:S,tags:["autodocs"],parameters:{}},s={args:{}},r=n=>{const[p,a]=g.useState({...n}),e=c=>{const{type:A,checked:B,name:d,value:h}=c.target;a(A==="checkbox"?l=>({...l,[d]:B}):l=>({...l,[d]:h}))};return t.jsx(S,{...n,...p,onChange:e})},i=()=>t.jsx(r,{smsAlerts:!0,phone:"99005566"}),o=()=>t.jsx(r,{smsAlerts:!0,phone:"99005566",emailAlerts:!0,email:"mathias@brann.no"}),m=({title:n="Aktør"})=>{const[p,a]=g.useState(!1),e=()=>{a(c=>!c)};return t.jsxs(t.Fragment,{children:[t.jsx(u,{onClick:e,children:"Åpne modal"}),t.jsxs(f,{open:p,onClose:e,children:[t.jsx(x,{title:n,children:t.jsx(C,{children:t.jsx(j,{id:"bb",icon:{name:"Bergen Bar",type:"company"},title:"Bergen Bar",description:"Org. nr. XXX XXX XXX"})})}),t.jsxs(X,{children:[t.jsx(o,{}),t.jsxs(v,{children:[t.jsx(u,{onClick:e,children:"Lagre og avslutt"}),t.jsx(u,{onClick:e,variant:"outline",children:"Avbryt"})]})]})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
