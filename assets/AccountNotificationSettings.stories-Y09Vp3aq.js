import{aa as g,a7 as t,c as u}from"./iframe-Dr1YYpI1.js";import{A as S}from"./AccountNotificationSettings-DEsSHEcf.js";import{M as f,b as x,a as X}from"./ModalBody-F3dsMu5Q.js";import{L as C}from"./List-Bd354_V5.js";import{S as v}from"./SettingsItem-BbYm3dAF.js";import{B as j}from"./ButtonGroup-B0d19ndD.js";import"./preload-helper-PPVm8Dsz.js";import"./Fieldset-BfGeSRy4.js";import"./Switch-ClYJWXJa.js";import"./Field-CFwGDJPk.js";import"./Input-Brt0jiez.js";import"./Label-CGK745vw.js";import"./TextField-r5jzqpCl.js";import"./FieldBase-CyLGbTYK.js";import"./Typography-CAIidHgh.js";import"./useHighlightedText-BV18x4ez.js";import"./Section-_zPAIWIf.js";import"./Flex-DPnodwFD.js";import"./Avatar-5MYoUnaT.js";import"./AvatarGroup-qKVf7nyJ.js";import"./Heading-BD9oLNEa.js";import"./ListItem-BNw8VTGu.js";import"./Badge-DlA625G6.js";import"./Tooltip-CpSJxiAh.js";import"./ChevronUp-B_Smx25I.js";import"./ChevronDown-BBfddSx6.js";import"./ChevronRight-F0aXUvpz.js";import"./SettingsItemBase-DQ4J7FZj.js";import"./ItemMedia-BpxSm7tv.js";import"./ItemBase-0lWwxmT3.js";import"./ItemLink-DdXuuqzx.js";import"./ItemControls-DQl8k1jC.js";import"./SettingsModal-rGIq4aQc.js";import"./ButtonIcon-Bf7UK4aY.js";import"./ButtonLabel-Bo8mZTJ3.js";const st={title:"Account/AccountNotificationSettings",component:S,tags:["autodocs"],parameters:{}},s={args:{}},o=n=>{const[c,a]=g.useState({...n}),e=p=>{const{type:A,checked:h,name:d,value:B}=p.target;a(A==="checkbox"?l=>({...l,[d]:h}):l=>({...l,[d]:B}))};return t.jsx(S,{...n,...c,onChange:e})},i=()=>t.jsx(o,{smsAlerts:!0,phone:"99005566"}),r=()=>t.jsx(o,{smsAlerts:!0,phone:"99005566",emailAlerts:!0,email:"mathias@brann.no"}),m=({title:n="Aktør"})=>{const[c,a]=g.useState(!1),e=()=>{a(p=>!p)};return t.jsxs(t.Fragment,{children:[t.jsx(u,{onClick:e,children:"Åpne modal"}),t.jsxs(f,{open:c,onClose:e,children:[t.jsx(x,{title:n,children:t.jsx(C,{children:t.jsx(v,{id:"bb",icon:{name:"Bergen Bar",type:"company"},title:"Bergen Bar",description:"Org. nr. XXX XXX XXX"})})}),t.jsxs(X,{children:[t.jsx(r,{}),t.jsxs(j,{children:[t.jsx(u,{onClick:e,children:"Lagre og avslutt"}),t.jsx(u,{onClick:e,variant:"outline",children:"Avbryt"})]})]})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
