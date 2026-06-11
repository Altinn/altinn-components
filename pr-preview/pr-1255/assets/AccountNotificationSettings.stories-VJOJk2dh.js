import{aa as g,a7 as t,c as u}from"./iframe-DH0sUlof.js";import{A as S}from"./AccountNotificationSettings-CWxRivbs.js";import{M as f,b as x,a as X}from"./ModalBody-Bsp1GUDI.js";import{L as C}from"./List-Cm-mvG7i.js";import{S as v}from"./SettingsItem-D2OyLpSW.js";import{B as j}from"./ButtonGroup-0Z_3vx9e.js";import"./preload-helper-PPVm8Dsz.js";import"./Fieldset-Uk9Dbjei.js";import"./Switch-DLlmDxn9.js";import"./Field-CxaznmxG.js";import"./Input-CNoKo11u.js";import"./Label-Cf0ApS2G.js";import"./TextField-DAaECzgL.js";import"./FieldBase-DCz4GC6j.js";import"./Typography-PtbhQdVx.js";import"./useHighlightedText-DycG_gS6.js";import"./Section-DMcOoGW4.js";import"./Flex-D6bQl7-N.js";import"./Avatar-FXELAR9V.js";import"./AvatarGroup-CNi2rl48.js";import"./Heading-CPu50xm5.js";import"./ListItem-B0cRuGOu.js";import"./Badge-DYSW2mf5.js";import"./Tooltip-2QW0kgPy.js";import"./ChevronUp-B3owS6FK.js";import"./ChevronDown-CrGho0Pn.js";import"./ChevronRight-CNDn15vN.js";import"./SettingsItemBase-BJki3aQX.js";import"./ItemMedia-BGZXzift.js";import"./ItemBase-1sT4ul5N.js";import"./ItemLink-D0iXhSOF.js";import"./ItemControls-BwbZayit.js";import"./SettingsModal-Cd5h6AtQ.js";import"./ButtonIcon-CUIrIkpy.js";import"./ButtonLabel-BhcL_izL.js";const st={title:"Account/AccountNotificationSettings",component:S,tags:["autodocs"],parameters:{}},s={args:{}},o=n=>{const[c,a]=g.useState({...n}),e=p=>{const{type:A,checked:h,name:d,value:B}=p.target;a(A==="checkbox"?l=>({...l,[d]:h}):l=>({...l,[d]:B}))};return t.jsx(S,{...n,...c,onChange:e})},i=()=>t.jsx(o,{smsAlerts:!0,phone:"99005566"}),r=()=>t.jsx(o,{smsAlerts:!0,phone:"99005566",emailAlerts:!0,email:"mathias@brann.no"}),m=({title:n="Aktør"})=>{const[c,a]=g.useState(!1),e=()=>{a(p=>!p)};return t.jsxs(t.Fragment,{children:[t.jsx(u,{onClick:e,children:"Åpne modal"}),t.jsxs(f,{open:c,onClose:e,children:[t.jsx(x,{title:n,children:t.jsx(C,{children:t.jsx(v,{id:"bb",icon:{name:"Bergen Bar",type:"company"},title:"Bergen Bar",description:"Org. nr. XXX XXX XXX"})})}),t.jsxs(X,{children:[t.jsx(r,{}),t.jsxs(j,{children:[t.jsx(u,{onClick:e,children:"Lagre og avslutt"}),t.jsx(u,{onClick:e,variant:"outline",children:"Avbryt"})]})]})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
